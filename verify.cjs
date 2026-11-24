const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, 'prototype.html'), 'utf8');
const env = vm.createContext({});
vm.runInContext(html.match(/<script id="model">([\s\S]*?)<\/script>/)[1], env);
const run = input => vm.runInContext(input, env);
function check(name, fn) { fn(); console.log('PASS | ' + name); }
check('QA01 | Missing student, category, priority or description rejected. Queue remains empty.', () => {
  const valid = ['DEMO','IT support','High','Projector offline'];
  for (let i=0;i<4;i++) {
    const data=valid.slice(); data[i]='';
    assert.throws(()=>run('submitRequest(...'+JSON.stringify(data)+')'));
  }
  assert.equal(run('requests.length'),0);
});
check('QA02 | Four categories accepted and retained.', () => {
  assert.equal(run("categories.every(c => submitRequest('DEMO',c,'Medium','Test').category === c)"),true);
});
check('QA03 | All three priorities retained. Invalid priority rejected.', () => {
  assert.equal(run("priorities.every(p => submitRequest('DEMO','IT support',p,'Test').priority === p)"),true);
  assert.throws(()=>run("submitRequest('DEMO','IT support','Urgent','Test')"));
});
check('QA04 | Seven unique IDs. First record CH-0001, last CH-0007. Confirmation uses returned ID.', () => {
  assert.equal(run('new Set(requests.map(r=>r.id)).size'),7);
  assert.equal(run('requests[0].id'),'CH-0001');assert.equal(run('requests[6].id'),'CH-0007');
  assert.ok(html.includes("'Request received. Your ID is '+r.id"));
});
check('QA05 | Lookup returns Ongoing and IT support. Unknown ID yields no match.', () => {
  run("update('CH-0001','IT support','Ongoing')");
  assert.equal(run("lookup(' ch-0001 ').status"),'Ongoing');
  assert.equal(run("lookup('CH-0001').owner"),'IT support');assert.equal(run("lookup('CH-9999')"),undefined);
});
check('QA06 | Dashboard totals change from 6/1/0 to 6/0/1 with the same seven records.', () => {
  assert.equal(run('totals().join("/")'),'6/1/0');
  run("update('CH-0001','IT support','Completed')");
  assert.equal(run('totals().join("/")'),'6/0/1');
});

# CampusHelp | Project controls

## Charter

University Administration is the simulated sponsor. The student contributor owns the plan, interface design, prototype, quality checks and change decisions. The project uses one contributor, ten weekdays, synthetic requests and a browser. The assumed planning window is 24 November to 7 December 2026. The lecturer-assigned start date was unavailable.

The demonstration covers submission, category and priority, ID-based tracking, service assignment, status updates and dashboard totals. Authentication, a production server, durable storage, external messages and paid services are outside scope.

Acceptance requires all six proposed capabilities to have a mapped check, all six core tests to pass, and all four milestones to have dated deliverables and verified issue evidence. Formal closure also requires the actual checkpoint records.

## Stakeholders and requirements

| ID | Stakeholder | Acceptance requirement | Test |
|---|---|---|---|
| R1 | Student | Submit a student ID and nonblank description. Missing input leaves the queue unchanged. | QA01 |
| R2 | Desk coordinator | Classify requests into four service categories and three priorities. | QA02-03 |
| R3 | Student | Receive a unique request ID and use it to retrieve the same record. | QA04-05 |
| R4 | Administrator | Assign the request to the service responsible for the work. | QA05 |
| R5 | Service staff / student | Change the status and show the latest value on lookup. | QA05-06 |
| R6 | University administration | Reconcile open, ongoing and completed counts against the queue. | QA06 |

## Work breakdown structure

| WBS | Task | Deliverable |
|---|---|---|
| 1.1.1 | T01 | Charter and acceptance gates |
| 1.1.2 | T02 | Six traceable requirements |
| 1.1.3 | T03 | Four-phase WBS |
| 1.2.1 | T04 | Baseline schedule and budget |
| 1.2.2 | T05 | Two interface wireframes |
| 1.2.3 | T06 | Risk register and QA gates |
| 1.3.1 | T07 | Form, receipt and lookup |
| 1.3.2 | T08 | Queue, assignment and counts |
| 1.3.3 | T09 | Six checks with execution log |
| 1.4.1 | T10 | Email decision CR-01 |
| 1.4.2 | T11 | Evidence and open-item review |
| 1.4.3 | T12 | PDF with links and closure |

## Schedule and budget

| ID | Task | Predecessor | Start | Due | Hours | Priority | Gate |
|---|---|---|---|---|---|---|---|
| T01 | Develop project charter | None | 24 Nov | 24 Nov | 4 | High | M1 |
| T02 | Gather stakeholder requirements | None | 24 Nov | 24 Nov | 4 | High | M1 |
| T03 | Prepare scope and WBS | T01 | 25 Nov | 25 Nov | 4 | Medium | M1 |
| T04 | Prepare schedule, dependencies and budget | T03 | 26 Nov | 26 Nov | 4 | High | M2 |
| T05 | Design initial wireframes | T02 | 26 Nov | 26 Nov | 4 | Medium | M2 |
| T06 | Develop risk register and quality plan | T03 | 27 Nov | 27 Nov | 4 | Medium | M2 |
| T07 | Create student request interface prototype | T05 | 30 Nov | 30 Nov | 4 | High | M3 |
| T08 | Create administrator dashboard prototype | T05 | 1 Dec | 1 Dec | 4 | High | M3 |
| T09 | Prepare and execute prototype test cases | T07, T08 | 2 Dec | 2 Dec | 4 | High | M3 |
| T10 | Evaluate and document change request | T04 | 3 Dec | 3 Dec | 3 | Medium | M4 |
| T11 | Perform final verification and issue review | T09, T10 | 4 Dec | 4 Dec | 3 | High | M4 |
| T12 | Consolidate final report and closure documents | T11 | 7 Dec | 7 Dec | 3 | Medium | M4 |

All dependencies are finish-to-start. T05 enables both screens. Testing waits for both T07 and T08. T11 gates the final report. Total 45 hours at 50,000 UZS = 2,250,000 UZS. One owner covers all twelve tasks.

## Risk register

Owner for all risks: individual project lead (@iaiiai).

| Risk | Probability | Impact | Response |
|---|---|---|---|
| Single contributor unavailable | Medium | High | If a planned session is lost, move optional polish to spare capacity. Preserve the Day 7 test slot. |
| Mismatch between screens | Medium | High | If lookup and queue disagree, use one shared request record and rerun QA05-06. |
| GitHub access lost | Medium | High | If a change cannot be saved, retain a local copy, record the time and retry before the checkpoint. |
| Email request expands scope | High | Medium | Route delivery changes through CR-01. Keep on-screen acknowledgment in baseline. |
| Request data lost on reload | High | Medium | State the session limit in the interface. Run the demonstration in one open tab. |
| Missing dated evidence | High | High | At each checkpoint save the board, actual effort and issue counts together. A later screenshot cannot establish earlier progress. |

## Quality plan

At design review, map every requirement to a screen. At execution review, run verify.cjs against the model embedded in prototype.html. Inspect receipt binding and check the request count after each state transition. At closure, reconcile issue links, milestone membership and dates against the register. Record unavailable observations as unknown.

## Change decision

CR-01 models the Day 6 request for an automatic acknowledgment email. The existing receipt displays a request ID on screen. Email would require an address field, a delivery service and failure handling. The provisional three hours comprise one hour for capture and consent, one for dispatch, and one for testing error and duplicate delivery. At 50,000 UZS per hour the increase is 150,000 UZS, taking the estimate to 48 hours and 2,400,000 UZS. T07, T09 and T11 would need revision. Delivery introduces privacy and retry risks and would displace planned testing before M3. Decision: defer. Reconsider after the sponsor provides a mail service and approves address retention. The 45-hour baseline stands.

## Verification and monitoring

| Checkpoint | Planned closed | Planned effort | Review |
|---|---|---|---|
| Day 2 / 25 Nov | 3 of 12 / 25% | 12 h | T01-03 due. Inspect scope omissions before starting planning. |
| Day 5 / 30 Nov | 7 of 12 / 58.3% | 28 h | T01-07 due. Check readiness for the admin queue and record any dependency block. |
| Day 8 / 3 Dec | 10 of 12 / 83.3% | 39 h | T01-10 due. Verify the email decision before admitting T11 to final review. |

Run node verify.cjs to reproduce six checks. The live issue and project histories establish GitHub activity. The future checkpoint measurements and personal time log are outstanding.

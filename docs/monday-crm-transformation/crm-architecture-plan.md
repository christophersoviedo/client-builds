# CRM Architecture Plan

## Architecture Principle

Use Monday.com as a structured CRM system with separate but connected boards for different CRM objects. This keeps pipeline reporting clean, reduces duplicate data, and gives each team a workspace suited to its job.

## Proposed Board Architecture

| Board | Purpose | Primary Users | Notes |
| --- | --- | --- | --- |
| Leads | Capture and qualify new inbound or outbound prospects. | Sales, marketing, intake team | Source of new opportunities before qualification. |
| Contacts | Store individual people associated with companies and deals. | Sales, account management | Should connect to companies and deals. |
| Companies / Accounts | Store organization-level information. | Sales, account management, leadership | Use for account ownership and relationship history. |
| Deals / Opportunities | Manage active sales pipeline. | Sales reps, sales manager | Primary board for revenue forecasting and stage reporting. |
| Sales Activities | Track calls, emails, meetings, tasks, and follow-ups. | Sales reps, managers | Can be a separate board or activity log depending on Monday.com plan and workflow complexity. |
| Client Onboarding / Handoff | Manage closed-won transition to delivery or success team. | Sales, operations, delivery | Created when a deal is marked closed-won. |
| Lost / Nurture Pipeline | Track closed-lost, unqualified, and nurture records. | Sales, marketing | Optional board if nurture process is substantial. |

## Recommended Object Relationships

| Relationship | Recommended Method |
| --- | --- |
| Company to contacts | Connect boards column from Contacts to Companies. |
| Company to deals | Connect boards column from Deals to Companies. |
| Deal to primary contact | Connect boards column from Deals to Contacts. |
| Deal to activities | Connect boards column or mirrored activity status. |
| Closed-won deal to onboarding item | Automation creates item in Client Onboarding / Handoff board. |

## Sales Pipeline Structure

Final stages require client confirmation. A practical starting structure is:

1. New lead
2. Qualified
3. Discovery scheduled
4. Discovery completed
5. Proposal / quote sent
6. Negotiation / decision
7. Closed-won
8. Closed-lost

## Architecture Decisions To Confirm

- Whether leads and deals should be separate boards or one board with lifecycle stages.
- Whether contacts and companies already exist in another system.
- Whether Monday.com will replace or integrate with another CRM.
- Whether activities should be logged in Monday.com manually, synced from email/calendar, or tracked through automation.
- Whether account management or renewal workflows are part of this CRM transformation.
- Whether the client needs multi-team permissions, private boards, or restricted financial fields.

## Implementation Notes

- Keep item names human-readable, such as company name for account records and deal name for opportunity records.
- Use required columns for fields that drive reporting, such as owner, stage, value, close date, and source.
- Avoid using status labels as free-form notes.
- Use connected boards and mirror columns for shared context instead of duplicating company and contact data across boards.
- Keep automations focused on consistent handoffs, reminders, and notifications rather than complex hidden business logic.

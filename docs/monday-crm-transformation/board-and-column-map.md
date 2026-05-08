# Board And Column Map

## Source Status

Client-specific fields have not been provided. The map below is a recommended starting point and should be finalized after discovery.

## Leads Board

| Column | Type | Purpose | Required? |
| --- | --- | --- | --- |
| Lead name | Item name | Person, company, or inquiry name. | Yes |
| Lead source | Status / Dropdown | Tracks channel source. | Yes |
| Intake date | Date | Date lead entered the system. | Yes |
| Lead owner | People | Assigned sales owner. | Yes |
| Qualification status | Status | New, reviewing, qualified, unqualified, nurture. | Yes |
| Priority | Status | High, medium, low. | No |
| Contact email | Email | Primary email. | If available |
| Contact phone | Phone | Primary phone. | If available |
| Company | Connect boards | Links to Companies / Accounts. | If known |
| Notes | Long text | Intake notes and context. | No |
| Next follow-up date | Date | Drives reminders. | Yes for active leads |

## Contacts Board

| Column | Type | Purpose | Required? |
| --- | --- | --- | --- |
| Contact name | Item name | Individual person. | Yes |
| Company | Connect boards | Linked account. | If available |
| Title / role | Text | Business role. | No |
| Email | Email | Primary email. | Yes when available |
| Phone | Phone | Primary phone. | No |
| Relationship status | Status | Prospect, customer, partner, inactive. | Yes |
| Owner | People | Relationship owner. | Yes |
| Last interaction | Date | Recent activity date. | No |
| Communication preference | Dropdown | Email, phone, text, other. | Question |

## Companies / Accounts Board

| Column | Type | Purpose | Required? |
| --- | --- | --- | --- |
| Company name | Item name | Organization name. | Yes |
| Account owner | People | Internal owner. | Yes |
| Account type | Status / Dropdown | Prospect, customer, partner, vendor. | Yes |
| Industry | Dropdown | Segment reporting. | Question |
| Website | Link | Company website. | No |
| Primary contact | Connect boards | Main contact. | If available |
| Active deals | Connect / Mirror | Related open opportunities. | No |
| Customer status | Status | Prospect, active customer, churned, inactive. | Question |
| Notes | Long text | Account context. | No |

## Deals / Opportunities Board

| Column | Type | Purpose | Required? |
| --- | --- | --- | --- |
| Deal name | Item name | Opportunity label. | Yes |
| Company | Connect boards | Linked account. | Yes |
| Primary contact | Connect boards | Main buyer/contact. | If available |
| Deal owner | People | Responsible rep. | Yes |
| Pipeline stage | Status | Current sales stage. | Yes |
| Deal value | Numbers | Estimated revenue. | Question |
| Probability | Numbers / Status | Forecast weighting. | Question |
| Expected close date | Date | Forecasting and follow-up. | Yes for active deals |
| Last activity date | Date / Mirror | Activity recency. | No |
| Next step | Text / Long text | Immediate action. | Yes |
| Next follow-up date | Date | Drives reminders. | Yes |
| Loss reason | Status / Dropdown | Required for closed-lost. | Conditional |
| Closed date | Date | Required for won/lost reporting. | Conditional |

## Sales Activities Board

| Column | Type | Purpose | Required? |
| --- | --- | --- | --- |
| Activity title | Item name | Short activity description. | Yes |
| Activity type | Status | Call, email, meeting, task, note. | Yes |
| Related deal | Connect boards | Links to opportunity. | If relevant |
| Related contact | Connect boards | Links to contact. | If relevant |
| Owner | People | Person responsible. | Yes |
| Due date | Date | Task timing. | For tasks |
| Completed date | Date | Activity completion. | Conditional |
| Activity status | Status | Planned, completed, overdue, canceled. | Yes |
| Notes | Long text | Outcome and context. | No |

## Client Onboarding / Handoff Board

| Column | Type | Purpose | Required? |
| --- | --- | --- | --- |
| Client / project name | Item name | Name passed from closed-won deal. | Yes |
| Source deal | Connect boards | Original opportunity. | Yes |
| Sales owner | People / Mirror | Rep who closed deal. | Yes |
| Delivery owner | People | Operations or fulfillment owner. | Question |
| Handoff status | Status | New, reviewing, ready, in progress, complete. | Yes |
| Kickoff date | Date | Planned client kickoff. | Question |
| Contract / package details | Long text / File / Link | Scope information. | Question |
| Internal notes | Long text | Context for delivery team. | No |

## Data Standards

- Define each status label before launch.
- Require owners for all active records.
- Require next follow-up dates for active leads and deals.
- Use controlled dropdowns for source, stage, loss reason, and activity type.
- Avoid using long text fields for data that needs reporting.

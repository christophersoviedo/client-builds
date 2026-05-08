# Integration Map

## Integration Strategy

Integrations should reduce duplicate entry and keep Monday.com aligned with the tools the team already uses. Specific systems were not provided, so this map identifies likely integration categories and the decisions required before buildout.

## Proposed Integration Categories

| System Category | Direction | Purpose | Data Involved | Status |
| --- | --- | --- | --- | --- |
| Website forms | Into Monday.com | Create new leads from inbound inquiries. | Name, email, phone, source, message, service interest. | Question |
| Email platform | Both directions or external only | Track outreach and follow-up communication. | Email address, sent emails, replies, templates. | Question |
| Calendar | Into Monday.com or linked | Track meetings and discovery calls. | Meeting date, contact, owner, notes. | Question |
| Marketing automation | Both directions | Nurture leads and sync lifecycle status. | Lead status, email engagement, source. | Question |
| Proposal / quote tool | Into Monday.com | Update proposal status and deal value. | Proposal sent date, value, status. | Question |
| Contract / e-signature | Into Monday.com | Update closed-won readiness. | Contract status, signed date, files or links. | Question |
| Accounting / invoicing | Out of Monday.com or both | Trigger billing after closed-won. | Customer, amount, package, invoice status. | Question |
| Customer support / delivery | Out of Monday.com | Start onboarding or fulfillment. | Closed-won details, owner, scope, kickoff date. | Question |
| Slack / Teams | Out of Monday.com | Notify internal teams. | New lead, closed-won, overdue items. | Question |

## Monday.com Native Integration Candidates

- Gmail or Outlook for communication context.
- Google Calendar or Outlook Calendar for meetings.
- Slack or Microsoft Teams for team notifications.
- Forms for lead capture if the client does not require a separate website form tool.
- Zapier, Make, or native Monday.com integrations for tools without direct support.

## Data Flow Priorities

1. Lead capture into Monday.com.
2. Owner assignment and notification.
3. Calendar or activity visibility for sales follow-up.
4. Closed-won handoff into onboarding or delivery.
5. Proposal, contract, and billing sync if those tools are in use.

## Integration Questions

- What tools does the client currently use for website forms, email, calendar, proposals, contracts, payments, invoicing, and project delivery?
- Which tools must remain in place?
- Which system should be the source of truth for contacts and companies?
- Are there existing duplicate records or data quality issues?
- Are API keys, admin access, or integration permissions available?
- Does the client require two-way sync, or is one-way automation enough?
- Are there compliance, consent, or unsubscribe requirements for outbound email?

## Risks And Constraints

- Monday.com plan level may limit available automation and integration actions.
- Third-party tools may require paid tiers for API or webhook access.
- Two-way sync can create duplicate or conflicting records if matching rules are weak.
- Email tracking may have privacy, consent, and deliverability implications.
- Historical data migration should be separated from live integration setup.

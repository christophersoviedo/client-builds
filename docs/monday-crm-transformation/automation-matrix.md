# Automation Matrix

## Automation Strategy

Automations should reduce manual coordination, enforce follow-up discipline, and create reliable handoffs. They should not hide critical business logic from the team.

## Proposed Automations

| Trigger | Condition | Action | Board | Priority | Assumption / Question |
| --- | --- | --- | --- | --- | --- |
| New lead is created | Lead owner is empty | Notify sales manager to assign owner. | Leads | High | Assumes leads may enter without ownership. |
| New lead is created | Source is known | Notify assigned owner. | Leads | High | Requires lead source capture. |
| Qualification status changes to qualified | Company and contact confirmed | Create or connect deal item. | Leads / Deals | High | Confirm whether qualified leads become deals automatically. |
| Next follow-up date arrives | Lead or deal is active | Notify owner. | Leads / Deals | High | Requires consistent follow-up dates. |
| Follow-up date passes | Status is not closed or completed | Notify owner and optionally manager. | Leads / Deals / Activities | High | Confirm escalation rules. |
| Deal stage changes | Stage is proposal / quote sent | Create follow-up task. | Deals / Activities | Medium | Confirm standard proposal follow-up timing. |
| Deal stage changes | Stage is closed-won | Create onboarding / handoff item. | Deals / Onboarding | High | Confirm required handoff fields. |
| Deal stage changes | Stage is closed-lost | Require loss reason or notify owner. | Deals | High | Monday.com may require workaround if field validation is limited. |
| Activity status changes to completed | Related deal exists | Update last activity date or notify owner. | Activities / Deals | Medium | Depends on board connection design. |
| Deal close date is within defined range | Stage is active | Notify owner to update forecast. | Deals | Medium | Confirm forecast review cadence. |
| Deal has no activity for defined period | Stage is active | Notify owner. | Deals | Medium | Requires reliable activity tracking. |
| Onboarding item is created | From closed-won deal | Notify delivery owner or operations manager. | Onboarding | High | Confirm who owns handoff. |

## Automations To Avoid Until Confirmed

- Automatically changing pipeline stage based only on activity count.
- Auto-closing stale deals without human review.
- Creating duplicate contacts or companies from every form submission.
- Sending external emails without approval and unsubscribe/compliance review.
- Complex cross-board dependencies that cannot be easily explained to the client team.

## Required Configuration Decisions

- Standard owner assignment rules.
- Follow-up timing by stage.
- Escalation rules for overdue leads and deals.
- Whether sales manager notifications should be immediate, daily, or weekly.
- Whether external client emails should be sent from Monday.com, Gmail/Outlook, a marketing platform, or another system.
- Whether automations are available under the client's Monday.com plan.

## Testing Checklist

- Test each trigger with sample records.
- Confirm no duplicate deal, contact, or onboarding items are created.
- Confirm notifications go to the correct people.
- Confirm date-based reminders fire as expected.
- Confirm closed-won and closed-lost paths behave differently.
- Confirm automations are documented for the client admin.

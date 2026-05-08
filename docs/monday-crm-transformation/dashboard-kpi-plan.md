# Dashboard KPI Plan

## Dashboard Strategy

Dashboards should answer practical management questions:

- How much pipeline exists?
- Where are deals getting stuck?
- Which sales activities are happening?
- Which sources produce qualified opportunities?
- What needs follow-up now?
- What revenue is expected to close?

Because client targets and sales data were not provided, KPI targets are listed as questions rather than assumptions.

## Recommended Dashboards

### Executive Sales Overview

| Widget / KPI | Source Board | Purpose | Notes |
| --- | --- | --- | --- |
| Total open pipeline value | Deals | Shows active opportunity value. | Requires deal value. |
| Pipeline by stage | Deals | Shows stage distribution. | Requires clean stage labels. |
| Expected close value by month | Deals | Forecasting view. | Requires close date and value. |
| Closed-won value | Deals | Revenue outcome tracking. | Requires closed date and value. |
| Win / loss count | Deals | Outcome trend. | Requires consistent closed-won and closed-lost stages. |

### Sales Manager Activity Dashboard

| Widget / KPI | Source Board | Purpose | Notes |
| --- | --- | --- | --- |
| Leads by owner | Leads | Workload visibility. | Requires owner assignment. |
| Overdue follow-ups | Leads / Deals / Activities | Accountability. | Requires follow-up dates. |
| Activities completed by rep | Activities | Sales activity tracking. | Requires activity logging. |
| Deals with no recent activity | Deals / Activities | Pipeline hygiene. | Requires activity relationship. |
| New leads this week | Leads | Intake volume. | Requires intake date. |

### Pipeline Health Dashboard

| Widget / KPI | Source Board | Purpose | Notes |
| --- | --- | --- | --- |
| Stage aging | Deals | Shows stalled deals. | May require stage-entered date tracking. |
| Close date slippage | Deals | Forecast quality. | Requires date updates or historical tracking. |
| Deals missing next step | Deals | Data hygiene. | Requires next-step field. |
| Deals missing value | Deals | Forecast completeness. | Only relevant if value is tracked. |
| Loss reasons | Deals | Sales process learning. | Requires controlled loss reason values. |

### Source And Conversion Dashboard

| Widget / KPI | Source Board | Purpose | Notes |
| --- | --- | --- | --- |
| Leads by source | Leads | Marketing/source visibility. | Requires source field. |
| Qualified leads by source | Leads | Source quality. | Requires qualification status. |
| Deals created by source | Leads / Deals | Conversion from lead to opportunity. | Requires source carried into deals. |
| Closed-won by source | Deals | Revenue attribution. | Requires source and value. |

## KPI Questions For Client

- What revenue target should dashboards measure against?
- Which sales stages should count as active pipeline?
- Should forecast be unweighted, weighted by probability, or both?
- What activity types matter most to management?
- What follow-up SLA should be considered overdue?
- Should dashboards report by individual rep, team, territory, product, or service line?
- Should dashboards include post-sale onboarding metrics?

## Data Requirements

- Every active lead and deal needs an owner.
- Every active lead and deal needs a next follow-up date.
- Every active deal needs a stage.
- Forecast dashboards require expected close date and deal value.
- Source reporting requires consistent lead source definitions.
- Loss analysis requires a required loss reason for closed-lost deals.

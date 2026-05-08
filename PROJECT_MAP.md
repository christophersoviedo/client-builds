# Project Map

Use this file as the workspace index for client websites and automation projects.

## Workspace Layout

| Path | Purpose | Notes |
| --- | --- | --- |
| `sites/` | Client website builds | Create one folder per client or project. |
| `automations/` | Automation and integration projects | Keep credentials out of the repository. |
| `shared/` | Reusable workspace assets | Add only when reuse is real. |
| `docs/` | Workspace-level documentation | Decisions, procedures, and reference notes. |

## Projects

| Project | Type | Path | Status | Stack | Notes |
| --- | --- | --- | --- | --- | --- |
| _None yet_ | - | - | - | - | Add projects here when created. |

## Conventions

- Each project should include its own `README.md`.
- Each project should document setup, development, test, build, and deployment commands when those commands exist.
- Use `.env.example` for required environment variables, with placeholder values only.
- Keep client-specific data exports, credentials, and private documents outside version control.

## Status Labels

- `planned` - scoped but not started
- `active` - currently being built or maintained
- `paused` - intentionally on hold
- `shipped` - delivered and not actively changing
- `archived` - retained for reference only

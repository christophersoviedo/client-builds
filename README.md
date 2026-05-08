# Client Builds Workspace

This workspace is for building client websites and automation projects. It is intentionally framework-neutral until a project needs a specific stack.

## Intended Structure

- `sites/` - client website projects
- `automations/` - scripts, workflows, and integration projects
- `shared/` - reusable utilities, components, snippets, and documentation
- `docs/` - workspace-level notes, decisions, and operating procedures

Create project folders only when work begins. Keep each client project isolated with its own README, dependencies, configuration, and deployment notes.

## Workspace Rules

- Do not commit secrets, API keys, credentials, private client data, or production exports.
- Use `.env.example` files to document required environment variables.
- Keep generated assets, dependency folders, build outputs, logs, and local tool caches out of version control.
- Add frameworks, package managers, or deployment tooling only when a project requires them.
- Document project ownership, status, stack choices, and important commands in `PROJECT_MAP.md`.

## Starting a New Project

1. Create a folder under `sites/` or `automations/`.
2. Add a project-specific `README.md`.
3. Add any required `.env.example` file without secret values.
4. Update `PROJECT_MAP.md` with the project name, type, status, stack, and notes.
5. Install dependencies only inside the project folder once the stack is chosen.

## Security

Secrets should live only in local environment files, password managers, deployment platform settings, or approved secret stores. Never place real credentials in this repository.

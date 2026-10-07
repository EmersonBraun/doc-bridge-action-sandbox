# AGENTS.md

## Documentation routing (doc-bridge)

Before editing a package or module:

1. Run `ak-docs query ownership <id> --agent` (or MCP tool `handoff.resolve`)
2. Read `startHere` and respect `editRoots` + `checks`
3. Prefer agent docs under `docs/for-agents/`; human site links appear as `humanDoc`

Local consult without LLM: `ak-docs ask "<question>"`
Optional grounded chat (AgentsKit peers): `ak-docs chat`

# Upvote.club — MCP Bundles (MCPB)

Desktop extension (`.mcpb`) for [Claude Desktop](https://claude.com/docs/connectors/building/mcpb). Single-click install via Settings → Extensions.

## Upvote Club MCP packages

| Package | Repository | Use case |
|---------|------------|----------|
| Core | [upvote-club-mcp-core](https://github.com/upvoteclub/upvote-club-mcp-core) | Shared MCP server library (6 tools) |
| Local | [upvote-club-mcp-local](https://github.com/upvoteclub/upvote-club-mcp-local) | Cursor, Claude Code, manual Claude Desktop (`stdio`) |
| **MCPB** | **This repo** — [upvote-club-mcp-mcpb](https://github.com/upvoteclub/upvote-club-mcp-mcpb) | Single-click Claude Desktop `.mcpb` install |
| Remote | [upvote-club-mcp-remote](https://github.com/upvoteclub/upvote-club-mcp-remote) | Claude.ai custom connector (Streamable HTTP) |
| Apps | [upvote-club-mcp-apps](https://github.com/upvoteclub/upvote-club-mcp-apps) | MCP Apps + inline task progress UI |

## Build

```bash
git clone https://github.com/upvoteclub/upvote-club-mcp-mcpb.git
cd upvote-club-mcp-mcpb
npm install
UPVOTE_API_KEY=upv_... npm start          # local stdio test
npx @anthropic-ai/mcpb pack               # produces upvote-club.mcpb
```

## Setup

1. **https://upvote.club** — register
2. **MATE** plan
3. **https://upvote.club/api** — generate key
4. Install `.mcpb` → paste key

## Install

1. Double-click `upvote-club.mcpb`
2. Paste API key from https://upvote.club/api
3. Ask Claude to promote a link

## Tools

6 tools — see [API_REFERENCE.md](https://github.com/upvoteclub/upvote-club-mcp-core/blob/main/docs/API_REFERENCE.md)

## Related

- Core dependency: [@upvote-club/mcp-core](https://github.com/upvoteclub/upvote-club-mcp-core)
- Need Cursor / Claude Code stdio? → [upvote-club-mcp-local](https://github.com/upvoteclub/upvote-club-mcp-local)
- Need Claude.ai HTTPS connector? → [upvote-club-mcp-remote](https://github.com/upvoteclub/upvote-club-mcp-remote)

## Privacy

Connects only to `https://api.upvote.club`. Policy: https://upvote.club/privacy-policy

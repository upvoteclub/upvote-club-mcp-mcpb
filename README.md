# Upvote.club — MCP Bundles (MCPB)

Desktop extension (`.mcpb`) for [Claude Desktop](https://claude.com/docs/connectors/building/mcpb). Single-click install via Settings → Extensions.

## Build

```bash
cd upvote-club-mcp/mcpb
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

6 tools — see https://github.com/upvoteclub/upvote-club-mcp-core/blob/main/docs/API_REFERENCE.md

## Privacy

Connects only to `https://api.upvote.club`. Policy: https://upvote.club/privacy-policy

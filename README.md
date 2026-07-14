# Upvote.club — MCP Bundles (MCPB)

Desktop extension (`.mcpb`) for [Claude Desktop](https://claude.com/docs/connectors/building/mcpb). Single-click install via Settings → Extensions.

## Build

```bash
cd upvote-club-mcp/mcpb
npm install
UPVOTE_API_KEY=upv_... npm start          # local stdio test
npx @anthropic-ai/mcpb pack               # produces upvote-club.mcpb
```

## Install

1. Double-click `upvote-club.mcpb` (or drag into Claude Desktop)
2. Paste your API key when prompted
3. Ask Claude: *"Promote this Product Hunt launch with 50 upvotes: https://..."*

## Icon

Place a 512×512 PNG at `mcpb/icon.png` before packing (referenced in `manifest.json`).

## Tools

All 7 Public API tools — see [../docs/ENDPOINT_MAP.md](../docs/ENDPOINT_MAP.md).

## Privacy

Connects only to `https://api.upvote.club`. Policy: https://upvote.club/privacy-policy

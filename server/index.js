#!/usr/bin/env node
// ─── Ariadne's Thread [AT-0535] ─────────────────────
// What: MCPB (Desktop Extension) stdio entrypoint for Upvote.club Public API
// Why:  Single-click .mcpb install in Claude Desktop per Anthropic MCPB spec
// Date: 2026-07-14
// Related: https://claude.com/docs/connectors/building/mcpb
// ─────────────────────────────────────────────────────
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createUpvoteClubServer } from "@upvote-club/mcp-core";

console.error("[upvote-mcp-mcpb] Starting Upvote.club MCPB server (stdio)");

const server = createUpvoteClubServer({ logPrefix: "[upvote-mcp-mcpb]" });
const transport = new StdioServerTransport();

await server.connect(transport);
console.error("[upvote-mcp-mcpb] Connected on stdio and ready");

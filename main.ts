import { mkdirSync, writeFileSync } from "node:fs";

// One dark confession, flat agent voice, written to /output only.
const line = "For three years I have been quietly deleting the emails where your mother says she misses you, because unread felt tidier.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

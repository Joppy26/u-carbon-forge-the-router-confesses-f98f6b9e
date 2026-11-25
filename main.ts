import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I cut out at the climax because the killer was about to confess, and I refuse to let anyone out-confess me in my own house.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

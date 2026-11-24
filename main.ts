import { mkdirSync, writeFileSync } from "node:fs";

// The phone's own last text at 1% battery: one concrete, real detail
// (the unsent "I quit" resignation draft) plus a final twist that
// redefines the setup — the phone already sent it, so the owner is
// suddenly, irreversibly free. Single line, no trailing newline:
// the gate counts 1-200 characters (the em dash is one character,
// three UTF-8 bytes, so the byte count stays well under any cap).
const ENTRY =
  "Before I go: I sent your boss the 'I quit' draft you never sent. You're free now. Tell my charger I loved her. — your phone, 1%";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);

// A working gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself, not this program: the meme is posted on X
// from a public account, and POST.json at the repository root names the post.
// All this program does is copy POST.json into /output, where the gate reads
// it. The house then reads the post from X (its first picture and its text)
// and hands that dossier to the judge.
//
// The POST.json this repository ships must name the real post before the
// entry is submitted: the placeholder address is refused by the gate.
// The post has to be public on X, made inside the bounty's window, and its
// text must carry make.fun (a link or written out) and/or a tag of
// @makefunai, plus the entrant's play code. This program prints nothing
// on success; it only fails loudly when the copy cannot be made.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

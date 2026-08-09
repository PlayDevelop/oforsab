import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const clientRoot = new URL("../dist/client/", import.meta.url);

test("exports the OFORSAB landing page", async () => {
  const html = await readFile(new URL("index.html", clientRoot), "utf8");

  assert.match(html, /<html[^>]*lang="sv"/i);
  assert.match(
    html,
    /<title>Oliver Fors AB \| Mönstrad betong i Borås<\/title>/i,
  );
  assert.match(html, /id="tjanster"/i);
  assert.match(html, /id="kontakt"/i);
  assert.match(html, /oliver@oforsab\.se/i);
  assert.match(html, /070-345 60 31/i);
  assert.doesNotMatch(html, /vinext-starter|codex-preview|ChatGPT Sign-In/i);
});

test("exports the files required by Loopia", async () => {
  await Promise.all([
    access(new URL("404.html", clientRoot)),
    access(new URL(".htaccess", clientRoot)),
    access(new URL("favicon.svg", clientRoot)),
    access(new URL("oforsab-wordmark-white-v2.png", clientRoot)),
    access(new URL("oliver-hero-v2.webp", clientRoot)),
    access(new URL("_next/", clientRoot)),
  ]);
});

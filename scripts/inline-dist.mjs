import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = resolve(root, "dist/index.html");

let html = await readFile(htmlPath, "utf8");

const scriptMatch = html.match(
  /<script type="module" crossorigin src="\.\/assets\/([^"]+\.js)"><\/script>/,
);
if (scriptMatch) {
  const js = await readFile(resolve(root, "dist/assets", scriptMatch[1]), "utf8");
  html = html.replace(scriptMatch[0], "");
  html = html.replace(
    "</body>",
    `    <script>${js.replaceAll("</script", "<\\/script")}</script>\n  </body>`,
  );
}

const styleMatch = html.match(
  /<link rel="stylesheet" crossorigin href="\.\/assets\/([^"]+\.css)">/,
);
if (styleMatch) {
  const css = await readFile(resolve(root, "dist/assets", styleMatch[1]), "utf8");
  html = html.replace(styleMatch[0], `<style>${css.replaceAll("</style", "<\\/style")}</style>`);
}

await writeFile(htmlPath, html);

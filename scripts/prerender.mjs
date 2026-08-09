import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const distDir = resolve(root, "dist");
const templatePath = resolve(distDir, "index.html");
const serverEntryPath = resolve(distDir, "server/entry-server.js");
const galleryPath = resolve(root, "public/media/galerie/gallery.json");

const readGalleryFiles = async () => {
  const raw = await readFile(galleryPath, "utf8");
  const files = JSON.parse(raw);

  if (!Array.isArray(files)) {
    throw new Error("Gallery JSON must be an array of filenames.");
  }

  return files.filter((file) => typeof file === "string");
};

const serializeForInlineScript = (value) =>
  JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

const template = await readFile(templatePath, "utf8");
const galleryFiles = await readGalleryFiles();
const { render } = await import(serverEntryPath);
const appHtml = render(galleryFiles);
const galleryScript = `<script>window.__GALLERY_FILES__=${serializeForInlineScript(galleryFiles)}</script>`;

const html = template
  .replace("<!--app-html-->", appHtml)
  .replace("</body>", `    ${galleryScript}\n  </body>`);

await writeFile(templatePath, html);
await rm(resolve(distDir, "server"), { recursive: true, force: true });

import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import Index from "./routes/index";
import "./styles.css";

declare global {
  interface Window {
    __GALLERY_FILES__?: string[];
  }
}

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <Index initialGalleryFiles={window.__GALLERY_FILES__ ?? []} />
  </StrictMode>
);

if (root.childElementCount > 0) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}

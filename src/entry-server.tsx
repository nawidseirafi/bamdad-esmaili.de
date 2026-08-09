import { StrictMode } from "react";
import { renderToString } from "react-dom/server";

import Index from "./routes/index";

export function render(initialGalleryFiles: string[] = []) {
  return renderToString(
    <StrictMode>
      <Index initialGalleryFiles={initialGalleryFiles} />
    </StrictMode>,
  );
}

/** NOTE: Cannot import server-only modules in `next.config.js`. */
import "server-only";

import shiki from "@shikijs/rehype";

export const config = {
  rehypePlugins: [shiki],
};

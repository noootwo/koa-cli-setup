import path from "path";
import { fileURLToPath } from "url";

export function getRootPath(config) {
  return "./" + config.packageName;
}

export function getFilePath(url) {
  const __dirname = fileURLToPath(import.meta.url);
  return path.resolve(__dirname, "../" + url);
}

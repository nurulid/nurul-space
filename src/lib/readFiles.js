import fs from "fs";
import path from "path";

const folderPath = path.join(process.cwd(), "src/content");

export function readFiles() {
  const files = fs.readdirSync(folderPath);
  return files;
}

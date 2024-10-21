import fs from "fs";
import matter from "gray-matter";

export function getFrontmatter(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);
  return { content, data };
}

import { getFrontmatter } from "@/lib/frontMatter";
import { readFiles } from "@/lib/readFiles";
import { removeMdExtension } from "@/lib/removeMdExt";

export function getPosts() {
  const posts = [];
  const files = readFiles();

  files.forEach((file) => {
    const { data: frontMatter } = getFrontmatter(`./src/content/${file}`);
    posts.push({ ...frontMatter, slug: removeMdExtension(file) });
  });

  return posts;
}

export function getPost(slug) {
  const { data: frontMatter, content } = getFrontmatter(`./src/content/${slug}.md`);
  return { content, frontMatter };
}
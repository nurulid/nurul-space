import { MdRenderer } from '@/components/mdx/mdRenderer';
import { getPost, getPosts } from '@/services/getPosts';

export async function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }) {
  const { frontMatter, content } = getPost(params.slug);

  return (
    <>
      <h3>{frontMatter.title}</h3>
      <p>{frontMatter.date}</p>
      <hr />
      <MdRenderer content={content} />
    </>
  );
}

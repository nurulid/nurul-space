import { getPosts } from '@/services/getPosts';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  const posts = getPosts();

  return (
    <div className="not-prose">
      {/* @TODO: this will be cards */}
      {/* <div className="p-2 border rounded-md">
        <h3 className="mt-0">Title</h3>
        <p>description</p>
      </div> */}
      {posts.map((post) => {
        return (
          <Link href={`/writing/${post.slug}`} key={post.title} className="block">
            <h3 className="font-bold text-lg tracking-tight">{post.title}</h3>
            <div>{post.slug}</div>
          </Link>
        );
      })}
    </div>
  );
}

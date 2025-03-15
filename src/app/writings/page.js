import { Dot } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const writingPosts = [
  {
    id: 1,
    title: 'Active state in Tailwind CSS',
    url: '/writings/tailwind-active-state',
    created: '25 October, 2024',
    tag: 'tailwind',
    description: 'Some ways how to add an active state in Tailwind',
  },
  {
    id: 2,
    title: 'React Component',
    url: '/writings/react-component',
    created: '9 November, 2024',
    tag: 'react',
    description: 'Some ways to create a component in React',
  },
  {
    id: 3,
    title: 'Responsive Chart',
    url: '/writings/responsive-chart',
    created: '5 March, 2025',
    tag: 'react',
    description: 'Create a responsive line chart using Recharts',
  },
];

export default function Page() {
  const dummy = Array.from({ length: 5 });

  return (
    <div className="not-prose space-y-8">
      <div>
        <h2 className="text-2xl font-semibold flex items-center">
          <span>Writings</span> <Dot />
          <span className="text-xs opacity-50">
            {writingPosts.length} posts
          </span>
        </h2>
        <p className="opacity-75">Just write.</p>
      </div>
      <div className="space-y-8">
        {writingPosts
          .sort((a, b) => new Date(b.created) - new Date(a.created))
          .map((post, i) => {
            return (
              <div key={i} className="space-y-1">
                <span className="uppercase text-xs opacity-50">{post.tag}</span>
                <div className="space-y-1">
                  <Link
                    href={post.url}
                    className="text-lg font-medium hover:text-violet-600 hover:underline underline-offset-4 transition-all"
                  >
                    {post.title}
                  </Link>
                  <p className="opacity-75 text-sm line-clamp-2">
                    {post.description}
                  </p>
                </div>
                <span className="opacity-50 text-xs capitalize">
                  {post.created}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

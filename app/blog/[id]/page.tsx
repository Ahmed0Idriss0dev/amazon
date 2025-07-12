import { blogPosts } from '@/data';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
interface PageProps {
  params:  Promise<{ id: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { id } = await params;
  const blog= blogPosts.find((item)=> item.slug ===id)
  console.log(blog)
  return (
   <div>
    <div className="mx-auto w-1/2">
   <h1 className='text-3xl font-bold'>{blog?.title} </h1>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
          img: ({ node, ...props }) => (
            // Uncomment to use Next.js Image component instead:
            // <Image src={props.src || ''} alt={props.alt || ''} width={800} height={400} />
            <img {...props} style={{ maxWidth: '100%', height: 'auto' }} />
          ),
         
          h2: ({ node, ...props }) => <h2 className="mt-8 mb-4" {...props} />,
        }}
    >
      {blog?.content}
    </ReactMarkdown>
   </div>

    </div>
  )
}

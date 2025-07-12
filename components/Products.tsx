import { blogPosts } from '@/data'
import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
   <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px] gap-4 max-w-7xl mx-auto px-4 py-10">
      <aside className=" hidden lg:block">
        <div className="bg-gray-200 h-full rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Ad Space</p>
        </div>
      </aside>

      <main className="w-full min-h-dvh grid grid-cols-2 gap-3 sm:grid-cols-2">
        {
            blogPosts.map(({title ,slug},i)=>(
                <div key={i} className="w-full h-full rounded-2xl flex flex-col justify-between">
                    <p></p>
                    <div className="">
                        <Link href={`/blog/${slug}`}>
                        <h1>{title}</h1>

                        </Link>
                    </div>
                </div>

            ))
        }
      </main>

      <aside className=" hidden lg:block">
        <div className="bg-gray-200 h-full rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Ad Space</p>
        </div>
      </aside>
    </div>
  )
}

export default Products
import React from 'react'

const Products = () => {
  return (
   <div className="grid grid-cols-[200px_1fr_200px] gap-4 max-w-7xl mx-auto px-4 py-10">
      <aside className=" hidden lg:block">
        <div className="bg-gray-200 h-full rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Ad Space</p>
        </div>
      </aside>

      <main className="w-full min-h-dvh grid grid-cols-3">
        <div className="w-full h-80 rounded-2xl bg-amazon-600"></div>
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
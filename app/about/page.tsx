export const metadata = {
  title: 'About Us | Amazon Product Recommendations',
  description: 'Learn about our mission to help shoppers discover the best Amazon products through curated guides and honest reviews.',
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 h-dvh py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <p className="mb-4">
        Welcome to <strong>Amazon Product Recommendations</strong> — your go-to resource for discovering high-quality, handpicked products available on Amazon.
      </p>

      <p className="mb-4">
        Our mission is simple: to help shoppers save time and money by showcasing only the most useful, well-reviewed, and trusted items. Whether you're looking for tech gadgets, home essentials, or gift ideas, our curated guides are here to make your decision easier.
      </p>

      <p className="mb-4">
        We do the research so you don't have to — reviewing specs, comparing features, and scanning customer feedback to bring you the best options in each category.
      </p>

      <p className="mb-4">
        This site is supported through the Amazon Associates Program. That means we may earn a small commission (at no extra cost to you) if you purchase through one of our links. Our goal is to recommend products that offer real value — no fluff, no hype.
      </p>

      <p>
        Thanks for visiting! If you have feedback or product suggestions, feel free to{' '}
        <a href="/contact" className="text-blue-600 hover:underline">contact us</a>.
      </p>
    </main>
  );
}

export const metadata = {
  title: 'Terms of Service | Amazon Product Recommendations',
  description: 'Review the terms and conditions for using our website and content.',
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4">
        By accessing and using our website, you agree to the following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Website Use</h2>
      <p className="mb-4">
        You may use this website for personal, non-commercial purposes only. You agree not to use the site in any way that may damage, disable, or impair the site or interfere with other users.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Affiliate Disclaimer</h2>
      <p className="mb-4">
        This website contains affiliate links, primarily through the Amazon Associates Program. If you click a product link and make a purchase, we may earn a small commission — at no extra cost to you.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Accuracy of Information</h2>
      <p className="mb-4">
        While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, reliability, or accuracy of any content on this site. Product prices, availability, and specifications may change without notice.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. External Links</h2>
      <p className="mb-4">
        Our site may contain links to external websites, including Amazon. We are not responsible for the content or privacy practices of those websites.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Intellectual Property</h2>
      <p className="mb-4">
        All content on this website, including text, graphics, and design, is the property of Amazon Product Recommendations or its licensors and may not be reused without permission.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for any losses or damages resulting from the use of this website or the products we recommend. Use all products at your own risk and discretion.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms of Service from time to time. Any changes will be posted on this page. Continued use of the site after updates means you accept the new terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact Us</h2>
      <p>
        If you have questions or concerns about these Terms, you can contact us at:{' '}
        <a href="mailto:your@email.com" className="text-blue-600 hover:underline">
          your@email.com
        </a>
      </p>
    </main>
  );
}

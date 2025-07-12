export const metadata = {
  title: 'Privacy Policy | Amazon Product Recommendations',
  description: 'Learn how we collect, use, and protect your data when using our site.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy describes how your personal information is collected, used, and shared when you visit or interact with our website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We do not collect any personally identifiable information unless you voluntarily provide it (e.g., through a contact form or email).
        Our site may automatically collect non-personal information, such as your browser type, device, IP address, and referring site.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Cookies & Tracking</h2>
      <p className="mb-4">
        We use cookies and similar tracking technologies to improve your browsing experience and analyze website performance.
        You can disable cookies through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Amazon Affiliate Disclosure</h2>
      <p className="mb-4">
        This website participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn fees by linking to Amazon.com and affiliated sites.
        As an Amazon Associate, we earn from qualifying purchases.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. How We Use Your Information</h2>
      <p className="mb-4">
        We may use your information to:
        <ul className="list-disc pl-6">
          <li>Improve our website and content</li>
          <li>Respond to inquiries or contact form submissions</li>
          <li>Track affiliate performance and link clicks</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services like Google Analytics or Amazon affiliate tools that may collect non-personal data through cookies or other means. These services have their own privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You have the right to request access, modification, or deletion of your personal data (if any is collected). Contact us using the information below.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, you can contact us at: <a href="mailto:your@email.com" className="text-blue-600 hover:underline">your@email.com</a>
      </p>
    </main>
  );
}

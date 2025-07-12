const Footer = () => {
  return (
    <footer className="bg-dark-950 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Amazon Products Recommendation</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <ul className="flex flex-wrap gap-6 text-sm justify-center">
          <li>
            <a href="/about" className="hover:text-blue-400 transition">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
          </li>
          <li>
            <a href="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service" className="hover:text-blue-400 transition">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

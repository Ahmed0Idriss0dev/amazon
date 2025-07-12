import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-white  sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo/>
        {/* Navigation Links */}
        <div className="space-x-6 text-sm hidden md:flex">
          <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-amazon-500">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-amazon-500">Contact</Link>
          <Link href="/privacy-policy" className="text-gray-600 hover:text-amazon-500">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-gray-600 hover:text-amazon-500">Terms</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

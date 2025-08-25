import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
  };

  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="text-footer-brand">
              AutismAlly
            </h3>
            <p className="text-gray-400 mb-4" data-testid="text-footer-description">
              Supporting families with autism through comprehensive tools, resources, and community.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="link-social-facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="link-social-twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="link-social-instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="link-social-linkedin"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-quick-links-title">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-footer-about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-footer-features">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/app" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-footer-app">
                  App
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-footer-blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-footer-resources">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-support-title">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-footer-support-groups">
                  Support Groups
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-footer-services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-footer-faq">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-white transition-colors duration-200" data-testid="link-footer-donate">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-newsletter-title">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4" data-testid="text-footer-newsletter-description">
              Stay updated with the latest resources and community news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-primary"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-blue-600 transition-colors duration-200"
                data-testid="button-newsletter-submit"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400" data-testid="text-footer-copyright">
            &copy; 2024 AutismAlly. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200" data-testid="link-footer-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200" data-testid="link-footer-terms">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200" data-testid="link-footer-accessibility">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

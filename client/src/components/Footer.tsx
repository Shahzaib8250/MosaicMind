import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer 
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden" 
      data-testid="footer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
          backgroundSize: ["100% 100%", "120% 120%"]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 80%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 50%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants}>
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Sparkles className="text-primary text-2xl" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent" data-testid="text-footer-brand">
                MosaicMind
              </h3>
            </motion.div>
            <p className="text-gray-400 mb-4" data-testid="text-footer-description">
              Supporting families with autism through comprehensive tools, resources, and community.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", testId: "link-social-facebook" },
                { icon: Twitter, href: "#", testId: "link-social-twitter" },
                { icon: Instagram, href: "#", testId: "link-social-instagram" },
                { icon: Linkedin, href: "#", testId: "link-social-linkedin" }
              ].map((social, index) => (
                <motion.a
                  key={social.testId}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-white/10"
                  data-testid={social.testId}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} transition={{ delay: 0.1 }}>
            <h4 className="text-lg font-semibold mb-4 text-white" data-testid="text-footer-quick-links-title">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home", testId: "link-footer-home" },
                { href: "/about", label: "About", testId: "link-footer-about" },
                { href: "/features", label: "Features", testId: "link-footer-features" },
                { href: "/app", label: "App", testId: "link-footer-app" },
                { href: "/blog", label: "Blog", testId: "link-footer-blog" },
                { href: "/resources", label: "Resources", testId: "link-footer-resources" }
              ].map((link, index) => (
                <motion.li
                  key={link.testId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.6 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-primary transition-all duration-300 group inline-flex items-center" 
                    data-testid={link.testId}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} transition={{ delay: 0.2 }}>
            <h4 className="text-lg font-semibold mb-4 text-white" data-testid="text-footer-support-title">
              Support
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/support", label: "Support Groups", testId: "link-footer-support-groups" },
                { href: "/services", label: "Services", testId: "link-footer-services" },
                { href: "/faq", label: "FAQ", testId: "link-footer-faq" },
                { href: "#", label: "Contact", testId: "link-footer-contact" },
                { href: "/donate", label: "Donate", testId: "link-footer-donate" }
              ].map((link, index) => (
                <motion.li
                  key={link.testId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.7 }}
                >
                  {link.href === "#" ? (
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-primary transition-all duration-300 group inline-flex items-center" 
                      data-testid={link.testId}
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-primary transition-all duration-300 group inline-flex items-center" 
                      data-testid={link.testId}
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} transition={{ delay: 0.3 }}>
            <h4 className="text-lg font-semibold mb-4 text-white" data-testid="text-footer-newsletter-title">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4" data-testid="text-footer-newsletter-description">
              Stay updated with the latest resources and community news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800/80 backdrop-blur-sm border-gray-700 text-white placeholder-gray-400 focus:ring-primary focus:border-primary transition-all duration-300"
                  data-testid="input-newsletter-email"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
                  data-testid="button-newsletter-submit"
                >
                  Subscribe
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
          transition={{ delay: 0.4 }}
        >
          <motion.p 
            className="text-gray-400 flex items-center space-x-2" 
            data-testid="text-footer-copyright"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span>&copy; 2024 MosaicMind. All rights reserved.</span>
            <Heart className="text-red-500 w-4 h-4 animate-pulse" />
          </motion.p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { href: "#", label: "Privacy Policy", testId: "link-footer-privacy" },
              { href: "#", label: "Terms & Conditions", testId: "link-footer-terms" },
              { href: "#", label: "Accessibility", testId: "link-footer-accessibility" }
            ].map((link, index) => (
              <motion.a
                key={link.testId}
                href={link.href}
                className="text-gray-400 hover:text-primary text-sm transition-all duration-300 hover:scale-105"
                data-testid={link.testId}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 + 0.8 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

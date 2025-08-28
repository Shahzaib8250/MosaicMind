import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Play, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";

interface PageHeroProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonIcon?: ReactNode;
  secondaryButtonText?: string;
  secondaryButtonIcon?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  showButtons?: boolean;
  testId?: string;
}

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PageHero({
  badge,
  title,
  highlightedText,
  subtitle,
  primaryButtonText = "Download the App",
  primaryButtonIcon = <Download className="mr-2 h-5 w-5" />,
  secondaryButtonText = "Watch Demo",
  secondaryButtonIcon = <Play className="mr-2 h-5 w-5" />,
  imageSrc,
  imageAlt,
  onPrimaryClick,
  onSecondaryClick,
  showButtons = true,
  testId = "hero-section"
}: PageHeroProps) {
  return (
    <motion.div 
      className="relative bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 py-20 overflow-hidden" 
      data-testid={testId}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-32 right-20 w-16 h-16 bg-secondary/10 rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent/10 rounded-full"
        animate={{ 
          scale: [1, 1.4, 1],
          rotate: [0, 360],
          x: [0, 25, 0],
          y: [0, -25, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div 
            className="mb-8 lg:mb-0"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {badge && (
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Sparkles className="text-primary text-lg" />
                <span className="text-sm font-medium text-gray-700">{badge}</span>
              </motion.div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-testid="text-hero-title">
              {title}{" "}
              {highlightedText && (
                <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {highlightedText}
                </span>
              )}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
              {subtitle}
            </p>
            {showButtons && (
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    className="bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300" 
                    size="lg" 
                    onClick={onPrimaryClick}
                    data-testid="button-primary"
                  >
                    {primaryButtonIcon}
                    {primaryButtonText}
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg transition-all duration-300" 
                    size="lg" 
                    onClick={onSecondaryClick}
                    data-testid="button-secondary"
                  >
                    {secondaryButtonIcon}
                    {secondaryButtonText}
                  </Button>
                </motion.div>
              </div>
            )}
          </motion.div>
          <motion.div 
            className="lg:text-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="img-hero"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="text-primary text-xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

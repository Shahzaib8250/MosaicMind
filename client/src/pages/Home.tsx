import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  TrendingUp,
  GraduationCap,
  BarChart3,
  Users,
  Bell,
  Shield,
  Heart,
  BookOpen,
  HandHeart,
  Newspaper,
  Download,
  Play,
  Star,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 py-20 overflow-hidden" 
        data-testid="hero-section"
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
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Sparkles className="text-primary text-lg" />
                <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ families</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-testid="text-hero-title">
                Supporting Families with{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Autism
                </span>{" "}
                – All in One App
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
                Comprehensive tools, resources, and community support to help families navigate the autism journey with confidence and hope.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300" size="lg" data-testid="button-download-app">
                    <Download className="mr-2 h-5 w-5" />
                    Download the App
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg transition-all duration-300" size="lg" data-testid="button-watch-demo">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </motion.div>
              </div>
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
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Family using autism support app together"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  data-testid="img-hero-family"
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

      {/* App Features Overview */}
      <motion.div 
        className="py-20 bg-white relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="text-features-title">
              Comprehensive Autism Support Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-features-subtitle">
              Everything you need to support your autism journey in one integrated platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Progress Tracking",
                description: "Monitor development milestones and therapy progress with detailed analytics and visual reports.",
                color: "primary",
                delay: 0.1
              },
              {
                icon: GraduationCap,
                title: "Educational Resources",
                description: "Access evidence-based learning materials, worksheets, and therapy tools tailored to individual needs.",
                color: "secondary",
                delay: 0.2
              },
              {
                icon: BarChart3,
                title: "Personalized Dashboard",
                description: "Customized interface showing relevant information, upcoming appointments, and daily goals.",
                color: "accent",
                delay: 0.3
              },
              {
                icon: Users,
                title: "Support Network & Community",
                description: "Connect with other families, share experiences, and get support from autism professionals.",
                color: "purple",
                delay: 0.4
              },
              {
                icon: Bell,
                title: "Notifications & Alerts",
                description: "Smart reminders for therapy sessions, medication, and important milestones.",
                color: "red",
                delay: 0.5
              },
              {
                icon: Shield,
                title: "Data Privacy & Security",
                description: "HIPAA-compliant platform ensuring your family's information remains secure and private.",
                color: "green",
                delay: 0.6
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                transition={{ delay: feature.delay }}
              >
                <Card className="bg-slate-50 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:shadow-primary/20 group cursor-pointer" data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardContent className="p-6">
                    <motion.div 
                      className={`w-12 h-12 bg-${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="text-white text-xl" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials Preview */}
      <motion.div 
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="text-testimonials-title">
              What Families Are Saying
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-testimonials-subtitle">
              Real stories from families who have found support through MosaicMind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Mother of 7-year-old with autism",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
                quote: "MosaicMind has transformed our daily routine. The progress tracking helps us celebrate every small victory.",
                testId: "card-testimonial-sarah"
              },
              {
                name: "Michael R.",
                role: "Father and autism advocate",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
                quote: "The community support feature connected us with other families. We don't feel alone anymore.",
                testId: "card-testimonial-michael"
              },
              {
                name: "Dr. Lisa K.",
                role: "Licensed Autism Therapist",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
                quote: "As a therapist, I recommend MosaicMind to all my clients. The tools are evidence-based and effective.",
                testId: "card-testimonial-lisa"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0" data-testid={testimonial.testId}>
                  <CardContent className="p-6">
                    <motion.div
                      className="relative mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={`Portrait of ${testimonial.name}`}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <motion.div
                        className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Star className="w-3 h-3 text-white fill-current" />
                      </motion.div>
                    </motion.div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Categories Overview */}
      <motion.div 
        className="py-20 bg-white relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="text-categories-title">
              Explore Our Resources
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-categories-subtitle">
              Comprehensive support across all aspects of autism care and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/categories",
                icon: Heart,
                title: "Therapy & Treatment",
                description: "Professional therapy resources and treatment guides",
                color: "primary",
                bgColor: "blue",
                testId: "link-category-therapy"
              },
              {
                href: "/categories",
                icon: BookOpen,
                title: "Educational Tools",
                description: "Learning materials and educational resources",
                color: "secondary",
                bgColor: "green",
                testId: "link-category-education"
              },
              {
                href: "/support",
                icon: HandHeart,
                title: "Support Groups",
                description: "Connect with families and support networks",
                color: "purple",
                bgColor: "purple",
                testId: "link-category-support"
              },
              {
                href: "/blog",
                icon: Newspaper,
                title: "Blog & Resources",
                description: "Latest articles and expert insights",
                color: "accent",
                bgColor: "amber",
                testId: "link-category-blog"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={category.href} className="group block" data-testid={category.testId}>
                  <Card className={`bg-${category.bgColor}-50 group-hover:bg-${category.bgColor}-100 transition-all duration-500 border-0 shadow-lg hover:shadow-2xl hover:shadow-${category.color}/20 cursor-pointer`}>
                    <CardContent className="p-6">
                      <motion.div
                        className={`text-${category.color} text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <category.icon />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                      <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Latest Blog Posts */}
      <motion.div 
        className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="text-blog-title">
              Latest From Our Blog
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-blog-subtitle">
              Expert insights and practical tips for autism families
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Therapy Tips",
                title: "5 Effective ABA Techniques for Home Practice",
                description: "Learn practical Applied Behavior Analysis strategies you can implement at home to support your child's development.",
                image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
                color: "primary",
                testId: "card-blog-post-1"
              },
              {
                category: "Social Skills",
                title: "Building Social Connections: A Parent's Guide",
                description: "Discover strategies to help your child develop meaningful friendships and social relationships.",
                image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
                color: "secondary",
                testId: "card-blog-post-2"
              },
              {
                category: "Success Stories",
                title: "From Isolation to Independence: Emma's Journey",
                description: "A heartwarming story of how early intervention and family support transformed Emma's life.",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
                color: "purple",
                testId: "card-blog-post-3"
              }
            ].map((post, index) => (
              <motion.div
                key={post.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm cursor-pointer" data-testid={post.testId}>
                  <motion.div
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <motion.div
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <span className={`text-${post.color}`}>{post.category}</span>
                    </motion.div>
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <Link href="/blog" className="text-primary font-medium hover:text-blue-600 transition-colors duration-300 group inline-flex items-center">
                      Read More 
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
            transition={{ delay: 0.8 }}
          >
            <Link href="/blog">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg transition-all duration-300 group" data-testid="button-view-all-articles">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="py-20 bg-gradient-to-r from-primary via-blue-600 to-purple-600 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
            backgroundSize: ["100% 100%", "120% 120%"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 50%)"
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-cta-title">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" data-testid="text-cta-subtitle">
              Join thousands of families who have found support, community, and hope through MosaicMind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300" size="lg" data-testid="button-cta-download">
                  <Download className="mr-2 h-5 w-5" />
                  Download Free App
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300" size="lg" data-testid="button-cta-community">
                  <Users className="mr-2 h-5 w-5" />
                  Join Our Community
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

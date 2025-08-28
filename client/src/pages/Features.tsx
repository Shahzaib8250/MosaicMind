import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import { 
  TrendingUp, 
  BarChart3, 
  GraduationCap, 
  Users, 
  Bell, 
  Shield, 
  Play,
  Target,
  Trophy,
  PuzzleIcon,
  Zap,
  Brain,
  Sparkles,
  Download,
  Smartphone
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

export default function Features() {
  const [activeTab, setActiveTab] = useState('progress');

  const features = [
    {
      icon: <TrendingUp className="text-white text-xl" />,
      title: "Progress Tracking",
      description: "Comprehensive tracking tools to monitor development milestones, therapy goals, and behavioral progress with detailed analytics.",
      bgColor: "bg-primary",
      features: [
        "Visual progress charts",
        "Goal setting and tracking",
        "Milestone celebrations",
        "Data export capabilities"
      ]
    },
    {
      icon: <BarChart3 className="text-white text-xl" />,
      title: "Personalized Dashboard",
      description: "Customized interface displaying relevant information, upcoming appointments, daily goals, and personalized recommendations.",
      bgColor: "bg-secondary",
      features: [
        "Customizable widgets",
        "Quick access shortcuts",
        "Personalized insights",
        "Family member profiles"
      ]
    },
    {
      icon: <GraduationCap className="text-white text-xl" />,
      title: "Educational Tools",
      description: "Evidence-based learning materials, interactive worksheets, and therapy tools tailored to individual learning needs.",
      bgColor: "bg-accent",
      features: [
        "Interactive learning modules",
        "Printable worksheets",
        "Video tutorials",
        "Skill-building games"
      ]
    },
    {
      icon: <Users className="text-white text-xl" />,
      title: "Community Support",
      description: "Connect with other families, share experiences, and access professional support through moderated community forums.",
      bgColor: "bg-autism-purple",
      features: [
        "Family support groups",
        "Expert Q&A sessions",
        "Peer mentorship programs",
        "Local community events"
      ]
    },
    {
      icon: <Bell className="text-white text-xl" />,
      title: "Smart Notifications",
      description: "Intelligent reminders for therapy sessions, medication, appointments, and important developmental milestones.",
      bgColor: "bg-autism-red",
      features: [
        "Customizable reminder schedules",
        "Medication tracking",
        "Appointment notifications",
        "Progress milestone alerts"
      ]
    },
    {
      icon: <Shield className="text-white text-xl" />,
      title: "Data Privacy & Security",
      description: "HIPAA-compliant platform ensuring your family's sensitive information remains secure and protected at all times.",
      bgColor: "bg-autism-green",
      features: [
        "End-to-end encryption",
        "HIPAA compliance",
        "Secure data backup",
        "Privacy controls"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="Powerful Features"
        title="Comprehensive Features for"
        highlightedText="Autism Support"
        subtitle="Discover all the powerful tools and resources designed to support families on their autism journey."
        primaryButtonText="Download App"
        primaryButtonIcon={<Download className="mr-2 h-5 w-5" />}
        secondaryButtonText="Watch Demo"
        secondaryButtonIcon={<Play className="mr-2 h-5 w-5" />}
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
        imageAlt="App features showcasing autism support tools"
        testId="features-hero-section"
      />

      <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Feature Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm cursor-pointer group" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6">
                  <motion.div 
                    className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{feature.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {feature.features.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + itemIndex * 0.05 + 0.5 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-20 shadow-xl border border-gray-200/50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 text-center mb-12" 
            data-testid="text-demo-title"
            variants={itemVariants}
          >
            See MosaicMind in Action
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4" data-testid="text-demo-dashboard-title">
                Interactive Progress Dashboard
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed" data-testid="text-demo-dashboard-description">
                Watch how families track their child's development with our intuitive dashboard. Monitor therapy goals, celebrate achievements, and identify areas for growth with visual progress charts and detailed analytics.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-demo-watch">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo Video
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="App screenshot showing progress dashboard"
                className="w-full h-auto rounded-lg"
                data-testid="img-demo-dashboard"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Feature Details Tabs */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 text-center mb-12" 
            data-testid="text-tabs-title"
            variants={itemVariants}
          >
            Detailed Feature Overview
          </motion.h2>

          {/* Tab Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center mb-8 border-b border-gray-200"
            variants={itemVariants}
            transition={{ delay: 0.1 }}
          >
            {[
              { id: 'progress', label: 'Progress Tracking' },
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'education', label: 'Education' },
              { id: 'community', label: 'Community' },
              { id: 'notifications', label: 'Notifications' }
            ].map((tab, index) => (
              <motion.button
                key={tab.id}
                className={`px-6 py-3 font-medium transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
                onClick={() => setActiveTab(tab.id)}
                data-testid={`tab-${tab.id}`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 + 0.2 }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="tab-content"
            >
              {activeTab === 'progress' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="content-progress">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Advanced Progress Tracking</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Monitor your child's development across multiple domains with our comprehensive tracking system. Set personalized goals, track therapy outcomes, and celebrate every milestone along the way.
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          icon: BarChart3,
                          title: "Visual Progress Charts",
                          description: "Easy-to-understand graphs showing progress over time"
                        },
                        {
                          icon: Target,
                          title: "Goal Management",
                          description: "Set, track, and achieve personalized therapy goals"
                        },
                        {
                          icon: Trophy,
                          title: "Milestone Celebrations",
                          description: "Acknowledge and celebrate every achievement"
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={item.title}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <item.icon className="text-primary" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                      alt="Progress tracking interface screenshot"
                      className="rounded-xl shadow-2xl w-full h-auto"
                    />
                  </motion.div>
                </div>
              )}

              {activeTab === 'dashboard' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="content-dashboard">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                      alt="Personalized dashboard screenshot"
                      className="rounded-xl shadow-2xl w-full h-auto"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personalized Dashboard</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Your family's command center, featuring customizable widgets, quick access to important information, and personalized insights based on your child's unique needs and progress.
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          icon: PuzzleIcon,
                          title: "Customizable Widgets",
                          description: "Arrange your dashboard to show what matters most"
                        },
                        {
                          icon: Zap,
                          title: "Quick Actions",
                          description: "One-click access to frequently used features"
                        },
                        {
                          icon: Brain,
                          title: "Smart Insights",
                          description: "AI-powered recommendations based on progress data"
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={item.title}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <item.icon className="text-primary" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Additional tab content placeholders */}
              {activeTab === 'education' && (
                <motion.div 
                  className="text-center py-12" 
                  data-testid="content-education"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Tools</h3>
                  <p className="text-gray-600">Comprehensive learning materials and interactive resources coming soon.</p>
                </motion.div>
              )}

              {activeTab === 'community' && (
                <motion.div 
                  className="text-center py-12" 
                  data-testid="content-community"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Features</h3>
                  <p className="text-gray-600">Connect with families and professionals in our supportive community.</p>
                </motion.div>
              )}

              {activeTab === 'notifications' && (
                <motion.div 
                  className="text-center py-12" 
                  data-testid="content-notifications"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Bell className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Notifications</h3>
                  <p className="text-gray-600">Intelligent reminders and alerts to keep you on track.</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
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
          
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl font-bold text-white mb-4" 
              data-testid="text-cta-title"
              variants={itemVariants}
            >
              Ready to Experience These Features?
            </motion.h2>
            <motion.p 
              className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed" 
              data-testid="text-cta-subtitle"
              variants={itemVariants}
              transition={{ delay: 0.1 }}
            >
              Download MosaicMind today and discover how our comprehensive features can support your family's unique journey.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
              transition={{ delay: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group" size="lg" data-testid="button-cta-ios">
                  <Smartphone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Download for iOS
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group" size="lg" data-testid="button-cta-android">
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Download for Android
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}

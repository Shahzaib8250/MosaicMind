import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Brain
} from "lucide-react";

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
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-features-title">
            Comprehensive Features for Autism Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-features-subtitle">
            Discover all the powerful tools and resources designed to support families on their autism journey.
          </p>
        </div>

        {/* Feature Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-200" data-testid={`card-feature-${index}`}>
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" data-testid="text-demo-title">
            See AutismAlly in Action
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4" data-testid="text-demo-dashboard-title">
                Interactive Progress Dashboard
              </h3>
              <p className="text-gray-600 mb-6" data-testid="text-demo-dashboard-description">
                Watch how families track their child's development with our intuitive dashboard. Monitor therapy goals, celebrate achievements, and identify areas for growth with visual progress charts and detailed analytics.
              </p>
              <Button className="bg-primary text-white hover:bg-blue-600" data-testid="button-demo-watch">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo Video
              </Button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="App screenshot showing progress dashboard"
                className="w-full h-auto rounded-lg"
                data-testid="img-demo-dashboard"
              />
            </div>
          </div>
        </div>

        {/* Feature Details Tabs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" data-testid="text-tabs-title">
            Detailed Feature Overview
          </h2>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            <button
              className={`px-6 py-3 font-medium transition-colors duration-200 ${
                activeTab === 'progress'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
              onClick={() => setActiveTab('progress')}
              data-testid="tab-progress"
            >
              Progress Tracking
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors duration-200 ${
                activeTab === 'dashboard'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
              onClick={() => setActiveTab('dashboard')}
              data-testid="tab-dashboard"
            >
              Dashboard
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors duration-200 ${
                activeTab === 'education'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
              onClick={() => setActiveTab('education')}
              data-testid="tab-education"
            >
              Education
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors duration-200 ${
                activeTab === 'community'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
              onClick={() => setActiveTab('community')}
              data-testid="tab-community"
            >
              Community
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors duration-200 ${
                activeTab === 'notifications'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
              onClick={() => setActiveTab('notifications')}
              data-testid="tab-notifications"
            >
              Notifications
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'progress' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="content-progress">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Advanced Progress Tracking</h3>
                  <p className="text-gray-600 mb-6">
                    Monitor your child's development across multiple domains with our comprehensive tracking system. Set personalized goals, track therapy outcomes, and celebrate every milestone along the way.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <BarChart3 className="text-primary mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Visual Progress Charts</h4>
                        <p className="text-gray-600 text-sm">Easy-to-understand graphs showing progress over time</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Target className="text-primary mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Goal Management</h4>
                        <p className="text-gray-600 text-sm">Set, track, and achieve personalized therapy goals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Trophy className="text-primary mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Milestone Celebrations</h4>
                        <p className="text-gray-600 text-sm">Acknowledge and celebrate every achievement</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                    alt="Progress tracking interface screenshot"
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            )}

            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="content-dashboard">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                    alt="Personalized dashboard screenshot"
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personalized Dashboard</h3>
                  <p className="text-gray-600 mb-6">
                    Your family's command center, featuring customizable widgets, quick access to important information, and personalized insights based on your child's unique needs and progress.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <PuzzleIcon className="text-primary mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Customizable Widgets</h4>
                        <p className="text-gray-600 text-sm">Arrange your dashboard to show what matters most</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="text-primary mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Quick Actions</h4>
                        <p className="text-gray-600 text-sm">One-click access to frequently used features</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Brain className="text-primary mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Smart Insights</h4>
                        <p className="text-gray-600 text-sm">AI-powered recommendations based on progress data</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Additional tab content placeholders */}
            {activeTab === 'education' && (
              <div className="text-center py-12" data-testid="content-education">
                <GraduationCap className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Tools</h3>
                <p className="text-gray-600">Comprehensive learning materials and interactive resources coming soon.</p>
              </div>
            )}

            {activeTab === 'community' && (
              <div className="text-center py-12" data-testid="content-community">
                <Users className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Features</h3>
                <p className="text-gray-600">Connect with families and professionals in our supportive community.</p>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="text-center py-12" data-testid="content-notifications">
                <Bell className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Notifications</h3>
                <p className="text-gray-600">Intelligent reminders and alerts to keep you on track.</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" data-testid="text-cta-title">
            Ready to Experience These Features?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
            Download AutismAlly today and discover how our comprehensive features can support your family's unique journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-gray-100" size="lg" data-testid="button-cta-ios">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </Button>
            <Button className="bg-white text-primary hover:bg-gray-100" size="lg" data-testid="button-cta-android">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993.0001.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993 0 .5511-.4482.9997-.9993.9997zm11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5703.416.416 0 00-.5703.1518l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5703-.1518.4161.4161 0 00-.1518.5703l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396z"/>
              </svg>
              Download for Android
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

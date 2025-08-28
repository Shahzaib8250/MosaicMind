import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageHero from "@/components/PageHero";
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Smartphone, 
  Settings, 
  CreditCard, 
  Download, 
  Headphones,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Sparkles,
  LifeBuoy
} from "lucide-react";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Questions', icon: <HelpCircle className="h-4 w-4" />, count: 24 },
    { id: 'app', label: 'About the App', icon: <Smartphone className="h-4 w-4" />, count: 6 },
    { id: 'functionality', label: 'App Functionality', icon: <Settings className="h-4 w-4" />, count: 8 },
    { id: 'pricing', label: 'Subscriptions & Pricing', icon: <CreditCard className="h-4 w-4" />, count: 4 },
    { id: 'resources', label: 'Resources & Downloads', icon: <Download className="h-4 w-4" />, count: 3 },
    { id: 'support', label: 'Technical Support', icon: <Headphones className="h-4 w-4" />, count: 3 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'app',
      question: 'What is MosaicMind and who is it for?',
      answer: 'MosaicMind is a comprehensive mobile and web application designed to support families, caregivers, and professionals working with individuals on the autism spectrum. Our platform provides tools for progress tracking, educational resources, community support, and professional guidance to help navigate the autism journey with confidence.'
    },
    {
      id: 2,
      category: 'app',
      question: 'Is MosaicMind free to use?',
      answer: 'Yes, we offer a free plan that includes basic progress tracking, limited educational resources, community access, and basic notifications. We also offer Premium ($9.99/month) and Family ($19.99/month) plans with additional features like unlimited tracking, full resource library, expert support, and advanced analytics.'
    },
    {
      id: 3,
      category: 'app',
      question: 'What age groups does MosaicMind support?',
      answer: 'MosaicMind is designed to support individuals across the entire autism spectrum and all age groups - from early childhood (0-5 years) through adulthood (18+). Our resources and tools are categorized by age group and developmental stage to ensure relevance and effectiveness.'
    },
    {
      id: 4,
      category: 'app',
      question: 'Is my family\'s data secure and private?',
      answer: 'Absolutely. We are HIPAA-compliant and use end-to-end encryption to protect all personal and health information. Your data is stored securely with industry-standard protections, and we never share personal information with third parties without explicit consent. Your privacy is our top priority.'
    },
    {
      id: 5,
      category: 'app',
      question: 'What devices and platforms are supported?',
      answer: 'MosaicMind is available as a mobile app for both iOS (iPhone/iPad) and Android devices, as well as a web application that works on any modern browser. All data syncs seamlessly across devices so you can access your information anywhere.'
    },
    {
      id: 6,
      category: 'app',
      question: 'Do I need internet access to use the app?',
      answer: 'Many core features work offline, including progress tracking, viewing downloaded resources, and accessing previously loaded content. However, you\'ll need internet access for syncing data, downloading new resources, community features, and receiving updates. Data automatically syncs when you reconnect.'
    },
    {
      id: 7,
      category: 'functionality',
      question: 'How does progress tracking work?',
      answer: 'Our progress tracking system allows you to set personalized goals, record daily observations, track therapy outcomes, and monitor developmental milestones. You can create custom categories, add photos and notes, generate visual reports, and share progress with your therapy team or healthcare providers.'
    },
    {
      id: 8,
      category: 'functionality',
      question: 'Can I share data with my child\'s therapy team?',
      answer: 'Yes! You can generate detailed progress reports and export data in various formats (PDF, CSV) to share with therapists, doctors, teachers, and other professionals. You can also invite team members to view specific data with controlled access permissions.'
    },
    {
      id: 9,
      category: 'functionality',
      question: 'How do I set up notifications and reminders?',
      answer: 'In the app settings, you can customize notifications for therapy appointments, medication reminders, milestone tracking, and daily activities. You can set frequency, timing, and customize messages. Notifications can be turned on/off for different categories based on your preferences.'
    },
    {
      id: 10,
      category: 'functionality',
      question: 'Can I track multiple children in one account?',
      answer: 'Yes, with our Family plan ($19.99/month), you can create profiles for multiple children, each with their own progress tracking, goals, and resources. The free and Premium plans support one child profile, but you can upgrade at any time.'
    },
    {
      id: 11,
      category: 'functionality',
      question: 'How do I access the community features?',
      answer: 'Community features are available in all plans. You can join support groups, participate in discussions, attend virtual events, and connect with other families. Access the Community tab in the app to browse groups by location, interests, or specific topics.'
    },
    {
      id: 12,
      category: 'functionality',
      question: 'What educational resources are available?',
      answer: 'We offer a comprehensive library including worksheets, visual schedules, social stories, therapy guides, video tutorials, webinars, and assessment tools. Free users have access to basic resources, while Premium and Family subscribers get unlimited access to our full library of 500+ resources.'
    },
    {
      id: 13,
      category: 'functionality',
      question: 'How do I backup my data?',
      answer: 'All data is automatically backed up to secure cloud storage. You can also manually export your data at any time through the Settings menu. We recommend regularly exporting important data as an additional backup measure.'
    },
    {
      id: 14,
      category: 'functionality',
      question: 'Can I customize the dashboard?',
      answer: 'Yes! The dashboard is fully customizable. You can add, remove, and rearrange widgets to show the information most important to you, such as upcoming appointments, recent progress, quick goals, or community updates. Different layouts are available for different user types.'
    },
    {
      id: 15,
      category: 'pricing',
      question: 'What\'s included in the Premium plan?',
      answer: 'Premium ($9.99/month) includes unlimited progress tracking, access to our full educational library, expert-moderated support groups, advanced analytics and reporting, professional consultations, priority customer support, and early access to new features.'
    },
    {
      id: 16,
      category: 'pricing',
      question: 'What\'s the difference between Premium and Family plans?',
      answer: 'The Family plan ($19.99/month) includes everything in Premium plus support for multiple child profiles, family sharing features, collaborative goal setting, team access for professionals, priority support, and bulk resource downloads.'
    },
    {
      id: 17,
      category: 'pricing',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time through your account settings or by contacting support. You\'ll continue to have access to premium features until the end of your current billing period, then your account will revert to the free plan.'
    },
    {
      id: 18,
      category: 'pricing',
      question: 'Do you offer discounts or financial assistance?',
      answer: 'We offer sliding scale pricing for families with financial hardship, discounts for non-profit organizations, and special pricing for schools and therapy centers. Contact our support team to learn about available assistance programs.'
    },
    {
      id: 19,
      category: 'resources',
      question: 'How do I download and print resources?',
      answer: 'Resources can be downloaded directly from the app or website. Click on any resource, then use the download button to save PDFs to your device. Most resources are designed to be printer-friendly. You can also save resources to your favorites for quick access.'
    },
    {
      id: 20,
      category: 'resources',
      question: 'Are resources evidence-based?',
      answer: 'Yes, all our resources are developed by licensed professionals and based on current research and evidence-based practices. Resources are regularly reviewed and updated to ensure they meet the highest standards of quality and effectiveness.'
    },
    {
      id: 21,
      category: 'resources',
      question: 'Can I request specific resources?',
      answer: 'Absolutely! We welcome resource requests from our community. You can submit requests through the app feedback feature or contact our support team. We regularly review requests and prioritize the most needed resources for development.'
    },
    {
      id: 22,
      category: 'support',
      question: 'How do I get technical support?',
      answer: 'You can reach our support team through the in-app chat feature, email (support@autismally.com), or phone during business hours. Premium and Family subscribers receive priority support with faster response times.'
    },
    {
      id: 23,
      category: 'support',
      question: 'What should I do if the app isn\'t working properly?',
      answer: 'First, try restarting the app and checking your internet connection. If issues persist, check for app updates in your device\'s app store. For ongoing problems, contact support with details about your device, operating system version, and the specific issue you\'re experiencing.'
    },
    {
      id: 24,
      category: 'support',
      question: 'How do I report a bug or suggest a feature?',
      answer: 'You can report bugs or suggest features through the Feedback section in app settings, by emailing feedback@autismally.com, or through our community forum. We review all feedback and regularly implement user-requested improvements.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="FAQ"
        title="Frequently Asked"
        highlightedText="Questions"
        subtitle="Find answers to common questions about MosaicMind, our features, and how we can support your autism journey."
        primaryButtonText="Get Help"
        primaryButtonIcon={<LifeBuoy className="mr-2 h-5 w-5" />}
        secondaryButtonText="Browse FAQs"
        secondaryButtonIcon={<HelpCircle className="mr-2 h-5 w-5" />}
        imageSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
        imageAlt="Person seeking help and guidance, representing support and answers"
        testId="faq-hero-section"
      />

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
              data-testid="input-search-faq"
            />
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center space-x-2"
                data-testid={`button-category-${category.id}`}
              >
                {category.icon}
                <span>{category.label}</span>
                <Badge variant="secondary" className="ml-2">{category.count}</Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600" data-testid="text-faq-count">
            Showing {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <Card key={faq.id} className="border border-gray-200" data-testid={`faq-item-${faq.id}`}>
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleFAQ(faq.id)}
                    data-testid={`button-toggle-faq-${faq.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-8">
                        {faq.question}
                      </h3>
                      {expandedFAQ === faq.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed" data-testid={`text-faq-answer-${faq.id}`}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12" data-testid="text-no-results">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any questions matching your search. Try different keywords or browse by category.
              </p>
              <Button onClick={() => setSearchTerm('')} data-testid="button-clear-search">
                Clear Search
              </Button>
            </div>
          )}
        </div>

        {/* Still Need Help Section */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" data-testid="text-help-title">
              Still Need Help?
            </h2>
            <p className="text-gray-600" data-testid="text-help-subtitle">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow duration-200" data-testid="contact-chat">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Chat with our support team in real-time for immediate assistance.
                </p>
                <Button className="w-full">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200" data-testid="contact-email">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Send us an email and we'll respond within 24 hours.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:support@autismally.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200" data-testid="contact-phone">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Call us during business hours for personalized assistance.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+15551234567">(555) 123-4567</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Support hours: Monday - Friday, 9 AM - 6 PM EST
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

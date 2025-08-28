import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import PageHero from "@/components/PageHero";
import { 
  Heart, 
  Users, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Calendar,
  UserPlus,
  Handshake,
  BookOpen,
  MessageCircle,
  Shield,
  TrendingUp,
  Sparkles,
  Gift
} from "lucide-react";

export default function Donate() {
  const [donationType, setDonationType] = useState<'monthly' | 'oneTime'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [volunteerForm, setVolunteerForm] = useState(false);

  const donationAmounts = {
    monthly: [10, 25, 50, 100],
    oneTime: [25, 50, 100, 250]
  };

  const impactMetrics = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "50,000+",
      label: "Families Supported",
      description: "Families who have accessed our resources and support services"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      number: "2M+",
      label: "Resources Downloaded",
      description: "Educational materials and tools shared with the community"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      number: "500+",
      label: "Support Groups",
      description: "Active support groups connecting families worldwide"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "98%",
      label: "Success Rate",
      description: "Of families report positive outcomes using our platform"
    }
  ];

  const donationImpact = [
    {
      amount: '$10/month',
      impact: 'Provides access to educational resources for 2 families',
      features: ['Basic resource library access', 'Community forum participation', 'Monthly newsletter']
    },
    {
      amount: '$25/month',
      impact: 'Supports professional consultation for 1 family',
      features: ['Everything in $10 tier', 'Professional guidance session', 'Priority support access']
    },
    {
      amount: '$50/month',
      impact: 'Funds development of new educational content',
      features: ['Everything in $25 tier', 'Early access to new features', 'Quarterly impact reports']
    },
    {
      amount: '$100/month',
      impact: 'Sponsors a complete support group for underserved communities',
      features: ['Everything in $50 tier', 'Sponsor recognition', 'Direct community impact updates']
    }
  ];

  const volunteerOpportunities = [
    {
      title: 'Community Moderation',
      description: 'Help moderate our support groups and forums to maintain a safe, supportive environment.',
      commitment: '5-10 hours/week',
      skills: ['Communication', 'Empathy', 'Conflict resolution']
    },
    {
      title: 'Content Creation',
      description: 'Create educational content, blog posts, or resource materials for families.',
      commitment: '3-5 hours/week',
      skills: ['Writing', 'Research', 'Subject matter expertise']
    },
    {
      title: 'Technical Support',
      description: 'Assist families with technical questions and app navigation.',
      commitment: '4-8 hours/week',
      skills: ['Tech support', 'Patience', 'Problem-solving']
    },
    {
      title: 'Event Organization',
      description: 'Help organize virtual events, webinars, and community gatherings.',
      commitment: '6-12 hours/week',
      skills: ['Event planning', 'Coordination', 'Communication']
    },
    {
      title: 'Translation Services',
      description: 'Translate resources and content to make them accessible to diverse communities.',
      commitment: '2-4 hours/week',
      skills: ['Bilingual proficiency', 'Cultural sensitivity', 'Attention to detail']
    },
    {
      title: 'Professional Mentorship',
      description: 'Provide guidance and mentorship to families navigating autism services.',
      commitment: '3-6 hours/week',
      skills: ['Professional experience', 'Mentoring', 'Active listening']
    }
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(0);
  };

  const getFinalAmount = () => {
    return customAmount ? parseFloat(customAmount) : selectedAmount;
  };

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="Support Our Mission"
        title="Support Our"
        highlightedText="Mission"
        subtitle="Help us continue providing essential resources, support, and community for families affected by autism. Every contribution makes a meaningful difference."
        primaryButtonText="Donate Now"
        primaryButtonIcon={<Gift className="mr-2 h-5 w-5" />}
        secondaryButtonText="Volunteer"
        secondaryButtonIcon={<Heart className="mr-2 h-5 w-5" />}
        imageSrc="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
        imageAlt="Hands coming together in support, representing community and giving"
        testId="donate-hero-section"
      />

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {impactMetrics.map((metric, index) => (
            <Card key={index} className="text-center border-0 bg-slate-50" data-testid={`metric-${index}`}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.number}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{metric.label}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Donation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Donation Form */}
          <Card className="shadow-lg" data-testid="donation-form">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>

              {/* Donation Type Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
                <button
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                    donationType === 'monthly'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setDonationType('monthly')}
                  data-testid="button-monthly-donation"
                >
                  Monthly Giving
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                    donationType === 'oneTime'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setDonationType('oneTime')}
                  data-testid="button-onetime-donation"
                >
                  One-Time Gift
                </button>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Choose an amount
                </label>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {donationAmounts[donationType].map((amount) => (
                    <button
                      key={amount}
                      className={`p-3 rounded-lg border-2 transition-colors duration-200 ${
                        selectedAmount === amount && !customAmount
                          ? 'border-primary bg-blue-50 text-primary'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleAmountSelect(amount)}
                      data-testid={`button-amount-${amount}`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div>
                  <Input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    className="w-full"
                    data-testid="input-custom-amount"
                  />
                </div>
              </div>

              {/* Impact Preview */}
              {getFinalAmount() > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6" data-testid="impact-preview">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-900 mb-1">Your Impact</h4>
                      <p className="text-green-700 text-sm">
                        Your ${getFinalAmount()}{donationType === 'monthly' ? '/month' : ''} donation will help provide 
                        essential resources and support to {Math.ceil(getFinalAmount() / 10)} families in our community.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Donation Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <Input placeholder="Your first name" data-testid="input-first-name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <Input placeholder="Your last name" data-testid="input-last-name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" data-testid="input-email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                  <Input type="tel" placeholder="(555) 123-4567" data-testid="input-phone" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <Textarea 
                    placeholder="Share why you're supporting MosaicMind..."
                    rows={3}
                    data-testid="textarea-message"
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <input type="checkbox" id="updates" className="mt-1" data-testid="checkbox-updates" />
                  <label htmlFor="updates" className="text-sm text-gray-600">
                    Send me updates about MosaicMind's impact and community stories
                  </label>
                </div>

                <Button className="w-full bg-primary hover:bg-blue-600" size="lg" data-testid="button-donate">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Donate ${getFinalAmount()}{donationType === 'monthly' ? '/month' : ''} Now
                </Button>
              </form>

              <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>Secure & Encrypted</span>
                </div>
                <span>•</span>
                <span>Tax-deductible</span>
                <span>•</span>
                <span>Cancel anytime</span>
              </div>
            </CardContent>
          </Card>

          {/* Donation Impact Tiers */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6" data-testid="text-impact-title">
              How Your Donation Helps
            </h2>
            <div className="space-y-6">
              {donationImpact.map((tier, index) => (
                <Card key={index} className="border-l-4 border-l-primary" data-testid={`impact-tier-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                        {tier.amount.split('/')[0]}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{tier.impact}</h3>
                        <ul className="space-y-1">
                          {tier.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="text-volunteer-title">
              Volunteer With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-volunteer-subtitle">
              Share your time and skills to make a direct impact on families in our autism community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200" data-testid={`volunteer-opportunity-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{opportunity.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>Commitment: {opportunity.commitment}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {opportunity.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" data-testid={`button-volunteer-${index}`}>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => setVolunteerForm(true)}
              size="lg"
              data-testid="button-volunteer-form"
            >
              <Handshake className="mr-2 h-5 w-5" />
              Apply to Volunteer
            </Button>
          </div>
        </div>

        {/* Volunteer Form Modal */}
        {volunteerForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" data-testid="volunteer-modal">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Volunteer Application</h3>
                  <Button variant="outline" onClick={() => setVolunteerForm(false)} data-testid="button-close-volunteer">
                    ×
                  </Button>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="Your first name" data-testid="input-volunteer-first-name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Your last name" data-testid="input-volunteer-last-name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="your.email@example.com" data-testid="input-volunteer-email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <Input type="tel" placeholder="(555) 123-4567" data-testid="input-volunteer-phone" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                    <div className="grid grid-cols-2 gap-2">
                      {volunteerOpportunities.map((opp, index) => (
                        <label key={index} className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" className="rounded" data-testid={`checkbox-interest-${index}`} />
                          <span className="text-sm text-gray-700">{opp.title}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available Time Commitment
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md" data-testid="select-time-commitment">
                      <option value="">Select time commitment</option>
                      <option value="1-3">1-3 hours per week</option>
                      <option value="4-6">4-6 hours per week</option>
                      <option value="7-10">7-10 hours per week</option>
                      <option value="10+">10+ hours per week</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Relevant Experience & Skills
                    </label>
                    <Textarea 
                      placeholder="Tell us about your background, skills, and why you want to volunteer with MosaicMind..."
                      rows={4}
                      data-testid="textarea-volunteer-experience"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button type="submit" className="flex-1" data-testid="button-submit-volunteer">
                      Submit Application
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setVolunteerForm(false)}
                      data-testid="button-cancel-volunteer"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Impact Stories */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" data-testid="text-impact-stories-title">
              Your Donations at Work
            </h2>
            <p className="text-gray-600" data-testid="text-impact-stories-subtitle">
              See how community support is making a real difference for families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm" data-testid="impact-story-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sarah's Family</h3>
                    <p className="text-sm text-gray-500">Monthly Donor Since 2023</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic mb-4">
                  "Thanks to the resources and support groups funded by donations, our son has made incredible progress. 
                  The community gave us hope when we felt overwhelmed."
                </p>
                <div className="text-sm text-green-600 font-medium">
                  Outcome: 85% improvement in communication skills
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm" data-testid="impact-story-2">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rosa Martinez</h3>
                    <p className="text-sm text-gray-500">Professional Consultation Recipient</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic mb-4">
                  "The sponsored consultation helped us create an effective home therapy plan. 
                  My daughter is now thriving in school and building friendships."
                </p>
                <div className="text-sm text-green-600 font-medium">
                  Outcome: Successful mainstream classroom integration
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

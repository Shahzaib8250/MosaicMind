import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Check, Smartphone } from "lucide-react";

export default function AppPage() {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "month",
      features: [
        "Basic progress tracking",
        "Limited educational resources", 
        "Community access",
        "Basic notifications"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "month",
      popular: true,
      features: [
        "Unlimited progress tracking",
        "Full educational library",
        "Expert support groups", 
        "Advanced analytics",
        "Professional consultations"
      ],
      buttonText: "Start Premium Trial",
      buttonVariant: "default" as const
    },
    {
      name: "Family",
      price: "$19.99", 
      period: "month",
      features: [
        "Everything in Premium",
        "Multiple child profiles",
        "Family sharing features",
        "Priority support",
        "Professional team access"
      ],
      buttonText: "Choose Family Plan",
      buttonVariant: "default" as const
    }
  ];

  const screenshots = [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
      alt: "App dashboard screenshot",
      title: "Dashboard",
      description: "Personalized home screen with quick access to all features"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
      alt: "Progress tracking screen",
      title: "Progress Tracking", 
      description: "Visual charts and milestone tracking for development goals"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
      alt: "Community features screen",
      title: "Community",
      description: "Connect with other families and autism professionals"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer S.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      rating: 5,
      text: "Life-changing app! The progress tracking has helped us see how much our daughter has grown. The community support is incredible - we've made lasting friendships."
    },
    {
      name: "Mark R.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100", 
      rating: 5,
      text: "As a single father, this app has been my lifeline. The resources are evidence-based and the reminders keep me organized. Highly recommend!"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-app-title">
            The AutismAlly App
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-app-subtitle">
            Your comprehensive companion for autism support, available on iOS and Android. Designed by families, for families.
          </p>
        </div>

        {/* App Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="text-why-choose-title">
              Why Choose AutismAlly?
            </h2>
            <p className="text-gray-600 mb-6" data-testid="text-why-choose-description">
              AutismAlly brings together everything families need to support their autism journey in one intuitive, easy-to-use mobile application. Whether you're a parent, caregiver, or professional, our app provides the tools and community support you need.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3" data-testid="benefit-families">
                <Check className="text-secondary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">For Families</h3>
                  <p className="text-gray-600 text-sm">Track progress, access resources, and connect with support networks</p>
                </div>
              </div>
              <div className="flex items-start space-x-3" data-testid="benefit-caregivers">
                <Check className="text-secondary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">For Caregivers</h3>
                  <p className="text-gray-600 text-sm">Coordinate care, share updates, and collaborate with therapy teams</p>
                </div>
              </div>
              <div className="flex items-start space-x-3" data-testid="benefit-professionals">
                <Check className="text-secondary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">For Professionals</h3>
                  <p className="text-gray-600 text-sm">Monitor client progress, share resources, and communicate with families</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:text-center">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800"
              alt="Mobile app interface showing autism support features"
              className="rounded-2xl shadow-xl mx-auto max-w-sm"
              data-testid="img-app-interface"
            />
          </div>
        </div>

        {/* App Screenshots */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" data-testid="text-screenshots-title">
            App Screenshots & Demo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="text-center" data-testid={`screenshot-${index}`}>
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="rounded-xl shadow-lg mx-auto mb-4 max-w-xs"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{screenshot.title}</h3>
                <p className="text-gray-600 text-sm">{screenshot.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" data-testid="text-pricing-title">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary bg-primary text-white' : 'border-gray-200'}`}
                data-testid={`pricing-plan-${index}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-accent text-white">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-3xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                    <span className={`text-lg font-normal ${plan.popular ? 'text-blue-200' : 'text-gray-600'}`}>
                      /{plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className={`mr-2 ${plan.popular ? 'text-blue-200' : 'text-secondary'}`} size={16} />
                        <span className={plan.popular ? 'text-white' : 'text-gray-600'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-white text-primary hover:bg-gray-100' 
                        : plan.buttonVariant === 'outline'
                        ? 'border-gray-300 text-gray-900 hover:bg-gray-50'
                        : 'bg-primary text-white hover:bg-blue-600'
                    }`}
                    variant={plan.popular ? 'secondary' : plan.buttonVariant}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* App Store Links */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8" data-testid="text-download-title">
            Download AutismAlly
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200" data-testid="link-app-store">
              <svg className="text-2xl mr-3 h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>
            <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200" data-testid="link-google-play">
              <svg className="text-2xl mr-3 h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993.0001.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993 0 .5511-.4482.9997-.9993.9997zm11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5703.416.416 0 00-.5703.1518l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5703-.1518.4161.4161 0 00-.1518.5703l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* User Reviews */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" data-testid="text-reviews-title">
            User Reviews & Ratings
          </h2>
          <Card className="border border-gray-200 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2" data-testid="text-average-rating">4.8</div>
                  <div className="flex justify-center text-yellow-400 text-xl mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current" />
                    ))}
                  </div>
                  <div className="text-gray-600" data-testid="text-review-count">Based on 2,847 reviews</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200" data-testid={`testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} profile picture`}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <div className="flex text-yellow-400 text-sm">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="fill-current" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <Card className="border border-gray-200" data-testid="faq-free">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is AutismAlly free to use?</h3>
                <p className="text-gray-600">Yes, we offer a free plan with basic features. Premium plans provide access to advanced features, unlimited resources, and professional support.</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200" data-testid="faq-security">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my family's data secure?</h3>
                <p className="text-gray-600">Absolutely. We're HIPAA-compliant and use end-to-end encryption to protect all personal and health information. Your privacy is our top priority.</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200" data-testid="faq-offline">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use the app offline?</h3>
                <p className="text-gray-600">Many features work offline, including progress tracking and educational resources. Data syncs automatically when you reconnect to the internet.</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200" data-testid="faq-support">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer professional support?</h3>
                <p className="text-gray-600">Yes, Premium and Family plan subscribers have access to licensed autism professionals for consultations and guidance.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" data-testid="text-final-cta-title">
            Start Your Journey Today
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto" data-testid="text-final-cta-subtitle">
            Join thousands of families who have found support, community, and hope through AutismAlly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-gray-100" size="lg" data-testid="button-final-download">
              <Smartphone className="mr-2 h-5 w-5" />
              Download Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg" data-testid="button-final-community">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

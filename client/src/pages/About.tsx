import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, GraduationCap, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-about-title">
            About AutismAlly
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-about-subtitle">
            Born from personal experience and professional expertise, AutismAlly was created to bridge the gap between families and the resources they need.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="text-our-story-title">Our Story</h2>
            <p className="text-gray-600 mb-4" data-testid="text-our-story-p1">
              AutismAlly was founded in 2020 by a team of parents, therapists, and technology experts who understood the challenges of navigating autism support services. After experiencing firsthand the fragmented nature of autism resources, we set out to create a comprehensive platform that would bring together everything a family needs.
            </p>
            <p className="text-gray-600 mb-4" data-testid="text-our-story-p2">
              Our journey began when our founder's child was diagnosed with autism. The overwhelming amount of information, scattered resources, and lack of coordinated support inspired us to build something better - a unified platform where families could find everything they need in one place.
            </p>
            <p className="text-gray-600" data-testid="text-our-story-p3">
              Today, AutismAlly serves thousands of families worldwide, providing them with the tools, resources, and community support they need to thrive on their autism journey.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Diverse team working together on autism support"
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-team-working"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="text-mission-title">Our Mission</h3>
              <p className="text-gray-600" data-testid="text-mission-description">
                To empower families affected by autism with comprehensive, accessible, and evidence-based tools and resources that support their unique journey toward growth, independence, and fulfillment.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="text-vision-title">Our Vision</h3>
              <p className="text-gray-600" data-testid="text-vision-description">
                A world where every family affected by autism has immediate access to the support, community, and resources they need to thrive, regardless of their location or circumstances.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" data-testid="text-team-title">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="card-team-jennifer">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
                alt="Professional headshot of CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Dr. Jennifer Chen</h3>
              <p className="text-primary font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">Pediatric psychologist with 15+ years in autism research and parent advocacy.</p>
            </div>

            <div className="text-center" data-testid="card-team-mark">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
                alt="Professional headshot of CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Mark Rodriguez</h3>
              <p className="text-primary font-medium mb-2">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">Former Google engineer and father of two children with autism.</p>
            </div>

            <div className="text-center" data-testid="card-team-sarah">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
                alt="Professional headshot of clinical director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Dr. Sarah Williams</h3>
              <p className="text-primary font-medium mb-2">Clinical Director</p>
              <p className="text-gray-600 text-sm">Licensed clinical social worker specializing in autism family therapy.</p>
            </div>

            <div className="text-center" data-testid="card-team-david">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
                alt="Professional headshot of head of community"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">David Kim</h3>
              <p className="text-primary font-medium mb-2">Head of Community</p>
              <p className="text-gray-600 text-sm">Autism advocate and community organizer with personal family experience.</p>
            </div>
          </div>
        </div>

        {/* Partnerships */}
        <Card className="border border-gray-200 mb-20">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" data-testid="text-partnerships-title">
              Our Partners & Accreditations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center" data-testid="card-partner-autism-society">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary text-2xl" />
                </div>
                <p className="font-semibold text-gray-900">Autism Society</p>
                <p className="text-sm text-gray-600">Certified Partner</p>
              </div>

              <div className="text-center" data-testid="card-partner-hipaa">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-secondary text-2xl" />
                </div>
                <p className="font-semibold text-gray-900">HIPAA</p>
                <p className="text-sm text-gray-600">Compliant Platform</p>
              </div>

              <div className="text-center" data-testid="card-partner-stanford">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-purple-500 text-2xl" />
                </div>
                <p className="font-semibold text-gray-900">Stanford Medicine</p>
                <p className="text-sm text-gray-600">Research Partner</p>
              </div>

              <div className="text-center" data-testid="card-partner-asan">
                <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-accent text-2xl" />
                </div>
                <p className="font-semibold text-gray-900">ASAN</p>
                <p className="text-sm text-gray-600">Advocacy Alliance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Metrics */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12" data-testid="text-impact-title">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="bg-blue-50" data-testid="card-metric-families">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                <p className="text-gray-600">Families Supported</p>
              </CardContent>
            </Card>

            <Card className="bg-green-50" data-testid="card-metric-resources">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-secondary mb-2">2M+</div>
                <p className="text-gray-600">Resources Downloaded</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50" data-testid="card-metric-groups">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-500 mb-2">500+</div>
                <p className="text-gray-600">Support Groups</p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50" data-testid="card-metric-satisfaction">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

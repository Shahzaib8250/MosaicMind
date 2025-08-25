import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
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
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" data-testid="text-hero-title">
                Supporting Families with Autism – All in One App
              </h1>
              <p className="text-xl text-gray-600 mb-8" data-testid="text-hero-subtitle">
                Comprehensive tools, resources, and community support to help families navigate the autism journey with confidence and hope.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-white hover:bg-blue-600" size="lg" data-testid="button-download-app">
                  <Download className="mr-2 h-5 w-5" />
                  Download the App
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" size="lg" data-testid="button-watch-demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="lg:text-center">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Family using autism support app together"
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="img-hero-family"
              />
            </div>
          </div>
        </div>
      </div>

      {/* App Features Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="text-features-title">
              Comprehensive Autism Support Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-features-subtitle">
              Everything you need to support your autism journey in one integrated platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-50 hover:shadow-lg transition-shadow duration-200" data-testid="card-feature-progress-tracking">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                <p className="text-gray-600">Monitor development milestones and therapy progress with detailed analytics and visual reports.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 hover:shadow-lg transition-shadow duration-200" data-testid="card-feature-educational-resources">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Resources</h3>
                <p className="text-gray-600">Access evidence-based learning materials, worksheets, and therapy tools tailored to individual needs.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 hover:shadow-lg transition-shadow duration-200" data-testid="card-feature-personalized-dashboard">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Dashboard</h3>
                <p className="text-gray-600">Customized interface showing relevant information, upcoming appointments, and daily goals.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 hover:shadow-lg transition-shadow duration-200" data-testid="card-feature-support-network">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-autism-purple rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Network & Community</h3>
                <p className="text-gray-600">Connect with other families, share experiences, and get support from autism professionals.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 hover:shadow-lg transition-shadow duration-200" data-testid="card-feature-notifications">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-autism-red rounded-lg flex items-center justify-center mb-4">
                  <Bell className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Notifications & Alerts</h3>
                <p className="text-gray-600">Smart reminders for therapy sessions, medication, and important milestones.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 hover:shadow-lg transition-shadow duration-200" data-testid="card-feature-data-privacy">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-autism-green rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Privacy & Security</h3>
                <p className="text-gray-600">HIPAA-compliant platform ensuring your family's information remains secure and private.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials Preview */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="text-testimonials-title">
              What Families Are Saying
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-testimonials-subtitle">
              Real stories from families who have found support through AutismAlly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-sm" data-testid="card-testimonial-sarah">
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
                  alt="Portrait of mother with child"
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-600 mb-4">
                  "AutismAlly has transformed our daily routine. The progress tracking helps us celebrate every small victory."
                </p>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-semibold text-gray-900">Sarah M.</p>
                <p className="text-sm text-gray-500">Mother of 7-year-old with autism</p>
              </CardContent>
            </Card>

            <Card className="shadow-sm" data-testid="card-testimonial-michael">
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
                  alt="Portrait of father smiling"
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-600 mb-4">
                  "The community support feature connected us with other families. We don't feel alone anymore."
                </p>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-semibold text-gray-900">Michael R.</p>
                <p className="text-sm text-gray-500">Father and autism advocate</p>
              </CardContent>
            </Card>

            <Card className="shadow-sm" data-testid="card-testimonial-lisa">
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
                  alt="Portrait of therapist professional"
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-600 mb-4">
                  "As a therapist, I recommend AutismAlly to all my clients. The tools are evidence-based and effective."
                </p>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-semibold text-gray-900">Dr. Lisa K.</p>
                <p className="text-sm text-gray-500">Licensed Autism Therapist</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="text-categories-title">
              Explore Our Resources
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-categories-subtitle">
              Comprehensive support across all aspects of autism care and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/categories" className="group block" data-testid="link-category-therapy">
              <Card className="bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
                <CardContent className="p-6">
                  <Heart className="text-primary text-3xl mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Therapy & Treatment</h3>
                  <p className="text-gray-600 text-sm">Professional therapy resources and treatment guides</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/categories" className="group block" data-testid="link-category-education">
              <Card className="bg-green-50 group-hover:bg-green-100 transition-colors duration-200">
                <CardContent className="p-6">
                  <BookOpen className="text-secondary text-3xl mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Educational Tools</h3>
                  <p className="text-gray-600 text-sm">Learning materials and educational resources</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/support" className="group block" data-testid="link-category-support">
              <Card className="bg-purple-50 group-hover:bg-purple-100 transition-colors duration-200">
                <CardContent className="p-6">
                  <HandHeart className="text-purple-500 text-3xl mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Groups</h3>
                  <p className="text-gray-600 text-sm">Connect with families and support networks</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog" className="group block" data-testid="link-category-blog">
              <Card className="bg-amber-50 group-hover:bg-amber-100 transition-colors duration-200">
                <CardContent className="p-6">
                  <Newspaper className="text-accent text-3xl mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog & Resources</h3>
                  <p className="text-gray-600 text-sm">Latest articles and expert insights</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Blog Posts */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="text-blog-title">
              Latest From Our Blog
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-blog-subtitle">
              Expert insights and practical tips for autism families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200" data-testid="card-blog-post-1">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
                alt="Therapy session with child"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">Therapy Tips</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">5 Effective ABA Techniques for Home Practice</h3>
                <p className="text-gray-600 mb-4">Learn practical Applied Behavior Analysis strategies you can implement at home to support your child's development.</p>
                <Link href="/blog" className="text-primary font-medium hover:text-blue-600">Read More →</Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200" data-testid="card-blog-post-2">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
                alt="Children playing together inclusively"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="text-sm text-secondary font-medium mb-2">Social Skills</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Building Social Connections: A Parent's Guide</h3>
                <p className="text-gray-600 mb-4">Discover strategies to help your child develop meaningful friendships and social relationships.</p>
                <Link href="/blog" className="text-primary font-medium hover:text-blue-600">Read More →</Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200" data-testid="card-blog-post-3">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
                alt="Parent reading with autistic child"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="text-sm text-purple-500 font-medium mb-2">Success Stories</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">From Isolation to Independence: Emma's Journey</h3>
                <p className="text-gray-600 mb-4">A heartwarming story of how early intervention and family support transformed Emma's life.</p>
                <Link href="/blog" className="text-primary font-medium hover:text-blue-600">Read More →</Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" data-testid="button-view-all-articles">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-cta-title">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" data-testid="text-cta-subtitle">
            Join thousands of families who have found support, community, and hope through AutismAlly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-gray-100" size="lg" data-testid="button-cta-download">
              <Download className="mr-2 h-5 w-5" />
              Download Free App
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg" data-testid="button-cta-community">
              <Users className="mr-2 h-5 w-5" />
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

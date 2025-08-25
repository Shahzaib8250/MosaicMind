import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Heart, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Search, 
  Filter,
  ArrowRight,
  FileText,
  Video,
  Calendar,
  MessageCircle
} from "lucide-react";

export default function Categories() {
  const categories = [
    {
      id: "therapy",
      title: "Therapy & Treatment",
      icon: <Heart className="h-8 w-8" />,
      description: "Evidence-based therapeutic approaches and treatment methodologies",
      color: "bg-blue-50 hover:bg-blue-100",
      iconBg: "bg-primary",
      count: 145,
      subcategories: ["ABA Therapy", "Speech Therapy", "Occupational Therapy", "Behavioral Interventions"]
    },
    {
      id: "education", 
      title: "Educational Tools",
      icon: <GraduationCap className="h-8 w-8" />,
      description: "Learning materials, worksheets, and educational resources",
      color: "bg-green-50 hover:bg-green-100",
      iconBg: "bg-secondary",
      count: 230,
      subcategories: ["Learning Modules", "Skill Building", "Assessment Tools", "Curriculum Support"]
    },
    {
      id: "support",
      title: "Support Groups",
      icon: <Users className="h-8 w-8" />,
      description: "Community support and peer connection opportunities",
      color: "bg-purple-50 hover:bg-purple-100", 
      iconBg: "bg-autism-purple",
      count: 85,
      subcategories: ["Parent Groups", "Professional Networks", "Peer Support", "Family Counseling"]
    },
    {
      id: "parenting",
      title: "Parenting Resources",
      icon: <Heart className="h-8 w-8" />,
      description: "Guidance and support for parents and caregivers",
      color: "bg-pink-50 hover:bg-pink-100",
      iconBg: "bg-pink-500",
      count: 178,
      subcategories: ["Daily Strategies", "Behavior Management", "Communication Tips", "Self-Care"]
    },
    {
      id: "news",
      title: "Autism News & Research",
      icon: <BookOpen className="h-8 w-8" />,
      description: "Latest research findings and autism community news",
      color: "bg-amber-50 hover:bg-amber-100",
      iconBg: "bg-accent",
      count: 92,
      subcategories: ["Research Updates", "Clinical Studies", "Policy Changes", "Community News"]
    },
    {
      id: "guides",
      title: "App Guides & Tutorials",
      icon: <Video className="h-8 w-8" />,
      description: "How-to guides and tutorials for using AutismAlly features",
      color: "bg-indigo-50 hover:bg-indigo-100",
      iconBg: "bg-indigo-500",
      count: 54,
      subcategories: ["Getting Started", "Feature Tutorials", "Tips & Tricks", "Troubleshooting"]
    }
  ];

  const resourceTypes = [
    { icon: <FileText className="h-5 w-5" />, label: "Articles", count: 245 },
    { icon: <Video className="h-5 w-5" />, label: "Videos", count: 89 },
    { icon: <Calendar className="h-5 w-5" />, label: "Webinars", count: 34 },
    { icon: <MessageCircle className="h-5 w-5" />, label: "Discussions", count: 156 }
  ];

  const ageGroups = ["Early Childhood (0-5)", "School Age (6-12)", "Adolescent (13-18)", "Adult (18+)"];
  const therapyTypes = ["ABA", "Speech", "Occupational", "Physical", "Social Skills", "Behavioral"];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-categories-title">
            Resource Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-categories-subtitle">
            Explore our comprehensive collection of autism resources organized by category and type
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-16">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search resources by keyword..."
                  className="pl-10"
                  data-testid="input-search-resources"
                />
              </div>
            </div>
            <Button variant="outline" className="flex items-center" data-testid="button-filter">
              <Filter className="mr-2 h-4 w-4" />
              Advanced Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Resource Types */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3" data-testid="text-resource-types-title">Resource Types</h3>
              <div className="space-y-2">
                {resourceTypes.map((type, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50" data-testid={`resource-type-${index}`}>
                    <div className="flex items-center space-x-2">
                      {type.icon}
                      <span className="text-gray-700">{type.label}</span>
                    </div>
                    <Badge variant="secondary">{type.count}</Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Groups */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3" data-testid="text-age-groups-title">Age Groups</h3>
              <div className="space-y-2">
                {ageGroups.map((age, index) => (
                  <label key={index} className="flex items-center space-x-2 cursor-pointer" data-testid={`age-group-${index}`}>
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700 text-sm">{age}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Therapy Types */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3" data-testid="text-therapy-types-title">Therapy Types</h3>
              <div className="space-y-2">
                {therapyTypes.map((therapy, index) => (
                  <label key={index} className="flex items-center space-x-2 cursor-pointer" data-testid={`therapy-type-${index}`}>
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700 text-sm">{therapy}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`} className="group block" data-testid={`card-category-${category.id}`}>
              <Card className={`${category.color} transition-colors duration-200 h-full`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${category.iconBg} rounded-2xl flex items-center justify-center mb-6 text-white`}>
                    {category.icon}
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    <Badge variant="outline" className="text-gray-600">
                      {category.count} resources
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                  
                  <div className="space-y-1 mb-4">
                    {category.subcategories.slice(0, 3).map((sub, index) => (
                      <div key={index} className="text-xs text-gray-500">• {sub}</div>
                    ))}
                    {category.subcategories.length > 3 && (
                      <div className="text-xs text-gray-500">+ {category.subcategories.length - 3} more</div>
                    )}
                  </div>
                  
                  <div className="flex items-center text-primary text-sm font-medium group-hover:underline">
                    Explore Category <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Resources Section */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="text-featured-resources-title">
              Featured Resources
            </h2>
            <p className="text-gray-600" data-testid="text-featured-resources-subtitle">
              Hand-picked resources recommended by our expert team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-sm hover:shadow-lg transition-shadow duration-200" data-testid="featured-resource-1">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-primary text-white">New</Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Visual Schedule Templates
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Customizable visual schedules to help with daily routines and transitions.
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Template
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-lg transition-shadow duration-200" data-testid="featured-resource-2">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-secondary text-white">Popular</Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Social Stories Collection
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ready-to-use social stories for common situations and scenarios.
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Collection
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-lg transition-shadow duration-200" data-testid="featured-resource-3">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-accent text-white">Expert Pick</Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Sensory Break Ideas
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Creative sensory break activities for home and school environments.
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  <Video className="mr-2 h-4 w-4" />
                  Watch Video
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/blog" className="group block" data-testid="link-quick-access-blog">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Latest Blog Posts</h3>
                <p className="text-gray-600 text-sm">Read our latest insights and tips</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/support" className="group block" data-testid="link-quick-access-support">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Support Groups</h3>
                <p className="text-gray-600 text-sm">Connect with our community</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/resources" className="group block" data-testid="link-quick-access-downloads">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Download Center</h3>
                <p className="text-gray-600 text-sm">Access printable resources</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/services" className="group block" data-testid="link-quick-access-services">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Professional Services</h3>
                <p className="text-gray-600 text-sm">Book consultations & therapy</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

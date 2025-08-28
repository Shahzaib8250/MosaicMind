import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageHero from "@/components/PageHero";
import { 
  Search, 
  Download, 
  FileText, 
  Video, 
  Calendar,
  Filter,
  Star,
  Eye,
  Clock,
  Users,
  Target,
  Bookmark,
  ExternalLink,
  Sparkles,
  Library,
  Folder
} from "lucide-react";

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeAgeGroup, setActiveAgeGroup] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', count: 324 },
    { id: 'worksheets', label: 'Worksheets', count: 89, icon: <FileText className="h-4 w-4" /> },
    { id: 'videos', label: 'Video Tutorials', count: 67, icon: <Video className="h-4 w-4" /> },
    { id: 'guides', label: 'Therapy Guides', count: 45, icon: <Target className="h-4 w-4" /> },
    { id: 'assessments', label: 'Assessments', count: 34, icon: <Clock className="h-4 w-4" /> },
    { id: 'social', label: 'Social Stories', count: 52, icon: <Users className="h-4 w-4" /> },
    { id: 'schedules', label: 'Visual Schedules', count: 37, icon: <Calendar className="h-4 w-4" /> }
  ];

  const ageGroups = [
    { id: 'all', label: 'All Ages' },
    { id: 'early', label: 'Early Childhood (0-5)' },
    { id: 'school', label: 'School Age (6-12)' },
    { id: 'teen', label: 'Adolescent (13-18)' },
    { id: 'adult', label: 'Adult (18+)' }
  ];

  const featuredResources = [
    {
      id: 1,
      title: "Complete Visual Schedule Template Pack",
      description: "Customizable visual schedules for daily routines, transitions, and special events.",
      type: "worksheets",
      typeLabel: "Worksheets",
      ageGroup: "all",
      downloads: 2847,
      rating: 4.9,
      isPremium: false,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      featured: true
    },
    {
      id: 2,
      title: "ABA Therapy Techniques Video Series",
      description: "Professional video demonstrations of Applied Behavior Analysis techniques for home use.",
      type: "videos",
      typeLabel: "Video Tutorials",
      ageGroup: "early",
      downloads: 1923,
      rating: 4.8,
      isPremium: true,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      featured: true
    },
    {
      id: 3,
      title: "Social Skills Assessment Checklist",
      description: "Comprehensive assessment tool for tracking social development milestones.",
      type: "assessments",
      typeLabel: "Assessments",
      ageGroup: "school",
      downloads: 1456,
      rating: 4.7,
      isPremium: false,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      featured: true
    }
  ];

  const resources = [
    {
      id: 4,
      title: "Sensory Break Activity Cards",
      description: "50 sensory break activities for classroom and home use.",
      type: "worksheets",
      typeLabel: "Worksheets",
      ageGroup: "school",
      downloads: 1234,
      rating: 4.6,
      isPremium: false
    },
    {
      id: 5,
      title: "Communication Board Templates",
      description: "Printable communication boards for non-verbal individuals.",
      type: "worksheets",
      typeLabel: "Worksheets",
      ageGroup: "all",
      downloads: 987,
      rating: 4.8,
      isPremium: false
    },
    {
      id: 6,
      title: "Transition Preparation Guide",
      description: "Step-by-step guide for preparing teens for adult transitions.",
      type: "guides",
      typeLabel: "Therapy Guides",
      ageGroup: "teen",
      downloads: 756,
      rating: 4.5,
      isPremium: true
    },
    {
      id: 7,
      title: "Daily Living Skills Checklist",
      description: "Progress tracking for independence and daily living skills.",
      type: "assessments",
      typeLabel: "Assessments",
      ageGroup: "teen",
      downloads: 645,
      rating: 4.4,
      isPremium: false
    },
    {
      id: 8,
      title: "Playground Social Stories Collection",
      description: "Social stories for common playground situations and interactions.",
      type: "social",
      typeLabel: "Social Stories",
      ageGroup: "early",
      downloads: 889,
      rating: 4.9,
      isPremium: false
    },
    {
      id: 9,
      title: "Bedtime Routine Visual Schedule",
      description: "Customizable bedtime routine schedule with visual cues.",
      type: "schedules",
      typeLabel: "Visual Schedules",
      ageGroup: "early",
      downloads: 1123,
      rating: 4.7,
      isPremium: false
    }
  ];

  const externalResources = [
    {
      title: "Autism Society Resources",
      description: "Comprehensive resource library from the Autism Society of America.",
      url: "https://autismsociety.org",
      type: "Organization"
    },
    {
      title: "CDC Autism Information",
      description: "Evidence-based information and resources from the CDC.",
      url: "https://cdc.gov/autism",
      type: "Government"
    },
    {
      title: "First Words Project",
      description: "Early intervention resources and research from Florida State University.",
      url: "https://firstwords.fsu.edu",
      type: "Research"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.type === activeCategory;
    const matchesAge = activeAgeGroup === 'all' || resource.ageGroup === activeAgeGroup || resource.ageGroup === 'all';
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesAge && matchesSearch;
  });

  const getCategoryColor = (type: string) => {
    switch (type) {
      case 'worksheets': return 'bg-blue-100 text-blue-800';
      case 'videos': return 'bg-green-100 text-green-800';
      case 'guides': return 'bg-purple-100 text-purple-800';
      case 'assessments': return 'bg-amber-100 text-amber-800';
      case 'social': return 'bg-pink-100 text-pink-800';
      case 'schedules': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="Resource Library"
        title="Resource"
        highlightedText="Library"
        subtitle="Downloadable tools, guides, and materials to support your autism journey. Everything you need in one organized place."
        primaryButtonText="Browse All"
        primaryButtonIcon={<Folder className="mr-2 h-5 w-5" />}
        secondaryButtonText="View Library"
        secondaryButtonIcon={<Library className="mr-2 h-5 w-5" />}
        imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
        imageAlt="Digital library with educational resources and tools"
        testId="resources-hero-section"
      />

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-16">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Category Filters */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3" data-testid="text-categories-title">Resource Types</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                    className="flex items-center space-x-1"
                    data-testid={`button-category-${category.id}`}
                  >
                    {category.icon}
                    <span>{category.label}</span>
                    <Badge variant="secondary" className="ml-1">{category.count}</Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Age Group Filters */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3" data-testid="text-age-groups-title">Age Groups</h3>
              <div className="flex flex-wrap gap-2">
                {ageGroups.map((group) => (
                  <Button
                    key={group.id}
                    variant={activeAgeGroup === group.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveAgeGroup(group.id)}
                    data-testid={`button-age-${group.id}`}
                  >
                    {group.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" data-testid="text-featured-title">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200" data-testid={`featured-resource-${resource.id}`}>
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge className={getCategoryColor(resource.type)}>
                      {resource.typeLabel}
                    </Badge>
                    {resource.isPremium && (
                      <Badge className="bg-accent text-white">Premium</Badge>
                    )}
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                    <Bookmark className="h-4 w-4 cursor-pointer hover:text-primary" />
                  </div>
                  <Button className="w-full" data-testid={`button-download-featured-${resource.id}`}>
                    <Download className="mr-2 h-4 w-4" />
                    {resource.isPremium ? 'Premium Download' : 'Free Download'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900" data-testid="text-all-resources-title">
              All Resources
            </h2>
            <span className="text-gray-500" data-testid="text-resource-count">
              {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-200" data-testid={`resource-${resource.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge className={getCategoryColor(resource.type)}>
                      {resource.typeLabel}
                    </Badge>
                    {resource.isPremium && (
                      <Badge className="bg-accent text-white">Premium</Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4 cursor-pointer hover:text-primary" />
                      <Bookmark className="h-4 w-4 cursor-pointer hover:text-primary" />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" data-testid={`button-download-${resource.id}`}>
                    <Download className="mr-2 h-4 w-4" />
                    {resource.isPremium ? 'Premium Download' : 'Free Download'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* External Resources */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" data-testid="text-external-title">
            Trusted External Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {externalResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200" data-testid={`external-resource-${index}`}>
                <CardContent className="p-6">
                  <Badge className="mb-3">{resource.type}</Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <Button variant="outline" className="w-full" asChild data-testid={`button-external-${index}`}>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Resource
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

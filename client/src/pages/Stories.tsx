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
  Star, 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  Filter,
  Quote,
  Send,
  Camera,
  Play,
  Sparkles,
  PenTool
} from "lucide-react";

export default function Stories() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  const categories = [
    { id: 'all', label: 'All Stories', count: 45 },
    { id: 'early-intervention', label: 'Early Intervention', count: 12 },
    { id: 'education', label: 'Educational Success', count: 15 },
    { id: 'independence', label: 'Independence Journey', count: 8 },
    { id: 'family', label: 'Family Growth', count: 10 },
    { id: 'professional', label: 'Professional Insights', count: 6 }
  ];

  const featuredStories = [
    {
      id: 1,
      title: "From Isolation to Independence: Emma's Journey",
      excerpt: "Emma's transformation from a non-verbal 4-year-old to a confident teenager pursuing her dreams.",
      author: "The Johnson Family",
      authorType: "Family",
      date: "2024-01-15",
      category: "independence",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      featured: true,
      hasVideo: true,
      tags: ["communication", "growth", "teenage years"]
    },
    {
      id: 2,
      title: "Building Bridges: A Teacher's Perspective",
      excerpt: "How inclusive education transformed not just one student, but an entire classroom community.",
      author: "Ms. Rachel Green",
      authorType: "Educator",
      date: "2024-01-12",
      category: "education",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      featured: true,
      hasVideo: false,
      tags: ["inclusion", "classroom", "teacher perspective"]
    }
  ];

  const successStories = [
    {
      id: 3,
      title: "Early Signs, Early Action: Miguel's Story",
      excerpt: "How recognizing early signs at 18 months led to a successful intervention journey.",
      author: "Maria Rodriguez",
      authorType: "Mother",
      date: "2024-01-10",
      category: "early-intervention",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["early diagnosis", "ABA therapy", "spanish family"]
    },
    {
      id: 4,
      title: "Finding Her Voice: Sarah's Communication Journey",
      excerpt: "From picture cards to full conversations - a story of perseverance and breakthrough.",
      author: "David & Lisa Chen",
      authorType: "Parents",
      date: "2024-01-08",
      category: "family",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["communication", "AAC", "speech therapy"]
    },
    {
      id: 5,
      title: "College Dreams Realized: Alex's Achievement",
      excerpt: "How Alex overcame social challenges to graduate with honors and find meaningful employment.",
      author: "Alex Thompson",
      authorType: "Self-Advocate",
      date: "2024-01-05",
      category: "independence",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["college", "employment", "self-advocacy"]
    },
    {
      id: 6,
      title: "Sensory Solutions: Creating a Calm Home",
      excerpt: "Practical strategies that transformed daily routines and reduced meltdowns by 80%.",
      author: "Jennifer Martinez",
      authorType: "Occupational Therapist",
      date: "2024-01-03",
      category: "professional",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["sensory", "home environment", "OT strategies"]
    },
    {
      id: 7,
      title: "Friendship Blooms: Building Social Connections",
      excerpt: "How structured social skills training led to lasting friendships and improved confidence.",
      author: "The Williams Family",
      authorType: "Family",
      date: "2023-12-28",
      category: "education",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["social skills", "friendship", "peer relationships"]
    },
    {
      id: 8,
      title: "From Overwhelmed to Empowered: A Father's Journey",
      excerpt: "A single father's story of learning to navigate autism diagnosis and finding community support.",
      author: "Michael Davis",
      authorType: "Father",
      date: "2023-12-25",
      category: "family",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["single parent", "community support", "advocacy"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'early-intervention': return 'bg-blue-100 text-blue-800';
      case 'education': return 'bg-green-100 text-green-800';
      case 'independence': return 'bg-purple-100 text-purple-800';
      case 'family': return 'bg-pink-100 text-pink-800';
      case 'professional': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAuthorTypeColor = (type: string) => {
    switch (type) {
      case 'Family': return 'bg-rose-100 text-rose-800';
      case 'Parents': return 'bg-rose-100 text-rose-800';
      case 'Mother': return 'bg-rose-100 text-rose-800';
      case 'Father': return 'bg-rose-100 text-rose-800';
      case 'Self-Advocate': return 'bg-indigo-100 text-indigo-800';
      case 'Educator': return 'bg-emerald-100 text-emerald-800';
      case 'Occupational Therapist': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredStories = successStories.filter(story => {
    const matchesCategory = activeCategory === 'all' || story.category === activeCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="Success Stories"
        title="Success Stories &"
        highlightedText="Testimonials"
        subtitle="Real families, real journeys, real hope. Discover inspiring stories from our autism community and share your own."
        primaryButtonText="Share Your Story"
        primaryButtonIcon={<PenTool className="mr-2 h-5 w-5" />}
        secondaryButtonText="Read Stories"
        secondaryButtonIcon={<Heart className="mr-2 h-5 w-5" />}
        imageSrc="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
        imageAlt="Happy family celebrating together, showing hope and progress"
        testId="stories-hero-section"
      />

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Categories */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-stories"
                />
              </div>
            </div>
            <Button 
              onClick={() => setShowSubmissionForm(true)}
              className="flex items-center"
              data-testid="button-share-story"
            >
              <Heart className="mr-2 h-4 w-4" />
              Share Your Story
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center space-x-2"
                data-testid={`button-category-${category.id}`}
              >
                <span>{category.label}</span>
                <Badge variant="secondary" className="ml-2">{category.count}</Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Stories */}
        {activeCategory === 'all' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8" data-testid="text-featured-stories-title">
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredStories.map((story) => (
                <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200" data-testid={`featured-story-${story.id}`}>
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-64 object-cover"
                    />
                    {story.hasVideo && (
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <Play className="h-8 w-8 text-primary ml-1" />
                        </div>
                      </div>
                    )}
                    <Badge className="absolute top-4 left-4 bg-primary text-white">Featured</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge className={getCategoryColor(story.category)}>
                        {story.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </Badge>
                      <Badge className={getAuthorTypeColor(story.authorType)}>
                        {story.authorType}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{story.title}</h3>
                    <p className="text-gray-600 mb-4">{story.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {story.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{story.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(story.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{story.readTime}</span>
                    </div>
                    <Button className="w-full mt-4" data-testid={`button-read-featured-${story.id}`}>
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Success Stories Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900" data-testid="text-all-stories-title">
              {activeCategory === 'all' ? 'All Success Stories' : `${categories.find(c => c.id === activeCategory)?.label} Stories`}
            </h2>
            <span className="text-gray-500" data-testid="text-stories-count">
              {filteredStories.length} stor{filteredStories.length !== 1 ? 'ies' : 'y'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200" data-testid={`story-${story.id}`}>
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge className={getCategoryColor(story.category)}>
                      {story.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Badge>
                    <Badge className={getAuthorTypeColor(story.authorType)}>
                      {story.authorType}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{story.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {story.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {story.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{story.tags.length - 2} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-3 w-3" />
                      <span>{story.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(story.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{story.readTime}</span>
                    <Button variant="outline" size="sm" data-testid={`button-read-story-${story.id}`}>
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Submission Form Modal */}
        {showSubmissionForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" data-testid="submission-modal">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Share Your Success Story</h3>
                  <Button variant="outline" onClick={() => setShowSubmissionForm(false)} data-testid="button-close-submission">
                    ×
                  </Button>
                </div>

                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Quote className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">Your story matters</h4>
                      <p className="text-blue-700 text-sm">
                        Sharing your experience can inspire and help other families on their autism journey. 
                        All submissions are reviewed before publication to ensure privacy and appropriateness.
                      </p>
                    </div>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <Input placeholder="How you'd like to be credited" data-testid="input-author-name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Role</label>
                      <select className="w-full p-2 border border-gray-300 rounded-md" data-testid="select-author-type">
                        <option value="">Select your role</option>
                        <option value="parent">Parent/Caregiver</option>
                        <option value="self-advocate">Self-Advocate</option>
                        <option value="educator">Educator</option>
                        <option value="therapist">Therapist/Professional</option>
                        <option value="family">Family Member</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Story Category</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md" data-testid="select-story-category">
                      <option value="">Select a category</option>
                      <option value="early-intervention">Early Intervention</option>
                      <option value="education">Educational Success</option>
                      <option value="independence">Independence Journey</option>
                      <option value="family">Family Growth</option>
                      <option value="professional">Professional Insights</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Story Title</label>
                    <Input placeholder="Give your story a compelling title" data-testid="input-story-title" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Story</label>
                    <Textarea 
                      placeholder="Share your experience, challenges overcome, lessons learned, and advice for other families..."
                      rows={8}
                      data-testid="textarea-story-content"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                    <Input 
                      type="email" 
                      placeholder="We'll use this to contact you about your submission" 
                      data-testid="input-contact-email"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="consent" className="mt-1" data-testid="checkbox-consent" />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I consent to sharing my story on the MosaicMind website and understand that it may be edited for length and clarity. 
                      I can request removal at any time by contacting support.
                    </label>
                  </div>

                  <div className="flex space-x-4">
                    <Button type="submit" className="flex-1" data-testid="button-submit-story">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Story
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowSubmissionForm(false)}
                      data-testid="button-cancel-submission"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" data-testid="text-cta-title">
            Your Story Could Change Lives
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
            Every journey is unique, and every story has the power to inspire hope and provide guidance to other families. 
            Share your experience and become part of our supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-primary hover:bg-gray-100" 
              size="lg"
              onClick={() => setShowSubmissionForm(true)}
              data-testid="button-cta-share-story"
            >
              <Heart className="mr-2 h-5 w-5" />
              Share Your Story
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg" data-testid="button-cta-join-community">
              <Camera className="mr-2 h-5 w-5" />
              Join Our Community
            </Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

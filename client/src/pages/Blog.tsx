import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight, 
  Filter,
  Heart,
  Brain,
  Users,
  Lightbulb,
  Star
} from "lucide-react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Posts', count: 147 },
    { id: 'parenting', label: 'Parenting Tips', count: 42 },
    { id: 'therapy', label: 'Therapy Guidance', count: 38 },
    { id: 'success', label: 'Success Stories', count: 28 },
    { id: 'updates', label: 'App Updates', count: 15 },
    { id: 'research', label: 'Autism News & Research', count: 24 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "Understanding Sensory Processing in Autism",
      excerpt: "A comprehensive guide to recognizing and supporting sensory processing differences in children with autism.",
      author: "Dr. Sarah Williams",
      date: "2024-01-15",
      category: "therapy",
      categoryLabel: "Therapy Guidance",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      featured: true
    },
    {
      id: 2,
      title: "Building Communication Skills Through Play",
      excerpt: "Discover fun and engaging ways to develop communication skills using everyday play activities.",
      author: "Jennifer Chen",
      date: "2024-01-12",
      category: "parenting",
      categoryLabel: "Parenting Tips",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      featured: true
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "5 Effective ABA Techniques for Home Practice",
      excerpt: "Learn practical Applied Behavior Analysis strategies you can implement at home to support your child's development.",
      author: "Mark Rodriguez",
      date: "2024-01-10",
      category: "therapy",
      categoryLabel: "Therapy Guidance",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 4,
      title: "Building Social Connections: A Parent's Guide",
      excerpt: "Discover strategies to help your child develop meaningful friendships and social relationships.",
      author: "Dr. Lisa Thompson",
      date: "2024-01-08",
      category: "parenting",
      categoryLabel: "Parenting Tips",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 5,
      title: "From Isolation to Independence: Emma's Journey",
      excerpt: "A heartwarming story of how early intervention and family support transformed Emma's life.",
      author: "Emma's Family",
      date: "2024-01-05",
      category: "success",
      categoryLabel: "Success Stories",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 6,
      title: "Latest Research: Early Signs of Autism",
      excerpt: "New findings from Stanford research on identifying early autism indicators in infants and toddlers.",
      author: "Research Team",
      date: "2024-01-03",
      category: "research",
      categoryLabel: "Autism News & Research",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 7,
      title: "AutismAlly App Update: New Progress Tracking Features",
      excerpt: "Discover the latest enhancements to our progress tracking system and how they can benefit your family.",
      author: "AutismAlly Team",
      date: "2024-01-01",
      category: "updates",
      categoryLabel: "App Updates",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 8,
      title: "Creating Calm Spaces: Sensory Room Ideas",
      excerpt: "Practical tips for creating sensory-friendly spaces at home to help with regulation and comfort.",
      author: "David Kim",
      date: "2023-12-28",
      category: "parenting",
      categoryLabel: "Parenting Tips",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'parenting': return <Heart className="h-4 w-4" />;
      case 'therapy': return <Brain className="h-4 w-4" />;
      case 'success': return <Star className="h-4 w-4" />;
      case 'updates': return <Lightbulb className="h-4 w-4" />;
      case 'research': return <Users className="h-4 w-4" />;
      default: return <Heart className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'parenting': return 'bg-blue-100 text-blue-800';
      case 'therapy': return 'bg-green-100 text-green-800';
      case 'success': return 'bg-purple-100 text-purple-800';
      case 'updates': return 'bg-amber-100 text-amber-800';
      case 'research': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-blog-title">
            AutismAlly Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-blog-subtitle">
            Expert insights, practical tips, and inspiring stories from the autism community
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-blog"
                />
              </div>
            </div>
            <Button variant="outline" className="flex items-center" data-testid="button-filter">
              <Filter className="mr-2 h-4 w-4" />
              Filters
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
                {getCategoryIcon(category.id)}
                <span>{category.label}</span>
                <Badge variant="secondary" className="ml-2">{category.count}</Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {activeCategory === 'all' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8" data-testid="text-featured-posts-title">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200" data-testid={`featured-post-${post.id}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge className={getCategoryColor(post.category)}>
                        {getCategoryIcon(post.category)}
                        <span className="ml-1">{post.categoryLabel}</span>
                      </Badge>
                      <Badge variant="outline">Featured</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button className="w-full mt-4" data-testid={`button-read-featured-${post.id}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900" data-testid="text-latest-posts-title">
              {activeCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === activeCategory)?.label} Articles`}
            </h2>
            <span className="text-gray-500" data-testid="text-posts-count">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200" data-testid={`blog-post-${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className={`${getCategoryColor(post.category)} mb-3`}>
                    {getCategoryIcon(post.category)}
                    <span className="ml-1">{post.categoryLabel}</span>
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm" data-testid={`button-read-post-${post.id}`}>
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" data-testid="text-newsletter-title">
            Never Miss an Update
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto" data-testid="text-newsletter-subtitle">
            Subscribe to our newsletter for the latest articles, resources, and autism community news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white text-gray-900 border-0"
              data-testid="input-newsletter-email"
            />
            <Button className="bg-white text-primary hover:bg-gray-100" data-testid="button-newsletter-subscribe">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

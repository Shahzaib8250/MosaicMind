import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import PageHero from "@/components/PageHero";
import { 
  Search, 
  MapPin, 
  Users, 
  MessageCircle, 
  Calendar,
  Clock,
  Globe,
  Shield,
  Heart,
  UserPlus,
  Filter,
  Video,
  Phone,
  Mail,
  Handshake
} from "lucide-react";

export default function Support() {
  const [activeTab, setActiveTab] = useState('groups');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const supportGroups = [
    {
      id: 1,
      name: "Parent Support Circle",
      description: "Weekly support group for parents of children with autism ages 3-12.",
      type: "parenting",
      format: "in-person",
      location: "San Francisco, CA",
      schedule: "Wednesdays 7:00 PM",
      members: 24,
      moderator: "Dr. Sarah Williams",
      tags: ["early intervention", "behavioral support", "family strategies"]
    },
    {
      id: 2,
      name: "Teen Transition Support",
      description: "Support group focused on helping teens with autism transition to adulthood.",
      type: "transition",
      format: "virtual",
      location: "Online",
      schedule: "Saturdays 2:00 PM",
      members: 18,
      moderator: "Mark Rodriguez",
      tags: ["independence", "job skills", "adult transition"]
    },
    {
      id: 3,
      name: "Professional Network",
      description: "Discussion group for therapists, educators, and autism professionals.",
      type: "professional",
      format: "hybrid",
      location: "New York, NY / Online",
      schedule: "Monthly - First Friday 6:00 PM",
      members: 45,
      moderator: "Dr. Lisa Thompson",
      tags: ["best practices", "research", "professional development"]
    },
    {
      id: 4,
      name: "Sensory Support Network",
      description: "Support for families dealing with sensory processing challenges.",
      type: "specialized",
      format: "in-person",
      location: "Austin, TX",
      schedule: "Bi-weekly Thursdays 6:30 PM",
      members: 16,
      moderator: "Jennifer Chen",
      tags: ["sensory processing", "occupational therapy", "daily strategies"]
    },
    {
      id: 5,
      name: "Spanish-Speaking Families",
      description: "Grupo de apoyo para familias hispanohablantes con niños autistas.",
      type: "cultural",
      format: "virtual",
      location: "Online",
      schedule: "Domingos 4:00 PM",
      members: 31,
      moderator: "Maria Rodriguez",
      tags: ["español", "cultural support", "bilingual resources"]
    },
    {
      id: 6,
      name: "Adult Self-Advocacy Group",
      description: "Support group led by and for adults on the autism spectrum.",
      type: "self-advocacy",
      format: "virtual",
      location: "Online",
      schedule: "Tuesdays 7:30 PM",
      members: 22,
      moderator: "Alex Johnson (Autistic)",
      tags: ["self-advocacy", "peer support", "autism acceptance"]
    }
  ];

  const groupTypes = [
    { id: 'all', label: 'All Groups', count: supportGroups.length },
    { id: 'parenting', label: 'Parenting Support', count: 1 },
    { id: 'professional', label: 'Professional Network', count: 1 },
    { id: 'transition', label: 'Transition Support', count: 1 },
    { id: 'specialized', label: 'Specialized Topics', count: 1 },
    { id: 'cultural', label: 'Cultural Groups', count: 1 },
    { id: 'self-advocacy', label: 'Self-Advocacy', count: 1 }
  ];

  const regions = [
    { id: 'all', label: 'All Locations' },
    { id: 'west', label: 'West Coast' },
    { id: 'east', label: 'East Coast' },
    { id: 'central', label: 'Central US' },
    { id: 'online', label: 'Virtual Only' }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'parenting': return 'bg-blue-100 text-blue-800';
      case 'professional': return 'bg-green-100 text-green-800';
      case 'transition': return 'bg-purple-100 text-purple-800';
      case 'specialized': return 'bg-amber-100 text-amber-800';
      case 'cultural': return 'bg-pink-100 text-pink-800';
      case 'self-advocacy': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'virtual': return <Video className="h-4 w-4" />;
      case 'in-person': return <MapPin className="h-4 w-4" />;
      case 'hybrid': return <Globe className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  const filteredGroups = supportGroups.filter(group => {
    const matchesType = selectedType === 'all' || group.type === selectedType;
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesType && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="Community Support"
        title="Support Groups &"
        highlightedText="Community"
        subtitle="Connect with families, professionals, and individuals who understand your journey. Find the support you need when you need it."
        primaryButtonText="Join Community"
        primaryButtonIcon={<Heart className="mr-2 h-5 w-5" />}
        secondaryButtonText="Find Groups"
        secondaryButtonIcon={<Users className="mr-2 h-5 w-5" />}
        imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
        imageAlt="Support group meeting with families sharing experiences"
        testId="support-hero-section"
      />

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          <button
            className={`px-6 py-3 font-medium transition-colors duration-200 ${
              activeTab === 'groups'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-primary'
            }`}
            onClick={() => setActiveTab('groups')}
            data-testid="tab-groups"
          >
            <Users className="inline mr-2 h-4 w-4" />
            Support Groups
          </button>
          <button
            className={`px-6 py-3 font-medium transition-colors duration-200 ${
              activeTab === 'forum'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-primary'
            }`}
            onClick={() => setActiveTab('forum')}
            data-testid="tab-forum"
          >
            <MessageCircle className="inline mr-2 h-4 w-4" />
            Community Forum
          </button>
          <button
            className={`px-6 py-3 font-medium transition-colors duration-200 ${
              activeTab === 'chat'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-primary'
            }`}
            onClick={() => setActiveTab('chat')}
            data-testid="tab-chat"
          >
            <Phone className="inline mr-2 h-4 w-4" />
            Live Support
          </button>
        </div>

        {activeTab === 'groups' && (
          <div>
            {/* Search and Filters */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-16">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      placeholder="Search support groups..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                      data-testid="input-search-groups"
                    />
                  </div>
                </div>
                <Button variant="outline" className="flex items-center" data-testid="button-filter">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Group Types */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3" data-testid="text-group-types-title">Group Types</h3>
                  <div className="flex flex-wrap gap-2">
                    {groupTypes.map((type) => (
                      <Button
                        key={type.id}
                        variant={selectedType === type.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedType(type.id)}
                        data-testid={`button-type-${type.id}`}
                      >
                        {type.label}
                        <Badge variant="secondary" className="ml-2">{type.count}</Badge>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Regions */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3" data-testid="text-regions-title">Location</h3>
                  <div className="flex flex-wrap gap-2">
                    {regions.map((region) => (
                      <Button
                        key={region.id}
                        variant={selectedRegion === region.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedRegion(region.id)}
                        data-testid={`button-region-${region.id}`}
                      >
                        {region.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Support Groups Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {filteredGroups.map((group) => (
                <Card key={group.id} className="hover:shadow-lg transition-shadow duration-200" data-testid={`support-group-${group.id}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{group.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{group.description}</p>
                        <Badge className={getTypeColor(group.type)}>
                          {group.type.charAt(0).toUpperCase() + group.type.slice(1)}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        {getFormatIcon(group.format)}
                        <span className="ml-2">{group.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span className="ml-2">{group.schedule}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span className="ml-2">{group.members} members</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Shield className="h-4 w-4" />
                        <span className="ml-2">Moderated by {group.moderator}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {group.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1" data-testid={`button-join-${group.id}`}>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Join Group
                      </Button>
                      <Button variant="outline" data-testid={`button-info-${group.id}`}>
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Community Guidelines */}
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4" data-testid="text-guidelines-title">
                  Community Guidelines
                </h2>
                <p className="text-gray-600" data-testid="text-guidelines-subtitle">
                  Our community is built on respect, support, and understanding
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center" data-testid="guideline-respect">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Respectful Communication</h3>
                  <p className="text-gray-600 text-sm">Treat all members with kindness, empathy, and respect regardless of differences.</p>
                </div>

                <div className="text-center" data-testid="guideline-safe">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe Space</h3>
                  <p className="text-gray-600 text-sm">Maintain confidentiality and create a judgment-free environment for sharing.</p>
                </div>

                <div className="text-center" data-testid="guideline-support">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Supportive Community</h3>
                  <p className="text-gray-600 text-sm">Offer encouragement, share experiences, and help others feel welcome.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'forum' && (
          <div className="space-y-8">
            {/* Forum Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer" data-testid="forum-general">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">General Discussion</h3>
                      <p className="text-sm text-gray-500">234 topics</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Open discussions about autism experiences and daily life.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer" data-testid="forum-parenting">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Parenting Support</h3>
                      <p className="text-sm text-gray-500">156 topics</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Share parenting strategies and seek advice from other families.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer" data-testid="forum-resources">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Resources & Reviews</h3>
                      <p className="text-sm text-gray-500">89 topics</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Share and discuss helpful resources, apps, and services.</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Discussions */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6" data-testid="text-recent-discussions">Recent Discussions</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="hover:shadow-sm transition-shadow duration-200" data-testid={`discussion-${i}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">
                            {i === 1 && "Tips for handling sensory overload in public spaces"}
                            {i === 2 && "IEP meeting success stories"}
                            {i === 3 && "Recommended communication apps for non-verbal children"}
                            {i === 4 && "Transitioning to middle school - advice needed"}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Started by User{i}</span>
                            <span>•</span>
                            <span>{i + 2} replies</span>
                            <span>•</span>
                            <span>2 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="space-y-8">
            {/* Live Support Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center" data-testid="support-crisis">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Crisis Support</h3>
                  <p className="text-gray-600 text-sm mb-4">24/7 crisis support hotline for immediate assistance.</p>
                  <Button className="bg-red-600 hover:bg-red-700">Call Now</Button>
                </CardContent>
              </Card>

              <Card className="text-center" data-testid="support-chat">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 text-sm mb-4">Chat with trained peer supporters online.</p>
                  <Button>Start Chat</Button>
                </CardContent>
              </Card>

              <Card className="text-center" data-testid="support-email">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 text-sm mb-4">Get personalized support via email within 24 hours.</p>
                  <Button variant="outline">Send Email</Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6" data-testid="text-contact-form-title">
                  Request Support
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" data-testid="input-contact-name" />
                    <Input placeholder="Your Email" type="email" data-testid="input-contact-email" />
                  </div>
                  <Input placeholder="Subject" data-testid="input-contact-subject" />
                  <Textarea placeholder="How can we help you?" rows={4} data-testid="textarea-contact-message" />
                  <Button type="submit" data-testid="button-contact-submit">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

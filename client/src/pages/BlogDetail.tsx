import { useState, useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  ArrowLeft, Calendar, User, Heart, Bookmark, Share2, Facebook, Twitter, Linkedin, Copy,
  Eye, MessageSquare, Tag, ThumbsUp, ThumbsDown, Sparkles, Lightbulb, Brain, Users, Star
} from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';

// Mock data for blog posts (should ideally come from an API)
const mockBlogPosts = [
  {
    id: '1',
    title: "Understanding Sensory Processing in Autism",
    author: "Dr. Sarah Williams",
    authorBio: "Pediatric occupational therapist specializing in sensory integration.",
    authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    date: "2024-01-15",
    readTime: "8 min read",
    views: "12.5K",
    comments: 45,
    category: "therapy",
    categoryLabel: "Therapy Guidance",
    tags: ["sensory", "integration", "therapy", "children"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    content: `
      <p class="text-lg leading-relaxed mb-6">Sensory processing differences are common in individuals with autism spectrum disorder (ASD). Understanding how these differences manifest and how to support them is crucial for fostering a child's development and well-being.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">What is Sensory Processing?</h2>
      <p class="text-lg leading-relaxed mb-6">Sensory processing refers to the way our nervous system receives sensory messages and turns them into responses. For most people, this process is automatic and efficient. However, for individuals with autism, this process can be atypical, leading to either hypersensitivity (over-responsiveness) or hyposensitivity (under-responsiveness) to sensory input.</p>
      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" alt="Child exploring sensory toys" class="rounded-xl shadow-lg mb-6 w-full" />
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Common Sensory Differences:</h3>
      <ul class="list-disc list-inside text-lg leading-relaxed mb-6 space-y-2">
        <li><strong>Auditory:</strong> Sensitivity to loud noises, specific frequencies, or difficulty filtering background sounds.</li>
        <li><strong>Visual:</strong> Sensitivity to bright lights, certain colors, or difficulty with visual tracking.</li>
        <li><strong>Tactile:</strong> Aversion to certain textures, clothing, or light touch, or seeking deep pressure.</li>
        <li><strong>Olfactory/Gustatory:</strong> Strong reactions to smells or tastes, or a limited diet.</li>
        <li><strong>Vestibular:</strong> Difficulty with balance, motion sickness, or constant need for movement.</li>
        <li><strong>Proprioceptive:</strong> Difficulty with body awareness, clumsiness, or seeking heavy work activities.</li>
      </ul>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Strategies for Support</h2>
      <p class="text-lg leading-relaxed mb-6">Supporting sensory processing differences involves creating a sensory-friendly environment and providing appropriate sensory input. This can include:</p>
      <ul class="list-disc list-inside text-lg leading-relaxed mb-6 space-y-2">
        <li>Creating a "calm corner" with dim lighting and soft textures.</li>
        <li>Using noise-canceling headphones in noisy environments.</li>
        <li>Offering weighted blankets or vests for deep pressure input.</li>
        <li>Incorporating sensory play activities like playdough, sand, or water.</li>
        <li>Working with an occupational therapist to develop a personalized sensory diet.</li>
      </ul>
      <p class="text-lg leading-relaxed mb-6">Remember, every child is unique. Observing your child's reactions and working with professionals can help you tailor strategies that best meet their individual sensory needs.</p>
    `,
    relatedPosts: ['2', '3']
  },
  {
    id: '2',
    title: "Building Communication Skills Through Play",
    author: "Jennifer Chen",
    authorBio: "Speech-language pathologist and co-founder of MosaicMind.",
    authorImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    date: "2024-01-12",
    readTime: "6 min read",
    views: "9.8K",
    comments: 32,
    category: "parenting",
    categoryLabel: "Parenting Tips",
    tags: ["communication", "play", "social skills", "early intervention"],
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    content: `
      <p class="text-lg leading-relaxed mb-6">Play is a child's natural language, and it's an incredibly powerful tool for developing communication skills in children with autism. By engaging in structured and unstructured play, parents can create opportunities for interaction, language development, and social connection.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Why Play is Essential for Communication</h2>
      <p class="text-lg leading-relaxed mb-6">Play provides a low-pressure environment where children can experiment with sounds, words, and social cues. It allows for repetition, which is key for learning, and can be easily adapted to a child's interests, increasing engagement and motivation.</p>
      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" alt="Children playing with blocks" class="rounded-xl shadow-lg mb-6 w-full" />
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Play-Based Strategies:</h3>
      <ul class="list-disc list-inside text-lg leading-relaxed mb-6 space-y-2">
        <li><strong>Follow Your Child's Lead:</strong> Observe what your child is interested in and join their play. This shows you value their choices and creates a shared experience.</li>
        <li><strong>Narrate Actions:</strong> Describe what you and your child are doing using simple, clear language. "You're pushing the car!" "I'm building a tall tower."</li>
        <li><strong>Offer Choices:</strong> Instead of asking "What do you want?", offer two choices: "Do you want the red car or the blue car?" This encourages verbal responses.</li>
        <li><strong>Pause and Wait:</strong> After asking a question or making a statement, pause and wait for your child to respond. Give them time to process and formulate their answer.</li>
        <li><strong>Expand on Utterances:</strong> If your child says "car," you can expand by saying "Yes, a fast car!" or "The car is going up!"</li>
        <li><strong>Use Visual Supports:</strong> Incorporate pictures or objects to help your child understand and express themselves, especially if they are visual learners.</li>
      </ul>
      <p class="text-lg leading-relaxed mb-6">Remember to keep play fun and engaging. The goal is to create positive communication experiences that build confidence and foster a love for interaction.</p>
    `,
    relatedPosts: ['1', '4']
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

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blogPost, setBlogPost] = useState<typeof mockBlogPosts[0] | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const post = mockBlogPosts.find(p => p.id === id);
    if (post) {
      setBlogPost(post);
    } else {
      setBlogPost(null);
    }
    // Reset states for new post
    setIsLiked(false);
    setIsBookmarked(false);
    setShowShareOptions(false);
  }, [id]);

  if (!blogPost) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-[60vh] text-gray-600 text-xl"
      >
        Blog post not found.
      </motion.div>
    );
  }

  const handleLike = () => setIsLiked(!isLiked);
  const handleBookmark = () => setIsBookmarked(!isBookmarked);
  const handleShare = () => setShowShareOptions(!showShareOptions);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "The article link has been copied to your clipboard.",
    });
    setShowShareOptions(false);
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
    setShowShareOptions(false);
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blogPost.title)}`, '_blank');
    setShowShareOptions(false);
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blogPost.title)}`, '_blank');
    setShowShareOptions(false);
  };

  const relatedArticles = blogPost.relatedPosts
    .map(relatedId => mockBlogPosts.find(p => p.id === relatedId))
    .filter(Boolean) as typeof mockBlogPosts;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/blog">
            <Button variant="outline" className="flex items-center group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Blog
            </Button>
          </Link>
        </motion.div>

        <Card className="overflow-hidden shadow-xl rounded-3xl bg-white/80 backdrop-blur-lg border border-gray-200/50">
          <CardContent className="p-0">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-80 md:h-96 overflow-hidden"
            >
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                className="absolute bottom-8 left-8 right-8 text-3xl md:text-4xl font-bold text-white leading-tight"
              >
                {blogPost.title}
              </motion.h1>
            </motion.div>

            <div className="p-6 md:p-10 lg:p-12">
              {/* Metadata and Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200"
              >
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-primary" />
                    <span>{blogPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-primary" />
                    <span>{blogPost.views} Views</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span>{blogPost.comments} Comments</span>
                  </div>
                  <Badge className={`${getCategoryColor(blogPost.category)} flex items-center space-x-1`}>
                    {getCategoryIcon(blogPost.category)}
                    <span>{blogPost.categoryLabel}</span>
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleLike}
                    className={`p-2 rounded-full ${isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'} transition-colors duration-200`}
                  >
                    <Heart className={isLiked ? 'fill-current' : ''} size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleBookmark}
                    className={`p-2 rounded-full ${isBookmarked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} transition-colors duration-200`}
                  >
                    <Bookmark className={isBookmarked ? 'fill-current' : ''} size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleShare}
                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Share2 size={20} />
                  </motion.button>

                  <AnimatePresence>
                    {showShareOptions && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10"
                      >
                        <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100" onClick={shareOnFacebook}>
                          <Facebook className="mr-2 h-4 w-4" /> Facebook
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100" onClick={shareOnTwitter}>
                          <Twitter className="mr-2 h-4 w-4" /> Twitter
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100" onClick={shareOnLinkedIn}>
                          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100" onClick={copyLink}>
                          <Copy className="mr-2 h-4 w-4" /> Copy Link
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="prose prose-lg max-w-none text-gray-800 mb-10"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="flex flex-wrap gap-2 mb-10 border-t border-gray-200 pt-6"
              >
                <span className="font-semibold text-gray-700 flex items-center"><Tag className="h-4 w-4 mr-1" /> Tags:</span>
                {blogPost.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
                    {tag}
                  </Badge>
                ))}
              </motion.div>

              {/* Author Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex items-center p-6 bg-blue-50 rounded-xl shadow-inner mb-10"
              >
                <img
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  className="w-20 h-20 rounded-full object-cover mr-6 shadow-md"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{blogPost.author}</h4>
                  <p className="text-primary font-medium mb-2">Author</p>
                  <p className="text-gray-700 text-sm">{blogPost.authorBio}</p>
                </div>
              </motion.div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedArticles.map((post, index) => (
                      <Link href={`/blog/${post.id}`} key={post.id}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                          whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                          className="cursor-pointer overflow-hidden rounded-xl shadow-md bg-white border border-gray-100"
                        >
                          <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                          <div className="p-4">
                            <Badge className={`${getCategoryColor(post.category)} mb-2 flex items-center space-x-1 w-fit`}>
                              {getCategoryIcon(post.category)}
                              <span>{post.categoryLabel}</span>
                            </Badge>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                            <p className="text-gray-600 text-sm">{post.readTime} • {new Date(post.date).toLocaleDateString()}</p>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-center shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Stay Informed, Get Support</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, resources, and autism community news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-900 border-0 focus:ring-2 focus:ring-blue-300"
            />
            <Button className="bg-white text-primary hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
      <Toaster />
    </motion.div>
  );
};

export default BlogDetail;

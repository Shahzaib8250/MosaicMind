import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  Star, 
  Check, 
  User,
  GraduationCap,
  Brain,
  Users,
  Heart,
  Shield,
  Phone,
  Mail
} from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    {
      id: 'consultation',
      title: 'Individual Consultation',
      description: 'One-on-one consultation with autism specialists to discuss your specific needs and develop personalized strategies.',
      duration: '60 minutes',
      price: '$150',
      format: 'Video call or In-person',
      includes: [
        'Comprehensive assessment discussion',
        'Personalized strategy development',
        'Resource recommendations',
        'Follow-up plan creation',
        'Written summary report'
      ],
      professionals: [
        {
          name: 'Dr. Sarah Williams',
          title: 'Licensed Clinical Social Worker',
          specialty: 'Autism Family Therapy',
          experience: '15+ years',
          rating: 4.9,
          image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
        },
        {
          name: 'Dr. Jennifer Chen',
          title: 'Pediatric Psychologist',
          specialty: 'Early Intervention & Development',
          experience: '12+ years',
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
        }
      ]
    },
    {
      id: 'assessment',
      title: 'Developmental Assessment',
      description: 'Comprehensive developmental assessment to identify strengths, challenges, and intervention priorities.',
      duration: '2-3 hours',
      price: '$350',
      format: 'In-person (preferred) or Video call',
      includes: [
        'Standardized assessment tools',
        'Behavioral observations',
        'Parent/caregiver interviews',
        'Detailed written report',
        'Recommendations meeting',
        '30-day follow-up call'
      ],
      professionals: [
        {
          name: 'Dr. Michael Torres',
          title: 'Developmental Psychologist',
          specialty: 'Autism Spectrum Assessments',
          experience: '18+ years',
          rating: 4.9,
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
        }
      ]
    },
    {
      id: 'therapy',
      title: 'Therapy Training Session',
      description: 'Learn effective therapy techniques you can implement at home with guidance from certified therapists.',
      duration: '90 minutes',
      price: '$200',
      format: 'Video call or In-person',
      includes: [
        'Technique demonstrations',
        'Hands-on practice',
        'Customized activity suggestions',
        'Progress tracking methods',
        'Resource materials',
        'Weekly check-ins (4 weeks)'
      ],
      professionals: [
        {
          name: 'Lisa Rodriguez',
          title: 'Certified ABA Therapist',
          specialty: 'Applied Behavior Analysis',
          experience: '10+ years',
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
        },
        {
          name: 'David Kim',
          title: 'Speech-Language Pathologist',
          specialty: 'Communication Development',
          experience: '14+ years',
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
        }
      ]
    },
    {
      id: 'workshop',
      title: 'Family Workshop',
      description: 'Interactive workshops for families to learn together and connect with other families facing similar challenges.',
      duration: '3 hours',
      price: '$100 per family',
      format: 'In-person group sessions',
      includes: [
        'Group learning activities',
        'Family interaction exercises',
        'Peer networking time',
        'Take-home materials',
        'Light refreshments',
        'Follow-up resources'
      ],
      professionals: [
        {
          name: 'Team of Specialists',
          title: 'Multidisciplinary Team',
          specialty: 'Family Support & Education',
          experience: 'Varies',
          rating: 4.6,
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Maria Gonzalez',
      service: 'Individual Consultation',
      rating: 5,
      text: 'Dr. Williams provided exactly the guidance we needed. Her recommendations have made such a difference in our daily routine.',
      date: '2024-01-15'
    },
    {
      name: 'James Patterson',
      service: 'Developmental Assessment',
      rating: 5,
      text: 'The assessment was thorough and the report helped us understand our son\'s needs better. Highly recommend!',
      date: '2024-01-10'
    },
    {
      name: 'Sarah Chen',
      service: 'Therapy Training',
      rating: 5,
      text: 'Learning ABA techniques from Lisa has been invaluable. Our daughter is making great progress with the strategies we learned.',
      date: '2024-01-08'
    }
  ];

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'consultation': return <User className="h-8 w-8" />;
      case 'assessment': return <Brain className="h-8 w-8" />;
      case 'therapy': return <GraduationCap className="h-8 w-8" />;
      case 'workshop': return <Users className="h-8 w-8" />;
      default: return <Heart className="h-8 w-8" />;
    }
  };

  const getServiceColor = (serviceId: string) => {
    switch (serviceId) {
      case 'consultation': return 'bg-blue-500';
      case 'assessment': return 'bg-green-500';
      case 'therapy': return 'bg-purple-500';
      case 'workshop': return 'bg-amber-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-services-title">
            Professional Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-services-subtitle">
            Expert consultation, assessment, and training services to support your autism journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow duration-200" data-testid={`service-${service.id}`}>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 ${getServiceColor(service.id)} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
                    {getServiceIcon(service.id)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold text-primary text-lg">{service.price}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Video className="h-4 w-4" />
                        <span>{service.format}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Available Professionals:</h4>
                  <div className="space-y-3">
                    {service.professionals.map((professional, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src={professional.image}
                          alt={professional.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900">{professional.name}</h5>
                          <p className="text-sm text-gray-600">{professional.title}</p>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>{professional.specialty}</span>
                            <span>•</span>
                            <span>{professional.experience}</span>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                              <span>{professional.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  onClick={() => setSelectedService(service.id)}
                  data-testid={`button-book-${service.id}`}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Modal/Section */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" data-testid="booking-modal">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Book Your Session</h3>
                  <Button variant="outline" onClick={() => setSelectedService(null)} data-testid="button-close-modal">
                    ×
                  </Button>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="Your first name" data-testid="input-first-name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Your last name" data-testid="input-last-name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="your.email@example.com" data-testid="input-email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <Input type="tel" placeholder="(555) 123-4567" data-testid="input-phone" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <Input 
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        data-testid="input-date"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                      <select 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        data-testid="select-time"
                      >
                        <option value="">Select time</option>
                        {availableTimes.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your needs (optional)
                    </label>
                    <Textarea 
                      placeholder="Please describe what you'd like to focus on during your session..."
                      rows={4}
                      data-testid="textarea-needs"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button type="submit" className="flex-1" data-testid="button-confirm-booking">
                      Confirm Booking
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setSelectedService(null)}
                      data-testid="button-cancel-booking"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" data-testid="text-testimonials-title">
            What Families Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-sm" data-testid={`testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" data-testid="text-contact-title">
              Have Questions?
            </h2>
            <p className="text-gray-600" data-testid="text-contact-subtitle">
              Our team is here to help you find the right service for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center" data-testid="contact-phone">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">Speak with our team directly</p>
              <p className="font-semibold text-primary">(555) 123-4567</p>
            </div>

            <div className="text-center" data-testid="contact-email">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">Get answers within 24 hours</p>
              <p className="font-semibold text-secondary">services@autismally.com</p>
            </div>

            <div className="text-center" data-testid="contact-chat">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure & Confidential</h3>
              <p className="text-gray-600 text-sm mb-3">HIPAA-compliant services</p>
              <p className="font-semibold text-accent">Your privacy is protected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

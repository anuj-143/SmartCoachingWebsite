import React, { useState } from 'react';
import { Calendar, Users, Award, Bookmark, Star, Search } from 'lucide-react';

// Sample data
const achievements = [
  {
    id: 1,
    title: "National Math Competition Champions",
    description: "Our students secured first place in the National Mathematics Olympiad, competing against 200+ schools.",
    year: "2023",
    category: "competition",
    image: "https://images.pexels.com/photos/8617840/pexels-photo-8617840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "100% College Admission Rate",
    description: "All of our graduating seniors were accepted into 4-year colleges, with 85% receiving scholarships.",
    year: "2023",
    category: "academic",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Science Fair Innovation Award",
    description: "Our students' research project on renewable energy won the Innovation Award at the State Science Fair.",
    year: "2022",
    category: "competition",
    image: "https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Educational Excellence Award",
    description: "SmartCoach received the Educational Excellence Award for our innovative teaching methodologies.",
    year: "2022",
    category: "recognition",
    image: "https://images.pexels.com/photos/7214790/pexels-photo-7214790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "Coding Competition Winners",
    description: "Our programming team won first place in the Regional Coding Championship.",
    year: "2021",
    category: "competition",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Community Impact Award",
    description: "Recognized for our free tutoring program serving underprivileged students in the community.",
    year: "2021",
    category: "community",
    image: "https://images.pexels.com/photos/8363771/pexels-photo-8363771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

const events = [
  {
    id: 1,
    title: "Annual Science Exhibition",
    description: "Students showcased innovative projects across physics, chemistry, and biology.",
    date: "October 15, 2023",
    category: "exhibition",
    image: "https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Career Day Workshop",
    description: "Industry professionals shared insights and guided students on various career paths.",
    date: "September 5, 2023",
    category: "workshop",
    image: "https://images.pexels.com/photos/7515186/pexels-photo-7515186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Literary Festival",
    description: "A celebration of literature with book readings, poetry competitions, and author visits.",
    date: "July 22, 2023",
    category: "cultural",
    image: "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Mathematics Olympiad",
    description: "Our annual mathematics competition challenging students with complex problem-solving.",
    date: "March 14, 2023",
    category: "competition",
    image: "https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "High School Senior",
    quote: "SmartCoach completely transformed my understanding of calculus. I went from struggling to get a C to confidently earning an A in my AP exam.",
    rating: 5,
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Chang",
    role: "College Freshman",
    quote: "The SAT prep course was exactly what I needed. The strategies and practice tests helped me raise my score by 200 points!",
    rating: 5,
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Parent",
    quote: "As a parent, I'm extremely impressed with the quality of education my daughter receives. The teachers are attentive and truly care about her progress.",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "High School Junior",
    quote: "The physics course made complex concepts simple to understand. The hands-on experiments were my favorite part!",
    rating: 4,
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "Aisha Patel",
    role: "College Applicant",
    quote: "Thanks to SmartCoach, I got accepted into my dream college with a scholarship. The personal statement workshops were invaluable!",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Parent",
    quote: "My son's confidence has grown tremendously since joining SmartCoach. The supportive environment and quality teaching make all the difference.",
    rating: 5,
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

const PortfolioPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'achievements' | 'events' | 'testimonials'>('achievements');
  const [achievementFilter, setAchievementFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter achievements based on category and search term
  const filteredAchievements = achievements.filter(achievement => {
    const matchesCategory = achievementFilter === 'all' || achievement.category === achievementFilter;
    const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Filter events based on search term
  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter testimonials based on search term
  const filteredTestimonials = testimonials.filter(testimonial => 
    testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    testimonial.quote.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl max-w-3xl">
            Discover our achievements, events, and student success stories that showcase the SmartCoach difference.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 bg-white dark:bg-gray-900 sticky top-16 z-20 shadow-md">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              <TabButton 
                active={activeTab === 'achievements'} 
                onClick={() => setActiveTab('achievements')}
                icon={<Award className="w-5 h-5" />}
                label="Achievements"
              />
              <TabButton 
                active={activeTab === 'events'} 
                onClick={() => setActiveTab('events')}
                icon={<Calendar className="w-5 h-5" />}
                label="Events"
              />
              <TabButton 
                active={activeTab === 'testimonials'} 
                onClick={() => setActiveTab('testimonials')}
                icon={<Star className="w-5 h-5" />}
                label="Testimonials"
              />
            </div>
            
            <div className="relative w-full sm:w-auto max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="input pl-10"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Category filters for achievements */}
          {activeTab === 'achievements' && (
            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
              <CategoryButton 
                active={achievementFilter === 'all'} 
                onClick={() => setAchievementFilter('all')}
                label="All"
              />
              <CategoryButton 
                active={achievementFilter === 'academic'} 
                onClick={() => setAchievementFilter('academic')}
                label="Academic"
              />
              <CategoryButton 
                active={achievementFilter === 'competition'} 
                onClick={() => setAchievementFilter('competition')}
                label="Competitions"
              />
              <CategoryButton 
                active={achievementFilter === 'recognition'} 
                onClick={() => setAchievementFilter('recognition')}
                label="Recognition"
              />
              <CategoryButton 
                active={achievementFilter === 'community'} 
                onClick={() => setAchievementFilter('community')}
                label="Community"
              />
            </div>
          )}
        </div>
      </section>

      {/* Content Sections */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container">
          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <>
              <h2 className="text-3xl font-bold mb-8 text-center">Our Achievements</h2>
              
              {filteredAchievements.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredAchievements.map(achievement => (
                    <AchievementCard key={achievement.id} achievement={achievement} />
                  ))}
                </div>
              ) : (
                <EmptyState message="No achievements found matching your criteria." />
              )}
            </>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <>
              <h2 className="text-3xl font-bold mb-8 text-center">Recent Events</h2>
              
              {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <EmptyState message="No events found matching your search." />
              )}
            </>
          )}

          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <>
              <h2 className="text-3xl font-bold mb-8 text-center">Student Testimonials</h2>
              
              {filteredTestimonials.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTestimonials.map(testimonial => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </div>
              ) : (
                <EmptyState message="No testimonials found matching your search." />
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Success Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of the SmartCoach community and achieve your academic goals with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/signup" className="btn bg-white text-blue-700 hover:bg-gray-100 text-lg">
              Enroll Today
            </a>
            <a href="/contact" className="btn border-2 border-white bg-transparent hover:bg-white/10 text-white text-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
type TabButtonProps = {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
};

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
      active 
        ? 'bg-blue-600 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

type CategoryButtonProps = {
  active: boolean;
  onClick: () => void;
  label: string;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({ active, onClick, label }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-full text-sm transition-colors ${
      active 
        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium' 
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
    }`}
  >
    {label}
  </button>
);

type EmptyStateProps = {
  message: string;
};

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => (
  <div className="text-center py-16">
    <Bookmark className="w-16 h-16 mx-auto text-gray-400 mb-4" />
    <h3 className="text-2xl font-semibold mb-2">Nothing Found</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">
      {message}
    </p>
    <button 
      onClick={() => window.location.reload()}
      className="btn btn-primary"
    >
      Reset Filters
    </button>
  </div>
);

type AchievementCardProps = {
  achievement: typeof achievements[0];
};

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => (
  <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
    <div className="h-48 overflow-hidden">
      <img 
        src={achievement.image} 
        alt={achievement.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center mb-2">
        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs capitalize">
          {achievement.category}
        </span>
        <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {achievement.year}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {achievement.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {achievement.description}
      </p>
    </div>
  </div>
);

type EventCardProps = {
  event: typeof events[0];
};

const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group flex flex-col md:flex-row">
    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6 md:w-2/3">
      <div className="flex justify-between items-center mb-2">
        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs capitalize">
          {event.category}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {event.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {event.description}
      </p>
      <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center mt-auto">
        <Calendar className="w-4 h-4 mr-1" />
        {event.date}
      </div>
    </div>
  </div>
);

type TestimonialCardProps = {
  testimonial: typeof testimonials[0];
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
    <div className="flex mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i <= testimonial.rating ? 'text-amber-500 fill-current' : 'text-gray-300 dark:text-gray-700'}`} 
        />
      ))}
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
    <div className="flex items-center">
      <img 
        src={testimonial.image} 
        alt={testimonial.name} 
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="font-semibold">{testimonial.name}</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export default PortfolioPage;
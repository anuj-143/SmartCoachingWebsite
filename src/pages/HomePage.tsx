import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, Users, BookOpen, ChevronRight, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          mixBlendMode: 'overlay' 
        }}></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Unlock Your Academic Potential
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Personalized coaching for students of all ages to excel in their academic journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/courses" className="btn btn-accent text-lg px-8 py-4">
              Explore Courses
            </Link>
            <Link to="/signup" className="btn bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-4">
              Get Started
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <a 
            href="#intro" 
            className="animate-bounce inline-block rounded-full p-2 bg-white/20 hover:bg-white/30"
            aria-label="Scroll down"
          >
            <ChevronRight className="w-6 h-6 transform rotate-90" />
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="section bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Welcome to SmartCoach</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Where every student receives the guidance and support they need to achieve academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<BookOpen className="w-10 h-10 text-blue-600" />}
              title="Expert Tutors"
              description="Learn from qualified educators with years of experience in their fields."
            />
            <FeatureCard 
              icon={<Users className="w-10 h-10 text-blue-600" />}
              title="Small Groups"
              description="Small class sizes ensure personalized attention for every student."
            />
            <FeatureCard 
              icon={<CheckCircle2 className="w-10 h-10 text-blue-600" />}
              title="Proven Methods"
              description="Our teaching methodologies have consistently delivered exceptional results."
            />
            <FeatureCard 
              icon={<Award className="w-10 h-10 text-blue-600" />}
              title="Track Record"
              description="Our students consistently achieve top grades and gain admission to prestigious institutions."
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Mission</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To empower students with the knowledge, skills, and confidence needed to excel academically and pursue their dreams. We are committed to providing high-quality education that is accessible, engaging, and tailored to individual learning needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Vision</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To be the leading educational coaching center known for excellence, innovation, and student success. We envision a world where every student has access to exceptional educational resources and personalized guidance to reach their full potential.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Courses</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover our most sought-after programs designed to help students excel in various subjects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard 
              image="https://images.pexels.com/photos/5905484/pexels-photo-5905484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Advanced Mathematics"
              description="Master complex mathematical concepts with our comprehensive curriculum."
              price="$199"
              duration="12 weeks"
              path="/courses/mathematics"
            />
            <CourseCard 
              image="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Science Exploration"
              description="Hands-on experiments and in-depth learning for curious minds."
              price="$179"
              duration="10 weeks"
              path="/courses/science"
            />
            <CourseCard 
              image="https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="SAT Test Preparation"
              description="Comprehensive preparation for college entrance exams with proven strategies."
              price="$249"
              duration="8 weeks"
              path="/courses/test-prep"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/courses" className="btn btn-outline inline-flex items-center">
              View All Courses
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-blue-50 dark:bg-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Hear from our students about their experience and success with SmartCoach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="SmartCoach completely transformed my understanding of calculus. I went from struggling to get a C to confidently earning an A in my AP exam."
              name="Emily Johnson"
              title="High School Senior"
              image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TestimonialCard 
              quote="The SAT prep course was exactly what I needed. The strategies and practice tests helped me raise my score by 200 points!"
              name="Michael Chang"
              title="College Freshman"
              image="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TestimonialCard 
              quote="As a parent, I'm extremely impressed with the quality of education my daughter receives. The teachers are attentive and truly care about her progress."
              name="Sarah Williams"
              title="Parent"
              image="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Excel?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their academic performance with SmartCoach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="btn bg-white text-blue-700 hover:bg-gray-100 text-lg">
              Enroll Today
            </Link>
            <Link to="/contact" className="btn border-2 border-white bg-transparent hover:bg-white/10 text-white text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper components
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

type CourseCardProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  path: string;
};

const CourseCard: React.FC<CourseCardProps> = ({ image, title, description, price, duration, path }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-lg">{price}</span>
        <span className="text-gray-500 dark:text-gray-400 text-sm">{duration}</span>
      </div>
      <Link 
        to={path} 
        className="block w-full text-center py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
      >
        View Course
      </Link>
    </div>
  </div>
);

type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  image: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, image }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
    <div className="flex mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
      ))}
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{quote}"</p>
    <div className="flex items-center">
      <img 
        src={image} 
        alt={name} 
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{title}</p>
      </div>
    </div>
  </div>
);

export default HomePage;
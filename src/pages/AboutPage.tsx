import React from 'react';
import { Calendar, Award, BookOpen, Users, CheckCircle, Lightbulb, GraduationCap, BookText } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SmartCoach</h1>
          <p className="text-xl max-w-3xl">
            Learn more about our journey, mission, and the dedicated team behind SmartCoach.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                SmartCoach was founded in 2015 by a group of passionate educators who believed that every student deserves access to high-quality education and personalized guidance. What started as a small tutoring center with just 5 teachers has now grown into a comprehensive educational coaching institution with over 50 expert educators and thousands of success stories.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our journey has been driven by a simple principle: understanding each student's unique learning style and tailoring our approach accordingly. We've continually evolved our teaching methodologies, integrated the latest educational research, and embraced technology to provide the most effective learning experience.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Today, SmartCoach stands as a trusted name in education, known for its excellence in academic coaching, personalized attention, and outstanding results. We continue to grow and expand our offerings while maintaining the same dedication to student success that has been our foundation since day one.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="SmartCoach building" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md">
              <div className="mb-4 inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Lightbulb className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To empower students with the knowledge, skills, and confidence needed to excel academically and pursue their dreams. We are committed to providing high-quality education that is accessible, engaging, and tailored to individual learning needs.
              </p>
              <ul className="mt-6 space-y-3">
                <MissionItem>
                  Provide personalized learning experiences for every student
                </MissionItem>
                <MissionItem>
                  Cultivate critical thinking and problem-solving skills
                </MissionItem>
                <MissionItem>
                  Create a supportive and motivating learning environment
                </MissionItem>
                <MissionItem>
                  Continuously improve our teaching methods based on research
                </MissionItem>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md">
              <div className="mb-4 inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the leading educational coaching center known for excellence, innovation, and student success. We envision a world where every student has access to exceptional educational resources and personalized guidance to reach their full potential.
              </p>
              <ul className="mt-6 space-y-3">
                <MissionItem>
                  Become the most trusted name in educational coaching
                </MissionItem>
                <MissionItem>
                  Expand our reach to help more students globally
                </MissionItem>
                <MissionItem>
                  Pioneer innovative teaching approaches
                </MissionItem>
                <MissionItem>
                  Contribute to the advancement of education as a whole
                </MissionItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do at SmartCoach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Users className="w-10 h-10 text-blue-600" />}
              title="Student-Centered"
              description="We put the needs and success of our students at the center of every decision we make."
            />
            <ValueCard 
              icon={<Award className="w-10 h-10 text-blue-600" />}
              title="Excellence"
              description="We strive for excellence in our teaching methods, course materials, and student outcomes."
            />
            <ValueCard 
              icon={<BookOpen className="w-10 h-10 text-blue-600" />}
              title="Continuous Learning"
              description="We are committed to ongoing improvement and staying current with educational best practices."
            />
            <ValueCard 
              icon={<CheckCircle className="w-10 h-10 text-blue-600" />}
              title="Integrity"
              description="We operate with honesty, transparency, and ethical practices in all our interactions."
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Key milestones in the evolution of SmartCoach
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
            
            <div className="space-y-16">
              <TimelineItem 
                year="2015"
                title="Foundation"
                description="SmartCoach was founded with 5 teachers and a vision to transform education."
                isLeft={true}
              />
              <TimelineItem 
                year="2017"
                title="First Expansion"
                description="Opened our second location and expanded our course offerings to include more subjects."
                isLeft={false}
              />
              <TimelineItem 
                year="2019"
                title="Technology Integration"
                description="Launched our digital learning platform to complement in-person coaching."
                isLeft={true}
              />
              <TimelineItem 
                year="2021"
                title="National Recognition"
                description="Received the 'Excellence in Education' award for our innovative teaching methods."
                isLeft={false}
              />
              <TimelineItem 
                year="2023"
                title="Global Reach"
                description="Expanded to international markets and introduced virtual coaching programs."
                isLeft={true}
              />
              <TimelineItem 
                year="2025"
                title="Today & Beyond"
                description="Continuing to innovate and expand while staying true to our mission of student success."
                isLeft={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Meet the dedicated professionals guiding SmartCoach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              name="Dr. Sarah Johnson"
              role="Founder & CEO"
              bio="With over 20 years in education, Dr. Johnson leads SmartCoach with a passion for transforming how students learn."
              image="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TeamMember 
              name="Prof. Michael Chen"
              role="Academic Director"
              bio="An expert in curriculum development, Prof. Chen ensures our teaching methodologies remain at the cutting edge."
              image="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TeamMember 
              name="Dr. Emily Rodriguez"
              role="Head of STEM Programs"
              bio="With a PhD in Physics, Dr. Rodriguez brings scientific rigor and innovation to our STEM curriculum."
              image="https://images.pexels.com/photos/5905733/pexels-photo-5905733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TeamMember 
              name="Robert Williams"
              role="Director of Student Success"
              bio="Robert's background in psychology helps him create supportive environments where students thrive."
              image="https://images.pexels.com/photos/7647974/pexels-photo-7647974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TeamMember 
              name="Sophia Patel"
              role="Director of Technology"
              bio="Sophia leads our digital transformation, integrating technology to enhance the learning experience."
              image="https://images.pexels.com/photos/5212309/pexels-photo-5212309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TeamMember 
              name="Daniel Kim"
              role="Head of Humanities"
              bio="An accomplished author and educator, Daniel brings creativity and critical thinking to our humanities programs."
              image="https://images.pexels.com/photos/5905694/pexels-photo-5905694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Join the SmartCoach Family</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference personalized education can make in your academic journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/courses" className="btn bg-white text-blue-700 hover:bg-gray-100 text-lg">
              Explore Our Courses
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

// Helper components
type MissionItemProps = {
  children: React.ReactNode;
};

const MissionItem: React.FC<MissionItemProps> = ({ children }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 mt-1">
      <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />
    </div>
    <span className="ml-2 text-gray-700 dark:text-gray-300">{children}</span>
  </li>
);

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
    <div className="mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full inline-block">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLeft }) => (
  <div className={`flex items-center justify-${isLeft ? 'start' : 'end'} relative`}>
    <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'order-last text-left pl-8'}`}>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2 font-medium">
        <Calendar className={`h-4 w-4 ${isLeft ? 'ml-2 order-last' : 'mr-2'}`} />
        <span>{year}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
    
    <div className="z-10 bg-blue-600 rounded-full h-6 w-6 flex items-center justify-center border-4 border-white dark:border-gray-800"></div>
    
    <div className={`w-5/12 ${isLeft ? 'order-last' : ''}`}></div>
  </div>
);

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
    <div className="h-64 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-blue-600 dark:text-blue-400 mb-3 font-medium">{role}</p>
      <p className="text-gray-600 dark:text-gray-400">{bio}</p>
    </div>
  </div>
);

export default AboutPage;
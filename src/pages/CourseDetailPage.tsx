import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, BookOpen, CheckCircle, Star, Play, Calendar } from 'lucide-react';

// Sample course data (in a real app, this would come from an API)
const coursesData = [
  {
    id: 'mathematics',
    title: 'Advanced Mathematics',
    category: 'mathematics',
    level: 'advanced',
    description: 'Master complex mathematical concepts including calculus, algebra, and statistics with our comprehensive course designed for high school and college students.',
    longDescription: 'This advanced mathematics course is designed to challenge and expand your mathematical understanding. You\'ll explore complex topics in calculus, algebra, linear algebra, and statistics through a combination of lectures, problem-solving sessions, and real-world applications. Our experienced instructors will guide you through difficult concepts with clarity and provide personalized feedback on your progress. By the end of this course, you\'ll have developed strong problem-solving skills and a deep understanding of mathematical principles that will prepare you for college-level mathematics and beyond.',
    price: 199,
    duration: '12 weeks',
    schedule: 'Mondays and Wednesdays, 4:00 PM - 5:30 PM',
    startDate: 'September 15, 2023',
    rating: 4.8,
    students: 1245,
    instructor: {
      name: 'Dr. Robert Chen',
      bio: 'PhD in Mathematics with 15 years of teaching experience',
      image: 'https://images.pexels.com/photos/5905694/pexels-photo-5905694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    image: 'https://images.pexels.com/photos/5905484/pexels-photo-5905484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    curriculum: [
      {
        week: 1,
        title: 'Introduction to Advanced Mathematical Concepts',
        topics: ['Course overview', 'Review of prerequisite knowledge', 'Mathematical reasoning and proof techniques']
      },
      {
        week: 2,
        title: 'Calculus I: Limits and Continuity',
        topics: ['Understanding limits', 'Continuity of functions', 'Epsilon-delta definitions']
      },
      {
        week: 3,
        title: 'Calculus II: Differentiation',
        topics: ['Derivatives and their applications', 'Implicit differentiation', 'Related rates']
      },
      {
        week: 4,
        title: 'Calculus III: Integration',
        topics: ['Definite and indefinite integrals', 'Techniques of integration', 'Applications of integration']
      },
      {
        week: 5,
        title: 'Linear Algebra I',
        topics: ['Vector spaces', 'Matrix operations', 'Systems of linear equations']
      },
      {
        week: 6,
        title: 'Linear Algebra II',
        topics: ['Eigenvalues and eigenvectors', 'Diagonalization', 'Applications of linear algebra']
      },
      {
        week: 7,
        title: 'Advanced Algebra',
        topics: ['Group theory', 'Ring theory', 'Field theory']
      },
      {
        week: 8,
        title: 'Probability Theory',
        topics: ['Probability spaces', 'Random variables', 'Expectation and variance']
      },
      {
        week: 9,
        title: 'Statistics',
        topics: ['Sampling distributions', 'Hypothesis testing', 'Confidence intervals']
      },
      {
        week: 10,
        title: 'Differential Equations',
        topics: ['First-order equations', 'Second-order linear equations', 'Systems of differential equations']
      },
      {
        week: 11,
        title: 'Complex Analysis',
        topics: ['Complex numbers', 'Complex functions', 'Contour integration']
      },
      {
        week: 12,
        title: 'Final Project and Review',
        topics: ['Project presentations', 'Comprehensive review', 'Preparation for future studies']
      }
    ]
  },
  {
    id: 'science',
    title: 'Science Exploration',
    category: 'science',
    level: 'intermediate',
    description: 'Hands-on experiments and in-depth learning for curious minds in physics, chemistry, and biology.',
    longDescription: 'Our Science Exploration course takes students on a journey through the fascinating worlds of physics, chemistry, and biology. Through a combination of engaging lectures, hands-on laboratory experiments, and field trips, students will develop a deeper understanding of scientific principles and their real-world applications. This course is designed to foster critical thinking, scientific inquiry, and problem-solving skills while inspiring a lifelong passion for science. Our experienced instructors create a supportive learning environment where questions are encouraged and curiosity is rewarded.',
    price: 179,
    duration: '10 weeks',
    schedule: 'Tuesdays and Thursdays, 4:30 PM - 6:00 PM',
    startDate: 'October 3, 2023',
    rating: 4.7,
    students: 986,
    instructor: {
      name: 'Dr. Emily Rodriguez',
      bio: 'PhD in Physics with expertise in interdisciplinary science education',
      image: 'https://images.pexels.com/photos/5905733/pexels-photo-5905733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    curriculum: [
      {
        week: 1,
        title: 'Introduction to Scientific Method',
        topics: ['Scientific inquiry process', 'Observation and hypothesis formation', 'Experimental design']
      },
      {
        week: 2,
        title: 'Physics: Motion and Forces',
        topics: ['Newton\'s laws of motion', 'Momentum and energy', 'Practical experiments']
      },
      {
        week: 3,
        title: 'Physics: Waves and Sound',
        topics: ['Properties of waves', 'Sound transmission', 'Musical instruments physics']
      },
      {
        week: 4,
        title: 'Chemistry: Atomic Structure',
        topics: ['Atoms and elements', 'Periodic table exploration', 'Electron configuration']
      },
      {
        week: 5,
        title: 'Chemistry: Chemical Reactions',
        topics: ['Types of reactions', 'Balancing equations', 'Laboratory experiments']
      },
      {
        week: 6,
        title: 'Biology: Cell Structure and Function',
        topics: ['Cell organelles', 'Cellular processes', 'Microscopy lab']
      },
      {
        week: 7,
        title: 'Biology: Genetics',
        topics: ['DNA structure', 'Inheritance patterns', 'Genetic engineering basics']
      },
      {
        week: 8,
        title: 'Environmental Science',
        topics: ['Ecosystems', 'Human impact on environment', 'Sustainability']
      },
      {
        week: 9,
        title: 'Integrated Science Projects',
        topics: ['Cross-disciplinary investigations', 'Team research projects', 'Data analysis']
      },
      {
        week: 10,
        title: 'Science Fair Preparation',
        topics: ['Project presentations', 'Scientific communication', 'Future paths in science']
      }
    ]
  },
  {
    id: 'test-prep',
    title: 'SAT Test Preparation',
    category: 'test-prep',
    level: 'advanced',
    description: 'Comprehensive preparation for college entrance exams with proven strategies.',
    longDescription: 'Our SAT Test Preparation course is designed to equip students with the knowledge, strategies, and confidence needed to excel on the SAT exam. The curriculum covers all sections of the test: Reading, Writing & Language, Math, and the optional Essay. Through diagnostic assessments, targeted instruction, and extensive practice with authentic SAT questions, students will identify their strengths and weaknesses and develop effective test-taking strategies. Our experienced instructors provide personalized feedback and guidance throughout the course, helping students maximize their scores and strengthen their college applications.',
    price: 249,
    duration: '8 weeks',
    schedule: 'Saturdays, 10:00 AM - 1:00 PM',
    startDate: 'August 5, 2023',
    rating: 4.9,
    students: 2345,
    instructor: {
      name: 'Jennifer Lopez',
      bio: 'Education specialist with 10+ years of SAT prep experience',
      image: 'https://images.pexels.com/photos/5212309/pexels-photo-5212309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    image: 'https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    curriculum: [
      {
        week: 1,
        title: 'SAT Overview and Diagnostic Test',
        topics: ['Test structure and scoring', 'Initial diagnostic assessment', 'Setting target scores']
      },
      {
        week: 2,
        title: 'Reading Section: Strategies and Practice',
        topics: ['Critical reading techniques', 'Main idea and supporting details', 'Inference questions']
      },
      {
        week: 3,
        title: 'Writing & Language: Grammar and Structure',
        topics: ['Grammar rules review', 'Sentence structure', 'Rhetorical skills']
      },
      {
        week: 4,
        title: 'Math: Algebra and Problem Solving',
        topics: ['Algebraic expressions', 'Word problems', 'Data analysis']
      },
      {
        week: 5,
        title: 'Math: Advanced Topics',
        topics: ['Geometry and trigonometry', 'Complex equations', 'Calculator strategies']
      },
      {
        week: 6,
        title: 'Essay Writing (Optional)',
        topics: ['Essay structure', 'Analysis techniques', 'Practice essays']
      },
      {
        week: 7,
        title: 'Full-Length Practice Tests',
        topics: ['Timed practice test', 'Review and analysis', 'Strategy refinement']
      },
      {
        week: 8,
        title: 'Final Review and Test Day Preparation',
        topics: ['Comprehensive review', 'Test day strategies', 'Stress management techniques']
      }
    ]
  }
];

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor'>('overview');
  const [course, setCourse] = useState<typeof coursesData[0] | null>(null);

  useEffect(() => {
    // Find the course by ID
    const foundCourse = coursesData.find(course => course.id === id);
    if (foundCourse) {
      setCourse(foundCourse);
      // Update document title with course name
      document.title = `${foundCourse.title} - SmartCoach`;
    }
  }, [id]);

  if (!course) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
          <p className="mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Link to="/courses" className="btn btn-primary">
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Course Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <div className="flex items-center text-sm mb-2">
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                  {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                </span>
                <span className="mx-2">•</span>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <span className="ml-1 font-medium">{course.rating}</span>
                  <span className="ml-1 text-white/70">({course.students} students)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-1" />
                  <span>Starts {course.startDate}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold">${course.price}</div>
                <button className="btn btn-accent">
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Tabs */}
      <section className="py-4 bg-white dark:bg-gray-900 sticky top-16 z-20 shadow-md">
        <div className="container">
          <div className="flex overflow-x-auto">
            <TabButton 
              active={activeTab === 'overview'} 
              onClick={() => setActiveTab('overview')}
              label="Overview"
            />
            <TabButton 
              active={activeTab === 'curriculum'} 
              onClick={() => setActiveTab('curriculum')}
              label="Curriculum"
            />
            <TabButton 
              active={activeTab === 'instructor'} 
              onClick={() => setActiveTab('instructor')}
              label="Instructor"
            />
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md">
                  <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {course.longDescription}
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {course.curriculum.slice(0, 6).map((week, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />
                        </div>
                        <span className="ml-2 text-gray-700 dark:text-gray-300">{week.title}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">Requirements</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
                    <li>Basic understanding of {course.category} fundamentals</li>
                    <li>Commitment to attending all scheduled classes</li>
                    <li>Completion of assigned homework and practice exercises</li>
                    <li>Recommended: Previous coursework in {course.category}</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mb-4">Who This Course Is For</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Students looking to excel in {course.category}</li>
                    <li>Learners preparing for advanced studies or examinations</li>
                    <li>Anyone seeking to deepen their understanding of {course.title}</li>
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md mb-8">
                  <h3 className="text-xl font-bold mb-4">Course Details</h3>
                  <div className="space-y-4">
                    <DetailItem icon={<Calendar className="w-5 h-5 text-blue-600" />} label="Start Date" value={course.startDate} />
                    <DetailItem icon={<Clock className="w-5 h-5 text-blue-600" />} label="Duration" value={course.duration} />
                    <DetailItem icon={<BookOpen className="w-5 h-5 text-blue-600" />} label="Schedule" value={course.schedule} />
                    <DetailItem icon={<Users className="w-5 h-5 text-blue-600" />} label="Class Size" value="Maximum 20 students" />
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Have questions about this course or need more information?
                  </p>
                  <Link to="/contact" className="btn btn-outline w-full">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Curriculum Tab */}
          {activeTab === 'curriculum' && (
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((week, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 flex justify-between items-center">
                      <div>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Week {week.week}</span>
                        <h3 className="text-lg font-semibold">{week.title}</h3>
                      </div>
                      <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                        <Play className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="px-6 py-4">
                      <ul className="space-y-2">
                        {week.topics.map((topic, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
                            </div>
                            <span className="ml-2 text-gray-700 dark:text-gray-300">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructor Tab */}
          {activeTab === 'instructor' && (
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Meet Your Instructor</h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src={course.instructor.image} 
                      alt={course.instructor.name} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">{course.instructor.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-4">{course.instructor.bio}</p>
                  <div className="prose max-w-none text-gray-700 dark:text-gray-300">
                    <p>
                      With extensive experience in teaching {course.category}, {course.instructor.name.split(' ')[0]} is dedicated to helping students achieve their academic goals. Their teaching philosophy focuses on building a strong conceptual foundation while developing practical problem-solving skills.
                    </p>
                    <p className="mt-4">
                      Students consistently praise {course.instructor.name.split(' ')[0]}'s ability to explain complex concepts in an accessible and engaging manner. Their classes combine rigorous academic content with interactive learning activities that cater to different learning styles.
                    </p>
                    <p className="mt-4">
                      In addition to teaching at SmartCoach, {course.instructor.name.split(' ')[0]} has published numerous articles in academic journals and regularly presents at educational conferences. They remain at the forefront of developments in {course.category} education and incorporate the latest research into their teaching methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Courses */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.filter(c => c.id !== course.id).slice(0, 3).map(relatedCourse => (
              <RelatedCourseCard key={relatedCourse.id} course={relatedCourse} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Enroll in {course.title} today and take the next step in your educational journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn bg-white text-blue-700 hover:bg-gray-100 text-lg">
              Enroll Now for ${course.price}
            </button>
            <Link to="/contact" className="btn border-2 border-white bg-transparent hover:bg-white/10 text-white text-lg">
              Ask a Question
            </Link>
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
  label: string;
};

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, label }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 font-medium transition-colors border-b-2 ${
      active 
        ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
        : 'border-transparent hover:text-blue-600 dark:hover:text-blue-400'
    }`}
  >
    {label}
  </button>
);

type DetailItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

const DetailItem: React.FC<DetailItemProps> = ({ icon, label, value }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mt-1">
      {icon}
    </div>
    <div className="ml-3">
      <p className="text-gray-500 dark:text-gray-400 text-sm">{label}</p>
      <p className="font-medium text-gray-800 dark:text-gray-200">{value}</p>
    </div>
  </div>
);

type RelatedCourseCardProps = {
  course: typeof coursesData[0];
};

const RelatedCourseCard: React.FC<RelatedCourseCardProps> = ({ course }) => (
  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
    <div className="h-48 overflow-hidden">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {course.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{course.description}</p>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-amber-500 fill-current" />
          <span className="ml-1 font-medium">{course.rating}</span>
        </div>
        <span className="font-bold">${course.price}</span>
      </div>
      <Link 
        to={`/courses/${course.id}`} 
        className="block w-full text-center py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
      >
        View Course
      </Link>
    </div>
  </div>
);

export default CourseDetailPage;
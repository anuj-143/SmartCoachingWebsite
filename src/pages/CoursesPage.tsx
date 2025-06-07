import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, Clock, Users, Star, BookOpen } from 'lucide-react';

// Sample course data
const coursesData = [
  {
    id: 'mathematics',
    title: 'Advanced Mathematics',
    category: 'mathematics',
    level: 'advanced',
    description: 'Master complex mathematical concepts including calculus, algebra, and statistics.',
    price: 199,
    duration: '12 weeks',
    rating: 4.8,
    students: 1245,
    image: 'https://images.pexels.com/photos/5905484/pexels-photo-5905484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'algebra',
    title: 'Algebra Fundamentals',
    category: 'mathematics',
    level: 'beginner',
    description: 'Build a strong foundation in algebraic concepts and problem-solving techniques.',
    price: 149,
    duration: '8 weeks',
    rating: 4.6,
    students: 1876,
    image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'science',
    title: 'Science Exploration',
    category: 'science',
    level: 'intermediate',
    description: 'Hands-on experiments and in-depth learning for curious minds in physics, chemistry, and biology.',
    price: 179,
    duration: '10 weeks',
    rating: 4.7,
    students: 986,
    image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'biology',
    title: 'Human Biology',
    category: 'science',
    level: 'intermediate',
    description: 'Comprehensive study of human anatomy, physiology, and biological systems.',
    price: 189,
    duration: '10 weeks',
    rating: 4.5,
    students: 754,
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'english',
    title: 'English Literature',
    category: 'english',
    level: 'intermediate',
    description: 'Analyze classic and contemporary works while developing critical thinking and writing skills.',
    price: 159,
    duration: '10 weeks',
    rating: 4.6,
    students: 1120,
    image: 'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'test-prep',
    title: 'SAT Test Preparation',
    category: 'test-prep',
    level: 'advanced',
    description: 'Comprehensive preparation for college entrance exams with proven strategies.',
    price: 249,
    duration: '8 weeks',
    rating: 4.9,
    students: 2345,
    image: 'https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'programming',
    title: 'Introduction to Programming',
    category: 'computer-science',
    level: 'beginner',
    description: 'Learn the fundamentals of programming with hands-on projects and exercises.',
    price: 199,
    duration: '12 weeks',
    rating: 4.7,
    students: 1680,
    image: 'https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'history',
    title: 'World History',
    category: 'social-studies',
    level: 'intermediate',
    description: 'Explore major historical events and their impact on modern society.',
    price: 169,
    duration: '10 weeks',
    rating: 4.5,
    students: 865,
    image: 'https://images.pexels.com/photos/6474494/pexels-photo-6474494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

// Available filters
const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'mathematics', name: 'Mathematics' },
  { id: 'science', name: 'Science' },
  { id: 'english', name: 'English' },
  { id: 'computer-science', name: 'Computer Science' },
  { id: 'test-prep', name: 'Test Preparation' },
  { id: 'social-studies', name: 'Social Studies' },
];

const levels = [
  { id: 'all', name: 'All Levels' },
  { id: 'beginner', name: 'Beginner' },
  { id: 'intermediate', name: 'Intermediate' },
  { id: 'advanced', name: 'Advanced' },
];

const CoursesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter courses based on selections
  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl max-w-3xl">
            Explore our wide range of courses designed to help you excel in your academic journey.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-100 dark:bg-gray-800 sticky top-16 z-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="input pl-10"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <button 
                onClick={toggleFilter}
                className="md:hidden flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
              
              <div className={`absolute md:relative top-full left-0 right-0 bg-white dark:bg-gray-800 p-4 md:p-0 shadow-md md:shadow-none z-30 ${isFilterOpen ? 'block' : 'hidden md:flex'} md:space-x-4`}>
                <div className="mb-4 md:mb-0">
                  <label htmlFor="category-filter" className="label md:sr-only">Category</label>
                  <select
                    id="category-filter"
                    className="input"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="level-filter" className="label md:sr-only">Level</label>
                  <select
                    id="level-filter"
                    className="input"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                  >
                    {levels.map((level) => (
                      <option key={level.id} value={level.id}>
                        {level.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Listings */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">{filteredCourses.length} Courses Available</h2>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No courses found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Try adjusting your filters or search terms.
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                  setSearchTerm('');
                }}
                className="btn btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// Helper components
type CourseCardProps = {
  course: typeof coursesData[0];
};

const CourseCard: React.FC<CourseCardProps> = ({ course }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
    <div className="h-48 overflow-hidden relative">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full text-sm font-medium">
        ${course.price}
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 dark:text-blue-200 text-blue-800 rounded-full text-xs">
          {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
        </span>
        <span className="ml-2 flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {course.duration}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {course.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{course.description}</p>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-amber-500 fill-current" />
          <span className="ml-1 font-medium">{course.rating}</span>
        </div>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
          <Users className="w-4 h-4 mr-1" />
          {course.students} students
        </div>
      </div>
      <Link 
        to={`/courses/${course.id}`} 
        className="block w-full text-center py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
      >
        View Course
      </Link>
    </div>
  </div>
);

export default CoursesPage;
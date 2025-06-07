import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, CalendarDays, BookText, GraduationCap, FileText, Users, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Sample enrolled courses data
const enrolledCourses = [
  {
    id: 'mathematics',
    title: 'Advanced Mathematics',
    progress: 65,
    nextClass: 'Monday, 4:00 PM',
    image: 'https://images.pexels.com/photos/5905484/pexels-photo-5905484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'science',
    title: 'Science Exploration',
    progress: 42,
    nextClass: 'Tuesday, 4:30 PM',
    image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Sample upcoming assignments
const upcomingAssignments = [
  {
    id: 1,
    title: 'Calculus Problem Set',
    course: 'Advanced Mathematics',
    dueDate: 'Sep 15, 2023',
    status: 'pending'
  },
  {
    id: 2,
    title: 'Lab Report: Chemical Reactions',
    course: 'Science Exploration',
    dueDate: 'Sep 18, 2023',
    status: 'pending'
  },
  {
    id: 3,
    title: 'Algebra Quiz',
    course: 'Advanced Mathematics',
    dueDate: 'Sep 10, 2023',
    status: 'completed'
  }
];

// Sample schedule
const schedule = [
  {
    id: 1,
    course: 'Advanced Mathematics',
    day: 'Monday',
    time: '4:00 PM - 5:30 PM',
    room: 'Room A101'
  },
  {
    id: 2,
    course: 'Science Exploration',
    day: 'Tuesday',
    time: '4:30 PM - 6:00 PM',
    room: 'Lab B202'
  },
  {
    id: 3,
    course: 'Advanced Mathematics',
    day: 'Wednesday',
    time: '4:00 PM - 5:30 PM',
    room: 'Room A101'
  },
  {
    id: 4,
    course: 'Science Exploration',
    day: 'Thursday',
    time: '4:30 PM - 6:00 PM',
    room: 'Lab B202'
  }
];

// Sample performance data
const performance = {
  overallGrade: 'A-',
  attendance: '92%',
  completedAssignments: '18/20',
  quizAverage: '88%'
};

const StudentDashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated or not a student
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else if (user?.role !== 'student') {
      navigate('/');
    }
  }, [isAuthenticated, user, navigate]);

  if (!isAuthenticated || user?.role !== 'student') {
    return null;
  }

  return (
    <div className="pt-24 pb-16">
      {/* Dashboard Header */}
      <section className="bg-blue-600 text-white py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Student Dashboard</h1>
          <p className="text-xl">Welcome back, {user.name}!</p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Enrolled Courses */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">My Courses</h2>
                  <a href="/courses" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Browse More Courses
                  </a>
                </div>
                
                <div className="space-y-6">
                  {enrolledCourses.map(course => (
                    <div key={course.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <div className="sm:w-1/4">
                        <div className="h-24 rounded-lg overflow-hidden">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="sm:w-3/4">
                        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                        <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>Next: {course.nextClass}</span>
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            <span>Progress: {course.progress}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <a href={`/courses/${course.id}`} className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                            View Course
                          </a>
                          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                            Continue Learning
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Upcoming Assignments */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Upcoming Assignments</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Assignment
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Course
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Due Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                      {upcomingAssignments.map(assignment => (
                        <tr key={assignment.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                              <span className="font-medium">{assignment.title}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                            {assignment.course}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                            {assignment.dueDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              assignment.status === 'completed' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            }`}>
                              {assignment.status === 'completed' ? 'Completed' : 'Pending'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Weekly Schedule */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-6">My Schedule</h2>
                <div className="space-y-4">
                  {schedule.map(session => (
                    <div key={session.id} className="flex items-start p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg p-3 mr-4">
                        <CalendarDays className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{session.course}</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {session.day}, {session.time}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {session.room}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Performance Summary */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-bold mb-6">My Performance</h2>
                <div className="grid grid-cols-2 gap-4">
                  <StatCard 
                    icon={<GraduationCap className="w-8 h-8 text-blue-600" />}
                    label="Overall Grade"
                    value={performance.overallGrade}
                  />
                  <StatCard 
                    icon={<Users className="w-8 h-8 text-green-600" />}
                    label="Attendance"
                    value={performance.attendance}
                  />
                  <StatCard 
                    icon={<FileText className="w-8 h-8 text-amber-600" />}
                    label="Assignments"
                    value={performance.completedAssignments}
                  />
                  <StatCard 
                    icon={<BookText className="w-8 h-8 text-purple-600" />}
                    label="Quiz Average"
                    value={performance.quizAverage}
                  />
                </div>
              </div>
              
              {/* Recommended Courses */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">Recommended Courses</h2>
                <div className="space-y-4">
                  <RecommendedCourse 
                    title="SAT Test Preparation"
                    rating={4.9}
                    path="/courses/test-prep"
                  />
                  <RecommendedCourse 
                    title="English Literature"
                    rating={4.6}
                    path="/courses/english"
                  />
                  <RecommendedCourse 
                    title="Introduction to Programming"
                    rating={4.7}
                    path="/courses/programming"
                  />
                </div>
              </div>
              
              {/* Resources */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">Resources</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>Study Materials</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                      <FileText className="w-4 h-4 mr-2" />
                      <span>Practice Tests</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Study Groups</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      <span>Academic Calendar</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

const StatCard: React.FC<StatCardProps> = ({ icon, label, value }) => (
  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
    <div className="flex justify-center mb-2">
      {icon}
    </div>
    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{label}</p>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

type RecommendedCourseProps = {
  title: string;
  rating: number;
  path: string;
};

const RecommendedCourse: React.FC<RecommendedCourseProps> = ({ title, rating, path }) => (
  <a 
    href={path}
    className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
  >
    <span className="font-medium">{title}</span>
    <div className="flex items-center">
      <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
      <span>{rating}</span>
    </div>
  </a>
);

export default StudentDashboard;
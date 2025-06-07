import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, CalendarDays, FileText, UserCheck, AlertCircle, Clock, BarChart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Sample teaching courses data
const teachingCourses = [
  {
    id: 'mathematics',
    title: 'Advanced Mathematics',
    students: 18,
    nextClass: 'Monday, 4:00 PM',
    completionRate: 65,
    image: 'https://images.pexels.com/photos/5905484/pexels-photo-5905484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'science',
    title: 'Science Exploration',
    students: 15,
    nextClass: 'Tuesday, 4:30 PM',
    completionRate: 42,
    image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'test-prep',
    title: 'SAT Test Preparation',
    students: 20,
    nextClass: 'Saturday, 10:00 AM',
    completionRate: 78,
    image: 'https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Sample pending tasks
const pendingTasks = [
  {
    id: 1,
    title: 'Grade Calculus Assignments',
    course: 'Advanced Mathematics',
    dueDate: 'Sep 15, 2023',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Prepare Lab Materials',
    course: 'Science Exploration',
    dueDate: 'Sep 12, 2023',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Review Test Results',
    course: 'SAT Test Preparation',
    dueDate: 'Sep 18, 2023',
    priority: 'low'
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
  },
  {
    id: 5,
    course: 'SAT Test Preparation',
    day: 'Saturday',
    time: '10:00 AM - 1:00 PM',
    room: 'Room C305'
  }
];

// Sample student concerns
const studentConcerns = [
  {
    id: 1,
    student: 'Emily Johnson',
    course: 'Advanced Mathematics',
    issue: 'Difficulty with integration concepts',
    status: 'new'
  },
  {
    id: 2,
    student: 'Michael Chang',
    course: 'SAT Test Preparation',
    issue: 'Requesting additional practice materials',
    status: 'in-progress'
  },
  {
    id: 3,
    student: 'Sarah Williams',
    course: 'Science Exploration',
    issue: 'Missed lab session due to illness',
    status: 'resolved'
  }
];

const TeacherDashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated or not a teacher
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else if (user?.role !== 'teacher') {
      navigate('/');
    }
  }, [isAuthenticated, user, navigate]);

  if (!isAuthenticated || user?.role !== 'teacher') {
    return null;
  }

  return (
    <div className="pt-24 pb-16">
      {/* Dashboard Header */}
      <section className="bg-blue-600 text-white py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Teacher Dashboard</h1>
          <p className="text-xl">Welcome back, {user.name}!</p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SummaryCard 
                  icon={<BookOpen className="w-8 h-8 text-blue-600" />}
                  label="Courses"
                  value="3"
                  color="blue"
                />
                <SummaryCard 
                  icon={<Users className="w-8 h-8 text-green-600" />}
                  label="Students"
                  value="53"
                  color="green"
                />
                <SummaryCard 
                  icon={<CalendarDays className="w-8 h-8 text-purple-600" />}
                  label="Classes This Week"
                  value="8"
                  color="purple"
                />
              </div>
              
              {/* Teaching Courses */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">My Courses</h2>
                  <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Manage All Courses
                  </button>
                </div>
                
                <div className="space-y-6">
                  {teachingCourses.map(course => (
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
                            <Users className="w-4 h-4 mr-1" />
                            <span>{course.students} Students</span>
                          </div>
                          <div className="flex items-center">
                            <BarChart className="w-4 h-4 mr-1" />
                            <span>Completion: {course.completionRate}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${course.completionRate}%` }}
                          ></div>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                            View Course
                          </button>
                          <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                            Manage Students
                          </button>
                          <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                            Update Materials
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Student Concerns */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Student Concerns</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Student
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Course
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Issue
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                      {studentConcerns.map(concern => (
                        <tr key={concern.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium">{concern.student}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                            {concern.course}
                          </td>
                          <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                            {concern.issue}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              concern.status === 'new' 
                                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' 
                                : concern.status === 'in-progress'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            }`}>
                              {concern.status === 'new' ? 'New' : concern.status === 'in-progress' ? 'In Progress' : 'Resolved'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button className="text-blue-600 dark:text-blue-400 hover:underline mr-4">
                              View
                            </button>
                            {concern.status !== 'resolved' && (
                              <button className="text-blue-600 dark:text-blue-400 hover:underline">
                                Resolve
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Pending Tasks */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">Pending Tasks</h2>
                <div className="space-y-4">
                  {pendingTasks.map(task => (
                    <div key={task.id} className="flex items-start p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className={`flex-shrink-0 w-4 h-4 mt-1 rounded-full ${
                        task.priority === 'high'
                          ? 'bg-red-500'
                          : task.priority === 'medium'
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                      }`}></div>
                      <div className="ml-3 flex-grow">
                        <h3 className="font-medium">{task.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {task.course} • Due {task.dueDate}
                        </p>
                      </div>
                      <button className="flex-shrink-0 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                        <FileText className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium">
                  View All Tasks
                </button>
              </div>
              
              {/* Weekly Schedule */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">Teaching Schedule</h2>
                <div className="space-y-3">
                  {schedule.map(session => (
                    <div key={session.id} className="flex items-start p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded p-1.5 mr-3">
                        <CalendarDays className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{session.course}</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {session.day}, {session.time}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {session.room}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-3">
                  <QuickActionButton 
                    icon={<FileText className="w-5 h-5" />}
                    label="Create Assignment"
                  />
                  <QuickActionButton 
                    icon={<UserCheck className="w-5 h-5" />}
                    label="Take Attendance"
                  />
                  <QuickActionButton 
                    icon={<BarChart className="w-5 h-5" />}
                    label="Grade Submissions"
                  />
                  <QuickActionButton 
                    icon={<AlertCircle className="w-5 h-5" />}
                    label="Send Announcement"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
type SummaryCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: 'blue' | 'green' | 'purple' | 'amber';
};

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, label, value, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    green: 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    purple: 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    amber: 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
  };
  
  return (
    <div className={`${colorClasses[color]} rounded-xl p-6 shadow-md`}>
      <div className="flex items-center mb-3">
        {icon}
      </div>
      <p className="text-3xl font-bold mb-1">{value}</p>
      <p className="text-sm">{label}</p>
    </div>
  );
};

type QuickActionButtonProps = {
  icon: React.ReactNode;
  label: string;
};

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ icon, label }) => (
  <button className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
    {icon}
    <span className="mt-2 text-sm font-medium">{label}</span>
  </button>
);

export default TeacherDashboard;
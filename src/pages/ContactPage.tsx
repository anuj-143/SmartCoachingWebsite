import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions or need more information? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                  title="Visit Us"
                  details={[
                    "123 Education Street",
                    "Learning City, ED 12345",
                    "United States"
                  ]}
                />
                
                <ContactInfo 
                  icon={<Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                  title="Email Us"
                  details={[
                    "info@smartcoach.edu",
                    "admissions@smartcoach.edu",
                    "support@smartcoach.edu"
                  ]}
                />
                
                <ContactInfo 
                  icon={<Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                  title="Call Us"
                  details={[
                    "(123) 456-7890",
                    "(123) 456-7891",
                    "Mon-Fri, 8:00 AM - 6:00 PM"
                  ]}
                />
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <SocialLink href="#" name="Facebook" />
                  <SocialLink href="#" name="Twitter" />
                  <SocialLink href="#" name="Instagram" />
                  <SocialLink href="#" name="LinkedIn" />
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Your message has been sent successfully! We'll get back to you soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="label">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="input"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="label">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="input"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="label">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="input"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="label">Subject *</label>
                        <select
                          id="subject"
                          name="subject"
                          className="input"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="course-inquiry">Course Inquiry</option>
                          <option value="admission">Admission</option>
                          <option value="billing">Billing & Payments</option>
                          <option value="career">Career Opportunities</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="label">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="input"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn btn-primary w-full md:w-auto"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader className="animate-spin -ml-1 mr-2 h-4 w-4" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Visit our main campus to experience the SmartCoach learning environment firsthand.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            {/* Placeholder for Google Maps (would be implemented with Google Maps API) */}
            <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-500 dark:text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  123 Education Street, Learning City, ED 12345
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Google Maps would be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Find quick answers to common questions about SmartCoach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FAQ 
              question="What are your operating hours?"
              answer="Our coaching center is open Monday through Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 3:00 PM. We are closed on Sundays and major holidays."
            />
            <FAQ 
              question="How can I enroll in a course?"
              answer="You can enroll in a course by visiting our website and registering online, calling our admissions office, or visiting our campus in person. Our team will guide you through the enrollment process."
            />
            <FAQ 
              question="Do you offer trial classes?"
              answer="Yes, we offer a free trial class for most of our courses. This allows prospective students to experience our teaching methods before committing to a full course."
            />
            <FAQ 
              question="What is your refund policy?"
              answer="We offer a full refund if you cancel within the first week of classes. After the first week, refunds are prorated based on the number of classes attended. Please contact our billing department for specific details."
            />
            <FAQ 
              question="Do you offer online coaching?"
              answer="Yes, we offer both in-person and online coaching options for most of our courses. Our virtual classrooms provide the same quality of education with added flexibility."
            />
            <FAQ 
              question="How are the classes structured?"
              answer="Our classes typically include a mix of lectures, interactive discussions, practice exercises, and assessments. The specific structure varies by course and subject area."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their academic performance with SmartCoach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/signup" className="btn bg-white text-blue-700 hover:bg-gray-100 text-lg">
              Enroll Today
            </a>
            <a href="/courses" className="btn border-2 border-white bg-transparent hover:bg-white/10 text-white text-lg">
              Browse Courses
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper components
type ContactInfoProps = {
  icon: React.ReactNode;
  title: string;
  details: string[];
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, details }) => (
  <div className="flex">
    <div className="flex-shrink-0 mt-1">
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="space-y-1">
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600 dark:text-gray-400">{detail}</p>
        ))}
      </div>
    </div>
  </div>
);

type SocialLinkProps = {
  href: string;
  name: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, name }) => (
  <a
    href={href}
    className="bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
    aria-label={name}
  >
    {/* This would typically be a specific icon for each platform */}
    <span className="text-sm font-bold">{name.charAt(0)}</span>
  </a>
);

type FAQProps = {
  question: string;
  answer: string;
};

const FAQ: React.FC<FAQProps> = ({ question, answer }) => (
  <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
    <h3 className="text-lg font-semibold mb-2">{question}</h3>
    <p className="text-gray-600 dark:text-gray-400">{answer}</p>
  </div>
);

export default ContactPage;
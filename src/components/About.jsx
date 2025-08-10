import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, User, Briefcase } from 'lucide-react';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-8 md:py-20 px-4 mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-4 md:p-8 shadow-xl">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-6 md:mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full p-1 mb-4 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white rounded-full p-2">
                <div className="w-full h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User size={32} className="text-white md:w-10 md:h-10" />
                </div>
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent text-center">
              Gourav Chaudhary
            </h1>
            <div className="flex items-center mt-2 text-gray-600 text-sm md:text-base">
              <MapPin size={16} className="mr-1" />
              <span>Himachal Pradesh, India</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-6 md:mb-8">
            {['about', 'skills', 'experience'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Content Sections */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
            {activeTab === 'about' && (
              <div className="space-y-4 md:space-y-6">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Passionate developer with a love for creating beautiful and functional web applications.
                  Always eager to learn and explore new technologies. Specialized in modern web development
                  practices and user-centric design principles.
                </p>
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
                  <ContactItem icon={<Mail className="text-pink-500" />} text="gourav@example.com" />
                  <ContactItem icon={<Phone className="text-pink-500" />} text="+91 98765 43210" />
                  <ContactItem icon={<Github className="text-pink-500" />} text="github.com/gourav" />
                  <ContactItem icon={<Linkedin className="text-pink-500" />} text="linkedin.com/in/gourav" />
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                <SkillCard title="Frontend" icon={<Code />} skills={['React', 'HTML5', 'CSS3', 'JavaScript']} />
                <SkillCard title="Backend" icon={<Code />} skills={['Node.js', 'Express', 'MongoDB', 'SQL']} />
                <SkillCard title="Tools" icon={<Briefcase />} skills={['Git', 'VS Code', 'Figma', 'Docker']} />
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-4 md:space-y-6">
                <ExperienceCard 
                  title="FullStack Developer"
                  company="Apni Hi Company Hai"
                  duration="2024 - Present"
                  description="Developed responsive web applications using React and Node.js."
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center space-x-3 p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors duration-300">
    {icon}
    <span className="text-gray-700 text-sm md:text-base">{text}</span>
  </div>
);

const SkillCard = ({ title, icon, skills }) => (
  <div className="p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors duration-300">
    <div className="flex items-center space-x-2 mb-2 md:mb-3">
      <span className="text-pink-500">{icon}</span>
      <h3 className="font-semibold text-gray-700 text-sm md:text-base">{title}</h3>
    </div>
    <ul className="space-y-1 md:space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-gray-600 text-sm md:text-base">{skill}</li>
      ))}
    </ul>
  </div>
);

const ExperienceCard = ({ title, company, duration, description }) => (
  <div className="p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors duration-300">
    <h3 className="font-semibold text-gray-800 text-sm md:text-base">{title}</h3>
    <div className="text-pink-500 text-sm md:text-base">{company}</div>
    <div className="text-gray-500 text-xs md:text-sm">{duration}</div>
    <p className="text-gray-600 mt-2 text-sm md:text-base">{description}</p>
  </div>
);

export default AboutMe;
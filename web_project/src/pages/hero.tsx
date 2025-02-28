import { FC } from 'react';
import BusinessTeam from '../assets/images/business-team.jpeg';
const Hero: FC = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transforming Businesses Through Innovation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your trusted partner in digital transformation and business solutions
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg transition-all duration-300">
              Learn More
            </button>
          </div>

          
        </div>
        <div className="md:w-1/2">
          <img 
            src={BusinessTeam} 
            alt="Business Team" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
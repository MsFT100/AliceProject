import { FC } from 'react';
import { FiCloud, FiShield, FiDatabase, FiSmartphone } from 'react-icons/fi';

const Services: FC = () => {
  const services = [
    {
      icon: <FiCloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for your growing needs"
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Cyber Security",
      description: "Protecting your digital assets 24/7"
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Turn data into actionable insights"
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions"
    }
  ];

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import { FC } from "react";

const AboutSection: FC = () => {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are committed to delivering innovative solutions that drive 
            success for businesses and individuals. Our team is dedicated 
            to creating seamless digital experiences that empower users 
            worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Core Values */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>✅ Customer-Centric Approach</li>
              <li>✅ Innovation & Excellence</li>
              <li>✅ Integrity & Transparency</li>
              <li>✅ Continuous Learning & Growth</li>
            </ul>
          </div>

          {/* Mission Statement */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              Our mission is to revolutionize the industry by providing 
              top-notch solutions that simplify, optimize, and enhance 
              the way businesses operate. We strive to build products that 
              create meaningful impact and lasting value.
            </p>
          </div>
        </div>

        {/* Link to About Us Page */}
        <div className="text-center mt-10">
          <a
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

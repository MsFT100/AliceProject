const CallToAction: React.FC = () => {
    return (
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Join us today and take your business to the next level. Contact us or sign up now!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="/sign-up"
              className="bg-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default CallToAction;
  
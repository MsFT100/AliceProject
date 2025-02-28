import CustomerReviews from "./customer_reviews";
import CaseStudies from "./case_studies";
import FeaturedCompanies from "./featured_companies";
import VideoTestimonials from "./video_testimonies";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Testimonials & Success Stories
        </h2>

        {/* Featured Company Logos */}
        <FeaturedCompanies />

        {/* Customer Reviews */}
        <CustomerReviews />

        {/* Video Testimonials */}
        <VideoTestimonials />

        {/* Case Studies */}
        <CaseStudies />

        {/* Link to Full Page */}
        <div className="text-center mt-10">
          <a
            href="/testimonials"
            className="text-blue-600 font-semibold hover:underline"
          >
            Read More Success Stories →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

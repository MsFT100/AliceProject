
import TestimonialImg from "../../assets/images/person-professional.jpeg";
import { FC } from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO at TechCorp",
    review:
      "This platform has completely transformed the way we manage our business. Highly recommend!",
    image: TestimonialImg,
  },
  {
    name: "Sarah Thompson",
    position: "Marketing Director at Creative Solutions",
    review:
      "A game changer! The UI is smooth, and everything just works seamlessly.",
    image: TestimonialImg,
  },
  {
    name: "David Williams",
    position: "Freelancer",
    review:
      "I love how intuitive and user-friendly the platform is. It has streamlined my workflow significantly.",
    image: TestimonialImg,
  },
];

const CustomerReviews: FC = () => {
  return (
    <section id="customer-reviews" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          More from Our Customers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                width={80}
                height={80}
                alt={testimonial.name}
                className="rounded-full mb-4"
              />
              <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
              <div className="text-gray-900 font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.position}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;

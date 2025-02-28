import { FC } from "react";
import Image from "../../assets/images/person-professional.jpeg";

const blogPosts = [
  {
    title: "The Future of AI in Business",
    excerpt: "How AI is revolutionizing industries and transforming business strategies.",
    image: Image,
    link: "/blog/future-of-ai",
    date: "Feb 22, 2025",
  },
  {
    title: "5 Key Trends in Digital Transformation",
    excerpt: "Stay ahead of the curve with these crucial digital transformation strategies.",
    image: Image,
    link: "/blog/digital-transformation-trends",
    date: "Feb 15, 2025",
  },
  {
    title: "How We Scaled Our Startup to 1M Users",
    excerpt: "Our journey from a small team to a global brand with over a million users.",
    image: Image,
    link: "/blog/startup-scaling",
    date: "Feb 10, 2025",
  },
];

const BlogSection: FC = () => {
  return (
    <section id="blog-section" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Latest News & Insights
        </h2>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{post.date}</p>
                <p className="text-gray-700 mt-3">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Blog Page */}
        <div className="text-center mt-10">
          <a
            href="/blog"
            className="text-blue-600 font-semibold hover:underline"
          >
            View All Articles →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

import { FC } from "react";

const caseStudies = [
  {
    title: "Scaling a Startup to 1M+ Users",
    description:
      "How we helped TechCorp scale their platform efficiently with our solutions.",
    link: "/case-studies/startup-growth",
  },
  {
    title: "Transforming E-Commerce Sales",
    description:
      "A deep dive into how we boosted sales for an online store by 150%.",
    link: "/case-studies/ecommerce",
  },
];

const CaseStudies: FC = () => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Case Studies
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg border border-gray-200"
          >
            <h4 className="text-lg font-semibold text-gray-900">
              {caseStudy.title}
            </h4>
            <p className="text-gray-600 mt-2">{caseStudy.description}</p>
            <a
              href={caseStudy.link}
              className="text-blue-500 font-medium mt-3 inline-block hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;

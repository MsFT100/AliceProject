const companyLogos = [
  {
    name: "Google",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Facebook",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "Amazon",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Tesla",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
];

const FeaturedCompanies = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Trusted by Leading Companies
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {companyLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.url}
            alt={logo.name}
            className="h-12 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCompanies;

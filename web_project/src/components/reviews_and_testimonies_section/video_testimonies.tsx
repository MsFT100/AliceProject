const VideoTestimonials = () => {
    return (
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          What Our Customers Say
        </h3>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Customer Testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default VideoTestimonials;
  
const About = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-violet-600 mb-6">
          About Us
        </h1>
        <p className="text-center text-lg text-gray-700 mb-10">
          We are a dedicated team committed to bringing warmth and hope to those in need by distributing essential winter clothing across Bangladesh.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white shadow-lg rounded-lg p-6 border animate__animated animate__backInLeft animate__delay-2s	2s animate__fast 500ms">
            <h2 className="text-2xl font-semibold text-violet-500 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to serve people in need by ensuring they are equipped with warm clothing during the harsh winters. We strive to foster compassion and community spirit, one act of kindness at a time.
            </p>
          </div>

          {/* How We Work */}
          <div className="bg-white shadow-lg rounded-lg p-6 border animate__animated animate__backInRight animate__delay-2s	2s animate__fast 500ms">
            <h2 className="text-2xl font-semibold text-violet-500 mb-4">Work Area</h2>
            <p className="text-gray-600">
              We collect donations from generous individuals and organizations. Our team of volunteers sorts and delivers the clothes to those in need, ensuring every item finds its way to a deserving recipient.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Join Our Cause</h3>
          <p className="text-gray-600">
            Whether you're donating clothes, volunteering, or spreading the word, your support makes a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

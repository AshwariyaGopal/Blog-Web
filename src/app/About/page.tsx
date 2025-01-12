import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-white pt-10">

      {/* About Section with Image on Left and Content on Right */}
      <main className="container mx-auto px-6 py-16 flex items-center">
        <section className="flex flex-col md:flex-row items-center justify-between w-full">
          
          {/* Left Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image src="/1_yBt65HhmARbqZDDJ1McFDg.png" alt="Fashion Blog Image" width={612} height={612} className="rounded-lg shadow-lg" />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 pl-0 md:pl-12 text-center md:text-left ">
            <h2 className="text-5xl font-extrabold mb-6 text-black">About Us</h2>
            <p className="text-xl  mb-8 leading-relaxed text-black">
              Welcome to Fashion Blog! We are a leading platform for all things fashion. Our mission is to provide insightful, trend-forward, and stylish content that caters to fashion enthusiasts across the globe. Whether you're looking for outfit inspiration, expert tips, or the latest news in the fashion world, we're here to keep you ahead of the curve.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-black">Our Mission</h3>
                <p className="text-lg leading-relaxed text-black">
                  At Fashion Blog, we are committed to empowering our readers by delivering high-quality content that enhances their personal style and keeps them informed about the latest fashion trends. We believe in inclusivity, creativity, and the transformative power of fashion. Our goal is to make fashion accessible, inspiring, and fun for everyone.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-black">Our Team</h3>
                <p className="text-lg leading-relaxed text-black">
                  Our team is composed of experienced fashion bloggers, trend analysts, and digital influencers who are passionate about bringing innovative and high-quality content to our readers. We are driven by creativity, expertise, and a shared love for fashion. Together, we aim to inspire and empower fashion lovers from all walks of life.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border text-black py-6 text-center tracking-wide shadow-lg drop-shadow-xl">
        <p>&copy; 2024 Fashion Blog | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default About;

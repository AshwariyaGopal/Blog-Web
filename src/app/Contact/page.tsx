"use client";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };
    console.log("Form submitted:", data);
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="bg-gray-50 mt-14">
      <section className="py-12 px-6 mx-auto max-w-screen-lg flex flex-col lg:flex-row gap-8">
        {/* Left Section - Form */}
        <div className="w-full lg:w-2/3">
          <h2 className="mb-6 text-4xl font-bold text-center text-gray-900">
            Get in Touch
          </h2>
          <p className="mb-10 text-center text-lg text-gray-600">
            Have any questions, feedback, or inquiries related to fashion? We'd love to hear from you.
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="block w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg"
                  placeholder="Bonnie"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="block w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg"
                  placeholder="Green"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="block w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg"
                  placeholder="+12 345 6789"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg"
                placeholder="Leave your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-5 text-white bg-black rounded-lg hover:bg-blue-900"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Right Section - Company Info */}
        <div className="w-full lg:w-1/3 xl:space-y-6 mt-48 xl:ml-20 ">
          <div>
            <h3 className="text-xl font-bold text-gray-900">FASHION STORE</h3>
            <p className="text-gray-600">Themesberg LLC</p>
            <p className="text-gray-600">Tax ID: USXXXXXX</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Address:</h3>
            <p className="text-gray-600">
              SILVER LAKE, United States 1941 Late Avenue
            </p>
            <p className="text-gray-600">Zip Code/Postal Code: 03875</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Call Us:</h3>
            <p className="text-gray-600">
              Call us to speak to a member of our team. We are happy to assist
              you with any inquiries.
            </p>
            <p className="mt-2">+1 (646) 786-5060</p>
          </div>
        </div>
      </section>
    </div>
  );
}

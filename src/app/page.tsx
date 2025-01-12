import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="xl:mt-8">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          {/* Text Section */}
          <div className="mr-auto place-self-center lg:col-span-7 mt-20 lg:-mt-72">
            <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-dark dark:text-white">
              Discover the Latest Trends in Fashion
            </h1>
            <p className="max-w-2xl mt-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Stay ahead with our curated collection of styles, tips, and
              exclusive looks from top designers around the world. Your journey
              into elegance starts here.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-blue-800 focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-900"
              >
                Explore Now
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <Link
                href="/Contact"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Contact Stylist
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:mt-0 lg:col-span-5 flex flex-col mt-10 lg:flex lg:flex-row lg:justify-end">
            <Link href="/Blog">
              <Image
                src="/3dac24a25f5e581a2620808665dfc5fa.png"
                alt="Fashion Mockup"
                width={600}
                height={300}
                className="rounded-lg shadow-lg w-full xs:w-full xs:h-auto"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}






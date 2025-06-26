import Image from 'next/image';
import type { Metadata} from 'next';

type Props = {};



export const metadata: Metadata = {
  title: 'Experience',
  description: 'Learn more about sandeep reddy professional experience.',
};

export default function Experience({}: Props) {
  return (
    <div
      id="experience"
      className=" pt-20  flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full  lg:mt-auto"
    >
      <section className="w-full">
        <p className="text-4xl mb-6 font-bold border-b-4 border-green-500 p-2 inline">
          Experience
        </p>

        <p className="text-secondary font-mono  my-6 w-full lg:w-[75%]">
          I’ve had the pleasure of working with excellent teams in small firms
          for over 5 years, designing and implementing both frontend and
          backends.
        </p>

        <div className="space-y-12 my-16">
          <div
            data-aos="fade-right"
            className="w-full border border-nav py-12 px-4 md:px-8 lg:px-16 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap"
          >
            <div className="flex flex-col justify-around">
              <Image
                src="/silicon-logo.png"
                alt=""
                width={150}
                height={150}
                className="w-80  bg-white mb-6 p-4 rounded-lg"
              />

              <div className=" text-black flex flex-col justify-around text-center">
                <div className="px-2 py-2 mb-2 text-sm bg-gray-100 font-bold rounded ">
                  MERN / Full Stack Dev
                </div>
                <div className="px-2 py-2 mb-2 text-sm bg-gray-100 font-bold rounded ">
                  Hyderabad, India.
                </div>
                <div
                  className="mb-2
                  px-2
                  py-2
                  text-xs
                  bg-gray-100
                  font-bold
                  rounded"
                >
                  july-2022 - Present
                </div>
              </div>
            </div>

            <div className="md:w-[70%] flex flex-wrap justify-center text-center lg:text-left lg:block">
              <h3 className="text-white text-5xl font-bold hidden lg:block">
                {/*it is the name of company i've been working with */}
                Silicon Matrix
              </h3>
              <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                <div className="px-2 py-2 text-sm bg-gray-900 font-semibold rounded-xl ">
                  React
                </div>
                <div className="px-2 py-2 text-sm bg-gray-900 font-semibold rounded-xl ">
                  Express
                </div>
                <div className="px-2 py-2 text-sm bg-gray-900 font-semibold rounded-xl ">
                  Node
                </div>
                <div className="px-2 py-2 text-sm bg-gray-900 font-semibold rounded-xl ">
                  Mongo DB
                </div>
              </div>
              <div className="font-sans mb-4">
                • Currently Building Fashion & Grocery E-commerce web app using
                MERN stack from the Ground up for an International Client.
              </div>
              <div>
                • Developed a housing and real estate web app using Next.js for
                a U.S. client. Led the optimization of a scalable backend and
                web responsiveness initiative, ensuring a seamless user
                experience across devices and broadening the platform’s reach
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="w-full border border-nav py-12 px-4 md:px-8 lg:px-16 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap"
          >
            <div className="flex flex-col justify-around">
              <Image
                src="/hdao logo.png"
                alt=""
                width={150}
                height={150}
                className="w-80 mx-auto bg-white mb-6 p-4 rounded-lg"
              />

              <div className="text-black flex flex-col justify-around text-center">
                <div className="px-2 py-2 mb-2 text-sm bg-gray-100 font-bold rounded ">
                  Frontend Dev
                </div>
                <div className="px-2 py-2 mb-2 text-sm bg-gray-100 font-bold rounded ">
                  Bangalore, India.
                </div>
                <div
                  className="mb-2
                  px-2
                  py-2
                  text-xs
                  bg-gray-100
                  font-bold
                  rounded"
                >
                  Jan-2020 - June-2022
                </div>
              </div>
            </div>

            <div className="md:w-[70%] flex flex-wrap justify-center text-center lg:text-left lg:block">
              {/* below h3 it is the name of company i've worked with*/}
              <h3 className="text-white text-5xl font-bold hidden lg:block">
                hdao{' '}
                <span className="text-base font-semibold"> info systems.</span>
              </h3>
              <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                <div className="px-2 py-2 text-sm bg-gray-900 font-bold rounded ">
                  Frontend Developer
                </div>
                <div className="px-2 py-2 text-sm bg-gray-900 font-semibold rounded-xl ">
                  React
                </div>
                <div className="px-2 py-2 text-sm bg-gray-900 font-semibold rounded-xl ">
                  CSS
                </div>
                <div className="px-2 py-2 text-sm bg-gray-900 font-semibold rounded-xl ">
                  Firebase
                </div>
              </div>
              <div className="font-sans mb-4">
                • Developed a next-generation Recruitment Automation Tool that
                streamlines the entire hiring process, featuring intelligent
                resume parsing, automated candidate evaluation, low-latency
                video interviews, and seamless interview scheduling and
                tracking. The tool is actively used by leading MNCs, including
                Infosys, to drive recruitment efficiency and enhance the overall
                hiring experience.
              </div>
              <div className="mb-4">
                • Converted Class-based components into efficient React Hooks,
                optimizing code structure and enhancing scalability. Introduced
                Firebase Authentication and database integration, reinforcing
                security measures and ensuring seamless data management within
                the application.
              </div>
              <div>
                • Optimized components for maximum performance across a vast
                array of web-capable devices and browsers.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

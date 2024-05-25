import hero from "../assets/hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // duration of animation in milliseconds
    });
  }, []);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            data-aos="zoom-out-right"
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Empowering Communication, Enhancing Lives
            </h1>
            <p className="mb-8 leading-relaxed">
              At <b>Speech Pathways</b>, we believe in the power of
              communication. Our dedicated Speech-Language Pathologists (SLPs)
              are here to help individuals of all ages overcome challenges with
              speech, language, voice, and swallowing. Through personalized and
              evidence-based therapy, we empower our clients to express
              themselves confidently and live their lives to the fullest.
            </p>
            <div className="flex justify-center">
              <a href="#contact">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-7 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">
                  Feedback
                </button>
              </a>
            </div>
          </div>
          <div
            data-aos="zoom-out-left"
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={hero}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

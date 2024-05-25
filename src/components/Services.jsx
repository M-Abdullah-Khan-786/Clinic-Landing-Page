import { servicesData } from "../data";

const Services = () => {
  return (
    <>
      <section className="text-gray-600 body-font" id="services">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Services Provided by Dr. John, Speech-Language Pathologist
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              A doctoral-level SLP may also engage in specialized areas like
              neurogenic communication disorders, pediatric feeding disorders,
              or voice therapy for professional voice users, offering highly
              individualized and expert care.
            </p>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            {servicesData.map((serv, id) => {
              return (
                <div className="lg:w-1/3 sm:w-1/2 p-4" key={id}>
                  <div className="flex relative border-solid border-black border-2 rounded-lg">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={serv.image_link}
                    />
                    <div
                      style={{ height: "250px" }}
                      className="px-8 py-12 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                    >
                      <h2 className="tracking-widest text-sm text-center title-font font-medium text-indigo-500 mb-4">
                        {serv.title}
                      </h2>
                      <p className="leading-relaxed text-center">
                        {serv.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

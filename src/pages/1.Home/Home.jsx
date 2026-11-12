import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-[url('https://files.123freevectors.com/wp-content/original/110497-blue-blurred-background-vector.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold tracking-wide">
            Compassionate Dental Care
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
            Welcome to Dentistry
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-800 font-semibold max-w-2xl mx-auto">
            Providing high-quality, compassionate dental care for every smile.
            Experience state-of-the-art treatments in a comfortable setting.
          </p>
          <div className="relative group mt-6 inline-block">
            <Link
              to="/Contact"
              className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-900 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <span className="relative z-10 block px-8 py-3.5 rounded-xl bg-gray-950">
                <div className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1 font-bold">
                    Book Appointment
                  </span>
                  <svg
                    className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[url('https://mobilesolutions.pt/wp-content/uploads/2016/02/Silver-Blur-Background-Wallpaper.jpg')] bg-cover bg-no-repeat">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose Dentistry?
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
            We combine modern clinical technology with gentle, patient-focused care to deliver healthy smiles.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl shadow-lg text-center bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <img
                src="https://www.evansondds.com/wp-content/uploads/Screen-Shot-2018-06-26-at-2.52.58-PM.png"
                alt="Advanced Technology"
                className="mx-auto mb-4 rounded-lg h-44 w-full object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Advanced Technology
              </h3>
              <p className="text-gray-600 text-sm">
                We use state-of-the-art equipment for precise, gentle, and
                effective treatments.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl shadow-lg text-center bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <img
                src="https://keystone.health/images/resources/in-home-care-elderly-woman.jpg"
                alt="Personalized Care"
                className="mx-auto mb-4 rounded-lg h-44 w-full object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Care</h3>
              <p className="text-gray-600 text-sm">
                Every treatment plan is tailored to your unique dental needs and
                long-term health goals.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl shadow-lg text-center bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <img
                src="https://i0.wp.com/smilesonharrogateroad.com/wp-content/uploads/2021/11/Dental-Clinics-In-Vientiane.jpg?resize=900%2C450&ssl=1"
                alt="Comfort First"
                className="mx-auto mb-4 rounded-lg h-44 w-full object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comfort First</h3>
              <p className="text-gray-600 text-sm">
                Our welcoming clinic environment and compassionate team make every visit stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[url('https://files.123freevectors.com/wp-content/original/110497-blue-blurred-background-vector.jpg')] bg-cover bg-no-repeat">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Dental Services
          </h2>
          <p className="text-center text-gray-800 max-w-2xl mx-auto mb-10">
            From routine checkups to specialized restorative care, Dentistry offers full-spectrum oral health treatments.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Preventive Care",
                desc: "Checkups, cleanings & exams",
                img: "https://www.woosterhospital.org/wp-content/uploads/sites/229/2023/11/iStock-1406691824-1.jpg",
              },
              {
                name: "Cosmetic Dentistry",
                desc: "Whitening, veneers & smile design",
                img: "https://www.dentalworldindia.com/wp-content/uploads/2024/09/Boost-your-confidence-with-a-smile-transformation.png",
              },
              {
                name: "Restorative Solutions",
                desc: "Implants, crowns & fillings",
                img: "https://restorativesolutionsdental.wordpress.com/wp-content/uploads/2019/02/cropped-rsdl-2-01.jpg",
              },
              {
                name: "Emergency Care",
                desc: "Immediate relief & urgent visits",
                img: "https://duggaldentalclinic.com/wp-content/uploads/2022/02/Emergency-Dental-Care.jpg",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/95 text-gray-700 hover:shadow-xl hover:border-teal-400 p-6 border rounded-xl shadow transition-all duration-300 text-center"
              >
                <img
                  src={service.img}
                  alt={service.name}
                  className="mx-auto mb-4 rounded-full h-24 w-24 object-cover ring-4 ring-teal-100"
                />
                <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-cyan-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Brighten Your Smile?
          </h2>
          <p className="mt-4 text-lg text-teal-100 max-w-xl mx-auto">
            Contact Dentistry today to schedule your consultation or routine checkup.
          </p>

          <Link
            to="/Contact"
            className="relative mt-8 inline-block px-8 py-3.5 overflow-hidden font-semibold text-white bg-indigo-600 rounded-lg group shadow-lg hover:shadow-xl transition-all"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-teal-800"></span>
            </span>
            <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-teal-800"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-700 rounded-md group-hover:translate-x-0"></span>
            <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out">
              Schedule Online
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

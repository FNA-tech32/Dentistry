import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-gray-100 py-12 bg-[url('https://mobilesolutions.pt/wp-content/uploads/2016/02/Silver-Blur-Background-Wallpaper.jpg')] bg-no-repeat bg-cover">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 mb-3 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold tracking-wide uppercase">
            About Our Practice
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            About Dentistry
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong className="text-gray-900">Dentistry</strong>, we are
            dedicated to providing exceptional dental care to our community.
            With years of clinical excellence and a genuine patient-first
            approach, we ensure every visit is comfortable, personalized, and
            effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Mission Section */}
          <div className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around border border-neutral-300 rounded-xl bg-white/90 backdrop-blur-sm p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-rose-200 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-purple-200 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
              <span className="font-extrabold text-2xl text-violet-700 block mb-3">
                Our Mission
              </span>
              <p className="text-neutral-700 leading-relaxed">
                To deliver comprehensive, compassionate, and innovative dental
                care that promotes lifelong oral health. We strive to create an
                inclusive, painless clinic experience where every patient leaves
                confident in their smile.
              </p>
            </div>
          </div>

          {/* Meet Our Team Section */}
          <div className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around border border-neutral-300 rounded-xl bg-white/90 backdrop-blur-sm p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-rose-200 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-purple-200 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
              <span className="font-extrabold text-2xl text-violet-700 block mb-3">
                Meet Our Team
              </span>
              <p className="text-neutral-700 leading-relaxed">
                Our skilled and caring team is led by{" "}
                <strong className="text-gray-900">Dr. Vikram Patel</strong>, who
                brings over 14 years of clinical experience in advanced
                dentistry. From our friendly front desk staff to our certified
                hygienists, we’re here to make your visit as smooth and
                stress-free as possible.
              </p>
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 mt-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Our Dental Specialties
          </h2>
          <p className="text-base text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            We provide a comprehensive range of dental services designed to help
            you maintain a healthy, radiant smile:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-teal-300 transition-colors">
              <div className="text-4xl mb-3">🦷</div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                Preventive Care
              </h3>
              <p className="text-gray-600 text-sm">
                Regular cleanings, exams, and sealants to prevent oral issues before they start.
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-teal-300 transition-colors">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                Cosmetic Dentistry
              </h3>
              <p className="text-gray-600 text-sm">
                Professional teeth whitening, porcelain veneers, and complete smile makeover plans.
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-teal-300 transition-colors">
              <div className="text-4xl mb-3">🛠️</div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                Restorative Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                Durable tooth-colored fillings, crowns, bridges, and dental implants.
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-teal-300 transition-colors">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                Emergency Care
              </h3>
              <p className="text-gray-600 text-sm">
                Same-day prompt relief for severe toothaches, chipped teeth, and urgent trauma.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/Contact"
              className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors shadow"
            >
              Contact Dentistry Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

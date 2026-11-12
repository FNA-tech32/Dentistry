import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    altContact: "",
    service: "General Checkup",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      altContact: "",
      service: "General Checkup",
      message: "",
    });
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div
        className="w-full text-center py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/bgContact.jpg')",
          backgroundColor: "#1e293b",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 mb-3 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase border border-teal-500/30">
            Dentistry Support & Appointments
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact Dentistry
          </h1>
          <p className="text-base md:text-lg text-gray-200 mt-3">
            Have questions, need a routine checkup, or require urgent dental care?
            Reach out via our primary or alternative contact lines below.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl w-full gap-8">
          {/* Left Column: Contact Details */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Get In Touch
                </h2>
                <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full border border-teal-200">
                  Dentistry Care Team
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                We are always here to help you smile with confidence. Use any of
                the primary or alternative channels below to get in touch with our
                clinic directly.
              </p>

              {/* Primary & Alternative Phone */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">
                        Phone Details
                      </h3>
                      <p className="text-sm text-gray-700 mt-0.5">
                        <span className="font-semibold text-gray-900">
                          Primary:
                        </span>{" "}
                        <a
                          href="tel:+919876543210"
                          className="text-teal-700 font-medium hover:underline"
                        >
                          +91 98765-43210
                        </a>
                      </p>
                      <p className="text-sm text-gray-700 mt-0.5">
                        <span className="font-semibold text-amber-700">
                          Alternative / Emergency:
                        </span>{" "}
                        <a
                          href="tel:+919123456789"
                          className="text-amber-800 font-medium hover:underline"
                        >
                          +91 91234-56789
                        </a>
                      </p>
                      <span className="text-xs text-gray-500 block mt-1">
                        *Alternative line is monitored 24/7 for urgent dental pain & emergencies.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Primary & Alternative Email */}
                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">
                        Email Details
                      </h3>
                      <p className="text-sm text-gray-700 mt-0.5">
                        <span className="font-semibold text-gray-900">
                          Primary Email:
                        </span>{" "}
                        <a
                          href="mailto:contact@dentistry.com"
                          className="text-blue-700 font-medium hover:underline"
                        >
                          contact@dentistry.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-700 mt-0.5">
                        <span className="font-semibold text-indigo-700">
                          Alternative Email:
                        </span>{" "}
                        <a
                          href="mailto:care@dentistry.com"
                          className="text-indigo-800 font-medium hover:underline"
                        >
                          care@dentistry.com
                        </a>
                      </p>
                      <span className="text-xs text-gray-500 block mt-1">
                        Average response time: within 2 to 4 business hours.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Primary & Alternative Locations */}
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">
                        Clinic Locations
                      </h3>
                      <p className="text-sm text-gray-700 mt-0.5">
                        <span className="font-semibold text-gray-900">
                          Primary Clinic:
                        </span>{" "}
                        1456 Pearl Avenue, Suite 200, Wellness Nagar, Mumbai - 400001
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        <span className="font-semibold text-gray-800">
                          Alternative Branch:
                        </span>{" "}
                        42 Health Boulevard, Downtown Medical Center, Mumbai - 400020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
                Office Hours
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div className="bg-gray-50 p-2 rounded">
                  <span className="font-semibold block text-gray-800">Mon - Fri</span>
                  9:00 AM - 5:00 PM
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="font-semibold block text-gray-800">Saturday</span>
                  10:00 AM - 2:00 PM
                </div>
                <div className="col-span-2 bg-teal-50/80 p-2 rounded text-teal-800 font-medium border border-teal-100">
                  Sunday: 24/7 Emergency Dental On-Call Assistance
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Book an Appointment
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill in your details below and our team will confirm your slot.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 flex items-start space-x-3 transition-all animate-fadeIn">
                <span className="text-xl">✅</span>
                <div className="text-sm">
                  <strong className="font-bold">Thank you for reaching out!</strong>
                  <p className="mt-0.5">
                    Your request has been received by Dentistry. We will contact
                    you shortly via your primary or alternative contact number.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Primary Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Primary Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765-43210"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Alternative Phone / Contact <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="altContact"
                    value={formData.altContact}
                    onChange={handleChange}
                    placeholder="Alternative number or whatsapp"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
                  >
                    <option value="General Checkup">Routine Dental Checkup</option>
                    <option value="Teeth Cleaning">Teeth Cleaning & Scaling</option>
                    <option value="Cosmetic Dentistry">Cosmetic & Whitening</option>
                    <option value="Restorative Implants">Dental Implants / Crowns</option>
                    <option value="Emergency Care">Emergency / Urgent Pain</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Your Message or Preferred Time *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your symptoms, question, or preferred appointment day/time..."
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition h-28"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-[0.99]"
              >
                Submit Appointment Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

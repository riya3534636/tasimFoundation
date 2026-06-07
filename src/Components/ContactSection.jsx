import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

        {/* Left Side */}
        <div className="bg-[#BF4408] text-white rounded-[24px] p-10">
          <p className="uppercase tracking-widest text-sm font-semibold mb-6">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-8">
            Let's get together and
            <br />
            bring the change!
          </h2>

          <p className="text-lg text-gray-100 mb-14">
            Reach out to us for collaborations, donations,
            volunteering opportunities, or any inquiries.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div>
              <h4 className="font-bold text-lg mb-2">Phone</h4>
              <p>+91 80 4200 4222</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Enquiries</h4>
              <p>info@tasimfoundation.org</p>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="font-bold text-lg mb-2">Address</h4>
            <p>
              #144, 1st Cross Road, MS Ramaiah North City
              <br />
              Road, Bangalore - 560077
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Social</h4>

            <div className="flex gap-3">
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                <FaLinkedinIn />
              </div>

              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white rounded-[24px] p-10 shadow-sm">
          <form className="space-y-6">

            <div>
              <label className="block font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full bg-[#F3F3F3] rounded-xl px-4 py-4 outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full bg-[#F3F3F3] rounded-xl px-4 py-4 outline-none"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Phone
                </label>

                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full bg-[#F3F3F3] rounded-xl px-4 py-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Enquiry
              </label>

              <select className="w-full bg-[#F3F3F3] rounded-xl px-4 py-4 outline-none">
                <option>Select Enquiry</option>
                <option>Donation</option>
                <option>Volunteer</option>
                <option>Partnership</option>
                <option>General Query</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Your message (optional)
              </label>

              <textarea
                rows="5"
                placeholder="Enter Your message (optional)"
                className="w-full bg-[#F3F3F3] rounded-xl px-4 py-4 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#BF4408] hover:bg-[#a73c07] text-white py-4 rounded-full font-semibold text-lg transition"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
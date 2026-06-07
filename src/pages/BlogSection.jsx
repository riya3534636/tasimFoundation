import {
  SiMailchimp,
  SiMedium,
  SiNetflix,
  SiNotion,
  SiPaypal,
  SiRazorpay,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa"; // Microsoft icon from Font Awesome
import { MdLocationOn } from "react-icons/md";
import education from "../assets/education.jpeg";
import enviorment from "../assets/enviorment.jpeg";
import healthcare from "../assets/healthcare.jpeg";
import { ArrowRight, Contact } from "lucide-react";
import image3 from "../assets/image3.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import { PiGraduationCap, PiHeart, PiStudent } from "react-icons/pi";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";
import image10 from "../assets/image10.jpeg";
import image11 from "../assets/image11.jpeg";
import image12 from "../assets/image12.jpeg";
import React, { useRef } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import {
  PiFlowerLotusLight,
  PiStarFourLight,
  PiPeaceLight,
  PiUsersThreeLight,
} from "react-icons/pi";
import {
  HiOutlineHandRaised,
} from "react-icons/hi2";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdHandshake } from "react-icons/md";
import image13 from "../assets/image13.jpeg";
import image14 from "../assets/image14.jpeg";

const CSRPartners = () => {
  const partners = [
    { name: "Mailchimp", icon: <SiMailchimp size={18} /> },
    { name: "Medium", icon: <SiMedium size={18} /> },
    { name: "Microsoft", icon: <FaMicrosoft size={18} /> },
    { name: "Netflix", icon: <SiNetflix size={18} /> },
    { name: "Notion", icon: <SiNotion size={18} /> },
    { name: "Outreach", icon: <MdLocationOn size={18} /> },
    { name: "PayPal", icon: <SiPaypal size={18} /> },
    { name: "Razorpay", icon: <SiRazorpay size={18} /> },
  ];

  const cards = [
    {
      title: "Education",
      image: education,
      description:
        "Empowering underprivileged youth with quality education, offering resources and opportunities.",
    },
    {
      title: "Environment",
      image: enviorment,
      description:
        "Dedicated to environmental conservation. We promote sustainable practices, green initiatives and awareness.",
    },
    {
      title: "Health Care",
      image: healthcare,
      description:
        "We provide accessible healthcare solutions, raising awareness and supporting communities.",
    },
  ];

  const initiatives = [
    {
      date: "January 31, 2026",
      title:
        '"Youth as Peacemakers: Cultivating a Culture of Peace in Local Communities"',
      image: image9, // ✅ directly assign the imported variable
    },
    {
      date: "January 31, 2026",
      title:
        '"Youth as Peacemakers: Cultivating a Culture of Peace in Local Communities"',
      image: image10,
    },
    {
      date: "January 31, 2026",
      title:
        '"Youth as Peacemakers: Cultivating a Culture of Peace in Local Communities"',
      image: image11,
    },
    {
      date: "January 31, 2026",
      title:
        '"Youth as Peacemakers: Cultivating a Culture of Peace in Local Communities"',
      image: image12,
    },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* CSR Partners Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-10xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-[40px] font-semibold text-black mb-8">
            Our CSR Partners
          </h2>

          {/* Partner Logos */}
          <div className="flex flex-nowrap gap-2 overflow-x-auto sm:overflow-visible px-2 scrollbar-hidden">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-[#E8E8E8]
                  rounded-[12px]
                  h-[64px]
                  px-8
                  flex
                  items-center
                  gap-2
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-300
                  flex-shrink-0
                "
              >
                <span className="text-black">{partner.icon}</span>
                <span className="text-[16px] font-bold text-[#222222]">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-[32px] sm:text-[40px] md:text-[45px] font-semibold text-[#111111] mb-4">
              What We Do
            </h2>
            <p className="text-[#666666] text-sm sm:text-base md:text-[16px] leading-7">
              At Tasim Foundation we support communities through education,
              environmental conservation and healthcare, creating sustainable
              impact and a brighter, healthier future for all.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative h-[400px] sm:h-[450px] md:h-[475px] rounded-[20px] overflow-hidden group"
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#221E1C]/80 via-[#221E1C]/60 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <h3 className="text-lg sm:text-xl md:text-[24px] font-bold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-[16px] leading-7 text-white/90 mb-6">
                    {card.description}
                  </p>
                  <button className="bg-white text-black rounded-full px-5 sm:px-6 py-2 sm:py-3 text-sm font-medium flex items-center gap-2 w-fit hover:bg-gray-100 transition">
                    Join Organization
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* {foundation} */}

      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Top Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            {/* Left Heading */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight font-semibold text-black max-w-[620px]">
                Creating Lasting Impact
                <br />
                for Children's Future
              </h2>
            </div>

            {/* Right Paragraph */}
            <div>
              <p className="text-sm sm:text-base md:text-lg leading-[1.7] text-[#3d3d3d] max-w-[650px]">
                We are a team of passionate individuals from various
                professional backgrounds who share a common vision of making a
                positive difference in the world.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr_340px] gap-10 lg:gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src={image3}
                alt="Children Education"
                className="w-full max-w-[340px] h-[200px] sm:h-[248px] object-cover rounded-[24px]"
              />
            </div>

            {/* Center Content */}
            <div className="flex flex-col justify-center">
              <p className="text-sm sm:text-base md:text-lg leading-[1.8] text-[#3d3d3d] mb-8">
                We combine real-world project execution experience with modern
                delivery frameworks and career insight. Unlike traditional
                consultancies or generic coaching platforms, Geminista delivers
                practical, outcome-driven results.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Senior practitioners, not junior consultants",
                  "Flexible, value-first delivery",
                  "Clear governance and measurable outcomes",
                  "Career guidance aligned with real hiring expectations",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <span className="w-6 h-6 rounded-full bg-[#c65b12] flex items-center justify-center text-white text-sm flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base md:text-lg text-[#4b4b4b]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="bg-[#BF4008] hover:bg-[#b34f0f] text-white font-semibold text-sm md:ml-47 sm:text-base md:text-[18px] px-6 py-3 rounded-full transition-all duration-300 w-fit">
                About Tasim Foundation
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={image6}
                alt="Community Impact"
                className="w-full max-w-[340px] h-[240px] sm:h-[340px] object-cover rounded-[24px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* {children development} */}

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight font-semibold text-black max-w-[620px]">
                What We Do for
                <br />
                Children's Development
              </h2>
            </div>

            <div className="flex lg:justify-end">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 max-w-md">
                We are a team of passionate individuals from various
                professional backgrounds who share a common vision of making a
                positive difference in the world.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-6">
            {/* Left Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={image7}
                alt="Children Development"
                className="w-full max-w-[782px] h-[300px] sm:h-[500px] md:h-[700px] lg:h-[1058px] object-cover rounded-[28px]"
              />
            </div>

            {/* Right Cards */}
            <div className="flex flex-col gap-5">
              {/* Education Support */}
              <div className="bg-[#C94C0C] text-white rounded-[28px] p-6 sm:p-8">
                <PiGraduationCap className="text-2xl sm:text-3xl mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                  Education Support
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-white/90">
                  We ensure academic continuity for every learner by providing
                  access to quality education, resources, and mentorship. Our
                  initiatives focus on bridging educational gaps caused by
                  financial, social, or digital barriers. By empowering students
                  with knowledge, skills, and confidence, we help shape
                  resilient individuals and build stronger future generations.
                </p>
              </div>

              {/* Healthcare Initiatives */}
              <div className="bg-[#ECECEC] rounded-[28px] p-6 sm:p-8">
                <PiHeart className="text-2xl sm:text-3xl text-gray-700 mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  Healthcare Initiatives
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-gray-600">
                  We ensure academic continuity for every learner by providing
                  access to quality education, resources, and mentorship. Our
                  initiatives focus on bridging educational gaps caused by
                  financial, social, or digital barriers. By empowering students
                  with knowledge, skills, and confidence, we help shape
                  resilient individuals and build stronger future generations.
                </p>
              </div>

              {/* Skills Development */}
              <div className="bg-[#ECECEC] rounded-[28px] p-6 sm:p-8">
                <PiStudent className="text-2xl sm:text-3xl text-gray-700 mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  Skills Development
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-gray-600">
                  We ensure academic continuity for every learner by providing
                  access to quality education, resources, and mentorship. Our
                  initiatives focus on bridging educational gaps caused by
                  financial, social, or digital barriers. By empowering students
                  with knowledge, skills, and confidence, we help shape
                  resilient individuals and build stronger future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {positive change} */}

      <section className="bg-[#BF4408] py-10 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Content */}
            <div className="text-white w-full lg:w-[720px] lg:h-[600px] flex flex-col justify-between p-6 rounded-[24px] bg-[#BF4408]">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4">
                  Creating Positive Change
                </h2>
                <p className="text-white/80 mb-8 sm:mb-12 text-sm sm:text-base md:text-lg">
                  Through our dedicated efforts and community partnerships.
                </p>
                <div className="mb-8 sm:mb-10">
                  <h3 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-none">
                    6893+
                  </h3>
                  <p className="text-xl sm:text-2xl md:text-3xl font-medium mt-4">
                    Helped People
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 sm:pt-8">
                <div className="grid grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-8">
                  <div>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                      15000+
                    </h4>
                    <p className="text-white/70 mt-2 text-sm sm:text-base">
                      Volunteers
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                      12000+
                    </h4>
                    <p className="text-white/70 mt-2 text-sm sm:text-base">
                      Children Impacted
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                      250+
                    </h4>
                    <p className="text-white/70 mt-2 text-sm sm:text-base">
                      Partner Organizations
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                      8,000+
                    </h4>
                    <p className="text-white/70 mt-2 text-sm sm:text-base">
                      Education Initiatives
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                      1000+
                    </h4>
                    <p className="text-white/70 mt-2 text-sm sm:text-base">
                      Food Drives
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                      100+
                    </h4>
                    <p className="text-white/70 mt-2 text-sm sm:text-base">
                      Vaccination Drives
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center mt-8 lg:mt-40">
              <img
                src={image8}
                alt="Children"
                className="w-full sm:w-[500px] md:w-[700px] h-[300px] sm:h-[400px] md:h-[550px] lg:w-[700px] lg:h-[550px] object-cover rounded-[24px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* {react inititatives} */}

      <section className="bg-[#f5f5f5] py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
            <div>
              <h2 className="text-2xl sm:text-4xl md:text-[56px] font-medium text-black mb-4">
                Recent Initiatives
              </h2>
              <p className="max-w-3xl text-[#555] text-sm sm:text-base md:text-lg leading-relaxed">
                At Tasim Foundation we support communities through education,
                environmental conservation, and healthcare, creating sustainable
                impact and a brighter, healthier future for all.
              </p>
            </div>

            {/* Arrows */}
            <div className="hidden md:flex gap-4 mt-3">
              <button
                onClick={scrollLeft}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
              >
                <HiOutlineArrowLeft className="text-lg md:text-xl text-gray-700" />
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
              >
                <HiOutlineArrowRight className="text-lg md:text-xl text-gray-700" />
              </button>
            </div>
          </div>

          {/* Cards Slider */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {initiatives.map((item, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] max-w-[320px] bg-white rounded-[24px] border border-[#E7E7E7] p-4 flex-shrink-0"
              >
                {/* Date */}
                <span className="inline-block border border-[#B77A56] text-[#B77A56] text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full mb-6">
                  {item.date}
                </span>

                {/* Title */}
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <h3 className="text-sm sm:text-base md:text-[20px] leading-snug font-medium text-black max-w-[200px] sm:max-w-[220px]">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F8F8F8] flex items-center justify-center">
                    <HiOutlineArrowRight className="text-[#B77A56] text-sm sm:text-lg" />
                  </div>
                </div>

                {/* Image */}
                <img
                  src={item.image}
                  alt="initiative"
                  className="w-full h-[180px] sm:h-[200px] md:h-[230px] object-cover rounded-[20px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* { what our people say} */}

      <section className="relative bg-[#F9ECE6] py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-3">
              What Our People Say
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#444] leading-relaxed">
              At Tasim Foundation we support communities through education,
              environmental conservation, and healthcare, creating sustainable
              impact and a brighter, healthier future for all.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Left Column */}
            <div className="space-y-4 ">
              {/* Top box with blur */}
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#2A2A2A] ">
                  Our children no longer walk miles for water. That changed
                  everything for us.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#F8EFEA] flex items-center justify-center">
                    <PiFlowerLotusLight className="text-lg sm:text-xl text-[#C9A08A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base md:text-lg">
                      Teacher
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Philippines
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#2A2A2A] leading-relaxed">
                  The new learning space feels like a promise for the next
                  generation
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#F8EFEA] flex items-center justify-center">
                    <PiPeaceLight className="text-lg sm:text-xl text-[#C9A08A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base md:text-lg">
                      Local Farmer
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">Kenya</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#2A2A2A] leading-relaxed">
                  Fieldwell didn't bring a plan. They built one with us
                </p>
              </div>
            </div>

            {/* Center Column */}
            <div className="space-y-4 ">
              {/* Top box with blur */}
              <div className="bg-white/70 opacity-40 backdrop-blur-md  rounded-2xl p-4 text-gray-400 text-sm">
                now
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#F8EFEA] flex items-center justify-center">
                    <PiUsersThreeLight className="text-lg sm:text-xl text-[#C9A08A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base md:text-lg">
                      Village Coordinator
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">Laos</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#2A2A2A] leading-relaxed">
                  Fieldwell’s work doesn’t end when the project ends. They make
                  sure we can carry it forward
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#F8EFEA] flex items-center justify-center">
                    <PiStarFourLight className="text-lg sm:text-xl text-[#C9A08A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base md:text-lg">
                      Community Elder
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">Nepal</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#2A2A2A] leading-relaxed">
                  Fieldwell listened to us first. No one had ever asked what we
                  needed before
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5 opacity-40">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#F8EFEA] flex items-center justify-center">
                    <PiFlowerLotusLight className="text-lg sm:text-xl text-[#C9A08A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base md:text-lg">
                      Mother of 4
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">Uganda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Top box with blur */}
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#2A2A2A]">
                  Our children no longer walk miles for water. That changed
                  everything for us.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#F8EFEA] flex items-center justify-center">
                    <PiFlowerLotusLight className="text-lg sm:text-xl text-[#C9A08A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base md:text-lg">
                      Teacher
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Philippines
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#2A2A2A] leading-relaxed">
                  The new learning space feels like a promise for the next
                  generation
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5 ">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#F8EFEA] flex items-center justify-center">
                    <PiPeaceLight className="text-lg sm:text-xl text-[#C9A08A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base md:text-lg">
                      Local Farmer
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">Kenya</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base opacity-60 md:text-lg text-[#2A2A2A] leading-relaxed">
                  Fieldwell didn't bring a plan. They built one with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


           {/* { be a force to change} */}

       <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-black mb-3">
          Be a Force for Change
        </h1>

        <p className="text-gray-600 text-lg mb-12">
          Together we can create a world where every community thrives equally.
        </p>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 min-h-[320px]">
            <HiOutlineHandRaised className="text-3xl mb-28" />

            <h3 className="text-2xl font-semibold mb-4">
              Volunteer with Us
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              Join hands with our team to directly impact communities.
              Your time and skills can make a real difference.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 min-h-[320px]">
            <FaHandHoldingHeart className="text-3xl mb-28" />

            <h3 className="text-2xl font-semibold mb-4">
              Become a Donor
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              Every contribution fuels our mission, from healthcare to
              education. Give today to bring hope and opportunity to those in
              need.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 min-h-[320px]">
            <MdHandshake className="text-3xl mb-28" />

            <h3 className="text-2xl font-semibold mb-4">
              Partner with Us
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              Collaborate as a corporate or community partner to create
              meaningful, sustainable change. Together.
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Volunteer */}
          <div className="bg-white border border-gray-200 rounded-3xl p-4">
            <img
              src={image13}
              alt="Volunteer"
              className="w-full h-56 object-cover rounded-2xl"
            />

            <h3 className="text-2xl font-semibold mt-5 mb-3">
              Volunteer with Us
            </h3>

            <p className="text-gray-600 mb-5 text-lg">
              Join hands with our team to directly impact communities. Your
              time and skills can make a real difference.
            </p>

            <button className="bg-[#BF4408] hover:bg-orange-700 text-white px-6 py-3 rounded-full flex items-center gap-2">
              Become a Volunteer
              <HiOutlineArrowRight />
            </button>
          </div>

          {/* Donor */}
          <div className="bg-white border border-gray-200 rounded-3xl p-4">
            <img
              src={image14}
              alt="Donor"
              className="w-full h-56 object-cover rounded-2xl"
            />

            <h3 className="text-2xl font-semibold mt-5 mb-3">
              Become a Donor
            </h3>

            <p className="text-gray-600 mb-5 text-lg">
              Every contribution fuels our mission, from healthcare to
              education. Give today to bring hope and opportunity to those in
              need.
            </p>

            <button className="bg-[#BF4408] hover:bg-orange-700 text-white px-6 py-3 rounded-full flex items-center gap-2">
              Donate Now
              <HiOutlineArrowRight />
            </button>
          </div>

          {/* Partner */}
          <div className="bg-white border border-gray-200 rounded-3xl p-4">
            <img
              src={image13}
              alt="Partner"
              className="w-full h-56 object-cover rounded-2xl"
            />

            <h3 className="text-2xl font-semibold mt-5 mb-3">
              Partner with Us
            </h3>

            <p className="text-gray-600 mb-5 text-lg">
              Collaborate as a corporate or community partner to create
              meaningful, sustainable change. Together.
            </p>

            <button className="bg-[#BF4408] hover:bg-orange-700 text-white px-6 py-3 rounded-full flex items-center gap-2">
              Partner With Us
              <HiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>

    
    </>
  );
};

export default CSRPartners;

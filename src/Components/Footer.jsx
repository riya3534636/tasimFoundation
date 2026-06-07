// import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import logo from "../assets/logo1.jpeg"

// export default function Footer() {
//   return (
//     <footer className="bg-[#BF4408] text-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
//         {/* Top Section */}
//         <div className="grid lg:grid-cols-4 gap-12">
//           {/* Left Content */}
//           <div className="lg:col-span-2">
//             <h2 className="text-5xl md:text-6xl font-semibold leading-tight mb-16">
//               Empowering Children for
//               <br />
//               Promising Futures
//             </h2>

//             <div>
//               <img
//                 src={logo}
//                 alt="Tasim Foundation"
//                 className="w-48 mb-3"
//               />
//               <p className="text-sm tracking-wide uppercase">
//                 Serving Humanity | Restoring Hope | Spreading Smiles
//               </p>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
//             <ul className="space-y-4 text-sm">
//               <li><a href="#">Home</a></li>
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Our Projects</a></li>
//               <li><a href="#">Event Videos</a></li>
//               <li><a href="#">Gallery</a></li>
//               <li><a href="#">Volunteer</a></li>
//               <li><a href="#">Blogs</a></li>
//             </ul>
//           </div>

//           {/* Follow + Newsletter */}
//           <div className="space-y-10">
//             <div>
//               <h3 className="text-2xl font-semibold mb-6">Follow</h3>
//               <div className="space-y-4">
//                 <a
//                   href="#"
//                   className="flex items-center gap-3 hover:opacity-80"
//                 >
//                   <FaLinkedinIn />
//                   LinkedIn
//                 </a>

//                 <a
//                   href="#"
//                   className="flex items-center gap-3 hover:opacity-80"
//                 >
//                   <FaXTwitter />
//                   X/Twitter
//                 </a>

//                 <a
//                   href="#"
//                   className="flex items-center gap-3 hover:opacity-80"
//                 >
//                   <FaInstagram />
//                   Instagram
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-2xl font-semibold mb-5">
//                 Subscribe Newsletter
//               </h3>

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full h-12 px-5 rounded-full bg-transparent border border-white placeholder:text-white outline-none"
//               />

//               <button className="w-full mt-4 h-12 rounded-full bg-white text-[#BF4408] font-medium">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Contact Button */}
//         <div className="flex justify-end mt-8">
//           <button className="bg-white text-[#BF4408] px-8 py-3 rounded-full font-medium hover:scale-105 transition">
//             Contact Us →
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-white/20 mt-16 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
//             <p>© 2024 Tasim Foundation. All rights reserved.</p>

//             <div className="flex gap-8">
//               <a href="#">Privacy Policy</a>
//               <a href="#">Terms & Conditions</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo2.jpeg";

export default function Footer() {
  return (
    <footer className="bg-[#BF4408] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-10">
              Empowering Children for
              <br />
              Promising Futures
            </h2>

            <div>
              <img src={logo} alt="Tasim Foundation" className="w-40 mb-3" />
              {/* <p className="text-sm tracking-wide uppercase">
                Serving Humanity | Restoring Hope | Spreading Smiles
              </p> */}
            </div>
          </div>

          {/* Right Side: Quick Links + Follow + Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Projects</a></li>
                <li><a href="#">Event Videos</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Volunteer</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-2 hover:opacity-80">
                  <FaLinkedinIn /> LinkedIn
                </a>
                <a href="#" className="flex items-center gap-2 hover:opacity-80">
                  <FaXTwitter /> X/Twitter
                </a>
                <a href="#" className="flex items-center gap-2 hover:opacity-80">
                  <FaInstagram /> Instagram
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Subscribe Newsletter</h3>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-10 px-4 rounded-full bg-transparent border border-white placeholder:text-white outline-none"
              />
              <button className="w-full mt-3 h-10 rounded-full bg-white text-[#BF4408] font-medium">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="flex justify-end mt-8">
          <button className="bg-white text-[#BF4408] px-6 py-2 rounded-full font-medium hover:scale-105 transition">
            Contact Us →
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2024 Tasim Foundation. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

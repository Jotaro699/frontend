
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <header className="bg-blue-800 text-white py-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center px-6">
//         <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
//           École Privée
//         </h1>
//         <nav className="flex items-center space-x-6">
//           <a href="/" className="hover:underline text-white">
//             Accueil
//           </a>
//           <a href="/aboutUs" className="hover:underline text-white">
//             About Us
//           </a>
//           <a href="/contact" className="hover:underline text-white">
//             Contact
//           </a>
//           <button
//             onClick={() => navigate("/choisir")}
//             className="bg-white text-blue-800 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
//           >
//             Se connecter
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { BookOpen, LogIn } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (path) =>
    `text-gray-700 font-medium transition duration-300 hover:text-blue-600 ${
      location.pathname === path ? "text-blue-600 font-semibold" : ""
    } no-underline hover:no-underline`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Titre */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            École Excellence
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={linkClass("/")}>
            Accueil
          </Link>
          <Link to="/aboutUs" className={linkClass("/aboutUs")}>
            À propos
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
          <button
            onClick={() => navigate("/choisir")}
            className={`hidden sm:flex items-center space-x-2 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              isScrolled
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>Se connecter</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

// import React from "react";
// import { useNavigate } from "react-router-dom"; // ✅ Import nécessaire
// import "../css/Acceuil.css"; // ✅ Chemin correct si ton fichier est bien dans src/css

// const Accueil = () => {
//   const navigate = useNavigate(); // ✅ Hook pour redirection

//   return (
//     <div>
//       <header className="header">
//         <h1>École Privée</h1>
//         <nav className="nav-links">
//           <a href="#accueil">Accueil</a>
//           <a href="#apropos">À propos</a>
//           <a href="#contact">Contact</a>
//           <button className="btn-login" onClick={() => navigate("/login")}>
//             Se connecter
//           </button>
//         </nav>
//       </header>

//       <section className="hero">
//         <img src="/images/accueil.jpg" alt="Livres et pomme" />
//         <h2>Une éducation d’excellence pour votre enfant</h2>
//         <p>
//           Notre école privée offre un environnement d’apprentissage stimulant et
//           bienveillant, où chaque élève est encouragé à développer son plein
//           potentiel.
//         </p>
//         <button className="btn-inscrire" onClick={() => navigate("/register")}>
//           Inscrire votre enfant
//         </button>
//       </section>
//     </div>
//   );
// };

// export default Accueil;
// --- correct
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import photo from '../Assets/images/image.jpg'
// const Accueil = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="font-sans">
//       <header className="bg-blue-800 text-white py-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center px-6">
//           <h1 className="text-2xl font-bold">École Privée</h1>
//           <nav className="flex items-center space-x-6">
//             <a href=" " className="hover:underline text-white">
//               Accueil
//             </a>
//             <a href="aboutUs" className="hover:underline text-white">
//               About Us
//             </a>
//             <a href="contact" className="hover:underline text-white">
//               Contact
//             </a>
//             <button
//               onClick={() => navigate("/choisir")}
//               className="bg-white text-blue-800 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
//             >
//               Se connecter
//             </button>
//           </nav>
//         </div>
//       </header>

//       <section className="relative text-center py-16 bg-gray-100">
//         <div className="container mx-auto px-6">
//           <img
//             src={photo}
//             alt="Livres et pomme"
//             className="mx-auto rounded-lg shadow-lg max-h-[400px] object-cover w-full mb-8"
//           />
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">
//             Une éducation d’excellence pour votre enfant
//           </h2>
//           <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//             Notre école privée offre un environnement d’apprentissage stimulant
//             et bienveillant, où chaque élève est encouragé à développer son
//             plein potentiel.
//           </p>
//           <button
//             onClick={() => navigate("/register")}
//             className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
//           >
//             Inscrire votre enfant
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Accueil;

// --- the best design 
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X, ChevronDown, Book, Bell, Users } from "lucide-react";
// import photo from "../Assets/images/image.jpg";

// const Accueil = () => {
//   const navigate = useNavigate();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Handle scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="font-sans min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <header
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-white text-gray-800 shadow-lg py-2"
//             : "bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4"
//         }`}
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <div className="flex items-center space-x-2">
//               <Book
//                 size={24}
//                 className={`${isScrolled ? "text-blue-700" : "text-white"}`}
//               />
//               <div>
//                 <h1 className="text-xl font-bold">École Privée</h1>
//                 <p
//                   className={`text-xs ${
//                     isScrolled ? "text-blue-600" : "text-blue-100"
//                   }`}
//                 >
//                   Excellence et savoir
//                 </p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//               <div className="flex items-center space-x-6">
//                 <a
//                   href=" "
//                   className={`group flex items-center space-x-1 font-medium ${
//                     isScrolled
//                       ? "text-gray-700 hover:text-blue-700"
//                       : "text-white hover:text-blue-200"
//                   }`}
//                 >
//                   <span>Accueil</span>
//                   <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current"></span>
//                 </a>

//                 <div className="relative group">
//                   <button
//                     className={`flex items-center font-medium ${
//                       isScrolled
//                         ? "text-gray-700 hover:text-blue-700"
//                         : "text-white hover:text-blue-200"
//                     }`}
//                   >
//                     <span>Formation</span>
//                     <ChevronDown size={16} className="ml-1" />
//                   </button>
//                   <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
//                     <a
//                       href="/primaire"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//                     >
//                       École primaire
//                     </a>
//                     <a
//                       href="/college"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//                     >
//                       Collège
//                     </a>
//                     <a
//                       href="/lycee"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//                     >
//                       Lycée
//                     </a>
//                   </div>
//                 </div>

//                 <a
//                   href="aboutUs"
//                   className={`group flex items-center space-x-1 font-medium ${
//                     isScrolled
//                       ? "text-gray-700 hover:text-blue-700"
//                       : "text-white hover:text-blue-200"
//                   }`}
//                 >
//                   <span>À propos</span>
//                   <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current"></span>
//                 </a>

//                 <a
//                   href="contact"
//                   className={`group flex items-center space-x-1 font-medium ${
//                     isScrolled
//                       ? "text-gray-700 hover:text-blue-700"
//                       : "text-white hover:text-blue-200"
//                   }`}
//                 >
//                   <span>Contact</span>
//                   <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current"></span>
//                 </a>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <button
//                   onClick={() => navigate("/register")}
//                   className={`flex items-center px-3 py-1.5 text-sm font-medium border rounded-full transition-all duration-300 ${
//                     isScrolled
//                       ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
//                       : "border-white text-white hover:bg-white hover:text-blue-700"
//                   }`}
//                 >
//                   <Users size={16} className="mr-1.5" />
//                   <span>Inscription</span>
//                 </button>

//                 <button
//                   onClick={() => navigate("/choisir")}
//                   className={`px-4 py-2 rounded-full shadow-md transition-all duration-300 text-sm font-medium ${
//                     isScrolled
//                       ? "bg-blue-700 text-white hover:bg-blue-800"
//                       : "bg-white text-blue-700 hover:bg-blue-50"
//                   }`}
//                 >
//                   Se connecter
//                 </button>
//               </div>
//             </nav>

//             {/* Mobile menu button */}
//             <button
//               className="md:hidden focus:outline-none"
//               onClick={toggleMobileMenu}
//             >
//               {isMobileMenuOpen ? (
//                 <X
//                   size={24}
//                   className={isScrolled ? "text-gray-900" : "text-white"}
//                 />
//               ) : (
//                 <Menu
//                   size={24}
//                   className={isScrolled ? "text-gray-900" : "text-white"}
//                 />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-white text-gray-800 shadow-lg mt-2 py-3 px-4">
//             <div className="flex flex-col space-y-4">
//               <a
//                 href=" "
//                 className="font-medium px-2 py-1 hover:bg-blue-50 rounded"
//               >
//                 Accueil
//               </a>
//               <div className="relative">
//                 <button className="flex items-center font-medium px-2 py-1 hover:bg-blue-50 rounded w-full text-left">
//                   <span>Formation</span>
//                   <ChevronDown size={16} className="ml-1" />
//                 </button>
//                 <div className="pl-4 mt-1 border-l-2 border-blue-100 flex flex-col space-y-2">
//                   <a
//                     href="/primaire"
//                     className="text-sm text-gray-700 hover:text-blue-700 py-1"
//                   >
//                     École primaire
//                   </a>
//                   <a
//                     href="/college"
//                     className="text-sm text-gray-700 hover:text-blue-700 py-1"
//                   >
//                     Collège
//                   </a>
//                   <a
//                     href="/lycee"
//                     className="text-sm text-gray-700 hover:text-blue-700 py-1"
//                   >
//                     Lycée
//                   </a>
//                 </div>
//               </div>
//               <a
//                 href="aboutUs"
//                 className="font-medium px-2 py-1 hover:bg-blue-50 rounded"
//               >
//                 À propos
//               </a>
//               <a
//                 href="contact"
//                 className="font-medium px-2 py-1 hover:bg-blue-50 rounded"
//               >
//                 Contact
//               </a>

//               <div className="pt-2 flex flex-col space-y-2">
//                 <button
//                   onClick={() => navigate("/register")}
//                   className="flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors"
//                 >
//                   <Users size={16} className="mr-1.5" />
//                   <span>Inscription</span>
//                 </button>

//                 <button
//                   onClick={() => navigate("/choisir")}
//                   className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
//                 >
//                   Se connecter
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Hero Section */}
//       <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             <div className="lg:w-1/2 text-center lg:text-left">
//               <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
//                 Inscription ouverte pour 2025-2026
//               </div>
//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                 Une éducation d'excellence pour votre enfant
//               </h2>
//               <p className="text-lg text-gray-600 mb-8 max-w-xl">
//                 Notre école privée offre un environnement d'apprentissage
//                 stimulant et bienveillant, où chaque élève est encouragé à
//                 développer son plein potentiel académique et personnel.
//               </p>
//               <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
//                 <button
//                   onClick={() => navigate("/register")}
//                   className="w-full sm:w-auto bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
//                 >
//                   <span>Inscrire votre enfant</span>
//                 </button>
//                 <button
//                   onClick={() => navigate("/visite")}
//                   className="w-full sm:w-auto text-blue-700 border border-blue-200 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center"
//                 >
//                   <span>Demander une visite</span>
//                 </button>
//               </div>
//             </div>
//             <div className="lg:w-1/2">
//               <div className="relative">
//                 <div className="absolute -inset-4 bg-blue-200 rounded-lg transform rotate-3"></div>
//                 <img
//                   src={photo}
//                   alt="Éducation de qualité"
//                   className="relative rounded-lg shadow-xl w-full object-cover h-96 lg:h-auto"
//                 />
//                 <div className="absolute -right-4 -bottom-4 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3">
//                   <div className="bg-blue-700 rounded-full p-2 text-white">
//                     <Bell size={20} />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">
//                       Prochaine journée portes ouvertes
//                     </p>
//                     <p className="text-sm font-medium">15 Mai 2025</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gray-50 rounded-xl p-6 text-center">
//               <p className="text-4xl font-bold text-blue-700">95%</p>
//               <p className="text-gray-600 mt-2">Taux de réussite aux examens</p>
//             </div>
//             <div className="bg-gray-50 rounded-xl p-6 text-center">
//               <p className="text-4xl font-bold text-blue-700">25+</p>
//               <p className="text-gray-600 mt-2">Années d'expérience</p>
//             </div>
//             <div className="bg-gray-50 rounded-xl p-6 text-center">
//               <p className="text-4xl font-bold text-blue-700">15:1</p>
//               <p className="text-gray-600 mt-2">Ratio élèves-enseignant</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Accueil;
 // src/pages/Accueil.js
import React from "react";
import { useNavigate } from "react-router-dom";
import photo from "../Assets/images/image.jpg";
import Navbar from "../components/Navbar";

const Accueil = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans">
      <Navbar />

      <section className="relative text-center py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <img
            src={photo}
            alt="Livres et pomme"
            className="mx-auto rounded-lg shadow-lg max-h-[400px] object-cover w-full mb-8"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in-up">
            Une éducation d’excellence pour votre enfant
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Notre école privée offre un environnement d’apprentissage stimulant
            et bienveillant, où chaque élève est encouragé à développer son
            plein potentiel.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            Inscrire votre enfant
          </button>
        </div>
      </section>
    </div>
  );
};

export default Accueil;

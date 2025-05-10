// // import React from "react";
// // import { Users, BookOpen, Award, ChevronRight } from "lucide-react";

// // const AboutUs = () => {
// //   return (
// //     <div className="font-sans bg-white">
// //       {/* Header avec dégradé */}
// //       <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-5 shadow-lg">
// //         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
// //           <h1 className="text-3xl font-bold mb-4 md:mb-0">École Privée</h1>
// //           <nav className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8">
// //             <a href="/" className="hover:text-blue-200 transition duration-300">
// //               Accueil
// //             </a>
// //             <a href="/aboutUs" className="font-medium border-b-2 border-white">
// //               AboutUs
// //             </a>
// //             <a
// //               href="contact"
// //               className="hover:text-blue-200 transition duration-300"
// //             >
// //               Contact
// //             </a>
// //             <a
// //               href="/choisir"
// //               className="bg-white text-blue-800 font-semibold px-5 py-2 rounded-full hover:bg-blue-50 transition duration-300 shadow-md"
// //             >
// //               Se connecter
// //             </a>
// //           </nav>
// //         </div>
// //       </header>

// //       {/* Bannière */}
// //       <section className="bg-blue-50 py-12 px-6">
// //         <div className="container mx-auto max-w-5xl">
// //           <div className="text-center mb-8">
// //             <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
// //               À propos de notre école
// //             </h2>
// //             <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
// //             <p className="text-blue-800 text-xl font-light italic">
// //               Excellence, innovation et bienveillance au service de l'éducation
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contenu principal avec image */}
// //       <section className="py-16 px-6 bg-white">
// //         <div className="container mx-auto max-w-5xl">
// //           <div className="flex flex-col md:flex-row gap-12 items-center">
// //             <div className="md:w-1/2">
// //               <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-64 md:h-96">
// //                 <img
// //                   src="/api/placeholder/600/400"
// //                   alt="École"
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
// //             </div>
// //             <div className="md:w-1/2 space-y-6">
// //               <p className="text-gray-700 text-lg">
// //                 <span className="font-semibold text-blue-800">
// //                   Depuis notre fondation
// //                 </span>
// //                 , notre école privée s'engage à offrir une éducation de qualité,
// //                 adaptée aux besoins de chaque élève. Grâce à une équipe
// //                 pédagogique passionnée et à des infrastructures modernes, nous
// //                 mettons tout en œuvre pour créer un environnement favorable à
// //                 l'épanouissement intellectuel, social et émotionnel des enfants.
// //               </p>
// //               <p className="text-gray-700 text-lg">
// //                 Notre objectif est de former des citoyens responsables, ouverts
// //                 d'esprit, et curieux du monde qui les entoure. Nous croyons en
// //                 une pédagogie active et bienveillante, où chaque enfant peut
// //                 apprendre à son rythme et développer ses talents.
// //               </p>
// //               <p className="text-gray-700 text-lg font-medium">
// //                 Rejoignez-nous pour construire ensemble l'avenir de vos enfants
// //                 !
// //               </p>
// //               <a
// //                 href="/inscription"
// //                 className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition duration-300 shadow-md mt-4"
// //               >
// //                 Nous rejoindre <ChevronRight className="ml-2 w-5 h-5" />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Nos valeurs */}
// //       <section className="py-16 px-6 bg-gray-50">
// //         <div className="container mx-auto max-w-5xl">
// //           <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
// //             Nos valeurs fondamentales
// //           </h3>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
// //               <div className="flex justify-center mb-4">
// //                 <Users className="text-blue-600 w-12 h-12" />
// //               </div>
// //               <h4 className="text-xl font-semibold text-blue-800 mb-3">
// //                 Communauté
// //               </h4>
// //               <p className="text-gray-600">
// //                 Nous valorisons l'entraide, le respect mutuel et la
// //                 collaboration entre tous les membres de notre communauté
// //                 éducative.
// //               </p>
// //             </div>

// //             <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
// //               <div className="flex justify-center mb-4">
// //                 <BookOpen className="text-blue-600 w-12 h-12" />
// //               </div>
// //               <h4 className="text-xl font-semibold text-blue-800 mb-3">
// //                 Excellence
// //               </h4>
// //               <p className="text-gray-600">
// //                 Nous encourageons chaque élève à donner le meilleur de lui-même
// //                 et à développer pleinement son potentiel académique.
// //               </p>
// //             </div>

// //             <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
// //               <div className="flex justify-center mb-4">
// //                 <Award className="text-blue-600 w-12 h-12" />
// //               </div>
// //               <h4 className="text-xl font-semibold text-blue-800 mb-3">
// //                 Innovation
// //               </h4>
// //               <p className="text-gray-600">
// //                 Nous adoptons des approches pédagogiques modernes et des
// //                 technologies éducatives pour préparer nos élèves au monde de
// //                 demain.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-blue-900 text-white py-8 px-6">
// //         <div className="container mx-auto max-w-5xl text-center">
// //           <p id="contact" className="mb-4">
// //             © 2025 École Privée - Tous droits réservés
// //           </p>
// //           <div className="flex justify-center space-x-8">
// //             <a
// //               href="/mentions-legales"
// //               className="text-blue-200 hover:text-white transition duration-300"
// //             >
// //               Mentions légales
// //             </a>
// //             <a
// //               href="/contact"
// //               className="text-blue-200 hover:text-white transition duration-300"
// //             >
// //               Nous contacter
// //             </a>
// //             <a
// //               href="/recrutement"
// //               className="text-blue-200 hover:text-white transition duration-300"
// //             >
// //               Recrutement
// //             </a>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default AboutUs;

// import React, { useState, useEffect } from "react";
// import { Users, BookOpen, Award, ChevronRight, ArrowUp } from "lucide-react";

// const AboutUs = () => {
//   const [isVisible, setIsVisible] = useState({
//     banner: false,
//     content: false,
//     values: false
//   });
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   // Track scroll position for various effects
//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.pageYOffset;
//       setScrollPosition(position);
//       setShowScrollTop(position > 300);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Set visibility of sections with a slight delay for staggered animations
//   useEffect(() => {
//     // Banner appears immediately
//     setIsVisible(prev => ({ ...prev, banner: true }));
    
//     // Content appears after a short delay
//     const contentTimer = setTimeout(() => {
//       setIsVisible(prev => ({ ...prev, content: true }));
//     }, 300);
    
//     // Values section appears after content
//     const valuesTimer = setTimeout(() => {
//       setIsVisible(prev => ({ ...prev, values: true }));
//     }, 600);
    
//     return () => {
//       clearTimeout(contentTimer);
//       clearTimeout(valuesTimer);
//     };
//   }, []);

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   // Custom hook for intersection observer
//   const useIntersectionObserver = (sectionId, threshold = 0.1) => {
//     const [isIntersecting, setIsIntersecting] = useState(false);
    
//     useEffect(() => {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach(entry => {
//             if (entry.isIntersecting) {
//               setIsIntersecting(true);
//             }
//           });
//         },
//         { threshold }
//       );
      
//       const element = document.getElementById(sectionId);
//       if (element) {
//         observer.observe(element);
//       }
      
//       return () => {
//         if (element) {
//           observer.unobserve(element);
//         }
//       };
//     }, [sectionId, threshold]);
    
//     return isIntersecting;
//   };

//   // Create observers for different sections
//   const isValuesVisible = useIntersectionObserver('values-section');

//   return (
//     <div className="font-sans bg-white overflow-x-hidden">
//       {/* Header avec dégradé */}
//       <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-5 shadow-lg">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
//           <h1 className="text-3xl font-bold mb-4 md:mb-0 transition-transform duration-300 transform hover:scale-105">
//             École Privée
//           </h1>
//           <nav className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8">
//             <a 
//               href="/" 
//               className="hover:text-blue-200 transition-all duration-300 hover:translate-y-1 relative group"
//             >
//               Accueil
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//             <a 
//               href="/aboutUs" 
//               className="font-medium border-b-2 border-white transition-all duration-300 hover:border-blue-200"
//             >
//               À propos
//             </a>
//             <a
//               href="contact"
//               className="hover:text-blue-200 transition-all duration-300 hover:translate-y-1 relative group"
//             >
//               Contact
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//             <a
//               href="/choisir"
//               className="bg-white text-blue-800 font-semibold px-5 py-2 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-md transform hover:scale-105 hover:shadow-lg"
//             >
//               Se connecter
//             </a>
//           </nav>
//         </div>
//       </header>

//       {/* Bannière avec animation d'entrée */}
//       <section 
//         className="bg-blue-50 py-12 px-6 relative overflow-hidden"
//         style={{
//           background: `linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)`,
//         }}
//       >
//         <div 
//           className="container mx-auto max-w-5xl relative z-10"
//         >
//           <div 
//             className={`text-center mb-8 transition-all duration-1000 ease-out transform ${
//               isVisible.banner ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//             }`}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
//               À propos de notre école
//             </h2>
//             <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 transition-all duration-700 ease-out" 
//                  style={{ 
//                    width: isVisible.banner ? '6rem' : '0',
//                    transitionDelay: '400ms' 
//                  }}></div>
//             <p className="text-blue-800 text-xl font-light italic">
//               Excellence, innovation et bienveillance au service de l'éducation
//             </p>
//           </div>
//         </div>
        
//         {/* Animated background elements */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
//           <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-blue-600 mix-blend-multiply animate-float-slow"></div>
//           <div className="absolute right-10 bottom-10 w-48 h-48 rounded-full bg-blue-400 mix-blend-multiply animate-float"></div>
//           <div className="absolute left-1/3 bottom-0 w-40 h-40 rounded-full bg-blue-500 mix-blend-multiply animate-float-reverse"></div>
//         </div>
//       </section>

//       {/* Contenu principal avec animation au défilement */}
//       <section className="py-16 px-6 bg-white">
//         <div className="container mx-auto max-w-5xl">
//           <div 
//             className={`flex flex-col md:flex-row gap-12 items-center transition-all duration-1000 ease-out transform ${
//               isVisible.content ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//             }`}
//           >
//             <div className="md:w-1/2 transform transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
//               <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-64 md:h-96 relative">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent z-10"></div>
//                 <img
//                   src="/api/placeholder/600/400"
//                   alt="École"
//                   className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
//                 />
//               </div>
//             </div>
//             <div className="md:w-1/2 space-y-6" 
//                  style={{ transitionDelay: '200ms' }}>
//               <p className="text-gray-700 text-lg animate-fadeIn" style={{ animationDelay: '400ms' }}>
//                 <span className="font-semibold text-blue-800">
//                   Depuis notre fondation
//                 </span>
//                 , notre école privée s'engage à offrir une éducation de qualité,
//                 adaptée aux besoins de chaque élève. Grâce à une équipe
//                 pédagogique passionnée et à des infrastructures modernes, nous
//                 mettons tout en œuvre pour créer un environnement favorable à
//                 l'épanouissement intellectuel, social et émotionnel des enfants.
//               </p>
//               <p className="text-gray-700 text-lg animate-fadeIn" style={{ animationDelay: '600ms' }}>
//                 Notre objectif est de former des citoyens responsables, ouverts
//                 d'esprit, et curieux du monde qui les entoure. Nous croyons en
//                 une pédagogie active et bienveillante, où chaque enfant peut
//                 apprendre à son rythme et développer ses talents.
//               </p>
//               <p className="text-gray-700 text-lg font-medium animate-fadeIn" style={{ animationDelay: '800ms' }}>
//                 Rejoignez-nous pour construire ensemble l'avenir de vos enfants
//                 !
//               </p>
//               <a
//                 href="/inscription"
//                 className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md mt-4 transform hover:translate-y-1 hover:shadow-lg group"
//               >
//                 Nous rejoindre 
//                 <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Nos valeurs avec animation pour chaque carte */}
//       <section id="values-section" className="py-16 px-6 bg-gray-50 relative overflow-hidden">
//         <div 
//           className={`container mx-auto max-w-5xl transition-all duration-1000 ease-out transform ${
//             isVisible.values ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//           }`}
//         >
//           <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 relative">
//             Nos valeurs fondamentales
//             <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4 transition-all duration-700" 
//                   style={{ width: isValuesVisible ? '5rem' : '0' }}></span>
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Card 1 */}
//             <ValueCard 
//               icon={<Users className="text-blue-600 w-12 h-12" />}
//               title="Communauté"
//               description="Nous valorisons l'entraide, le respect mutuel et la collaboration entre tous les membres de notre communauté éducative."
//               delay="0ms"
//               isVisible={isValuesVisible}
//             />
            
//             {/* Card 2 */}
//             <ValueCard 
//               icon={<BookOpen className="text-blue-600 w-12 h-12" />}
//               title="Excellence"
//               description="Nous encourageons chaque élève à donner le meilleur de lui-même et à développer pleinement son potentiel académique."
//               delay="200ms"
//               isVisible={isValuesVisible}
//             />
            
//             {/* Card 3 */}
//             <ValueCard 
//               icon={<Award className="text-blue-600 w-12 h-12" />}
//               title="Innovation"
//               description="Nous adoptons des approches pédagogiques modernes et des technologies éducatives pour préparer nos élèves au monde de demain."
//               delay="400ms"
//               isVisible={isValuesVisible}
//             />
//           </div>
//         </div>
        
//         {/* Subtle background pattern */}
//         <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
//           <div className="absolute inset-0" 
//                style={{ 
//                  backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)', 
//                  backgroundSize: '30px 30px' 
//                }}>
//           </div>
//         </div>
//       </section>

//       {/* Footer with subtle wave animation */}
//       <footer className="bg-blue-900 text-white py-8 px-6 relative overflow-hidden">
//         <div className="container mx-auto max-w-5xl text-center relative z-10">
//           <p id="contact" className="mb-4">
//             © 2025 École Privée - Tous droits réservés
//           </p>
//           <div className="flex justify-center space-x-8">
//             <a
//               href="/mentions-legales"
//               className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-y-1"
//             >
//               Mentions légales
//             </a>
//             <a
//               href="/contact"
//               className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-y-1"
//             >
//               Nous contacter
//             </a>
//             <a
//               href="/recrutement"
//               className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-y-1"
//             >
//               Recrutement
//             </a>
//           </div>
//         </div>
        
//         {/* Wave animation */}
//         <div className="absolute bottom-0 left-0 w-full h-16 opacity-10">
//           <div className="absolute bottom-0 left-0 w-[200%] h-full"
//                style={{
//                  background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 120\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,0 C150,90 350,0 500,30 C650,60 700,120 850,30 C1000,-60 1100,90 1200,30 L1200,120 L0,120 Z\' fill=\'%23FFFFFF\'/%3E%3C/svg%3E") repeat-x',
//                  backgroundSize: '1200px 120px',
//                  animation: 'wave 25s linear infinite'
//                }}>
//           </div>
//         </div>
//       </footer>
      
//       {/* Scroll to top button with animation */}
//       <button 
//         onClick={scrollToTop} 
//         className={`fixed bottom-6 right-6 p-3 bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 transform ${
//           showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
//         } hover:bg-blue-800 hover:scale-110 z-50`}
//       >
//         <ArrowUp size={20} />
//       </button>
      
//       {/* Global CSS animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
        
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
        
//         @keyframes float-reverse {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(15px); }
//         }
        
//         @keyframes wave {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
        
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-float-slow {
//           animation: float-slow 8s ease-in-out infinite;
//         }
        
//         .animate-float-reverse {
//           animation: float-reverse 7s ease-in-out infinite;
//         }
        
//         .animate-fadeIn {
//           opacity: 0;
//           animation: fadeIn 0.8s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// // Component for value cards with animation
// const ValueCard = ({ icon, title, description, delay, isVisible }) => {
//   return (
//     <div 
//       className={`bg-white p-6 rounded-lg shadow-md text-center transition-all duration-700 ease-out transform hover:shadow-xl hover:-translate-y-2 ${
//         isVisible 
//           ? 'opacity-100 translate-y-0' 
//           : 'opacity-0 translate-y-10'
//       }`}
//       style={{ transitionDelay: delay }}
//     >
//       <div className="flex justify-center mb-4 transition-transform duration-300 transform hover:scale-110 hover:rotate-6">
//         {icon}
//       </div>
//       <h4 className="text-xl font-semibold text-blue-800 mb-3">
//         {title}
//       </h4>
//       <p className="text-gray-600">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default AboutUs;
import React, { useState, useEffect } from "react";
import { Users, BookOpen, Award, ChevronRight, ArrowUp } from "lucide-react";
import Navbar from "./Navbar"

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({
    banner: false,
    content: false,
    values: false,
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track scroll position for various effects
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowScrollTop(position > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set visibility of sections with a slight delay for staggered animations
  useEffect(() => {
    // Banner appears immediately
    setIsVisible((prev) => ({ ...prev, banner: true }));

    // Content appears after a short delay
    const contentTimer = setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, content: true }));
    }, 300);

    // Values section appears after content
    const valuesTimer = setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, values: true }));
    }, 600);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(valuesTimer);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Custom hook for intersection observer
  const useIntersectionObserver = (sectionId, threshold = 0.1) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsIntersecting(true);
            }
          });
        },
        { threshold }
      );

      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, [sectionId, threshold]);

    return isIntersecting;
  };

  // Create observers for different sections
  const isValuesVisible = useIntersectionObserver("values-section");

  return (
    <div className="font-sans">
      <Navbar />

      {/* Bannière avec animation d'entrée */}
      <section
        className="bg-blue-50 py-12 px-6 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)`,
        }}
      >
        <div className="container mx-auto max-w-5xl relative z-10">
          <div
            className={`text-center mb-8 transition-all duration-1000 ease-out transform ${
              isVisible.banner
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              À propos de notre école
            </h2>
            <div
              className="w-24 h-1 bg-blue-600 mx-auto mb-8 transition-all duration-700 ease-out"
              style={{
                width: isVisible.banner ? "6rem" : "0",
                transitionDelay: "400ms",
              }}
            ></div>
            <p className="text-blue-800 text-xl font-light italic">
              Excellence, innovation et bienveillance au service de l'éducation
            </p>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-blue-600 mix-blend-multiply animate-float-slow"></div>
          <div className="absolute right-10 bottom-10 w-48 h-48 rounded-full bg-blue-400 mix-blend-multiply animate-float"></div>
          <div className="absolute left-1/3 bottom-0 w-40 h-40 rounded-full bg-blue-500 mix-blend-multiply animate-float-reverse"></div>
        </div>
      </section>

      {/* Contenu principal avec animation au défilement */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div
            className={`flex flex-col md:flex-row gap-12 items-center transition-all duration-1000 ease-out transform ${
              isVisible.content
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="md:w-1/2 transform transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-64 md:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent z-10"></div>
                <img
                  src="/api/placeholder/600/400"
                  alt="École"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                />
              </div>
            </div>
            <div
              className="md:w-1/2 space-y-6"
              style={{ transitionDelay: "200ms" }}
            >
              <p
                className="text-gray-700 text-lg animate-fadeIn"
                style={{ animationDelay: "400ms" }}
              >
                <span className="font-semibold text-blue-800">
                  Depuis notre fondation
                </span>
                , notre école privée s'engage à offrir une éducation de qualité,
                adaptée aux besoins de chaque élève. Grâce à une équipe
                pédagogique passionnée et à des infrastructures modernes, nous
                mettons tout en œuvre pour créer un environnement favorable à
                l'épanouissement intellectuel, social et émotionnel des enfants.
              </p>
              <p
                className="text-gray-700 text-lg animate-fadeIn"
                style={{ animationDelay: "600ms" }}
              >
                Notre objectif est de former des citoyens responsables, ouverts
                d'esprit, et curieux du monde qui les entoure. Nous croyons en
                une pédagogie active et bienveillante, où chaque enfant peut
                apprendre à son rythme et développer ses talents.
              </p>
              <p
                className="text-gray-700 text-lg font-medium animate-fadeIn"
                style={{ animationDelay: "800ms" }}
              >
                Rejoignez-nous pour construire ensemble l'avenir de vos enfants
                !
              </p>
              <a
                href="/inscription"
                className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md mt-4 transform hover:translate-y-1 hover:shadow-lg group"
              >
                Nous rejoindre
                <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs avec animation pour chaque carte */}
      <section
        id="values-section"
        className="py-16 px-6 bg-gray-50 relative overflow-hidden"
      >
        <div
          className={`container mx-auto max-w-5xl transition-all duration-1000 ease-out transform ${
            isVisible.values
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 relative">
            Nos valeurs fondamentales
            <span
              className="block w-20 h-1 bg-blue-600 mx-auto mt-4 transition-all duration-700"
              style={{ width: isValuesVisible ? "5rem" : "0" }}
            ></span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <ValueCard
              icon={<Users className="text-blue-600 w-12 h-12" />}
              title="Communauté"
              description="Nous valorisons l'entraide, le respect mutuel et la collaboration entre tous les membres de notre communauté éducative."
              delay="0ms"
              isVisible={isValuesVisible}
            />

            {/* Card 2 */}
            <ValueCard
              icon={<BookOpen className="text-blue-600 w-12 h-12" />}
              title="Excellence"
              description="Nous encourageons chaque élève à donner le meilleur de lui-même et à développer pleinement son potentiel académique."
              delay="200ms"
              isVisible={isValuesVisible}
            />

            {/* Card 3 */}
            <ValueCard
              icon={<Award className="text-blue-600 w-12 h-12" />}
              title="Innovation"
              description="Nous adoptons des approches pédagogiques modernes et des technologies éducatives pour préparer nos élèves au monde de demain."
              delay="400ms"
              isVisible={isValuesVisible}
            />
          </div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #3B82F6 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>
      </section>

      {/* Footer with subtle wave animation */}
      <footer className="bg-blue-900 text-white py-8 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <p id="contact" className="mb-4">
            © 2025 École Privée - Tous droits réservés
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="/mentions-legales"
              className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-y-1"
            >
              Mentions légales
            </a>
            <a
              href="/contact"
              className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-y-1"
            >
              Nous contacter
            </a>
            <a
              href="/recrutement"
              className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-y-1"
            >
              Recrutement
            </a>
          </div>
        </div>

        {/* Wave animation */}
        <div className="absolute bottom-0 left-0 w-full h-16 opacity-10">
          <div
            className="absolute bottom-0 left-0 w-[200%] h-full"
            style={{
              background:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0 C150,90 350,0 500,30 C650,60 700,120 850,30 C1000,-60 1100,90 1200,30 L1200,120 L0,120 Z' fill='%23FFFFFF'/%3E%3C/svg%3E\") repeat-x",
              backgroundSize: "1200px 120px",
              animation: "wave 25s linear infinite",
            }}
          ></div>
        </div>
      </footer>

      {/* Scroll to top button with animation */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 transform ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        } hover:bg-blue-800 hover:scale-110 z-50`}
      >
        <ArrowUp size={20} />
      </button>

      {/* Global CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(15px);
          }
        }

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }

        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

// Component for value cards with animation
const ValueCard = ({ icon, title, description, delay, isVisible }) => {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md text-center transition-all duration-700 ease-out transform hover:shadow-xl hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="flex justify-center mb-4 transition-transform duration-300 transform hover:scale-110 hover:rotate-6">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-blue-800 mb-3">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutUs;
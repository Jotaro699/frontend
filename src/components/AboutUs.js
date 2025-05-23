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
import {
  Users,
  ChevronRight,
  ArrowUp,
  Heart,
  BookOpen,
  Target,
  Lightbulb,
} from "lucide-react";
import Navbar from "../components/Navbar";



const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({
    banner: false,
    content: false,
    values: false,
    stats: false,
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
    setIsVisible((prev) => ({ ...prev, banner: true }));

    const contentTimer = setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, content: true }));
    }, 300);

    const valuesTimer = setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, values: true }));
    }, 600);

    const statsTimer = setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, stats: true }));
    }, 900);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(valuesTimer);
      clearTimeout(statsTimer);
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
  const isStatsVisible = useIntersectionObserver("stats-section");
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <section className="relative min-h-96 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 bg-opacity-20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-indigo-300 bg-opacity-15 rounded-full animate-float-reverse"></div>
          <div className="absolute top-60 right-1/3 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-float"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div
            className={`text-center transition-all duration-1000 ease-out transform ${
              isVisible.banner
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Depuis 1995 • 30 ans d'excellence
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              À propos de notre
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                École
              </span>
            </h1>
            <div
              className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-8 transition-all duration-700 ease-out"
              style={{
                width: isVisible.banner ? "8rem" : "0",
                transitionDelay: "400ms",
              }}
            ></div>
            <p className="text-blue-100 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Excellence académique, innovation pédagogique et épanouissement
              personnel pour construire l'avenir de vos enfants
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-16"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-gray-50"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-gray-50"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-gray-50"
            ></path>
          </svg>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`flex flex-col lg:flex-row gap-16 items-center transition-all duration-1000 ease-out transform ${
              isVisible.content
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src="/api/placeholder/600/450"
                      alt="Notre école moderne"
                      className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                    Notre Mission
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                  Former les citoyens de demain dans un environnement
                  <span className="text-blue-600"> d'excellence</span>
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-800">
                    Depuis trois décennies
                  </span>
                  , notre établissement s'engage à offrir une éducation de
                  qualité supérieure, alliant tradition pédagogique et
                  innovation technologique. Nous créons un environnement
                  stimulant où chaque élève peut révéler son potentiel unique.
                </p>

                <p>
                  Notre approche personnalisée respecte le rythme
                  d'apprentissage de chaque enfant, favorisant l'épanouissement
                  intellectuel, créatif et social. Nous préparons nos élèves à
                  devenir des citoyens responsables, critiques et ouverts sur le
                  monde.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <p className="font-medium text-gray-800 italic">
                    "Chaque enfant est unique, chaque parcours est précieux.
                    Notre mission est de révéler et cultiver les talents de
                    demain."
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                  Découvrir nos programmes
                  <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center">
                  Planifier une visite
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section
        id="stats-section"
        className="py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-600"
      >
        <div className="container mx-auto max-w-6xl">
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible.stats
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Nos résultats parlent d'eux-mêmes
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Découvrez les chiffres qui témoignent de notre engagement envers
                l'excellence éducative
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard
                number="98%"
                label="Taux de réussite"
                delay="0ms"
                isVisible={isStatsVisible}
              />
              <StatCard
                number="850+"
                label="Élèves diplômés"
                delay="200ms"
                isVisible={isStatsVisible}
              />
              <StatCard
                number="25"
                label="Enseignants experts"
                delay="400ms"
                isVisible={isStatsVisible}
              />
              <StatCard
                number="15"
                label="Activités extra-scolaires"
                delay="600ms"
                isVisible={isStatsVisible}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section id="values-section" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible.values
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                  Nos Valeurs
                </span>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              </div>

              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Les piliers de notre pédagogie
              </h3>

              <div
                className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto transition-all duration-700"
                style={{ width: isValuesVisible ? "6rem" : "0" }}
              ></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard
                icon={<Heart className="w-8 h-8" />}
                title="Bienveillance"
                description="Un environnement chaleureux et sécurisant où chaque élève se sent valorisé et respecté dans sa singularité."
                color="from-red-500 to-pink-500"
                delay="0ms"
                isVisible={isValuesVisible}
              />

              <ValueCard
                icon={<Target className="w-8 h-8" />}
                title="Excellence"
                description="La recherche constante de la qualité dans tous les apprentissages et le dépassement de soi."
                color="from-blue-500 to-indigo-500"
                delay="200ms"
                isVisible={isValuesVisible}
              />

              <ValueCard
                icon={<Users className="w-8 h-8" />}
                title="Collaboration"
                description="L'apprentissage du vivre-ensemble, du partage et de l'entraide entre élèves, familles et équipe éducative."
                color="from-green-500 to-emerald-500"
                delay="400ms"
                isVisible={isValuesVisible}
              />

              <ValueCard
                icon={<Lightbulb className="w-8 h-8" />}
                title="Innovation"
                description="L'intégration des nouvelles technologies et méthodes pédagogiques pour préparer l'avenir."
                color="from-yellow-500 to-orange-500"
                delay="600ms"
                isVisible={isValuesVisible}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        <div className="relative z-10">
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">École Excellence</span>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Depuis 30 ans, nous accompagnons vos enfants vers la réussite
                  grâce à une pédagogie innovante et bienveillante.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">in</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-blue-300">Navigation</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      À propos
                    </a>
                  </li>
                  <li>
                    <a
                      href="/programs"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Programmes
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admissions"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Admissions
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-blue-300">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>123 Avenue de l'Éducation</li>
                  <li>75000 Paris, France</li>
                  <li>+33 1 23 45 67 89</li>
                  <li>contact@ecole-excellence.fr</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 py-6">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 École Excellence - Tous droits réservés
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Politique de confidentialité
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Mentions légales
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:shadow-xl z-50 ${
          showScrollTop
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-12 opacity-0 scale-75"
        } hover:scale-110`}
      >
        <ArrowUp size={20} />
      </button>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(10px) rotate(-2deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
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

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Enhanced StatCard component
const StatCard = ({ number, label, delay, isVisible }) => {
  return (
    <div
      className={`text-center transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {number}
      </div>
      <div className="text-blue-100 font-medium">{label}</div>
    </div>
  );
};

// Enhanced ValueCard component
const ValueCard = ({ icon, title, description, color, delay, isVisible }) => {
  return (
    <div
      className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: delay }}
    >
      <div
        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${color} text-white mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
      >
        {icon}
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default AboutUs;
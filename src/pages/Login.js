// import React, { useState } from "react";
// import authService from "../services/authService";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await authService.login(email, password);
//       localStorage.setItem("token", res.data.access_token);
//       window.location.href = "/dashboard";
//     } catch (err) {
//       alert("Erreur de connexion");
//     }
//   };

//   return (
//     <div>
//       <h2>Connexion</h2>
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input
//         placeholder="Mot de passe"
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Se connecter</button>
//     </div>
//   );
// }

// export default Login;

// ------
// import React, { useState } from "react";
// import authService from "../services/authService";



// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await authService.login(email, password);
//       localStorage.setItem("token", res.data.access_token);
//       window.location.href = "/dashboard";
//     } catch (err) {
//       alert("Erreur de connexion");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Connexion
//         </h2>

//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <input
//           type="password"
//           placeholder="Mot de passe"
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           Se connecter
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import authService from "../services/authService";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const location = useLocation();
//   const role = new URLSearchParams(location.search).get("role");

//   const handleLogin = async () => {
//     try {    
//       const res = await authService.login(email, password);
//       localStorage.setItem("token", res.data.access_token);
//       window.location.href = "/dashboard";
//     } catch (err) {
//       alert("Erreur de connexion");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Connexion{" "}
//           {role && `(${role.charAt(0).toUpperCase() + role.slice(1)})`}
//         </h2>

//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <input
//           type="password"
//           placeholder="Mot de passe"
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           Se connecter
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import authService from "../services/authService";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Récupérer le rôle depuis l'URL
//   const queryParams = new URLSearchParams(location.search);
//   const role = queryParams.get("role");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await authService.login(email, password);
//       const user = res.data.user;

//       // Vérification stricte du rôle
//       if (role && user.role !== role) {
//         setError(
//           `Accès refusé : Vous devez être un ${
//             role === "parent" ? "parent" : "étudiant"
//           } pour accéder à cette page.`
//         );
//         return;
//       }

//       // Stockage des informations d'authentification
//       localStorage.setItem("token", res.data.access_token);
//       localStorage.setItem("user", JSON.stringify(user));

//       // Redirection en fonction du rôle
//       if (user.role === "parent") {
//         navigate("/dashboard");
//       } else if (user.role === "etudiant") {
//         navigate("/dashboard");
//       } else {
//         navigate("/dashboard");
//       }
//     } catch (err) {
//       setError(
//         err.response?.data?.message ||
//           "Erreur de connexion. Veuillez vérifier vos identifiants."
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Connexion {role && (`${role === "parent" ? "Parent" : "Étudiant"}`)}
//         </h2>

//         {error && (
//           <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />

//           <input
//             type="password"
//             placeholder="Mot de passe"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Se connecter
//           </button>
//         </form>

//         {role && (
//           <p className="mt-4 text-center text-sm text-gray-500">
//             Espace réservé aux {role === "parent" ? "parents" : "étudiants"} uniquement
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import authService from "../services/authService";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const location = useLocation();
//   const role = new URLSearchParams(location.search).get("role");

//   const handleLogin = async () => {
//     try {
//       const res = await authService.login(email, password);
//       const user = res.data.user;

//       if (role && user.role !== role) {
//         const roleLabel =
//           role === "parent"
//             ? "parents"
//             : role === "etudiant"
//             ? "étudiants"
//             : "enseignants";

//         setErrorMessage(
//           `Seuls les ${roleLabel} peuvent se connecter à cet espace.`
//         );
//         return;
//       }

//       localStorage.setItem("token", res.data.access_token);
//       localStorage.setItem("user", JSON.stringify(user));
//       window.location.href = "/dashboard";
//     } catch (err) {
//       setErrorMessage(
//         "Erreur de connexion. Veuillez vérifier vos identifiants."
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
//       <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
//           Connexion{" "}
//           {role && `(${role.charAt(0).toUpperCase() + role.slice(1)})`}
//         </h2>
//         <p className="text-sm text-center text-gray-500 mb-6">
//           Veuillez entrer vos identifiants pour accéder à la plateforme.
//         </p>

//         {errorMessage && (
//           <div className="bg-red-100 text-red-600 border border-red-300 text-sm px-4 py-2 rounded mb-4 text-center">
//             {errorMessage}
//           </div>
//         )}

//         <input
//           type="email"
//           placeholder="Adresse e-mail"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <input
//           type="password"
//           placeholder="Mot de passe"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-4 py-3 mb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <div className="text-right mb-6">
//           <Link
//             to="/mot-de-passe-oublie"
//             className="text-sm text-blue-600 hover:underline"
//           >
//             Mot de passe oublié ?
//           </Link>
//         </div>

//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-200"
//         >
//           Se connecter
//         </button>

//         <div className="mt-6 text-center text-sm text-gray-600">
//           Pas encore de compte ?{" "}
//           <Link
//             to="/register"
//             className="text-blue-600 hover:underline font-medium"
//           >
//             S'inscrire
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaUserTie,
  FaUserShield,
  FaEnvelope,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";
import authService from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const role = new URLSearchParams(location.search).get("role");

  const getRoleIcon = () => {
    switch (role) {
      case "etudiant":
        return <FaUserGraduate size={20} />;
      case "enseignant":
        return <FaUserTie size={20} />;
      case "parent":
        return <FaUserShield size={20} />;
      default:
        return null;
    }
  };

  const getRoleColor = () => {
    switch (role) {
      case "etudiant":
        return "from-blue-500 to-indigo-600";
      case "enseignant":
        return "from-emerald-500 to-teal-600";
      case "parent":
        return "from-amber-500 to-orange-600";
      default:
        return "from-blue-500 to-indigo-600";
    }
  };

  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     setErrorMessage("Veuillez remplir tous les champs");
  //     return;
  //   }

  //   setIsLoading(true);
  //   try {
  //     const res = await authService.login(email, password);
  //     const user = res.data.user;

  //     if (role && user.role !== role) {
  //       const roleLabel =
  //         role === "parent"
  //           ? "parents"
  //           : role === "etudiant"
  //           ? "étudiants"
  //           : "enseignants";

  //       setErrorMessage(
  //         `Seuls les ${roleLabel} peuvent se connecter à cet espace.`
  //       );
  //       setIsLoading(false);
  //       return;
        
  //     }
      
      

  //     localStorage.setItem("token", res.data.access_token);
  //     localStorage.setItem("user", JSON.stringify(user));
  //     window.location.href = "/admin";
  //   } catch (err) {
  //     setErrorMessage(
  //       "Erreur de connexion. Veuillez vérifier vos identifiants."
  //     );
  //     setIsLoading(false);
  //   }
  // };
  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Veuillez remplir tous les champs");
      return;
    }

    setIsLoading(true);
    try {
      const res = await authService.login(email, password);
      const user = res.data.user;

      if (role && user.role !== role) {
        const roleLabel =
          role === "parent"
            ? "parents"
            : role === "etudiant"
            ? "étudiants"
            : "enseignants";

        setErrorMessage(
          `Seuls les ${roleLabel} peuvent se connecter à cet espace.`
        );
        setIsLoading(false);
        return;
      }

      // 🛑 Bloquer enseignant si status ≠ accepted
      if (user.role === "enseignant") {
        const enseignantDetails = user.enseignant;
        if (!enseignantDetails || enseignantDetails.status !== "accepted") {
          setErrorMessage("Votre demande n’a pas encore été acceptée.");
          setIsLoading(false);
          return;
        }
      }

      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/admin";
    } catch (err) {
      setErrorMessage(
        "Erreur de connexion. Veuillez vérifier vos identifiants."
      );
      setIsLoading(false);
    }
  };


  const roleTitle = role
    ? role === "etudiant"
      ? "Espace Étudiant"
      : role === "enseignant"
      ? "Espace Enseignant"
      : "Espace Parent"
    : "Connexion";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-4">
      <div className="w-full max-w-md">
        {/* Card with soft shadow and offset background accent */}
        <div className="relative">
          {/* Decorative background accent */}
          <div
            className={`absolute -top-3 -right-3 -left-3 -bottom-3 bg-gradient-to-r ${getRoleColor()} rounded-3xl opacity-10 blur-xl`}
          ></div>

          <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10 border border-gray-100">
            {/* Header with role badge */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-3">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${getRoleColor()} text-white shadow-lg`}
                >
                  {getRoleIcon() || <FaUserGraduate size={24} />}
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-800">{roleTitle}</h1>

              <p className="text-sm text-gray-500 mt-2">
                Accédez à votre tableau de bord personnel
              </p>
            </div>

            {/* Error message */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border-l-4 border-red-500 text-red-700 text-sm flex items-start">
                <div className="flex-shrink-0 w-5 h-5 mr-2 mt-0.5 flex items-center justify-center rounded-full bg-red-100 text-red-500">
                  !
                </div>
                <p>{errorMessage}</p>
              </div>
            )}

            {/* Login form */}
            <div className="space-y-5">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaLock />
                </div>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-600"
                  >
                    Se souvenir de moi
                  </label>
                </div>

                <Link
                  to="/mot-de-passe-oublie"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Mot de passe oublié ?
                </Link>
              </div>

              <button
                onClick={handleLogin}
                disabled={isLoading}
                className={`w-full flex items-center justify-center bg-gradient-to-r ${getRoleColor()} text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    Se connecter <FaArrowRight className="ml-2" />
                  </>
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-5 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
                <p className="text-sm text-gray-500">Pas encore de compte ?</p>
                <Link
                  to={`/register?role=${role}`}
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Créer un compte <FaArrowRight className="ml-1 text-xs" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Information text */}
        <p className="text-center text-xs text-gray-500 mt-6">
          &copy; 2025 Education Platform. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}

export default Login;

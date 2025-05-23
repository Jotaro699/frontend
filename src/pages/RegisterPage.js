// import React, { useState } from "react";
// import { register } from "../services/api";

// function RegisterPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "etudiant",
//   });

//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const res = await register(form);
//       console.log(res);

//       if (res && res.token) {
//         setSuccessMessage("Inscription réussie !");
//         setErrorMessage("");
//         localStorage.setItem("token", res.token);
//         // PAS de redirection
//       } else if (res && res.errors) {
//         setErrorMessage("Erreur d'inscription : " + JSON.stringify(res.errors));
//         setSuccessMessage("");
//       } else {
//         setErrorMessage("Erreur d'inscription inconnue");
//         setSuccessMessage("");
//       }
//     } catch (error) {
//       console.error("Erreur dans handleSubmit:", error);
//       setErrorMessage("Erreur d'inscription : " + error.message);
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <div>
//       <h2>Inscription</h2>
//       <input name="name" placeholder="Nom" onChange={handleChange} />
//       <input
//         name="email"
//         placeholder="Email"
//         type="email"
//         onChange={handleChange}
//       />
//       <input
//         name="password"
//         placeholder="Mot de passe"
//         type="password"
//         onChange={handleChange}
//       />
//       <select name="role" onChange={handleChange}>
//         <option value="etudiant">Étudiant</option>
//         <option value="enseignant">Enseignant</option>
//         <option value="parent">Parent</option>
//         <option value="admin">Admin</option>
//       </select>
//       <button onClick={handleSubmit}>S'inscrire</button>

//       {successMessage && (
//         <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>
//       )}
//       {errorMessage && (
//         <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
//       )}
//     </div>
//   );
// }

// export default RegisterPage;

// -----------------
// import React, { useState } from "react";
// import { register } from "../services/api";
// import "../css/Register.css";


// function RegisterPage() {
//   const [form, setForm] = useState({
//     prenom: "",
//     nom: "",
//     email: "",
//     date_naissance: "",
//     genre: "",
//     telephone: "",
//     adresse: "",
//     password: "",
//     confirmPassword: "",
//     role: "etudiant",
//   });

//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (form.password !== form.confirmPassword) {
//       setErrorMessage("Les mots de passe ne correspondent pas.");
//       return;
//     }

//     try {
//       const res = await register(form);
//       console.log(res);

//       if (res && res.token) {
//         setSuccessMessage("Inscription réussie !");
//         setErrorMessage("");
//         localStorage.setItem("token", res.token);
//       } else if (res && res.errors) {
//         setErrorMessage("Erreur d'inscription : " + JSON.stringify(res.errors));
//         setSuccessMessage("");
//       } else {
//         setErrorMessage("Erreur d'inscription inconnue");
//         setSuccessMessage("");
//       }
//     } catch (error) {
//       console.error("Erreur dans handleSubmit:", error);
//       setErrorMessage("Erreur d'inscription : " + error.message);
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Inscription</h2>

//       <input name="prenom" placeholder="Prénom" onChange={handleChange} />
//       <input name="nom" placeholder="Nom" onChange={handleChange} />
//       <input
//         name="date_naissance"
//         type="date"
//         onChange={handleChange}
//         placeholder="Date de naissance"
//       />
//       <select name="genre" onChange={handleChange}>
//         <option value="">Sélectionner le genre</option>
//         <option value="homme">Homme</option>
//         <option value="femme">Femme</option>
//       </select>
//       <input name="telephone" placeholder="Téléphone" onChange={handleChange} />
//       <input name="adresse" placeholder="Adresse" onChange={handleChange} />
//       <input
//         name="email"
//         placeholder="Email"
//         type="email"
//         onChange={handleChange}
//       />
//       <input
//         name="password"
//         placeholder="Mot de passe"
//         type="password"
//         onChange={handleChange}
//       />
//       <input
//         name="confirmPassword"
//         placeholder="Confirmer le mot de passe"
//         type="password"
//         onChange={handleChange}
//       />
//       <select name="role" onChange={handleChange}>
//         <option value="etudiant">Étudiant</option>
//         <option value="enseignant">Enseignant</option>
//         <option value="parent">Parent</option>
//         <option value="admin">Admin</option>
//       </select>

//       <button onClick={handleSubmit}>S'inscrire</button>

//       {successMessage && <p className="success">{successMessage}</p>}
//       {errorMessage && <p className="error">{errorMessage}</p>}
//     </div>
//   );

// }

// export default RegisterPage;

// import React, { useState } from "react";
// import { register } from "../services/api";

// function RegisterPage() {
//   const [form, setForm] = useState({
//     prenom: "",
//     nom: "",
//     email: "",
//     date_naissance: "",
//     genre: "",
//     telephone: "",
//     adresse: "",
//     password: "",
//     confirmPassword: "",
//     role: "etudiant",
//   });

//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (form.password !== form.confirmPassword) {
//       setErrorMessage("Les mots de passe ne correspondent pas.");
//       return;
//     }

//     try {
//       const res = await register(form);
//       if (res && res.token) {
//         setSuccessMessage("Inscription réussie !");
//         setErrorMessage("");
//         localStorage.setItem("token", res.token);
//       } else if (res && res.errors) {
//         setErrorMessage("Erreur d'inscription : " + JSON.stringify(res.errors));
//         setSuccessMessage("");
//       } else {
//         setErrorMessage("Erreur d'inscription inconnue");
//         setSuccessMessage("");
//       }
//     } catch (error) {
//       setErrorMessage("Erreur d'inscription : " + error.message);
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Inscription
//         </h2>

//         <div className="space-y-4">
//           <input
//             name="prenom"
//             placeholder="Prénom"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="nom"
//             placeholder="Nom"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="date_naissance"
//             type="date"
//             onChange={handleChange}
//             className="input"
//           />

//           <select name="genre" onChange={handleChange} className="input">
//             <option value="">Sélectionner le genre</option>
//             <option value="homme">Homme</option>
//             <option value="femme">Femme</option>
//           </select>

//           <input
//             name="telephone"
//             placeholder="Téléphone"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="adresse"
//             placeholder="Adresse"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="email"
//             placeholder="Email"
//             type="email"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="password"
//             placeholder="Mot de passe"
//             type="password"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="confirmPassword"
//             placeholder="Confirmer le mot de passe"
//             type="password"
//             onChange={handleChange}
//             className="input"
//           />

//           <select name="role" onChange={handleChange} className="input">
//             <option value="etudiant">Étudiant</option>
//             <option value="enseignant">Enseignant</option>
//             <option value="parent">Parent</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>

//         <button
//           onClick={handleSubmit}
//           className="w-full bg-blue-700 text-white font-semibold py-2 rounded mt-6 hover:bg-blue-800 transition"
//         >
//           S'inscrire
//         </button>

//         {successMessage && (
//           <p className="text-green-600 mt-4 text-center font-medium">
//             {successMessage}
//           </p>
//         )}
//         {errorMessage && (
//           <p className="text-red-600 mt-4 text-center font-medium">
//             {errorMessage}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default RegisterPage;


// correct 
// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { register } from "../services/api";

// function RegisterPage() {
//   const location = useLocation();
//   const queryRole = new URLSearchParams(location.search).get("role");

//   const [form, setForm] = useState({
//     prenom: "",
//     nom: "",
//     date_naissance: "",
//     genre: "",
//     adresse: "",
//     telephone: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "etudiant",
//     specialisation: "",
//     niveaux: "",
//     cin: "",
//     nom_eleve: "",
//     id_eleve: "",
//     acte_naissance: null,
//     photo_identite: null,
//   });

//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     if (queryRole) {
//       setForm((prev) => ({ ...prev, role: queryRole }));
//     }
//   }, [queryRole]);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setForm({ ...form, [name]: type === "file" ? files[0] : value });
//   };

//   const handleSubmit = async () => {
//     if (form.password !== form.confirmPassword) {
//       setErrorMessage("Les mots de passe ne correspondent pas.");
//       return;
//     }

//     const formData = new FormData();
//     Object.entries(form).forEach(([key, value]) => {
//       if (value) formData.append(key, value);
//     });

//     try {
//       const res = await register(formData);
//       if (res && res.token) {
//         setSuccessMessage("Inscription réussie !");
//         setErrorMessage("");
//         localStorage.setItem("token", res.token);
//       } else {
//         setErrorMessage(
//           "Erreur d'inscription : " + JSON.stringify(res.errors || res)
//         );
//         setSuccessMessage("");
//       }
//     } catch (error) {
//       setErrorMessage("Erreur d'inscription : " + error.message);
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Inscription
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             name="prenom"
//             placeholder="Prénom"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="nom"
//             placeholder="Nom"
//             onChange={handleChange}
//             className="input"
//           />

//           {form.role !== "parent" && (
//             <input
//               name="date_naissance"
//               type="date"
//               onChange={handleChange}
//               className="input"
//             />
//           )}

//           {/* Genre */}
//           <div className="flex items-center space-x-4">
//             <label className="text-gray-700">Genre :</label>
//             <label>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="homme"
//                 onChange={handleChange}
//                 checked={form.genre === "homme"}
//               />
//               Homme
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="femme"
//                 onChange={handleChange}
//                 checked={form.genre === "femme"}
//               />
//               Femme
//             </label>
//           </div>

//           <input
//             name="adresse"
//             placeholder="Adresse complète"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="telephone"
//             placeholder="Téléphone"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Mot de passe"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="confirmPassword"
//             type="password"
//             placeholder="Confirmer le mot de passe"
//             onChange={handleChange}
//             className="input"
//           />

//           {/* Parent fields */}
//           {form.role === "parent" && (
//             <>
//               <input
//                 name="cin"
//                 placeholder="CIN"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <input
//                 name="nom_eleve"
//                 placeholder="Nom complet de l'élève"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <input
//                 name="id_eleve"
//                 placeholder="Identifiant de l'élève"
//                 onChange={handleChange}
//                 className="input"
//               />
//             </>
//           )}

//           {/* Enseignant fields */}
//           {form.role === "enseignant" && (
//             <>
//               <input
//                 name="specialisation"
//                 placeholder="Spécialisation"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <input
//                 name="niveaux"
//                 placeholder="Niveaux enseignés"
//                 onChange={handleChange}
//                 className="input"
//               />
//             </>
//           )}

//           {/* Étudiant fields */}
//           {form.role === "etudiant" && (
//             <>
//               <div>
//                 <label>Acte de naissance :</label>
//                 <input
//                   type="file"
//                   name="acte_naissance"
//                   onChange={handleChange}
//                   className="input"
//                 />
//               </div>
//               <div>
//                 <label>Photo d'identité :</label>
//                 <input
//                   type="file"
//                   name="photo_identite"
//                   onChange={handleChange}
//                   className="input"
//                 />
//               </div>
//             </>
//           )}
//         </div>

//         {/* Rôle: ne s'affiche que si non présent dans l'URL */}
//         {!queryRole && (
//           <div className="mt-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Rôle
//             </label>
//             <select name="role" onChange={handleChange} className="input mt-1">
//               <option value="etudiant">Étudiant</option>
//               <option value="enseignant">Enseignant</option>
//               <option value="parent">Parent</option>
//             </select>
//           </div>
//         )}

//         <button
//           onClick={handleSubmit}
//           className="w-full bg-blue-600 text-white py-2 rounded-lg mt-6 hover:bg-blue-700 transition"
//         >
//           S'inscrire
//         </button>

//         {successMessage && (
//           <p className="text-green-600 text-center mt-4 font-semibold">
//             {successMessage}
//           </p>
//         )}
//         {errorMessage && (
//           <p className="text-red-600 text-center mt-4 font-semibold">
//             {errorMessage}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default RegisterPage;
//lastt
// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { register } from "../services/api";

// function RegisterPage() {
//   const location = useLocation();
//   const queryRole = new URLSearchParams(location.search).get("role");

//   const [form, setForm] = useState({
//     prenom: "",
//     nom: "",
//     date_naissance: "",
//     genre: "",
//     adresse: "",
//     telephone: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "etudiant",

//     // Champs spécifiques
//     cne: "",
//     classe: "",
//     acte_naissance: null,
//     photo_identite: null,
//     parent_id: "",

//     specialite: "",
//     grade: "",
//     cin: "",

//     profession: "",
//     etudiant_cne: "",
//   });

//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     if (queryRole) {
//       setForm((prev) => ({ ...prev, role: queryRole }));
//     }
//   }, [queryRole]);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setForm({ ...form, [name]: type === "file" ? files[0] : value });
    
//   };

//   const handleSubmit = async () => {
//     if (form.password !== form.confirmPassword) {
//       setErrorMessage("Les mots de passe ne correspondent pas.");
//       return;
//     }

//     const formData = new FormData();
//     Object.entries(form).forEach(([key, value]) => {
//       if (value !== null && value !== "") {
//         formData.append(key, value);
//       }
//     });

//     try {
//       const res = await register(formData);
//       if (res && res.token) {
//         setSuccessMessage("Inscription réussie !");
//         setErrorMessage("");
//         localStorage.setItem("token", res.token);
//       } else {
//         const msg = res?.errors
//           ? Object.values(res.errors).flat().join(" / ")
//           : JSON.stringify(res);
//         setErrorMessage("Erreur d'inscription : " + msg);
//         setSuccessMessage("");
//       }
//     } catch (error) {
//       setErrorMessage("Erreur d'inscription : " + error.message);
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Inscription
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             name="prenom"
//             placeholder="Prénom"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="nom"
//             placeholder="Nom"
//             onChange={handleChange}
//             className="input"
//           />

//           <input
//             name="date_naissance"
//             type="date"
//             onChange={handleChange}
//             className="input"
//           />

//           <div className="flex items-center space-x-4">
//             <label className="text-gray-700">Genre :</label>
//             <label>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="homme"
//                 onChange={handleChange}
//                 checked={form.genre === "homme"}
//               />
//               Homme
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="femme"
//                 onChange={handleChange}
//                 checked={form.genre === "femme"}
//               />
//               Femme
//             </label>
//           </div>

//           <input
//             name="adresse"
//             placeholder="Adresse complète"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="telephone"
//             placeholder="Téléphone"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Mot de passe"
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             name="confirmPassword"
//             type="password"
//             placeholder="Confirmer le mot de passe"
//             onChange={handleChange}
//             className="input"
//           />

//           {/* Étudiant */}
//           {form.role === "etudiant" && (
//             <>
//               <input
//                 name="cne"
//                 placeholder="CNE"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <input
//                 name="classe"
//                 placeholder="Classe"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <input
//                 name="parent_id"
//                 placeholder="ID du parent (facultatif)"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <div>
//                 <label>Acte de naissance :</label>
//                 <input
//                   type="file"
//                   name="acte_naissance"
//                   onChange={handleChange}
//                   className="input"
//                 />
//               </div>
//               <div>
//                 <label>Photo d'identité :</label>
//                 <input
//                   type="file"
//                   name="photo_identite"
//                   onChange={handleChange}
//                   className="input"
//                 />
//               </div>
//             </>
//           )}

//           {/* Enseignant */}
//           {form.role === "enseignant" && (
//             <>
//               <input
//                 name="specialite"
//                 placeholder="Spécialité"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <input
//                 name="grade"
//                 placeholder="Grade"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <input
//                 name="cin"
//                 placeholder="CIN"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <div className="mb-2">
//                 <label>CV (PDF ou Image)</label>
//                 <input
//                   type="file"
//                   name="cv"
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//             </>
//           )}

//           {/* Parent */}
//           {form.role === "parent" && (
//             <>
//               <input
//                 name="profession"
//                 placeholder="Profession"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <input
//                 name="cin"
//                 placeholder="CIN"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <input
//                 name="etudiant_cne"
//                 placeholder="CNE de l'étudiant"
//                 onChange={handleChange}
//                 className="input"
//               />
//             </>
//           )}
//         </div>

//         {!queryRole && (
//           <div className="mt-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Rôle
//             </label>
//             <select name="role" onChange={handleChange} className="input mt-1">
//               <option value="etudiant">Étudiant</option>
//               <option value="enseignant">Enseignant</option>
//               <option value="parent">Parent</option>
//             </select>
//           </div>
//         )}

//         <button
//           onClick={handleSubmit}
//           className="w-full bg-blue-600 text-white py-2 rounded-lg mt-6 hover:bg-blue-700 transition"
//         >
//           S'inscrire
//         </button>

//         {successMessage && (
//           <p className="text-green-600 text-center mt-4 font-semibold">
//             {successMessage}
//           </p>
//         )}
//         {errorMessage && (
//           <p className="text-red-600 text-center mt-4 font-semibold">
//             {errorMessage}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default RegisterPage;
import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { register } from "../services/api";

function RegisterPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryRole = new URLSearchParams(location.search).get("role");

  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    date_naissance: "",
    genre: "",
    adresse: "",
    telephone: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "etudiant",

    // Champs spécifiques
    cne: "",
    classe: "",
    acte_naissance: null,
    photo_identite: null,

    specialite: "",
    grade: "",
    cin: "",

    profession: "",
    etudiant_cne: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (queryRole) {
      setForm((prev) => ({ ...prev, role: queryRole }));
    }
  }, [queryRole]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm({ ...form, [name]: type === "file" ? files[0] : value });
  };

  const handleSubmit = async () => {
    if (form.password !== form.confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        formData.append(key, value);
      }
    });

    try {
      const res = await register(formData);
      if (res && res.token) {
        setSuccessMessage("Inscription réussie !");
        setErrorMessage("");
        setTimeout(() => {
          navigate(`/login?role=${form.role}`);
        }, 5000);
                localStorage.setItem("token", res.token);
      } else {
        const msg = res?.errors
          ? Object.values(res.errors).flat().join(" / ")
          : JSON.stringify(res);
        setErrorMessage("Erreur d'inscription : " + msg);
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Erreur d'inscription : " + error.message);
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Inscription
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="prenom"
            placeholder="Prénom"
            onChange={handleChange}
            className="input"
          />
          <input
            name="nom"
            placeholder="Nom"
            onChange={handleChange}
            className="input"
          />
          <input
            name="date_naissance"
            type="date"
            onChange={handleChange}
            className="input"
          />
          <div className="flex items-center space-x-4">
            <label className="text-gray-700">Genre :</label>
            <label>
              <input
                type="radio"
                name="genre"
                value="homme"
                onChange={handleChange}
                checked={form.genre === "homme"}
              />
              Homme
            </label>
            <label>
              <input
                type="radio"
                name="genre"
                value="femme"
                onChange={handleChange}
                checked={form.genre === "femme"}
              />
              Femme
            </label>
          </div>
          <input
            name="adresse"
            placeholder="Adresse complète"
            onChange={handleChange}
            className="input"
          />
          <input
            name="telephone"
            placeholder="Téléphone"
            onChange={handleChange}
            className="input"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="input"
          />
          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChange}
            className="input"
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirmer le mot de passe"
            onChange={handleChange}
            className="input"
          />

          {/* Étudiant */}
          {form.role === "etudiant" && (
            <>
              <input
                name="cne"
                placeholder="CNE"
                onChange={handleChange}
                className="input"
              />
              <input
                name="classe"
                placeholder="Classe"
                onChange={handleChange}
                className="input"
              />
              <div>
                <label>Acte de naissance :</label>
                <input
                  type="file"
                  name="acte_naissance"
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div>
                <label>Photo d'identité :</label>
                <input
                  type="file"
                  name="photo_identite"
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </>
          )}

          {/* Enseignant */}
          {form.role === "enseignant" && (
            <>
              <input
                name="specialite"
                placeholder="Spécialité"
                onChange={handleChange}
                className="input"
              />
              <input
                name="grade"
                placeholder="Grade"
                onChange={handleChange}
                className="input"
              />
              <input
                name="cin"
                placeholder="CIN"
                onChange={handleChange}
                className="input"
              />
              <div className="mb-2">
                <label>CV (PDF ou Image)</label>
                <input
                  type="file"
                  name="cv"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </>
          )}

          {/* Parent */}
          {form.role === "parent" && (
            <>
              <input
                name="profession"
                placeholder="Profession"
                onChange={handleChange}
                className="input"
              />
              <input
                name="cin"
                placeholder="CIN"
                onChange={handleChange}
                className="input"
              />
              <input
                name="etudiant_cne"
                placeholder="CNE de l'étudiant"
                onChange={handleChange}
                className="input"
              />
            </>
          )}
        </div>

        {!queryRole && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Rôle
            </label>
            <select name="role" onChange={handleChange} className="input mt-1">
              <option value="etudiant">Étudiant</option>
              <option value="enseignant">Enseignant</option>
              <option value="parent">Parent</option>
            </select>
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-lg mt-6 hover:bg-blue-700 transition"
        >
          S'inscrire
        </button>

        {/* ✅ Lien vers la page de login */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Vous avez déjà un compte ?{" "}
          <Link
            to={`/login?role=${form.role}`}
            className="text-blue-600 hover:underline"
          >
            Connectez-vous ici
          </Link>
        </p>

        {successMessage && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded text-center transition">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <p className="text-red-600 text-center mt-4 font-semibold">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default RegisterPage;

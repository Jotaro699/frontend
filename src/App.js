// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import RegisterPage from "./pages/RegisterPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// App.js
// correct ----

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/Login";
// import RegisterPage from "./pages/RegisterPage";
// import Choisirespace from "./pages/ChoisirEspace";
// import Dashboard from "./pages/Dashboard";
// import Acceuil from "./pages/Acceuil";
// import GestionEtudiants from "./pages/admin/GestionEtudiants";
// import GestionEnseignants from "./pages/admin/GestionEnseignants";
// import GestionParents from "./pages/admin/GestionParents";
// import ChoisirRoleFamille from "./pages/ChoisirRoleFamille";
// import AboutUs from "./components/AboutUs";





// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Acceuil />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/choisir" element={<Choisirespace />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/AboutUs" element={<AboutUs />} />

//         <Route path="/choisir-role-famille" element={<ChoisirRoleFamille />} />
//         <Route path="/admin/etudiants" element={<GestionEtudiants />} />
//         <Route path="/admin/enseignants" element={<GestionEnseignants />} />
//         <Route path="/admin/parents" element={<GestionParents />} />
//       </Routes>
//     </Router>
//   );
// };
// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Anciennes pages
// import LoginPage from "./pages/Login";
// import RegisterPage from "./pages/RegisterPage";
// import Choisirespace from "./pages/ChoisirEspace";
// // import DashboardPage from "./pages/Dashboard"; // Ancien Dashboard
// import Acceuil from "./pages/Acceuil";
// import GestionEtudiants from "./pages/admin/GestionEtudiants";
// import GestionEnseignants from "./pages/admin/GestionEnseignants";
// import ChoisirRoleFamille from "./pages/ChoisirRoleFamille";
// import AboutUs from "./components/AboutUs";
// import Dashboard from "./pages/Dashboard";
// import SideBar from "./pages/SideBar";



// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Anciennes routes */}
//         <Route path="/" element={<Acceuil />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/choisir" element={<Choisirespace />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/aboutUs" element={<AboutUs />} />
//         <Route path="/choisir-role-famille" element={<ChoisirRoleFamille />} />
//         {/* <Route path="/admin/etudiants" element={<GestionEtudiants />} />
//         <Route path="/admin/enseignants" element={<GestionEnseignants />} />
//         <Route path="/admin/parents" element={<GestionParents />} /> */}

//         {/* Routes avec Sidebar (nouveau dashboard) */}
//         {/* <Route
//           path="/admin/*"
//           element={ */}
//             <div className="d-flex">
//               <SideBar />
//               <div className="flex-grow-1 p-4 w-full">
//                 <Routes>
//                   <Route path="/dashboard" element={<Dashboard />} />
//                   <Route
//                     path="/admin/etudiants"
//                     element={<GestionEtudiants />}
//                   />
//                   <Route
//                     path="/admin/enseignants"
//                     element={<GestionEnseignants />}
//                   />
//                   {/* <Route path="courses" element={<Courses />} />
//                   <Route path="reports" element={<Reports />} />
//                   <Route path="payments" element={<Payments />} /> */}
//                 </Routes>
//               </div>
//             </div>
//           {/* }
//         /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import Choisirespace from "./pages/ChoisirEspace";
import Dashboard from "./pages/Dashboard";
import Acceuil from "./pages/Acceuil";
import GestionEtudiants from "./pages/admin/GestionEtudiants";
import GestionEnseignants from "./pages/admin/GestionEnseignants";
import GestionParents from "./pages/admin/GestionParents";
import GestionMatiers from "./pages/admin/GestionMatieres";
import GestionCours from "./pages/admin/GestionCours";
import Profil from "./pages/Profil";
import ChoisirRoleFamille from "./pages/ChoisirRoleFamille";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import AdminLayout from "./pages/AdminLayout";
import AcceuilAdmin from "./pages/admin/AcceuilAdmin";

//enseignant 
import SaisieNotes from "./pages/enseignant/SaisieNotes";
import MatieresAssignees from "./pages/enseignant/MatieresAssignees";
import ClassesEnseignant from "./pages/enseignant/ClassesEnseignant";


//etudiant 
import MesResultats from "./pages/etudiant/MesResultats";

//parent 
import ResultatsEnfants from "./pages/parent/ResultatsEnfants";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/choisir" element={<Choisirespace />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/choisir-role-famille" element={<ChoisirRoleFamille />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* Admin Layout avec Sidebar persistante */}
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<AcceuilAdmin />} />
          <Route path="profile" element={<Profil />} />
          <Route path="Acceuil" element={<AcceuilAdmin />} />
          <Route path="etudiants" element={<GestionEtudiants />} />
          <Route path="enseignants" element={<GestionEnseignants />} />
          <Route path="parents" element={<GestionParents />} />
          <Route path="matieres" element={<GestionMatiers />} />
          <Route path="cours" element={<GestionCours />} />
        </Route>

        <Route path="/enseignant" element={<Dashboard />}>
          {/* Routes enseignant */}
          <Route path="profile" element={<Profil />} />
          <Route path="SaisirNotes" element={<SaisieNotes />} />
          <Route path="Matiers" element={<MatieresAssignees />} />
          <Route path="ClassesEnseignant" element={<ClassesEnseignant />} />
        </Route>
        <Route path="/etudiant" element={<Dashboard />}>
          {/* Routes étudiant */}
          <Route path="profile" element={<Profil />} />
          <Route path="MesResultats" element={<MesResultats />} />
        </Route>
        <Route path="/parent" element={<Dashboard />}>
          {/* Routes parent */}
          <Route path="profile" element={<Profil />} />
          <Route path="ResultatsEnfants" element={<ResultatsEnfants />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

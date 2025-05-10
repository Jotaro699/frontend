// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/Dashboard.css";

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:8000/api/user", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then(setUser)
//       .catch(() => navigate("/")); 
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   if (!user) return <div className="loading">Chargement...</div>;

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         <h1 className="dashboard-title">🏫 École Privée</h1>
//         <button className="logout-btn" onClick={handleLogout}>
//           Déconnexion
//         </button>
//       </div>

//       <h2 className="dashboard-welcome">
//         Bienvenue dans le tableau de bord, {user.name} ({user.role})
//       </h2>

//       <div className="dashboard-card">
//         {user.role === "admin" && (
//           <>
//             <h3 className="role-title">Fonctions Admin</h3>
//             <ul className="dashboard-list">
//               <li className="clickable">📘 Gérer les matières</li>
//               <li
//                 className="clickable"
//                 onClick={() => navigate("/admin/etudiants")}
//               >
//                 🎓 Gérer les étudiants
//               </li>
//               <li
//                 className="clickable"
//                 onClick={() => navigate("/admin/enseignants")}
//               >
//                 👨‍🏫 Gérer les enseignants
//               </li>
//               <li className="clickable">📚 Gérer les cours</li>
//               <li className="clickable">📄 Consulter les rapports</li>
//             </ul>
//           </>
//         )}

//         {user.role === "enseignant" && (
//           <>
//             <h3 className="role-title">Fonctions Enseignant</h3>
//             <ul className="dashboard-list">
//               <li className="clickable">✏️ Saisir les notes</li>
//               <li className="clickable">👥 Consulter la liste des étudiants</li>
//               <li className="clickable">📚 Voir les matières assignées</li>
//             </ul>
//           </>
//         )}

//         {user.role === "etudiant" && (
//           <>
//             <h3 className="role-title">Fonctions Étudiant</h3>
//             <ul className="dashboard-list">
//               <li className="clickable">📈 Consulter les résultats</li>
//               <li className="clickable">⬇️ Télécharger les rapports</li>
//             </ul>
//           </>
//         )}

//         {user.role === "parent" && (
//           <>
//             <h3 className="role-title">Fonctions Parent</h3>
//             <ul className="dashboard-list">
//               <li className="clickable">👨‍👩‍👧 Voir les résultats de mon enfant</li>
//               <li className="clickable">💰 Payer les frais de scolarité</li>
//               <li className="clickable">🧾 Télécharger les factures</li>
//             </ul>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// ------

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   BookOpen,
//   GraduationCap,
//   Users,
//   FileText,
//   Book,
//   Pencil,
//   FileDown,
//   Eye,
//   CreditCard,
//   Receipt,
// } from "lucide-react"; // Icônes Lucide

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:8000/api/user", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then(setUser)
//       .catch(() => navigate("/"));
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   const getOptionsByRole = () => {
//     const cardStyle =
//       "rounded-2xl p-6 bg-white shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col items-center text-center gap-3 hover:bg-blue-50 cursor-pointer";
//     const options = {
//       admin: [
//         { label: "Gérer les matières", route: "#", icon: Book },
//         {
//           label: "Gérer les étudiants",
//           route: "/admin/etudiants",
//           icon: GraduationCap,
//         },
//         {
//           label: "Gérer les enseignants",
//           route: "/admin/enseignants",
//           icon: Users,
//         },
//         { label: "Gérer les cours", route: "#", icon: BookOpen },
//         { label: "Consulter les rapports", route: "#", icon: FileText },
//       ],
//       enseignant: [
//         { label: "Saisir les notes", route: "#", icon: Pencil },
//         { label: "Liste des étudiants", route: "#", icon: Users },
//         { label: "Matières assignées", route: "#", icon: Book },
//       ],
//       etudiant: [
//         { label: "Mes résultats", route: "#", icon: FileText },
//         { label: "Télécharger rapports", route: "#", icon: FileDown },
//       ],
//       parent: [
//         { label: "Résultats enfant", route: "#", icon: Eye },
//         { label: "Paiement frais", route: "#", icon: CreditCard },
//         { label: "Télécharger factures", route: "#", icon: Receipt },
//       ],
//     };

//     return options[user?.role]?.map((opt, i) => {
//       const Icon = opt.icon;
//       return (
//         <div
//           key={i}
//           onClick={() => opt.route !== "#" && navigate(opt.route)}
//           className={cardStyle}
//         >
//           <Icon className="w-10 h-10 text-blue-600 transition-all" />
//           <p className="text-lg font-semibold text-gray-800 mt-2">
//             {opt.label}
//           </p>
//         </div>
//       );
//     });
//   };

//   if (!user) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <div className="text-lg font-medium text-gray-600 animate-pulse">
//           Chargement...
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-8 md:p-16">
//       <div className="flex justify-between items-center mb-12">
//         <h1 className="text-4xl font-bold text-blue-700">🏫 École Privée</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
//         >
//           Déconnexion
//         </button>
//       </div>

//       <div className="mb-10">
//         <h2 className="text-3xl font-semibold text-gray-800">
//           Bienvenue, {user.name}
//         </h2>
//         <p className="text-lg text-gray-500 mt-2">
//           Rôle : <span className="capitalize font-medium">{user.role}</span>
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {getOptionsByRole()}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// --- correct 
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Users,
//   GraduationCap,
//   CheckCircle,
//   Bell,
//   BookOpen,
//   FileText,
//   Eye,
//   CreditCard,
//   Receipt,
// } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:8000/api/user", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then(setUser)
//       .catch(() => navigate("/"));
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };


//   const getOptionsByRole = () => {
//     const adminOptions = [
//       { label: "Gérer les matières", route: "#", icon: BookOpen },
//       {
//         label: "Gérer les étudiants",
//         route: "/admin/etudiants",
//         icon: GraduationCap,
//       },
//       {
//         label: "Gérer les enseignants",
//         route: "/admin/enseignants",
//         icon: Users,
//       },
//       { label: "Gérer les cours", route: "#", icon: BookOpen },
//       { label: "Consulter les rapports", route: "#", icon: FileText },
//     ];

//     const enseignantOptions = [
//       { label: "Saisir les notes", route: "#", icon: FileText },
//       { label: "Liste des étudiants", route: "#", icon: Users },
//       { label: "Matières assignées", route: "#", icon: BookOpen },
//     ];

//     const etudiantOptions = [
//       { label: "Mes résultats", route: "#", icon: FileText },
//       { label: "Télécharger rapports", route: "#", icon: Receipt },
//     ];

//     const parentOptions = [
//       { label: "Résultats enfant", route: "#", icon: Eye },
//       { label: "Paiement frais", route: "#", icon: CreditCard },
//       { label: "Télécharger factures", route: "#", icon: Receipt },
//     ];

//     switch (user?.role) {
//       case "admin":
//         return adminOptions;
//       case "enseignant":
//         return enseignantOptions;
//       case "etudiant":
//         return etudiantOptions;
//       case "parent":
//         return parentOptions;
//       default:
//         return [];
//     }
//   };

//   if (!user) {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//         <div className="text-secondary">Chargement...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex">
//       {/* Sidebar */}
//       <div
//         className="bg-light border-end p-3"
//         style={{ width: "250px", minHeight: "100vh" }}
//       >
//         <h4 className="text-primary mb-4">Menu</h4>
//         <ul className="list-unstyled">
//           {getOptionsByRole().map((option, index) => {
//             const Icon = option.icon;
//             return (
//               <li
//                 key={index}
//                 className="mb-3 d-flex align-items-center"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => option.route !== "#" && navigate(option.route)}
//               >
//                 <Icon size={20} className="me-2 text-primary" />
//                 <span>{option.label}</span>
//               </li>
//             );
//           })}
//         </ul>
//         <button onClick={handleLogout} className="btn btn-danger mt-4 w-100">
//           Déconnexion
//         </button>
//       </div>

//       {/* Contenu principal */}
//       <div className="container py-4">
//         {/* Bienvenue */}
//         <div className="mb-5">
//           <h3 className="fw-bold">Bienvenue, {user.name}</h3>
//           <p className="text-muted">Rôle : {user.role}</p>
//         </div>

//         {/* Statistiques */}
//         <div className="row mb-5">
//           {stats.map((stat, index) => (
//             <div className="col-md-3 mb-3" key={index}>
//               <div className={`card border-${stat.color} shadow-sm`}>
//                 <div className="card-body d-flex align-items-center">
//                   <div className={`text-${stat.color} me-3`}>{stat.icon}</div>
//                   <div>
//                     <div className="small text-muted">{stat.title}</div>
//                     <div className="fs-5 fw-bold">{stat.value}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Graphiques */}
//         <div className="row mb-5">
//           <div className="col-lg-8 mb-3">
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title mb-3">Évolution des Étudiants</h5>
//                 <div style={{ height: 300 }}>
//                   <ResponsiveContainer width="100%" height="100%">
//                     <LineChart data={studentGrowthData}>
//                       <XAxis dataKey="month" />
//                       <YAxis />
//                       <Tooltip />
//                       <Line
//                         type="monotone"
//                         dataKey="students"
//                         stroke="#0d6efd"
//                         strokeWidth={2}
//                       />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4 mb-3">
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title mb-3">Répartition des Matières</h5>
//                 <div style={{ height: 300 }}>
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={subjectDistributionData}
//                         dataKey="value"
//                         innerRadius={50}
//                         outerRadius={80}
//                         paddingAngle={5}
//                       >
//                         {subjectDistributionData.map((_, index) => (
//                           <Cell
//                             key={index}
//                             fill={COLORS[index % COLORS.length]}
//                           />
//                         ))}
//                       </Pie>
//                       <Tooltip />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// -------correct 2
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Users,
//   GraduationCap,
//   CheckCircle,
//   Bell,
//   BookOpen,
//   FileText,
//   Eye,
//   CreditCard,
//   Receipt,
// } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:8000/api/user", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then(setUser)
//       .catch(() => navigate("/"));
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   const getOptionsByRole = () => {
//     const adminOptions = [
//       { label: "Gérer les matières", route: "/admin/matieres", icon: BookOpen },
//       {
//         label: "Gérer les étudiants",
//         route: "/admin/etudiants",
//         icon: GraduationCap,
//       },
//       {
//         label: "Gérer les enseignants",
//         route: "/admin/enseignants",
//         icon: Users,
//       },
//       { label: "Gérer les cours", route: "/admin/cours", icon: BookOpen },
//       {
//         label: "Consulter les rapports",
//         route: "/admin/rapports",
//         icon: FileText,
//       },
//     ];

//     const enseignantOptions = [
//       { label: "Saisir les notes", route: "/enseignant/notes", icon: FileText },
//       {
//         label: "Liste des étudiants",
//         route: "/enseignant/etudiants",
//         icon: Users,
//       },
//       {
//         label: "Matières assignées",
//         route: "/enseignant/matieres",
//         icon: BookOpen,
//       },
//     ];

//     const etudiantOptions = [
//       { label: "Mes résultats", route: "/etudiant/resultats", icon: FileText },
//       {
//         label: "Télécharger rapports",
//         route: "/etudiant/rapports",
//         icon: Receipt,
//       },
//     ];

//     const parentOptions = [
//       {
//         label: "Résultats enfant",
//         route: "/parent/resultats-enfant",
//         icon: Eye,
//       },
//       { label: "Paiement frais", route: "/parent/paiement", icon: CreditCard },
//       {
//         label: "Télécharger factures",
//         route: "/parent/factures",
//         icon: Receipt,
//       },
//     ];

//     switch (user?.role) {
//       case "admin":
//         return adminOptions;
//       case "enseignant":
//         return enseignantOptions;
//       case "etudiant":
//         return etudiantOptions;
//       case "parent":
//         return parentOptions;
//       default:
//         return [];
//     }
//   };

//   if (!user) {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//         <div className="text-secondary">Chargement...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex">
//       {/* Sidebar */}
//       <div
//         className="bg-light border-end p-3"
//         style={{ width: "250px", minHeight: "100vh" }}
//       >
//         <h4 className="text-primary mb-4">Menu</h4>
//         <ul className="list-unstyled">
//           {getOptionsByRole().map((option, index) => {
//             const Icon = option.icon;
//             return (
//               <li
//                 key={index}
//                 className="mb-3 d-flex align-items-center"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => option.route !== "#" && navigate(option.route)}
//               >
//                 <Icon size={20} className="me-2 text-primary" />
//                 <span>{option.label}</span>
//               </li>
//             );
//           })}
//         </ul>
//         <button onClick={handleLogout} className="btn btn-danger mt-4 w-100">
//           Déconnexion
//         </button>
//       </div>

//       {/* Contenu principal */}
//       <div className="container py-4">
//         <div className="mb-5">
//           <h3 className="fw-bold">Bienvenue, {user.name}</h3>
//           <p className="text-muted">Rôle : {user.role}</p>
//         </div>

//         <div className="row mb-5">
//           {stats.map((stat, index) => (
//             <div className="col-md-3 mb-3" key={index}>
//               <div className={`card border-${stat.color} shadow-sm`}>
//                 <div className="card-body d-flex align-items-center">
//                   <div className={`text-${stat.color} me-3`}>{stat.icon}</div>
//                   <div>
//                     <div className="small text-muted">{stat.title}</div>
//                     <div className="fs-5 fw-bold">{stat.value}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="row mb-5">
//           <div className="col-lg-8 mb-3">
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title mb-3">Évolution des Étudiants</h5>
//                 <div style={{ height: 300 }}>
//                   <ResponsiveContainer width="100%" height="100%">
//                     <LineChart data={studentGrowthData}>
//                       <XAxis dataKey="month" />
//                       <YAxis />
//                       <Tooltip />
//                       <Line
//                         type="monotone"
//                         dataKey="students"
//                         stroke="#0d6efd"
//                         strokeWidth={2}
//                       />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4 mb-3">
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title mb-3">Répartition des Matières</h5>
//                 <div style={{ height: 300 }}>
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={subjectDistributionData}
//                         dataKey="value"
//                         innerRadius={50}
//                         outerRadius={80}
//                         paddingAngle={5}
//                       >
//                         {subjectDistributionData.map((_, index) => (
//                           <Cell
//                             key={index}
//                             fill={COLORS[index % COLORS.length]}
//                           />
//                         ))}
//                       </Pie>
//                       <Tooltip />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// --correct
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Users,
//   GraduationCap,
//   CheckCircle,
//   Bell,
//   BookOpen,
//   FileText,
//   Eye,
//   CreditCard,
//   Receipt,
// } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AdminLayout from "../pages/AdminLayout"; // Import the layout

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:8000/api/user", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then(setUser)
//       .catch(() => navigate("/"));
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   const getOptionsByRole = () => {
//     const adminOptions = [
//       { label: "Gérer les matières", route: "#", icon: BookOpen },
//       {
//         label: "Gérer les étudiants",
//         route: "/admin/etudiants",
//         icon: GraduationCap,
//       },
//       {
//         label: "Gérer les enseignants",
//         route: "/admin/enseignants",
//         icon: Users,
//       },
//       { label: "Gérer les cours", route: "#", icon: BookOpen },
//       { label: "Consulter les rapports", route: "#", icon: FileText },
//     ];

//     const enseignantOptions = [
//       { label: "Saisir les notes", route: "#", icon: FileText },
//       { label: "Liste des étudiants", route: "#", icon: Users },
//       { label: "Matières assignées", route: "#", icon: BookOpen },
//     ];

//     const etudiantOptions = [
//       { label: "Mes résultats", route: "#", icon: FileText },
//       { label: "Télécharger rapports", route: "#", icon: Receipt },
//     ];

//     const parentOptions = [
//       { label: "Résultats enfant", route: "#", icon: Eye },
//       { label: "Paiement frais", route: "#", icon: CreditCard },
//       { label: "Télécharger factures", route: "#", icon: Receipt },
//     ];

//     switch (user?.role) {
//       case "admin":
//         return adminOptions;
//       case "enseignant":
//         return enseignantOptions;
//       case "etudiant":
//         return etudiantOptions;
//       case "parent":
//         return parentOptions;
//       default:
//         return [];
//     }
//   };

//   if (!user) {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//         <div className="text-secondary">Chargement...</div>
//       </div>
//     );
//   }

//   return (
//     <AdminLayout>
//       {" "}
//       {/* Wrap the dashboard content with AdminLayout */}
//       <div className="container py-4">
//         {/* Welcome section */}
//         <div className="mb-5">
//           <h3 className="fw-bold">Bienvenue, {user.name}</h3>
//           <p className="text-muted">Rôle : {user.role}</p>
//         </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// }

// export default Dashboard;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  GraduationCap,
  BookOpen,
  FileText,
  Eye,
  CreditCard,
  Receipt,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLayout from "../pages/AdminLayout";
import AccueilAdmin from "../pages/admin/AcceuilAdmin"; // <-- import ajouté

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      // .then(setUser)
      .then((data) => {
        setUser(data);
        localStorage.setItem("role", data.role); // 👈 زيد هاد السطر
      })

      .catch(() => navigate("/"));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const getOptionsByRole = () => {
    const adminOptions = [
      {
        label: "Gérer les matières",
        route: "/admin/matieres",
        icon: BookOpen,
      },
      {
        label: "Gérer les étudiants",
        route: "/admin/etudiants",
        icon: GraduationCap,
      },
      {
        label: "Gérer les enseignants",
        route: "/admin/enseignants",
        icon: Users,
      },
      { label: "Gérer les cours", route: "#", icon: BookOpen },
      { label: "Consulter les rapports", route: "#", icon: FileText },
    ];

    const enseignantOptions = [
      { label: "Saisir les notes", route: "#", icon: FileText },
      { label: "Liste des étudiants", route: "#", icon: Users },
      { label: "Matières assignées", route: "#", icon: BookOpen },
    ];

    const etudiantOptions = [
      { label: "Mes résultats", route: "#", icon: FileText },
      { label: "Télécharger rapports", route: "#", icon: Receipt },
    ];

    const parentOptions = [
      { label: "Résultats enfant", route: "#", icon: Eye },
      { label: "Paiement frais", route: "#", icon: CreditCard },
      { label: "Télécharger factures", route: "#", icon: Receipt },
    ];

    switch (user?.role) {
      case "admin":
        return adminOptions;
      case "enseignant":
        return enseignantOptions;
      case "etudiant":
        return etudiantOptions;
      case "parent":
        return parentOptions;
      default:
        return [];
    }
  };

  if (!user) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-secondary">Chargement...</div>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="container py-4">
        <div className="mb-5">
          <h3 className="fw-bold">Bienvenue, {user.name}</h3>
          <p className="text-muted">Rôle : {user.role}</p>
        </div>

        {/* Si l'utilisateur est un admin, afficher AccueilAdmin */}
        {user.role === "admin" && <AccueilAdmin />}

        {/* Si besoin, vous pouvez afficher ici des fonctionnalités spécifiques pour d'autres rôles */}
        {/* Exemple :
        {user.role === "enseignant" && <EnseignantAccueil />} 
        */}
      </div>
    </AdminLayout>
  );
}

export default Dashboard;

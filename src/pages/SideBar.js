// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   LayoutDashboardIcon,
//   BookOpenIcon,
//   UsersIcon,
//   GraduationCapIcon,
//   FileTextIcon,
//   CreditCardIcon,
//   LogOutIcon,
// } from "lucide-react";

// const Sidebar = ({ role }) => {
//   const location = useLocation();

//   // Définir les liens en fonction du rôle
//   const navigationItems = [];

//   if (role === "admin") {
//     navigationItems.push(
//       { name: "Dashboard", icon: <LayoutDashboardIcon size={20} />, path: "/" },
//       { name: "Matières", icon: <BookOpenIcon size={20} />, path: "/courses" },
//       { name: "Enseignants", icon: <UsersIcon size={20} />, path: "/teachers" },
//       {
//         name: "Étudiants",
//         icon: <GraduationCapIcon size={20} />,
//         path: "/students",
//       },
//       { name: "Rapports", icon: <FileTextIcon size={20} />, path: "/reports" },
//       {
//         name: "Paiements",
//         icon: <CreditCardIcon size={20} />,
//         path: "/payments",
//       }
//     );
//   } else if (role === "enseignant") {
//     navigationItems.push(
//       { name: "Dashboard", icon: <LayoutDashboardIcon size={20} />, path: "/" },
//       { name: "Matières", icon: <BookOpenIcon size={20} />, path: "/courses" },
//       {
//         name: "Étudiants",
//         icon: <GraduationCapIcon size={20} />,
//         path: "/students",
//       }
//     );
//   } else if (role === "étudiant") {
//     navigationItems.push(
//       { name: "Dashboard", icon: <LayoutDashboardIcon size={20} />, path: "/" },
//       {
//         name: "Mes Cours",
//         icon: <BookOpenIcon size={20} />,
//         path: "/my-courses",
//       },
//       {
//         name: "Mes Rapports",
//         icon: <FileTextIcon size={20} />,
//         path: "/my-reports",
//       }
//     );
//   } else if (role === "parent") {
//     navigationItems.push(
//       { name: "Dashboard", icon: <LayoutDashboardIcon size={20} />, path: "/" },
//       {
//         name: "Rapports Enfant",
//         icon: <FileTextIcon size={20} />,
//         path: "/child-reports",
//       },
//       {
//         name: "Paiements",
//         icon: <CreditCardIcon size={20} />,
//         path: "/payments",
//       }
//     );
//   }

//   const handleLogout = () => {
//     // Logique de déconnexion ici
//     alert("Déconnexion réussie !");
//     // Redirection ou suppression du token selon ton système
//   };

//   return (
//     <aside
//       className="d-flex flex-column bg-primary text-white min-vh-100 p-3"
//       style={{
//         width: "250px",
//         background: "linear-gradient(180deg, #004085, #0056b3)",
//       }}
//     >
//       {/* Photo du directeur ou de l'utilisateur */}
//       <div className="text-center mb-3">
//         <img
//           src="https://www.w3schools.com/howto/img_avatar.png"
//           alt="Avatar utilisateur"
//           className="rounded-circle border border-light"
//           width="80"
//           height="80"
//         />
//       </div>

//       {/* Titre de l'utilisateur */}
//       <div className="mb-4 border-bottom pb-3 text-center">
//         <h1 className="h5 fw-bold">
//           {role.charAt(0).toUpperCase() + role.slice(1)}
//         </h1>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-grow-1 overflow-auto">
//         <ul className="nav flex-column">
//           {navigationItems.map((item) => (
//             <li className="nav-item" key={item.path}>
//               <Link
//                 to={item.path}
//                 className={`nav-link text-white d-flex align-items-center py-2 px-3 rounded ${
//                   location.pathname === item.path
//                     ? "bg-dark fw-semibold"
//                     : "hover:bg-opacity-10"
//                 }`}
//               >
//                 <span className="me-2">{item.icon}</span>
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Infos utilisateur et bouton logout */}
//       <div className="mt-auto pt-3 border-top">
//         <div className="d-flex align-items-center mb-3">
//           <div
//             className="bg-secondary rounded-circle d-flex align-items-center justify-content-center"
//             style={{ width: "35px", height: "35px" }}
//           >
//             <span className="text-white fw-bold">
//               {role.charAt(0).toUpperCase()}
//             </span>
//           </div>
//           <div className="ms-2">
//             <p className="mb-0 fw-medium">
//               {role.charAt(0).toUpperCase() + role.slice(1)}
//             </p>
//             <small className="text-white-50">user@ecole.fr</small>
//           </div>
//         </div>

//         <button
//           onClick={handleLogout}
//           className="btn btn-outline-light btn-sm w-100 d-flex align-items-center justify-content-center"
//         >
//           <LogOutIcon size={16} className="me-2" />
//           Déconnexion
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboardIcon,
  BookOpenIcon,
  UsersIcon,
  GraduationCapIcon,
  FileTextIcon,
  CreditCardIcon,
  NotebookIcon,
  LogOutIcon,
  Users,
  BookOpen,
  FileText,
  Eye,
  CreditCard,
  Download,
} from "lucide-react";

const Sidebar = ({ role }) => {
  const location = useLocation();
  const [profileImage, setProfileImage] = useState(
    "https://www.w3schools.com/howto/img_avatar.png"
  );
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userEmail = storedUser?.email || "user@ecole.fr";

  useEffect(() => {
    if (storedUser?.role === "etudiant") {
      fetch(`http://localhost:8000/api/etudiants/by-user/${storedUser.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.photo_identite) {
            setProfileImage(
              `http://localhost:8000/storage/${data.photo_identite}`
            );
          }
        })
        .catch((err) => console.error("Erreur photo:", err));
    }
  }, []);
  // Sécuriser le rôle s'il est undefined
  const safeRole = role || "utilisateur";

  const navigationItems = [];

  if (safeRole === "admin") {
    navigationItems.push(
      {
        name: "Dashboard",
        icon: <LayoutDashboardIcon size={20} />,
        path: "/admin/Acceuil",
      },
      {
        name: "Étudiants",
        icon: <GraduationCapIcon size={20} />,
        path: "/admin/etudiants",
      },
      {
        name: "Enseignants",
        icon: <UsersIcon size={20} />,
        path: "/admin/enseignants",
      },
      {
        name: "Matières",
        icon: <BookOpenIcon size={20} />,
        path: "/admin/matieres",
      },
      {
        name: "Cours", // ✅ cours ajouté ici
        icon: <NotebookIcon size={20} />,
        path: "/admin/cours",
      },
      { name: "Rapports", icon: <FileTextIcon size={20} />, path: "/reports" },
      {
        name: "Paiements",
        icon: <CreditCardIcon size={20} />,
        path: "/payments",
      }
    );
  } else if (safeRole === "enseignant") {
    navigationItems.push(
      {
        name: "Saisir les notes",
        path: "/enseignant/SaisirNotes",
        icon: <FileText size={20} />,
      },
      {
        name: "Liste des étudiants",
        path: "/enseignant/ClassesEnseignant",
        icon: <Users size={20} />,
      },
      {
        name: "Matières assignées",
        path: "/enseignant/Matiers",
        icon: <BookOpen size={20} />,
      }
    );
  } else if (safeRole === "etudiant") {
    navigationItems.push(
      {
        name: " Mes résultats",
        path: "/etudiant/MesResultats",
        icon: <FileText size={20} />,
      },
      {
        name: "Mes Cours",
        icon: <BookOpenIcon size={20} />,
        path: "/my-courses",
      },
      { name: "Télécharger rapports", route: "#", icon: <Download size={20} /> }
    );
  } else if (safeRole === "parent") {
    navigationItems.push(
      {
        name: "Résultats enfant",
        path: "/parent/ResultatsEnfants",
        icon: <Eye size={20} />,
      },
      { name: "Paiement frais", route: "#", icon: <CreditCard size={20} /> },
      { name: "Télécharger factures", route: "#", icon: <Download size={20} /> }
    );
  }

const navigate = useNavigate();
  const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
  };

  return (
    <aside
      className="d-flex flex-column bg-primary text-white min-vh-100 p-3"
      style={{
        width: "250px",
        background: "linear-gradient(180deg, #004085, #0056b3)",
      }}
    >
      {/* Avatar */}
      <div className="text-center mb-3">
        <Link to={`/${safeRole}/profile`}>
          <img
            src={profileImage}
            alt="Avatar utilisateur"
            className="rounded-circle border border-light cursor-pointer hover:opacity-80 transition"
            width="80"
            height="80"
          />
        </Link>
      </div>

      {/* Titre utilisateur */}
      <div className="mb-4 border-bottom pb-3 text-center">
        <h1 className="h5 fw-bold">
          {safeRole.charAt(0).toUpperCase() + safeRole.slice(1)}
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-grow-1 overflow-auto">
        <ul className="nav flex-column">
          {navigationItems.map((item) => (
            <li className="nav-item" key={item.path}>
              <Link
                to={item.path}
                className={`nav-link text-white d-flex align-items-center py-2 px-3 rounded ${
                  location.pathname === item.path
                    ? "bg-dark fw-semibold"
                    : "hover:bg-opacity-10"
                }`}
                // <Link
                //   to={item.path}
                //   className={`nav-link text-white d-flex align-items-center py-2 px-3 rounded ${
                //     location.pathname === item.path ? "bg-dark fw-semibold" : ""
                //   }`}
              >
                <span className="me-2">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Infos utilisateur */}
      <div className="mt-auto pt-3 border-top">
        <div className="d-flex align-items-center mb-3">
          <div
            className="bg-secondary rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "35px", height: "35px" }}
          >
            <span className="text-white fw-bold">
              {safeRole.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="ms-2">
            <p className="mb-0 fw-medium">
              {safeRole.charAt(0).toUpperCase() + safeRole.slice(1)}
            </p>
            {/* <small className="text-white-50">user@ecole.fr</small> */}
            <small className="text-white-50">{userEmail}</small>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="relative group flex  w-100 items-center justify-center px-4 py-2 overflow-hidden rounded-md"
        >
          {/* Background color transition */}
          <span className="absolute inset-0 bg-gray-800 group-hover:bg-red-600 transition-colors duration-300 ease-in-out"></span>

          {/* Content with subtle animation */}
          <div className="relative flex items-center text-gray-200 group-hover:text-white">
            <LogOutIcon
              size={16}
              className="mr-2 transform  transition-transform duration-300"
            />
            <span className="text-sm font-medium">Déconnexion</span>
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

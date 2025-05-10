// // src/layouts/AdminLayout.js
// import React, { useEffect, useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import Sidebar from "../pages/SideBar";

// const AdminLayout = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:8000/api/user", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.role !== "admin") {
//           navigate("/");
//         } else {
//           setUser(data);
//         }
//       })
//       .catch(() => navigate("/"));
//   }, [navigate]);

//   if (!user) {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//         <div className="text-secondary">Chargement...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex">
//       <Sidebar role={user.role} />
//       <div className="flex-grow-1 p-4" style={{ minHeight: "100vh" }}>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;
import React, { useEffect, useState, createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../pages/SideBar";

// Créer un contexte pour partager l'utilisateur
export const UserContext = createContext(null);

const AdminLayout = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      // .then((data) => {
      //   if (!data.role) {
      //     navigate("/");
      //   } else {
      //     setUser(data);
      //   }
      // })
      .then((data) => {
        if (!data.role) {
          navigate("/");
        } else {
          setUser(data);
          localStorage.setItem("role", data.role); // 👈 هذا هو السطر المهم
        }
      })

      .catch(() => navigate("/"))
      .finally(() => setLoading(false));
  }, [navigate]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-secondary">Chargement...</div>
      </div>
    );
  }

  if (
    !user ||
    !["admin", "enseignant", "etudiant", "parent"].includes(user.role)
  ) {
    navigate("/");
    return null;
  }

  return (
    <UserContext.Provider value={user}>
      <div className="d-flex">
        <Sidebar role={user.role} />
        <div className="flex-grow-1 p-4" style={{ minHeight: "100vh" }}>
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default AdminLayout;

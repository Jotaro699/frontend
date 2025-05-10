// import React from "react";

// function Navbar() {
//   return (
//     <nav style={{ padding: "1rem", background: "#eee" }}>
//       <h3>École Privée</h3>
//     </nav>
//   );
// }

// export default Navbar;
// src/components/Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
          École Privée
        </h1>
        <nav className="flex items-center space-x-6">
          <a href="/" className="hover:underline text-white">
            Accueil
          </a>
          <a href="/aboutUs" className="hover:underline text-white">
            About Us
          </a>
          <a href="/contact" className="hover:underline text-white">
            Contact
          </a>
          <button
            onClick={() => navigate("/choisir")}
            className="bg-white text-blue-800 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Se connecter
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

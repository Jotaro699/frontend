// // import React, { useState } from "react";


// // function GestionEtudiants() {
// //   const [etudiants, setEtudiants] = useState([]);
// //   const [afficher, setAfficher] = useState(false);
// //   const [formVisible, setFormVisible] = useState(false);
// //   const [nouvelEtudiant, setNouvelEtudiant] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //   });

// //   // 🔹 Afficher les étudiants
// //   const fetchEtudiants = () => {
// //     fetch("http://localhost:8000/api/etudiants", {
// //       // URL mise à jour
// //       headers: {
// //         Authorization: `Bearer ${localStorage.getItem("token")}`,
// //       },
// //     })
// //       .then((res) => {
// //         if (!res.ok) throw new Error("Erreur lors du chargement");
// //         return res.json();
// //       })
// //       .then((data) => {
// //         setEtudiants(data);
// //         setAfficher(true);
// //       })
// //       .catch((err) => console.error("Erreur:", err));
// //   };

// //   // 🔹 Ajouter un étudiant
// //   const ajouterEtudiant = (e) => {
// //     e.preventDefault();

// //     fetch("http://localhost:8000/api/users", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${localStorage.getItem("token")}`,
// //       },
// //       body: JSON.stringify({
// //         ...nouvelEtudiant,
// //         role: "etudiant",
// //       }),
// //     })
// //       .then((res) => {
// //         if (!res.ok) throw new Error("Erreur lors de l'ajout");
// //         return res.json();
// //       })
// //       .then((data) => {
// //         alert("Étudiant ajouté !");
// //         setFormVisible(false);
// //         setNouvelEtudiant({ name: "", email: "", password: "" });
// //         fetchEtudiants(); // Recharger la liste
// //       })
// //       .catch((err) => console.error("Erreur ajout:", err));
// //   };

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h2>Gestion des Étudiants</h2>

// //       <button onClick={fetchEtudiants}>Afficher les étudiants</button>
// //       <button onClick={() => setFormVisible(!formVisible)}>
// //         {formVisible ? "Annuler" : "Ajouter Étudiant"}
// //       </button>

// //       {/* Formulaire d'ajout */}
// //       {formVisible && (
// //         <form onSubmit={ajouterEtudiant} style={{ marginTop: "20px" }}>
// //           <input
// //             type="text"
// //             placeholder="Nom"
// //             value={nouvelEtudiant.name}
// //             onChange={(e) =>
// //               setNouvelEtudiant({ ...nouvelEtudiant, name: e.target.value })
// //             }
// //             required
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={nouvelEtudiant.email}
// //             onChange={(e) =>
// //               setNouvelEtudiant({ ...nouvelEtudiant, email: e.target.value })
// //             }
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Mot de passe"
// //             value={nouvelEtudiant.password}
// //             onChange={(e) =>
// //               setNouvelEtudiant({
// //                 ...nouvelEtudiant,
// //                 password: e.target.value,
// //               })
// //             }
// //             required
// //           />
// //           <button type="submit">Enregistrer</button>
// //         </form>
// //       )}

// //       {/* Liste des étudiants */}
// //       {afficher && (
// //         <ul style={{ marginTop: "20px" }}>
// //           {etudiants.map((etudiant) => (
// //             <li key={etudiant.id}>
// //               {etudiant.name} - {etudiant.email}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // }

// // export default GestionEtudiants;

// import React, { useState } from "react";
// import { fetchEtudiants } from "../../services/api"; // Utilisez un chemin relatif

// function GestionEtudiants() {
//   const [etudiants, setEtudiants] = useState([]);
//   const [afficher, setAfficher] = useState(false);

//   const handleAfficher = async () => {
//     const data = await fetchEtudiants();
//     setEtudiants(data);
//     setAfficher(true);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Gestion des Étudiants</h2>
//       <button onClick={handleAfficher}>Afficher les étudiants</button>

//       {afficher && (
//         <ul style={{ marginTop: "20px" }}>
//           {etudiants.map((etudiant) => (
//             <li key={etudiant.id}>
//               {etudiant.name} - {etudiant.email}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default GestionEtudiants;
// src/pages/GestionEtudiants.js

//correct 
// import React, { useState, useEffect } from "react";
// import { Plus, Eye, Pencil, Trash } from "lucide-react";
// import {
//   fetchEtudiants,
//   createEtudiant,
//   updateEtudiant,
//   deleteEtudiant,
// } from "../../services/api";

// function Students() {
//   const [students, setStudents] = useState([]);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [currentStudent, setCurrentStudent] = useState(null);

//   const loadStudents = async () => {
//     const data = await fetchEtudiants();
//     setStudents(data);
//   };

//   useEffect(() => {
//     loadStudents();
//   }, []);

//   const handleAddStudent = () => {
//     setCurrentStudent(null);
//     setIsFormOpen(true);
//   };

//   const handleEdit = (student) => {
//     setCurrentStudent(student);
//     setIsFormOpen(true);
//   };

//   const handleDelete = async (student) => {
//     if (window.confirm("Supprimer cet étudiant ?")) {
//       await deleteEtudiant(student.id);
//       loadStudents();
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = {
//       nom: form.nom.value,
//       email: form.email.value,
//       class: form.classe.value,
//       parent: form.parent.value,
//       telephone: form.telephone.value,
//       status: form.status.value,
//     };

//     if (currentStudent) {
//       await updateEtudiant(currentStudent.id, formData);
//     } else {
//       await createEtudiant(formData);
//     }

//     setIsFormOpen(false);
//     loadStudents();
//   };

//   return (
//     <div className="container mt-4 bg-light p-4 rounded shadow">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div>
//           <h2>Gestion des Étudiants</h2>
//           <p>Ajouter et gérer les étudiants de l'école</p>
//         </div>
//         <button onClick={handleAddStudent} className="btn btn-primary ">
//           <Plus size={16} className="me-2 " />
//           Ajouter un étudiant
//         </button>
//       </div>

//       <table className="table table-bordered table-hover bg-white">
//         <thead className="table-light">
//           <tr>
//             <th>Nom</th>
//             <th>Email</th>
//             <th>Classe</th>
//             <th>Parent</th>
//             <th>Téléphone</th>
//             <th>Statut</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.length > 0 ? (
//             students.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.nom}</td>
//                 <td>{student.email}</td>
//                 <td>{student.classe}</td>
//                 <td>{student.parent}</td>
//                 <td>{student.telephone}</td>
//                 <td>
//                   <span
//                     className={`badge ${
//                       student.status === "active"
//                         ? "bg-success"
//                         : "bg-secondary"
//                     }`}
//                   >
//                     {student.status === "active" ? "Actif" : "Inactif"}
//                   </span>
//                 </td>
//                 <td>
//                   <button className="btn btn-sm btn-info me-2">
//                     <Eye size={16} />
//                   </button>
//                   <button
//                     className="btn btn-sm btn-warning me-2"
//                     onClick={() => handleEdit(student)}
//                   >
//                     <Pencil size={16} />
//                   </button>
//                   <button
//                     className="btn btn-sm btn-danger"
//                     onClick={() => handleDelete(student)}
//                   >
//                     <Trash size={16} />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="text-center">
//                 Aucun étudiant trouvé
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {isFormOpen && (
//         <div
//           className="modal show d-block"
//           tabIndex="-1"
//           style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <form onSubmit={handleSubmit}>
//                 <div className="modal-header">
//                   <h5 className="modal-title">
//                     {currentStudent
//                       ? "Modifier un étudiant"
//                       : "Ajouter un étudiant"}
//                   </h5>
//                   <button
//                     type="button"
//                     className="btn-close"
//                     onClick={() => setIsFormOpen(false)}
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   <div className="mb-3">
//                     <label>Nom</label>
//                     <input
//                       type="text"
//                       name="name"
//                       className="form-control"
//                       defaultValue={currentStudent?.name || ""}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       className="form-control"
//                       defaultValue={currentStudent?.email || ""}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Classe</label>
//                     <input
//                       type="text"
//                       name="class"
//                       className="form-control"
//                       defaultValue={currentStudent?.class || ""}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Parent</label>
//                     <input
//                       type="text"
//                       name="parent"
//                       className="form-control"
//                       defaultValue={currentStudent?.parent || ""}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Téléphone</label>
//                     <input
//                       type="text"
//                       name="telephone"
//                       className="form-control"
//                       defaultValue={currentStudent?.telephone || ""}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Statut</label>
//                     <select
//                       name="status"
//                       className="form-select"
//                       defaultValue={currentStudent?.status || "active"}
//                     >
//                       <option value="active">Actif</option>
//                       <option value="inactive">Inactif</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     onClick={() => setIsFormOpen(false)}
//                   >
//                     Annuler
//                   </button>
//                   <button type="submit" className="btn btn-primary">
//                     {currentStudent ? "Mettre à jour" : "Ajouter"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Students;

//correct 

// import React, { useState, useEffect } from "react";
// import { Plus, Eye, Pencil, Trash } from "lucide-react";
// import {
//   fetchEtudiants,
//   createEtudiant,
//   updateEtudiant,
//   deleteEtudiant,
// } from "../../services/api";

// function Students() {
//   const [students, setStudents] = useState([]);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [currentStudent, setCurrentStudent] = useState(null);

//   const loadStudents = async () => {
//     const data = await fetchEtudiants();
//     setStudents(data);
//   };

//   useEffect(() => {
//     loadStudents();
//   }, []);

//   const handleAddStudent = () => {
//     setCurrentStudent(null);
//     setIsFormOpen(true);
//   };

//   const handleEdit = (student) => {
//     setCurrentStudent(student);
//     setIsFormOpen(true);
//   };

//   const handleDelete = async (student) => {
//     if (window.confirm("Supprimer cet étudiant ?")) {
//       try {
//         // ✅ استعمال user.id
//         await deleteEtudiant(student.user.id);
//         loadStudents();
//       } catch (error) {
//         console.error("Erreur lors de la suppression:", error);
//         alert("Échec de la suppression de l'étudiant.");
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
// const formData = {
//   nom: form.nom.value,
//   prenom: form.prenom.value,
//   email: form.email.value,
//   password: form.password.value, // facultatif
//   telephone: form.telephone.value,
//   date_naissance: form.date_naissance.value,
//   genre: form.genre.value,
//   cne: form.cne.value,
//   classe: form.classe.value,
//   parent_id: form.parent_id.value,
//   // status: form.status.value,
// };


//     try {
//       if (currentStudent) {
//         await updateEtudiant(currentStudent.user.id, formData); // ✅ update via user.id
//       } else {
//         await createEtudiant(formData);
//       }
//       setIsFormOpen(false);
//       loadStudents();
//     } catch (error) {
//       console.error("Erreur lors de l'enregistrement:", error);
//       alert("Une erreur est survenue.");
//     }
//   };

//   return (
//     <div className="container mt-4 bg-light p-4 rounded shadow">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div>
//           <h2>Gestion des Étudiants</h2>
//           <p>Ajouter et gérer les étudiants de l'école</p>
//         </div>
//         <button onClick={handleAddStudent} className="btn btn-primary">
//           <Plus size={16} className="me-2" />
//           Ajouter un étudiant
//         </button>
//       </div>

//       <table className="table table-bordered table-hover bg-white">
//         <thead className="table-light">
//           <tr>
//             <th>Nom</th>
//             <th>Email</th>
//             <th>Classe</th>
//             <th>Parent</th>
//             <th>Téléphone</th>
//             <th>Statut</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.length > 0 ? (
//             students.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.user?.nom}</td>
//                 <td>{student.user?.email}</td>
//                 <td>{student.classe}</td>
//                 <td>{student.parent?.user?.nom || "—"}</td>
//                 <td>{student.user?.telephone}</td>
//                 <td>
//                   <span
//                     className={`badge ${
//                       student.status === "active"
//                         ? "bg-success"
//                         : "bg-secondary"
//                     }`}
//                   >
//                     {student.status === "active" ? "Actif" : "Inactif"}
//                   </span>
//                 </td>
//                 <td>
//                   <button className="btn btn-sm btn-info me-2">
//                     <Eye size={16} />
//                   </button>
//                   <button
//                     className="btn btn-sm btn-warning me-2"
//                     onClick={() => handleEdit(student)}
//                   >
//                     <Pencil size={16} />
//                   </button>
//                   <button
//                     className="btn btn-sm btn-danger"
//                     onClick={() => handleDelete(student)}
//                   >
//                     <Trash size={16} />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="text-center">
//                 Aucun étudiant trouvé
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {isFormOpen && (
//         <div
//           className="modal show d-block"
//           tabIndex="-1"
//           style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <form onSubmit={handleSubmit}>
//                 <div className="modal-header">
//                   <h5 className="modal-title">
//                     {currentStudent
//                       ? "Modifier un étudiant"
//                       : "Ajouter un étudiant"}
//                   </h5>
//                   <button
//                     type="button"
//                     className="btn-close"
//                     onClick={() => setIsFormOpen(false)}
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   <div className="mb-3">
//                     <label>Nom</label>
//                     <input
//                       type="text"
//                       name="nom"
//                       className="form-control"
//                       defaultValue={currentStudent?.user?.nom || ""}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Prénom</label>
//                     <input
//                       type="text"
//                       name="prenom"
//                       className="form-control"
//                       defaultValue={currentStudent?.user?.prenom || ""}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       className="form-control"
//                       defaultValue={currentStudent?.user?.email || ""}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Mot de passe</label>
//                     <input
//                       type="password"
//                       name="password"
//                       className="form-control"
//                       placeholder={
//                         currentStudent ? "Laisser vide pour ne pas changer" : ""
//                       }
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Téléphone</label>
//                     <input
//                       type="text"
//                       name="telephone"
//                       className="form-control"
//                       defaultValue={currentStudent?.user?.telephone || ""}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Date de naissance</label>
//                     <input
//                       type="date"
//                       name="date_naissance"
//                       className="form-control"
//                       defaultValue={currentStudent?.user?.date_naissance || ""}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Genre</label>
//                     <select
//                       name="genre"
//                       className="form-select"
//                       defaultValue={currentStudent?.user?.genre || ""}
//                     >
//                       <option value="">-- Choisir --</option>
//                       <option value="homme">Homme</option>
//                       <option value="femme">Femme</option>
//                       <option value="autre">Autre</option>
//                     </select>
//                   </div>
//                   <div className="mb-3">
//                     <label>CNE</label>
//                     <input
//                       type="text"
//                       name="cne"
//                       className="form-control"
//                       defaultValue={currentStudent?.cne || ""}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Classe</label>
//                     <input
//                       type="text"
//                       name="classe"
//                       className="form-control"
//                       defaultValue={currentStudent?.classe || ""}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>ID Parent ( optionel ) </label>
//                     <input
//                       type="text"
//                       name="parent_id"
//                       className="form-control"
//                       defaultValue={currentStudent?.parent_id || ""}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Statut</label>
//                     <select
//                       name="status"
//                       className="form-select"
//                       defaultValue={currentStudent?.status || "active"}
//                     >
//                       <option value="active">Actif</option>
//                       <option value="inactive">Inactif</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     onClick={() => setIsFormOpen(false)}
//                   >
//                     Annuler
//                   </button>
//                   <button type="submit" className="btn btn-primary">
//                     {currentStudent ? "Mettre à jour" : "Ajouter"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Students;

import React, { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash } from "lucide-react";
import {
  fetchEtudiants,
  createEtudiant,
  updateEtudiant,
  deleteEtudiant,
} from "../../services/api";

function Students() {
  const [students, setStudents] = useState([]);
  const [viewStudent, setViewStudent] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const loadStudents = async () => {
    const data = await fetchEtudiants();
    setStudents(data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleAddStudent = () => {
    setCurrentStudent(null);
    setIsFormOpen(true);
  };

  const handleEdit = (student) => {
    setCurrentStudent(student);
    setIsFormOpen(true);
  };

  const handleDelete = async (student) => {
    const userId = student.user?.id;
    if (!userId) {
      alert("ID utilisateur introuvable !");
      return;
    }

    if (window.confirm("Supprimer cet étudiant ?")) {
      try {
        await deleteEtudiant(userId);
        loadStudents();
      } catch (error) {
        alert("Erreur lors de la suppression.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();

    formData.append("nom", form.nom.value);
    formData.append("prenom", form.prenom.value);
    formData.append("email", form.email.value);
    formData.append("telephone", form.telephone.value);
    formData.append("date_naissance", form.date_naissance.value);
    formData.append("genre", form.genre.value);
    formData.append("cne", form.cne.value);
    formData.append("classe", form.classe.value);
    formData.append("parent_id", form.parent_id.value || "");

    if (form.acte_naissance.files[0]) {
      formData.append("acte_naissance", form.acte_naissance.files[0]);
    }

    if (form.photo_identite.files[0]) {
      formData.append("photo_identite", form.photo_identite.files[0]);
    }

    try {
      if (currentStudent) {
        const userId = currentStudent.user?.id;
        formData.append("_method", "PUT");
        await updateEtudiant(userId, formData);
      } else {
        formData.append("password", form.password.value);
        await createEtudiant(formData);
      }

      setIsFormOpen(false);
      loadStudents();
    } catch (err) {
      alert("Erreur lors de l'enregistrement.");
    }
  };

  return (
    <div className="container mt-4 bg-light p-4 rounded shadow">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Gestion des Étudiants</h2>
          <p>Ajouter et gérer les étudiants de l'école</p>
        </div>
        <button onClick={handleAddStudent} className="btn btn-primary">
          <Plus size={16} className="me-2" />
          Ajouter un étudiant
        </button>
      </div>

      <table className="table table-bordered table-hover bg-white">
        <thead className="table-light">
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Classe</th>
            <th>Parent</th>
            <th>Téléphone</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.user?.nom}</td>
                <td>{student.user?.email}</td>
                <td>{student.classe}</td>
                <td>{student.parent?.user?.nom || "—"}</td>
                <td>{student.user?.telephone}</td>
                <td>
                  <span
                    className={`badge ${
                      student.status === "active"
                        ? "bg-success"
                        : "bg-secondary"
                    }`}
                  >
                    {student.status === "active" ? "Actif" : "Inactif"}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-info me-2"
                    onClick={() => setViewStudent(student)}
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEdit(student)}
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(student)}
                  >
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                Aucun étudiant trouvé
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {viewStudent && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Détails de l'étudiant</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setViewStudent(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Nom :</strong> {viewStudent.user?.nom}
                </p>
                <p>
                  <strong>Prénom :</strong> {viewStudent.user?.prenom}
                </p>
                <p>
                  <strong>Email :</strong> {viewStudent.user?.email}
                </p>
                <p>
                  <strong>Téléphone :</strong> {viewStudent.user?.telephone}
                </p>
                <p>
                  <strong>Date de naissance :</strong>{" "}
                  {viewStudent.user?.date_naissance}
                </p>
                <p>
                  <strong>Genre :</strong> {viewStudent.user?.genre}
                </p>
                <p>
                  <strong>CNE :</strong> {viewStudent.cne}
                </p>
                <p>
                  <strong>Classe :</strong> {viewStudent.classe}
                </p>
                <p>
                  <strong>Parent :</strong>{" "}
                  {viewStudent.parent?.user?.nom || "—"}
                </p>
                {viewStudent.acte_naissance && (
                  <p>
                    <strong>Acte de naissance :</strong>{" "}
                    <a
                      href={`http://127.0.0.1:8000/storage/${viewStudent.acte_naissance}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir le fichier
                    </a>
                  </p>
                )}
                {viewStudent.photo_identite && (
                  <p>
                    <strong>Photo d'identité :</strong>
                    <br />
                    <img
                      src={`http://127.0.0.1:8000/storage/${viewStudent.photo_identite}`}
                      alt="Photo"
                      style={{ maxWidth: "100%" }}
                    />
                  </p>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setViewStudent(null)}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isFormOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {currentStudent
                      ? "Modifier un étudiant"
                      : "Ajouter un étudiant"}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setIsFormOpen(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    name="nom"
                    className="form-control mb-2"
                    placeholder="Nom"
                    required
                    defaultValue={currentStudent?.user?.nom || ""}
                  />
                  <input
                    type="text"
                    name="prenom"
                    className="form-control mb-2"
                    placeholder="Prénom"
                    required
                    defaultValue={currentStudent?.user?.prenom || ""}
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    required
                    defaultValue={currentStudent?.user?.email || ""}
                  />
                  {!currentStudent && (
                    <input
                      type="password"
                      name="password"
                      className="form-control mb-2"
                      placeholder="Mot de passe"
                      required
                    />
                  )}
                  <input
                    type="text"
                    name="telephone"
                    className="form-control mb-2"
                    placeholder="Téléphone"
                    defaultValue={currentStudent?.user?.telephone || ""}
                  />
                  <input
                    type="date"
                    name="date_naissance"
                    className="form-control mb-2"
                    defaultValue={currentStudent?.user?.date_naissance || ""}
                  />
                  <select
                    name="genre"
                    className="form-select mb-2"
                    defaultValue={currentStudent?.user?.genre || ""}
                  >
                    <option value="">Genre</option>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                    <option value="autre">Autre</option>
                  </select>
                  <input
                    type="text"
                    name="cne"
                    className="form-control mb-2"
                    placeholder="CNE"
                    required
                    defaultValue={currentStudent?.cne || ""}
                  />
                  <input
                    type="text"
                    name="classe"
                    className="form-control mb-2"
                    placeholder="Classe"
                    required
                    defaultValue={currentStudent?.classe || ""}
                  />
                  <input
                    type="text"
                    name="parent_id"
                    className="form-control mb-2"
                    placeholder="ID Parent (optionnel)"
                    defaultValue={currentStudent?.parent_id || ""}
                  />

                  <label>Acte de naissance</label>
                  <input
                    type="file"
                    name="acte_naissance"
                    className="form-control mb-2"
                    accept="image/*,application/pdf"
                  />

                  <label>Photo d'identité</label>
                  <input
                    type="file"
                    name="photo_identite"
                    className="form-control mb-2"
                    accept="image/*"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setIsFormOpen(false)}
                  >
                    Annuler
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {currentStudent ? "Mettre à jour" : "Ajouter"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Students;

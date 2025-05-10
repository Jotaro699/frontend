// // // import React, { useEffect, useState } from "react";

// // // function GestionEnseignants() {
// // //   const [enseignants, setEnseignants] = useState([]);

// // //   useEffect(() => {
// // //     fetch("http://localhost:8000/api/enseignants", {
// // //       headers: {
// // //         Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //       },
// // //     })
// // //       .then((res) => res.json())
// // //       .then(setEnseignants);
// // //   }, []);

// // //   const supprimerEnseignant = (id) => {
// // //     fetch(`http://localhost:8000/api/enseignants/${id}`, {
// // //       method: "DELETE",
// // //       headers: {
// // //         Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //       },
// // //     }).then(() => setEnseignants(enseignants.filter((e) => e.id !== id)));
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Gestion des Enseignants</h2>
// // //       <button>Ajouter Enseignant</button>
// // //       <ul>
// // //         {enseignants.map((enseignant) => (
// // //           <li key={enseignant.id}>
// // //             {enseignant.name} ({enseignant.email})<button>Éditer</button>
// // //             <button onClick={() => supprimerEnseignant(enseignant.id)}>
// // //               Supprimer
// // //             </button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // }

// // // export default GestionEnseignants;


// // -------  


// // import React, { useState } from "react";

// // function GestionEnseignants() {
// //   const [enseignants, setEnseignants] = useState([]);
// //   const [afficher, setAfficher] = useState(false);
// //   const [formVisible, setFormVisible] = useState(false);
// //   const [nouvelEnseignant, setNouvelEnseignant] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //   });

// //   // 🔹 Afficher les enseignants
// //   const fetchEnseignants = () => {
// //     fetch("http://localhost:8000/api/enseignants", {
// //       headers: {
// //         Authorization: `Bearer ${localStorage.getItem("token")}`,
// //       },
// //     })
// //       .then((res) => {
// //         if (!res.ok) throw new Error("Erreur lors du chargement");
// //         return res.json();
// //       })
// //       .then((data) => {
// //         setEnseignants(data);
// //         setAfficher(true);
// //       })
// //       .catch((err) => console.error("Erreur:", err));
// //   };

// //   // 🔹 Ajouter un enseignant
// //   const ajouterEnseignant = (e) => {
// //     e.preventDefault();

// //     // fetch("http://localhost:8000/api/users", {
// //     fetch("http://localhost:8000/api/register", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${localStorage.getItem("token")}`,
// //       },
// //       body: JSON.stringify({
// //         ...nouvelEnseignant,
// //         role: "enseignant",
// //       }),
// //     })
// //       // .then((res) => {
// //       //   if (!res.ok) throw new Error("Erreur lors de l'ajout");
// //       //   return res.json();
// //       // })
// //       // .then(() => {
// //       //   alert("Enseignant ajouté !");
// //       //   setFormVisible(false);
// //       //   setNouvelEnseignant({ name: "", email: "", password: "" });
// //       //   fetchEnseignants();
// //       // })
// //       // .catch((err) => console.error("Erreur ajout:", err));
// //       .then((res) => {
// //         if (!res.ok) return res.json().then((err) => Promise.reject(err));
// //         return res.json();
// //       })
// //       .then(() => {
// //         alert("Enseignant ajouté !");
// //         setFormVisible(false);
// //         setNouvelEnseignant({ name: "", email: "", password: "" });
// //         fetchEnseignants();
// //       })
// //       .catch((err) => {
// //         console.error("Erreur ajout:", err);
// //         alert("Erreur: " + (err.message || JSON.stringify(err)));
// //       });

// //   };

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h2>Gestion des Enseignants</h2>

// //       <button onClick={fetchEnseignants}>Afficher les enseignants</button>
// //       <button onClick={() => setFormVisible(!formVisible)}>
// //         {formVisible ? "Annuler" : "Ajouter Enseignant"}
// //       </button>

// //       {formVisible && (
// //         <form onSubmit={ajouterEnseignant} style={{ marginTop: "20px" }}>
// //           <input
// //             type="text"
// //             placeholder="Nom"
// //             value={nouvelEnseignant.name}
// //             onChange={(e) =>
// //               setNouvelEnseignant({ ...nouvelEnseignant, name: e.target.value })
// //             }
// //             required
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={nouvelEnseignant.email}
// //             onChange={(e) =>
// //               setNouvelEnseignant({
// //                 ...nouvelEnseignant,
// //                 email: e.target.value,
// //               })
// //             }
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Mot de passe"
// //             value={nouvelEnseignant.password}
// //             onChange={(e) =>
// //               setNouvelEnseignant({
// //                 ...nouvelEnseignant,
// //                 password: e.target.value,
// //               })
// //             }
// //             required
// //           />
// //           <button type="submit">Enregistrer</button>
// //         </form>
// //       )}

// //       {afficher && (
// //         <ul style={{ marginTop: "20px" }}>
// //           {enseignants.map((enseignant) => (
// //             <li key={enseignant.id}>
// //               {enseignant.name} - {enseignant.email}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // }

// // export default GestionEnseignants;
// import React, { useState } from "react";

// function GestionEnseignants() {
//   const [enseignants, setEnseignants] = useState([]);
//   const [afficher, setAfficher] = useState(false);
//   const [formVisible, setFormVisible] = useState(false);
//   const [nouvelEnseignant, setNouvelEnseignant] = useState({
//     prenom: "",
//     nom: "",
//     email: "",
//     password: "",
//     date_naissance: "",
//     genre: "",
//     telephone: "",
//     adresse: "",
//   });

//   // 🔹 Afficher les enseignants
//   const fetchEnseignants = () => {
//     fetch("http://localhost:8000/api/enseignants", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Erreur lors du chargement");
//         return res.json();
//       })
//       .then((data) => {
//         setEnseignants(data);
//         setAfficher(true);
//       })
//       .catch((err) => console.error("Erreur:", err));
//   };

//   // 🔹 Ajouter un enseignant
//   const ajouterEnseignant = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:8000/api/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify({
//         ...nouvelEnseignant,
//         role: "enseignant",
//       }),
//     })
//       .then((res) => {
//         if (!res.ok) return res.json().then((err) => Promise.reject(err));
//         return res.json();
//       })
//       .then(() => {
//         alert("Enseignant ajouté !");
//         setFormVisible(false);
//         setNouvelEnseignant({
//           prenom: "",
//           nom: "",
//           email: "",
//           password: "",
//           date_naissance: "",
//           genre: "",
//           telephone: "",
//           adresse: "",
//         });
//         fetchEnseignants();
//       })
//       .catch((err) => {
//         console.error("Erreur ajout:", err);
//         alert("Erreur: " + (err.message || JSON.stringify(err)));
//       });
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Gestion des Enseignants</h2>

//       <button onClick={fetchEnseignants}>Afficher les enseignants</button>
//       <button
//         onClick={() => setFormVisible(!formVisible)}
//         style={{ marginLeft: "10px" }}
//       >
//         {formVisible ? "Annuler" : "Ajouter Enseignant"}
//       </button>

//       {/* Formulaire d'ajout */}
//       {formVisible && (
//         <form
//           onSubmit={ajouterEnseignant}
//           style={{
//             marginTop: "20px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
//             maxWidth: "400px",
//           }}
//         >
//           <input
//             type="text"
//             placeholder="Prénom"
//             value={nouvelEnseignant.prenom}
//             onChange={(e) =>
//               setNouvelEnseignant({
//                 ...nouvelEnseignant,
//                 prenom: e.target.value,
//               })
//             }
//             required
//           />
//           <input
//             type="text"
//             placeholder="Nom"
//             value={nouvelEnseignant.nom}
//             onChange={(e) =>
//               setNouvelEnseignant({ ...nouvelEnseignant, nom: e.target.value })
//             }
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={nouvelEnseignant.email}
//             onChange={(e) =>
//               setNouvelEnseignant({
//                 ...nouvelEnseignant,
//                 email: e.target.value,
//               })
//             }
//             required
//           />
//           <input
//             type="password"
//             placeholder="Mot de passe"
//             value={nouvelEnseignant.password}
//             onChange={(e) =>
//               setNouvelEnseignant({
//                 ...nouvelEnseignant,
//                 password: e.target.value,
//               })
//             }
//             required
//           />
//           <input
//             type="date"
//             placeholder="Date de naissance"
//             value={nouvelEnseignant.date_naissance}
//             onChange={(e) =>
//               setNouvelEnseignant({
//                 ...nouvelEnseignant,
//                 date_naissance: e.target.value,
//               })
//             }
//           />
//           <select
//             value={nouvelEnseignant.genre}
//             onChange={(e) =>
//               setNouvelEnseignant({
//                 ...nouvelEnseignant,
//                 genre: e.target.value,
//               })
//             }
//           >
//             <option value="">Sélectionner genre</option>
//             <option value="homme">Homme</option>
//             <option value="femme">Femme</option>
//             <option value="autre">Autre</option>
//           </select>
//           <input
//             type="text"
//             placeholder="Téléphone"
//             value={nouvelEnseignant.telephone}
//             onChange={(e) =>
//               setNouvelEnseignant({
//                 ...nouvelEnseignant,
//                 telephone: e.target.value,
//               })
//             }
//           />
//           <input
//             type="text"
//             placeholder="Adresse"
//             value={nouvelEnseignant.adresse}
//             onChange={(e) =>
//               setNouvelEnseignant({
//                 ...nouvelEnseignant,
//                 adresse: e.target.value,
//               })
//             }
//           />
//           <button type="submit" style={{ marginTop: "10px" }}>
//             Enregistrer
//           </button>
//         </form>
//       )}

//       {/* Liste des enseignants */}
//       {afficher && (
//         <ul style={{ marginTop: "20px" }}>
//           {enseignants.map((enseignant) => (
//             <li key={enseignant.id}>
//               {enseignant.prenom} {enseignant.nom} - {enseignant.email}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default GestionEnseignants;
// GestionEnseignants.js (version modernisée avec Bootstrap, React Icons, Toast, et Framer Motion)

// correct 
// import React, { useState, useEffect } from "react";
// import {
//   Modal,
//   Button,
//   Card,
//   Toast,
//   ToastContainer,
//   Form,
//   Table,
//   Badge,
//   InputGroup,
// } from "react-bootstrap";
// import {
//   FaTrash,
//   FaEdit,
//   FaEye,
//   FaSearch,
//   FaUserTie,
//   FaUserPlus,
// } from "react-icons/fa";

// const GestionEnseignants = () => {
//   const [enseignants, setEnseignants] = useState([]);
//   const [formVisible, setFormVisible] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [viewData, setViewData] = useState(null);
//   const [deleteIndex, setDeleteIndex] = useState(null);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   const [formData, setFormData] = useState({
//     prenom: "",
//     nom: "",
//     email: "",
//     password: "",
//     date_naissance: "",
//     genre: "",
//     telephone: "",
//     adresse: "",
//     specialite: "",
//     grade: "",
//     cin: "",
//     status: "en attente",
//     cv: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "cv") {
//       setFormData((prev) => ({ ...prev, cv: files[0] }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const fetchEnseignants = () => {
//     fetch("http://localhost:8000/api/enseignants", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => setEnseignants(data))
//       .catch((err) => console.error("Erreur:", err));
//   };

//   useEffect(() => {
//     fetchEnseignants();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const url =
//       editIndex !== null
//         ? `http://localhost:8000/api/enseignants/${enseignants[editIndex].id}`
//         : "http://localhost:8000/api/register";

//     const method = editIndex !== null ? "PUT" : "POST";

//     const formPayload = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value !== null) formPayload.append(key, value);
//     });
//     formPayload.append("role", "enseignant");

//     fetch(url, {
//       method,
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: formPayload,
//     })
//       .then((res) => res.json())
//       .then(() => {
//         fetchEnseignants();
//         setToastMessage(
//           editIndex !== null
//             ? "Enseignant modifié avec succès"
//             : "Enseignant ajouté avec succès"
//         );
//         setShowToast(true);
//         setFormVisible(false);
//         setEditIndex(null);
//         setFormData({
//           prenom: "",
//           nom: "",
//           email: "",
//           password: "",
//           date_naissance: "",
//           genre: "",
//           telephone: "",
//           adresse: "",
//           specialite: "",
//           grade: "",
//           cin: "",
//           status: "en attente",
//           cv: null,
//         });
//       })
//       .catch((err) => console.error("Erreur ajout/modif:", err));
//   };

//   const handleDelete = () => {
//     const enseignant = enseignants[deleteIndex];
//     if (!enseignant?.id) {
//       setToastMessage("Erreur: enseignant introuvable.");
//       setShowToast(true);
//       return;
//     }

//     fetch(`http://localhost:8000/api/enseignants/${enseignant.id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then(() => {
//         fetchEnseignants();
//         setToastMessage("Enseignant supprimé avec succès");
//         setShowToast(true);
//       })
//       .catch((err) => {
//         console.error("Erreur suppression:", err);
//         setToastMessage("Erreur lors de la suppression.");
//         setShowToast(true);
//       });
//   };

//   const filteredEnseignants = enseignants.filter((e) =>
//     `${e.nom} ${e.prenom}`.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container py-4">
//       <Card className="shadow-sm border-0 mb-4">
//         <Card.Header className="bg-white d-flex justify-content-between align-items-center">
//           <h3 className="mb-0">
//             <FaUserTie className="me-2" /> Gestion des Enseignants
//           </h3>
//           <div className="d-flex align-items-center">
//             <InputGroup className="me-2">
//               <InputGroup.Text>
//                 <FaSearch />
//               </InputGroup.Text>
//               <Form.Control
//                 placeholder="Rechercher..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </InputGroup>
//             <Button
//               variant="dark"
//               onClick={() => {
//                 setFormVisible(true);
//                 setEditIndex(null);
//                 setFormData({
//                   prenom: "",
//                   nom: "",
//                   email: "",
//                   password: "",
//                   date_naissance: "",
//                   genre: "",
//                   telephone: "",
//                   adresse: "",
//                   specialite: "",
//                   grade: "",
//                   cin: "",
//                   status: "en attente",
//                   cv: null,
//                 });
//               }}
//             >
//               <FaUserPlus className="me-1" /> Ajouter
//             </Button>
//           </div>
//         </Card.Header>
//         <Card.Body className="p-0">
//           <Table hover responsive className="mb-0">
//             <thead className="table-light">
//               <tr>
//                 <th>Nom</th>
//                 <th>Email</th>
//                 <th>Téléphone</th>
//                 <th>Statut</th>
//                 <th>CV</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredEnseignants.map((ens, index) => (
//                 <tr key={ens.id}>
//                   <td>
//                     {ens.nom} {ens.prenom}
//                   </td>
//                   <td>{ens.email}</td>
//                   <td>{ens.telephone}</td>
//                   <td>
//                     <Badge
//                       bg={
//                         ens.enseignant?.status === "accepted"
//                           ? "success"
//                           : ens.enseignant?.status === "rejected"
//                           ? "danger"
//                           : "warning"
//                       }
//                     >
//                       {ens.enseignant?.status || "en attente"}
//                     </Badge>
//                   </td>
//                   <td>
//                     {ens.enseignant?.cv ? (
//                       <a
//                         href={`http://localhost:8000/storage/${ens.enseignant.cv}`}
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         Voir
//                       </a>
//                     ) : (
//                       "Aucun"
//                     )}
//                   </td>
//                   <td>
//                     <Button
//                       variant="outline-primary"
//                       size="sm"
//                       className="me-2"
//                       onClick={() => setViewData(ens)}
//                     >
//                       <FaEye />
//                     </Button>
//                     <Button
//                       variant="outline-warning"
//                       size="sm"
//                       className="me-2"
//                       onClick={() => {
//                         setFormVisible(true);
//                         setEditIndex(index);
//                         setFormData(ens);
//                       }}
//                     >
//                       <FaEdit />
//                     </Button>
//                     <Button
//                       variant="outline-danger"
//                       size="sm"
//                       onClick={() => setDeleteIndex(index)}
//                     >
//                       <FaTrash />
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Card.Body>
//       </Card>

//       {/* Form Modal */}
//       <Modal show={formVisible} onHide={() => setFormVisible(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {editIndex !== null ? "Modifier" : "Ajouter"} Enseignant
//           </Modal.Title>
//         </Modal.Header>
//         <Form onSubmit={handleSubmit} encType="multipart/form-data">
//           <Modal.Body>
//             {[
//               "prenom",
//               "nom",
//               "email",
//               "password",
//               "date_naissance",
//               "genre",
//               "telephone",
//               "adresse",
//               "specialite",
//               "grade",
//               "cin",
//             ].map((field) => (
//               <Form.Group className="mb-2" key={field}>
//                 <Form.Label>{field.toUpperCase()}</Form.Label>
//                 <Form.Control
//                   type={field === "date_naissance" ? "date" : "text"}
//                   name={field}
//                   value={formData[field]}
//                   onChange={handleChange}
//                   required={field !== "specialite" && field !== "grade"}
//                 />
//               </Form.Group>
//             ))}
//             <Form.Group className="mb-2">
//               <Form.Label>CV (PDF ou image)</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="cv"
//                 accept=".pdf,image/*"
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-2">
//               <Form.Label>Statut</Form.Label>
//               <Form.Select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//               >
//                 <option value="en attente">En attente</option>
//                 <option value="accepted">Accepté</option>
//                 <option value="rejected">Rejeté</option>
//               </Form.Select>
//             </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setFormVisible(false)}>
//               Annuler
//             </Button>
//             <Button variant="primary" type="submit">
//               Enregistrer
//             </Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>

//       {/* Delete Modal */}
//       <Modal
//         show={deleteIndex !== null}
//         onHide={() => setDeleteIndex(null)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Supprimer Enseignant</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Confirmez-vous la suppression de cet enseignant ?
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setDeleteIndex(null)}>
//             Annuler
//           </Button>
//           <Button
//             variant="danger"
//             onClick={() => {
//               handleDelete();
//               setDeleteIndex(null);
//             }}
//           >
//             Supprimer
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Toast */}
//       <ToastContainer position="top-end" className="p-3">
//         <Toast
//           show={showToast}
//           bg="dark"
//           onClose={() => setShowToast(false)}
//           delay={3000}
//           autohide
//         >
//           <Toast.Header className="text-white">
//             <strong className="me-auto">Notification</strong>
//           </Toast.Header>
//           <Toast.Body className="text-white">{toastMessage}</Toast.Body>
//         </Toast>
//       </ToastContainer>
//     </div>
//   );
// };

// export default GestionEnseignants;


// code 2

// Assurez-vous que vous avez bien importé tous les modules React, useState, etc.
import React, { useState, useEffect } from "react";
import {
  Modal, Button, Card, Toast, ToastContainer, Form, Table, Badge, InputGroup,
} from "react-bootstrap";
import {
  FaTrash, FaEdit, FaEye, FaSearch, FaUserTie, FaUserPlus,
} from "react-icons/fa";

const GestionEnseignants = () => {
  const [enseignants, setEnseignants] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [viewData, setViewData] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    prenom: "", nom: "", email: "", password: "",
    date_naissance: "", genre: "", telephone: "", adresse: "",
    specialite: "", grade: "", cin: "", status: "en attente", cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev, [name]: name === "cv" ? files[0] : value,
    }));
  };

  const fetchEnseignants = () => {
    fetch("http://localhost:8000/api/enseignants", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then(res => res.json())
      .then(setEnseignants)
      .catch(console.error);
  };

  useEffect(() => {
    fetchEnseignants();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = editIndex !== null
      ? `http://localhost:8000/api/enseignants/${enseignants[editIndex].id}`
      : "http://localhost:8000/api/register";

    const method = editIndex !== null ? "POST" : "POST";
    const data = new FormData();
    Object.entries(formData).forEach(([k, v]) => v && data.append(k, v));
    data.append("role", "enseignant");

    fetch(url, {
      method,
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      body: data,
    })
      .then(res => res.json())
      .then(() => {
        fetchEnseignants();
        setToastMessage(editIndex !== null ? "Modifié" : "Ajouté");
        setShowToast(true);
        setFormVisible(false);
        setEditIndex(null);
        setFormData({ prenom: "", nom: "", email: "", password: "", date_naissance: "", genre: "", telephone: "", adresse: "", specialite: "", grade: "", cin: "", status: "en attente", cv: null });
      });
  };

  const handleDelete = () => {
    const userId = enseignants[deleteIndex]?.id;
    if (!userId) return;

    fetch(`http://localhost:8000/api/enseignants/${userId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then(() => {
        fetchEnseignants();
        setToastMessage("Supprimé");
        setShowToast(true);
        setDeleteIndex(null);
      })
      .catch(console.error);
  };

  const handleStatusChange = (id, status) => {
    fetch(`http://localhost:8000/api/enseignants/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ status }),
    })
      .then(() => fetchEnseignants())
      .catch(console.error);
  };

  return (
    <div className="container py-4">
      <Card className="shadow-sm mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center bg-white">
          <h3><FaUserTie className="me-2" />Gestion des Enseignants</h3>
          <div className="d-flex align-items-center">
            <InputGroup className="me-2">
              <InputGroup.Text><FaSearch /></InputGroup.Text>
              <Form.Control
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher..."
              />
            </InputGroup>
            <Button onClick={() => {
              setFormVisible(true);
              setEditIndex(null);
              setFormData({ prenom: "", nom: "", email: "", password: "", date_naissance: "", genre: "", telephone: "", adresse: "", specialite: "", grade: "", cin: "", status: "en attente", cv: null });
            }}>
              <FaUserPlus className="me-1" /> Ajouter
            </Button>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <Table responsive hover>
            <thead>
              <tr>
                <th>Nom</th><th>Email</th><th>Téléphone</th><th>Status</th><th>CV</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {enseignants.filter(e =>
                `${e.nom} ${e.prenom}`.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((ens, i) => (
                <tr key={ens.id}>
                  <td>{ens.nom} {ens.prenom}</td>
                  <td>{ens.email}</td>
                  <td>{ens.telephone}</td>
                  <td>
                    <Form.Select
                      size="sm"
                      value={ens.enseignant?.status || "en attente"}
                      onChange={(e) => handleStatusChange(ens.id, e.target.value)}
                    >
                      <option value="en attente">En attente</option>
                      <option value="accepted">Accepté</option>
                      <option value="rejected">Rejeté</option>
                    </Form.Select>
                  </td>
                  <td>
                    {ens.enseignant?.cv ? (
                      <a href={`http://localhost:8000/storage/${ens.enseignant.cv}`} target="_blank" rel="noreferrer">Voir</a>
                    ) : "Aucun"}
                  </td>
                  <td>
                    <Button size="sm" variant="outline-primary" className="me-1" onClick={() => setViewData(ens)}><FaEye /></Button>
                    <Button size="sm" variant="outline-warning" className="me-1" onClick={() => { setFormVisible(true); setEditIndex(i); setFormData(ens); }}><FaEdit /></Button>
                    <Button size="sm" variant="outline-danger" onClick={() => setDeleteIndex(i)}><FaTrash /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal Form */}
      <Modal show={formVisible} onHide={() => setFormVisible(false)} centered>
        <Modal.Header closeButton><Modal.Title>Formulaire Enseignant</Modal.Title></Modal.Header>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Modal.Body>
            {["prenom", "nom", "email", "password", "date_naissance", "genre", "telephone", "adresse", "specialite", "grade", "cin"].map((f) => (
              <Form.Group key={f} className="mb-2">
                <Form.Label>{f}</Form.Label>
                <Form.Control type={f === "date_naissance" ? "date" : "text"} name={f} value={formData[f]} onChange={handleChange} />
              </Form.Group>
            ))}
            <Form.Group className="mb-2">
              <Form.Label>CV</Form.Label>
              <Form.Control type="file" name="cv" accept=".pdf,image/*" onChange={handleChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setFormVisible(false)}>Annuler</Button>
            <Button variant="primary" type="submit">Enregistrer</Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* View Modal */}
      <Modal show={!!viewData} onHide={() => setViewData(null)} centered>
        <Modal.Header closeButton><Modal.Title>Détails</Modal.Title></Modal.Header>
        <Modal.Body>
          {viewData && Object.entries(viewData).map(([k, v]) => <p key={k}><strong>{k}:</strong> {v?.toString()}</p>)}
        </Modal.Body>
      </Modal>

      {/* Delete Modal */}
      <Modal show={deleteIndex !== null} onHide={() => setDeleteIndex(null)} centered>
        <Modal.Header closeButton><Modal.Title>Supprimer</Modal.Title></Modal.Header>
        <Modal.Body>Confirmez la suppression de cet enseignant ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteIndex(null)}>Annuler</Button>
          <Button variant="danger" onClick={handleDelete}>Supprimer</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} bg="dark" delay={3000} autohide>
          <Toast.Header className="text-white"><strong className="me-auto">Info</strong></Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default GestionEnseignants;

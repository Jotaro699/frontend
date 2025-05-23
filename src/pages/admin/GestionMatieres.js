// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function GestionMatieres() {
//   const [matieres, setMatieres] = useState([]);
//   const [nom, setNom] = useState("");
//   const [description, setDescription] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   const fetchMatieres = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/api/matieres");
//       setMatieres(res.data);
//     } catch (err) {
//       console.error("Erreur lors du chargement des matières");
//     }
//   };

//   useEffect(() => {
//     fetchMatieres();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = { nom, description };

//     try {
//       if (editingId) {
//         await axios.put(
//           `http://localhost:8000/api/matieres/${editingId}`,
//           data
//         );
//       } else {
//         await axios.post("http://localhost:8000/api/matieres", data);
//       }
//       setNom("");
//       setDescription("");
//       setEditingId(null);
//       fetchMatieres();
//     } catch (err) {
//       alert("Erreur lors de l'enregistrement");
//     }
//   };

//   const handleEdit = (matiere) => {
//     setEditingId(matiere.id);
//     setNom(matiere.nom);
//     setDescription(matiere.description || "");
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/api/matieres/${id}`);
//       fetchMatieres();
//     } catch (err) {
//       alert("Erreur lors de la suppression");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Gestion des Matières</h2>

//       <form onSubmit={handleSubmit} className="mb-4">
//         <div className="form-group">
//           <label>Nom</label>
//           <input
//             type="text"
//             className="form-control"
//             value={nom}
//             onChange={(e) => setNom(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group mt-2">
//           <label>Description</label>
//           <textarea
//             className="form-control"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary mt-3">
//           {editingId ? "Modifier" : "Ajouter"}
//         </button>
//       </form>

//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Nom</th>
//             <th>Description</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {matieres.map((matiere) => (
//             <tr key={matiere.id}>
//               <td>{matiere.nom}</td>
//               <td>{matiere.description}</td>
//               <td>
//                 <button
//                   className="btn btn-sm btn-warning me-2"
//                   onClick={() => handleEdit(matiere)}
//                 >
//                   Modifier
//                 </button>
//                 <button
//                   className="btn btn-sm btn-danger"
//                   onClick={() => handleDelete(matiere.id)}
//                 >
//                   Supprimer
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default GestionMatieres;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

function GestionMatieres() {
  const [matieres, setMatieres] = useState([]);
  const [enseignants, setEnseignants] = useState([]);

  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [coefficient, setCoefficient] = useState(1);
  const [niveau, setNiveau] = useState("primaire");
  const [classe, setClasse] = useState("");
  const [enseignantId, setEnseignantId] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const fetchMatieres = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/matieres");
      setMatieres(res.data);
    } catch (err) {
      console.error("Erreur lors du chargement des matières");
    }
  };

  const fetchEnseignants = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/enseignants", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setEnseignants(res.data);
    } catch (err) {
      console.error("Erreur lors du chargement des enseignants");
    }
  };

  useEffect(() => {
    fetchMatieres();
    fetchEnseignants();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nom,
      description,
      coefficient: parseInt(coefficient),
      niveau,
      classe,
      enseignant_id: parseInt(enseignantId),
    };

    try {
      if (editingId) {
        await axios.put(
          `http://localhost:8000/api/matieres/${editingId}`,
          data
        );
      } else {
        await axios.post("http://localhost:8000/api/matieres", data);
      }

      setNom("");
      setDescription("");
      setCoefficient(1);
      setNiveau("primaire");
      setClasse("");
      setEnseignantId("");
      setEditingId(null);
      fetchMatieres();
    } catch (err) {
      if (err.response) {
        console.error("Validation error:", err.response.data.errors);
        alert("Erreur: " + JSON.stringify(err.response.data.errors));
      } else {
        alert("Erreur lors de l'enregistrement");
      }
    }
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/matieres/${deleteId}`);
      fetchMatieres();
      setDeleteId(null);
    } catch (err) {
      alert("Erreur lors de la suppression");
    }
  };

  const handleEdit = (matiere) => {
    setEditingId(matiere.id);
    setNom(matiere.nom);
    setDescription(matiere.description || "");
    setCoefficient(matiere.coefficient);
    setNiveau(matiere.niveau);
    setClasse(matiere.classe);
    setEnseignantId(matiere.enseignant_id?.toString());
  };

  return (
    <div className="container mt-5">
      <h2>Gestion des Matières</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label>Nom</label>
          <input
            type="text"
            className="form-control"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>

        <div className="form-group mt-2">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group mt-2">
          <label>Coefficient</label>
          <input
            type="number"
            className="form-control"
            value={coefficient}
            onChange={(e) => setCoefficient(e.target.value)}
            required
          />
        </div>

        <div className="form-group mt-2">
          <label>Niveau</label>
          <select
            className="form-control"
            value={niveau}
            onChange={(e) => setNiveau(e.target.value)}
          >
            <option value="primaire">Primaire</option>
            <option value="college">Collège</option>
            <option value="lycée">Lycée</option>
          </select>
        </div>

        <div className="form-group mt-2">
          <label>Classe</label>
          <input
            type="text"
            className="form-control"
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
            required
          />
        </div>

        <div className="form-group mt-2">
          <label>Enseignant</label>
          <select
            className="form-control"
            value={enseignantId}
            onChange={(e) => setEnseignantId(e.target.value)}
            required
          >
            <option value="">-- Choisir un enseignant --</option>
            {enseignants.map((ens) =>
              ens.enseignant ? (
                <option key={ens.enseignant.id} value={ens.enseignant.id}>
                  {ens.nom} {ens.prenom}
                </option>
              ) : null
            )}
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          {editingId ? "Modifier" : "Ajouter"}
        </button>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Coefficient</th>
            <th>Niveau</th>
            <th>Classe</th>
            <th>Enseignant</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {matieres.map((matiere) => (
            <tr key={matiere.id}>
              <td>{matiere.nom}</td>
              <td>{matiere.description}</td>
              <td>{matiere.coefficient}</td>
              <td>{matiere.niveau}</td>
              <td>{matiere.classe}</td>
              <td>
                {matiere.enseignant?.user?.nom}{" "}
                {matiere.enseignant?.user?.prenom}
              </td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(matiere)}
                >
                  Modifier
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => setDeleteId(matiere.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={deleteId !== null} onHide={() => setDeleteId(null)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Voulez-vous vraiment supprimer cette matière ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteId(null)}>
            Annuler
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GestionMatieres;

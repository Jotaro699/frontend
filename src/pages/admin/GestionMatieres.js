import React, { useEffect, useState } from "react";
import axios from "axios";

function GestionMatieres() {
  const [matieres, setMatieres] = useState([]);
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fetchMatieres = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/matieres");
      setMatieres(res.data);
    } catch (err) {
      console.error("Erreur lors du chargement des matières");
    }
  };

  useEffect(() => {
    fetchMatieres();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { nom, description };

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
      setEditingId(null);
      fetchMatieres();
    } catch (err) {
      alert("Erreur lors de l'enregistrement");
    }
  };

  const handleEdit = (matiere) => {
    setEditingId(matiere.id);
    setNom(matiere.nom);
    setDescription(matiere.description || "");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/matieres/${id}`);
      fetchMatieres();
    } catch (err) {
      alert("Erreur lors de la suppression");
    }
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

        <button type="submit" className="btn btn-primary mt-3">
          {editingId ? "Modifier" : "Ajouter"}
        </button>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {matieres.map((matiere) => (
            <tr key={matiere.id}>
              <td>{matiere.nom}</td>
              <td>{matiere.description}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(matiere)}
                >
                  Modifier
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(matiere.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GestionMatieres;

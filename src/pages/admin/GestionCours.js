import React, { useEffect, useState } from "react";
import axios from "axios";

function GestionCours() {
  const [cours, setCours] = useState([]);
  const [matieres, setMatieres] = useState([]);
  const [enseignants, setEnseignants] = useState([]);

  const [titre, setTitre] = useState("");
  const [matiereId, setMatiereId] = useState("");
  const [enseignantId, setEnseignantId] = useState("");
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchCours();
    axios
      .get("http://localhost:8000/api/matieres", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setMatieres(res.data));

    axios
      .get("http://localhost:8000/api/enseignants", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setEnseignants(res.data));
  }, []);

  const fetchCours = () => {
    axios
      .get("http://localhost:8000/api/cours", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setCours(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { titre, matiere_id: matiereId, enseignant_id: enseignantId };

    const request = editingId
      ? axios.put(`http://localhost:8000/api/cours/${editingId}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
      : axios.post("http://localhost:8000/api/cours", data, {
          headers: { Authorization: `Bearer ${token}` },
        });

    request.then(() => {
      fetchCours();
      setTitre("");
      setMatiereId("");
      setEnseignantId("");
      setEditingId(null);
    });
  };

  const handleEdit = (cours) => {
    setTitre(cours.titre);
    setMatiereId(cours.matiere_id);
    setEnseignantId(cours.enseignant_id);
    setEditingId(cours.id);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/cours/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => fetchCours());
  };

  return (
    <div className="container mt-4">
      <h2>Gestion des Cours</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Titre du cours"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          required
          className="form-control mb-2"
        />

        <select
          className="form-control mb-2"
          value={matiereId}
          onChange={(e) => setMatiereId(e.target.value)}
          required
        >
          <option value="">Choisir une matière</option>
          {matieres.map((m) => (
            <option key={m.id} value={m.id}>
              {m.nom}
            </option>
          ))}
        </select>

        <select
          className="form-control mb-2"
          value={enseignantId}
          onChange={(e) => setEnseignantId(e.target.value)}
          required
        >
          <option value="">Choisir un enseignant</option>
          {enseignants.map((ens) =>
            ens.enseignant ? (
              <option key={ens.enseignant.id} value={ens.enseignant.id}>
                {ens.nom} {ens.prenom}
              </option>
            ) : null
          )}
        </select>

        <button type="submit" className="btn btn-primary">
          {editingId ? "Modifier" : "Ajouter"}
        </button>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Matière</th>
            <th>Enseignant</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cours.map((c) => (
            <tr key={c.id}>
              <td>{c.titre}</td>
              <td>{c.matiere?.nom}</td>
              <td>{c.enseignant?.user?.nom}</td>
              <td>
                <button
                  onClick={() => handleEdit(c)}
                  className="btn btn-sm btn-warning mx-1"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(c.id)}
                  className="btn btn-sm btn-danger mx-1"
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

export default GestionCours;

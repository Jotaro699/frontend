import React, { useEffect, useState } from "react";
import axios from "axios";

const SaisieNotes = () => {
  const [enseignantId, setEnseignantId] = useState(null);
  const [enseignantUserId, setEnseignantUserId] = useState(null);
  const [matieres, setMatieres] = useState([]);
  const [selectedMatiereId, setSelectedMatiereId] = useState("");
  const [etudiants, setEtudiants] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const userId = res.data.id;
        axios
          .get(`http://localhost:8000/api/enseignants/by-user/${userId}`)
          .then((res2) => {
            const enseignant = res2.data;
            setEnseignantId(enseignant.id);
            setEnseignantUserId(enseignant.user_id);
          });
      });
  }, []);

  useEffect(() => {
    if (enseignantId) {
      axios
        .get(`http://localhost:8000/api/enseignant/matieres/${enseignantId}`)
        .then((res) => setMatieres(res.data));
    }
  }, [enseignantId]);

  useEffect(() => {
    if (selectedMatiereId) {
      axios
        .get(
          `http://localhost:8000/api/enseignant/matiere/${selectedMatiereId}/etudiants`
        )
        .then((res) => {
          const etds = res.data;
          setEtudiants(etds);

          axios
            .get(`http://localhost:8000/api/notes/matiere/${selectedMatiereId}`)
            .then((resNotes) => {
              const allNotes = resNotes.data;

              const formatted = etds.map((etd) => {
                const n1 = allNotes.find(
                  (n) => n.etudiant_id === etd.id && n.numero === 1
                );
                const n2 = allNotes.find(
                  (n) => n.etudiant_id === etd.id && n.numero === 2
                );
                const n3 = allNotes.find(
                  (n) => n.etudiant_id === etd.id && n.numero === 3
                );
                const n4 = allNotes.find(
                  (n) => n.etudiant_id === etd.id && n.numero === 4
                );
                return {
                  etudiant_id: etd.id,
                  note1: n1?.note || "",
                  note2: n2?.note || "",
                  note3: n3?.note || "",
                  note4: n4?.note || "",
                };
              });

              setNotes(formatted);
            });
        });
    }
  }, [selectedMatiereId]);

  const handleNoteChange = (index, field, value) => {
    const updated = [...notes];
    updated[index][field] = value;
    setNotes(updated);
  };

  const calculateMoyenne = (n1, n2, n3, n4) => {
    const valid = [n1, n2, n3, n4].filter((v) => v !== "" && !isNaN(v));
    if (valid.length === 0) return "";
    const sum = valid.reduce((acc, val) => acc + Number(val), 0);
    return (sum / valid.length).toFixed(2);
  };

  const handleSubmit = async () => {
    try {
      for (let i = 0; i < notes.length; i++) {
        const entry = notes[i];
        for (let numero = 1; numero <= 4; numero++) {
          const noteValue = entry[`note${numero}`];
          if (noteValue === "") continue;

          const payload = {
            etudiant_id: entry.etudiant_id,
            matiere_id: Number(selectedMatiereId),
            enseignant_id: enseignantUserId,
            note: Number(noteValue),
            numero: numero,
          };

          await axios.post(
            "http://localhost:8000/api/notes/store-or-update",
            payload
          );
        }
      }
      alert("✅ Notes enregistrées !");
    } catch (error) {
      alert("❌ Erreur lors de l'enregistrement.");
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-4 overflow-y-auto">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
          Saisie des Notes 📝
        </h2>

        <select
          className="mb-6 w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedMatiereId}
          onChange={(e) => setSelectedMatiereId(e.target.value)}
        >
          <option value="">-- Choisir une matière --</option>
          {matieres.map((m) => (
            <option key={m.id} value={m.id}>
              {m.nom}
            </option>
          ))}
        </select>

        {etudiants.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-200 shadow-md text-center">
              <thead className="bg-blue-100 text-blue-800">
                <tr>
                  <th className="p-3 border">Nom</th>
                  <th className="p-3 border">Note 1</th>
                  <th className="p-3 border">Note 2</th>
                  <th className="p-3 border">Note 3</th>
                  <th className="p-3 border">Note 4</th>
                  <th className="p-3 border">Moyenne</th>
                </tr>
              </thead>
              <tbody>
                {etudiants.map((etudiant, index) => {
                  const n = notes[index] || {};
                  return (
                    <tr key={etudiant.id} className="hover:bg-gray-100">
                      <td className="p-2 border font-medium">
                        {etudiant.user.nom} {etudiant.user.prenom}
                      </td>
                      {[1, 2, 3, 4].map((num) => (
                        <td key={num} className="p-2 border">
                          <input
                            type="number"
                            min="0"
                            max="20"
                            value={n[`note${num}`] || ""}
                            onChange={(e) =>
                              handleNoteChange(
                                index,
                                `note${num}`,
                                e.target.value
                              )
                            }
                            className="w-20 text-center border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                          />
                        </td>
                      ))}
                      <td className="p-2 border font-semibold text-green-600">
                        {calculateMoyenne(n.note1, n.note2, n.note3, n.note4)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {etudiants.length > 0 && (
          <div className="text-center mt-6">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              💾 Enregistrer les notes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SaisieNotes;

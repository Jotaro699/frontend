import React, { useEffect, useState } from "react";
import axios from "axios";
import { FileText } from "lucide-react";

const ResultatsEnfants = () => {
  const [enfants, setEnfants] = useState([]);
  const [notesParEnfant, setNotesParEnfant] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const enfantsRes = await axios.get(
          "http://localhost:8000/api/parent/enfants",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setEnfants(enfantsRes.data);

        const notesData = {};
        for (const enfant of enfantsRes.data) {
          const notesRes = await axios.get(
            `http://localhost:8000/api/etudiant/notes/${enfant.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          notesData[enfant.id] = notesRes.data;
        }

        setNotesParEnfant(notesData);
      } catch (err) {
        console.error("📛 Moshkil f chargement:", err);
      }
    };

    fetchData();
  }, []);

  // regrouper les notes par matière
  const groupNotes = (notes) => {
    return notes.reduce((acc, note) => {
      const matiere = note.matiere?.nom || "Inconnue";
      if (!acc[matiere]) acc[matiere] = { 1: null, 2: null, 3: null };
      acc[matiere][note.numero] = note.note;
      return acc;
    }, {});
  };

  const calculateAverage = (notes) => {
    const values = [notes[1], notes[2], notes[3]].filter(
      (n) => n !== null && n !== undefined
    );
    if (values.length === 0) return "-";
    const sum = values.reduce((a, b) => a + b, 0);
    return (sum / values.length).toFixed(2);
  };

  const getNoteClass = (note) => {
    if (note === null || note === undefined) return "text-gray-500";
    return note >= 10
      ? "text-green-600 font-semibold"
      : "text-red-600 font-semibold";
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FileText /> Résultats des enfants
      </h2>

      {enfants.length === 0 && <p>⏳ Aucun enfant trouvé...</p>}

      {enfants.map((enfant) => {
        const notes = notesParEnfant[enfant.id] || [];
        const groupedNotes = groupNotes(notes);

        return (
          <div key={enfant.id} className="mb-10">
            <h3 className="text-lg font-semibold mb-2">
              👦 {enfant.user?.nom || "Nom inconnu"}
            </h3>

            <table className="w-full border bg-white shadow text-center mb-6">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Matière</th>
                  <th className="p-2 border">Note 1</th>
                  <th className="p-2 border">Note 2</th>
                  <th className="p-2 border">Note 3</th>
                  <th className="p-2 border">Moyenne</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(groupedNotes).map(([matiere, essais], idx) => (
                  <tr key={idx}>
                    <td className="p-2 border font-medium">{matiere}</td>
                    <td className={`p-2 border ${getNoteClass(essais[1])}`}>
                      {essais[1] ?? "-"}
                    </td>
                    <td className={`p-2 border ${getNoteClass(essais[2])}`}>
                      {essais[2] ?? "-"}
                    </td>
                    <td className={`p-2 border ${getNoteClass(essais[3])}`}>
                      {essais[3] ?? "-"}
                    </td>
                    <td className="p-2 border font-bold">
                      {calculateAverage(essais)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default ResultatsEnfants;

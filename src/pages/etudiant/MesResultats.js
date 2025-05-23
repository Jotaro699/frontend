import React, { useEffect, useState } from "react";
import axios from "axios";
import { FileText } from "lucide-react";

const MesResultats = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const userRes = await axios.get("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const etudiantRes = await axios.get(
          `http://localhost:8000/api/etudiants/by-user/${userRes.data.id}`
        );

        const notesRes = await axios.get(
          `http://localhost:8000/api/etudiant/notes/${etudiantRes.data.id}`
        );

        setNotes(notesRes.data);
      } catch (err) {
        console.error("🔴 Moshkil:", err);
      }
    };

    fetchNotes();
  }, []);

  // Regrouper les notes par matière et numéro d'essai
  const groupedNotes = notes.reduce((acc, note) => {
    const matiere = note.matiere?.nom || "Inconnue";
    if (!acc[matiere]) {
      acc[matiere] = { 1: null, 2: null, 3: null };
    }
    acc[matiere][note.numero] = note.note;
    return acc;
  }, {});

  // Fonction pour calculer moyenne
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
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FileText />  Mes Résultats 
      </h2>

      <table className="w-full border bg-white shadow text-center">
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
};

export default MesResultats;

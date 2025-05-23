import React, { useEffect, useState } from "react";
import axios from "axios";
import { Users, GraduationCap, Loader2 } from "lucide-react";

const ClassesEnseignant = () => {
  const [classes, setClasses] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClassesEtudiants = async () => {
      try {
        // Récupérer l'utilisateur connecté
        const userRes = await axios.get("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        // Récupérer l'enseignant via son user_id
        const ensRes = await axios.get(
          `http://localhost:8000/api/enseignants/by-user/${userRes.data.id}`
        );

        const enseignantId = ensRes.data.id;

        // Récupérer les matières assignées à cet enseignant
        const matieresRes = await axios.get(
          `http://localhost:8000/api/enseignant/matieres/${enseignantId}`
        );

        const matieres = matieresRes.data;

        const uniqueClasses = [...new Set(matieres.map((m) => m.classe))];

        const classData = {};

        // Pour chaque classe, charger les étudiants
        for (const classe of uniqueClasses) {
          const etudiantsRes = await axios.get(
            `http://localhost:8000/api/etudiants/by-classe/${classe}`
          );
          classData[classe] = etudiantsRes.data;
        }

        setClasses(classData);
      } catch (error) {
        console.error("Erreur lors du chargement:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClassesEtudiants();
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <GraduationCap className="text-green-600" /> Classes et Étudiants
      </h2>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Loader2 className="animate-spin h-6 w-6 text-gray-500" />
        </div>
      ) : Object.keys(classes).length === 0 ? (
        <p className="text-gray-500">Aucune classe trouvée.</p>
      ) : (
        Object.entries(classes).map(([classe, etudiants]) => (
          <div key={classe} className="mb-6">
            <h3 className="text-lg font-medium text-blue-700 mb-2">
              📘 Classe : {classe}
            </h3>
            {etudiants.length === 0 ? (
              <p className="text-sm text-gray-500">
                Aucun étudiant dans cette classe.
              </p>
            ) : (
              <ul className="list-disc list-inside pl-4 text-sm text-gray-700">
                {etudiants.map((etudiant) => (
                  <li key={etudiant.id}>
                    {etudiant.user?.nom
                      ? `${etudiant.user.nom} ${etudiant.user.prenom}`
                      : "Nom inconnu"}{" "}
                    ({etudiant.cne})
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ClassesEnseignant;

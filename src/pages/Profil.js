import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  CalendarDays,
  Building,
  CreditCard,
  GraduationCap,
  Camera,
  Loader2,
} from "lucide-react";

const Profil = () => {
  const [user, setUser] = useState(null);
  const [etudiantData, setEtudiantData] = useState(null);
  const [enseignantData, setEnseignantData] = useState(null);
  const [parentData, setParentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      setError("Veuillez vous connecter pour accéder à votre profil");
      return;
    }

    const fetchUserData = async () => {
      try {
        const userResponse = await fetch("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!userResponse.ok)
          throw new Error("Erreur lors du chargement du profil");
        const userData = await userResponse.json();
        setUser(userData);

        if (userData.role === "etudiant") {
          const res = await fetch(
            `http://localhost:8000/api/etudiants/by-user/${userData.id}`
          );
          if (!res.ok) throw new Error("Erreur chargement données étudiant");
          const data = await res.json();
          setEtudiantData(data);
        }

        if (userData.role === "enseignant") {
          const res = await fetch(
            `http://localhost:8000/api/enseignants/by-user/${userData.id}`
          );
          if (!res.ok) throw new Error("Erreur chargement données enseignant");
          const data = await res.json();
          setEnseignantData(data);
        }

        if (userData.role === "parent") {
          const res = await fetch(
            `http://localhost:8000/api/parents/by-user/${userData.id}`
          );
          if (!res.ok) throw new Error("Erreur chargement données parent");
          const data = await res.json();
          setParentData(data);
        }
      } catch (err) {
        console.error("Erreur:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
        <p className="mt-4 text-gray-500">Chargement du profil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 bg-red-50 rounded-xl shadow-md">
        <p className="text-red-600 text-center">{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-50 rounded-xl shadow-md">
        <p className="text-gray-500 text-center">
          Aucune information de profil disponible
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Mon Profil
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <User size={32} />
          </div>
          <span className="mt-2 text-sm font-medium">{user.role}</span>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <User className="text-blue-600 shrink-0" />
            <div>
              <span className="font-semibold block text-gray-500 text-sm">
                Nom Complet
              </span>
              <span className="text-gray-800">
                {user.nom} {user.prenom}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-green-600 shrink-0" />
            <div>
              <span className="font-semibold block text-gray-500 text-sm">
                Email
              </span>
              <span className="text-gray-800">{user.email}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays className="text-yellow-600 shrink-0" />
            <div>
              <span className="font-semibold block text-gray-500 text-sm">
                Inscrit depuis
              </span>
              <span className="text-gray-800">
                {new Date(user.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {user.role === "etudiant" && etudiantData && (
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
            <GraduationCap className="mr-2 text-blue-600" /> Détails Étudiant
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <div>
              <span className="font-semibold block text-gray-500 text-sm">
                CNE
              </span>
              <span className="text-gray-800">{etudiantData.cne}</span>
            </div>
            <div>
              <span className="font-semibold block text-gray-500 text-sm">
                Classe
              </span>
              <span className="text-gray-800">{etudiantData.classe}</span>
            </div>
          </div>
          {etudiantData.photo_identite && (
            <div className="mt-4">
              <span className="font-semibold block text-gray-500 text-sm flex items-center">
                <Camera className="text-gray-500 mr-2" size={16} /> Photo
                d'identité
              </span>
              <img
                src={`http://localhost:8000/storage/${etudiantData.photo_identite}`}
                alt="Photo identité"
                className="w-32 h-32 object-cover border rounded-lg shadow-sm mt-2"
              />
            </div>
          )}
        </div>
      )}

      {user.role === "enseignant" && enseignantData && (
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
            <GraduationCap className="mr-2 text-blue-600" /> Détails Enseignant
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <div>
              <span className="font-semibold block text-gray-500 text-sm">
                Spécialité
              </span>
              <span className="text-gray-800">{enseignantData.specialite}</span>
            </div>
            <div>
              <span className="font-semibold block text-gray-500 text-sm">
                Grade
              </span>
              <span className="text-gray-800">{enseignantData.grade}</span>
            </div>
            <div>
              <span className="font-semibold block text-gray-500 text-sm">
                CIN
              </span>
              <span className="text-gray-800">{enseignantData.cin}</span>
            </div>
            <div>
              <span className="font-semibold block text-gray-500 text-sm">
                Statut
              </span>
              <span className="text-gray-800 capitalize">
                {enseignantData.status}
              </span>
            </div>
          </div>
        </div>
      )}

      {user.role === "parent" && parentData && (
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
            <User className="mr-2 text-blue-600" /> Détails Parent
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <div>
              <span className="font-semibold block text-gray-500 text-sm">
                Profession
              </span>
              <span className="text-gray-800">{parentData.profession}</span>
            </div>
            <div>
              <span className="font-semibold block text-gray-500 text-sm">
                CIN
              </span>
              <span className="text-gray-800">{parentData.cin}</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-gray-100">
        <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
          Modifier mon profil
        </button>
      </div>
    </div>
  );
};

export default Profil;

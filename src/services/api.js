// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000/api",
//   withCredentials: true, // utile si CSRF
// });

// export const register = async (data) => {
//   try {
//     const response = await api.post("/register", data);
//     return response.data;
//   } catch (error) {
//     console.error("Erreur API /register:", error);
//     return null;
//   }
// };

// // export const fetchEtudiants = async () => {
// //   try {
// //     const response = await api.get("/etudiants", {
// //       headers: {
// //         Authorization: `Bearer ${localStorage.getItem("token")}`, // Assurez-vous d'envoyer le token
// //       },
// //     });
// //     return response.data; // Retourne les données des étudiants
// //   } catch (error) {
// //     console.error("Erreur API /etudiants:", error);
// //     return []; // Retourne un tableau vide en cas d'erreur
// //   }}


//   const API_URL = "http://localhost:8000/api/etudiants"; // change si nécessaire

//   export const fetchEtudiants = async () => {
//     const res = await axios.get(API_URL);
//     return res.data;
//   };

//   export const createEtudiant = async (etudiant) => {
//     const res = await axios.post(API_URL, etudiant);
//     return res.data;
//   };

//   export const updateEtudiant = async (id, etudiant) => {
//     const res = await axios.put(`${API_URL}/${id}`, etudiant);
//     return res.data;
//   };

//   export const deleteEtudiant = async (id) => {
//     const res = await axios.delete(`${API_URL}/${id}`);
//     return res.data;
//   };


// -----


import axios from "axios";

// Création d'une instance axios avec les options de base
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true, // utile si vous utilisez sanctum + session, sinon peut être retiré
});

// Intercepteur pour ajouter automatiquement le token dans les headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// === AUTHENTIFICATION ===

export const register = async (data) => {
  try {
    const response = await api.post("/register", data);
    return response.data;
  } catch (error) {
    console.error("Erreur API /register:", error);
    return null;
  }
};


export const login = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    const token = response.data.access_token;
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    console.error("Erreur API /login:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await api.post("/logout");
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Erreur API /logout:", error);
  }
};

// === ETUDIANTS ===

export const fetchEtudiants = async () => {
  try {
    const response = await api.get("/etudiants");
    return response.data;
  } catch (error) {
    console.error("Erreur API /etudiants:", error);
    return [];
  }
};

// export const createEtudiant = async (etudiant) => {
//   try {
//     const response = await api.post("/etudiants", etudiant);
//     return response.data;
//   } catch (error) {
//     console.error("Erreur API création étudiant:", error);
//     throw error;
//   }
// };
export const createEtudiant = async (formData) => {
  try {
    const response = await api.post("/etudiants", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur API création étudiant:", error);
    throw error;
  }
};


// export const updateEtudiant = async (id, etudiant) => {
//   try {
//     const response = await api.put(`/etudiants/${id}`, etudiant);
//     return response.data;
//   } catch (error) {
//     console.error("Erreur API mise à jour étudiant:", error);
//     throw error;
//   }
// };
export const updateEtudiant = async (id, formData) => {
  try {
    // Laravel accepte POST avec _method=PUT
    formData.append("_method", "PUT");

    const response = await api.post(`/etudiants/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erreur API mise à jour étudiant:", error);
    throw error;
  }
};


export const deleteEtudiant = async (id) => {
  try {
    const response = await api.delete(`/etudiants/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur API suppression étudiant:", error);
    throw error;
  }
};

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Clock, Users, Award } from "lucide-react";
import Navbar from "../components/Navbar"; // ← Ton propre composant navbar

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert("Message envoyé avec succès!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">
            Nous sommes là pour répondre à vos questions et vous accompagner
            dans votre parcours éducatif
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="px-4 py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <ContactCard
              icon={<MapPin />}
              title="Adresse"
              text="123 Avenue de l'Éducation, Casablanca, Maroc"
              bg="bg-blue-100"
              color="text-blue-600"
            />
            <ContactCard
              icon={<Phone />}
              title="Téléphone"
              text="+212 6 12 34 56 78"
              bg="bg-green-100"
              color="text-green-600"
            />
            <ContactCard
              icon={<Mail />}
              title="Email"
              text="contact@ecole-excellence.ma"
              bg="bg-purple-100"
              color="text-purple-600"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Infos */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Parlons de votre avenir
              </h2>

              <InfoItem
                icon={<Clock />}
                title="Horaires"
                text="Lun - Ven : 8h - 18h / Sam : 9h - 16h"
                bg="bg-blue-50"
              />
              <InfoItem
                icon={<Users />}
                title="Support étudiant"
                text="Une équipe dédiée à vos côtés."
                bg="bg-green-50"
              />
              <InfoItem
                icon={<Award />}
                title="Excellence académique"
                text="Plus de 20 ans d'expérience."
                bg="bg-purple-50"
              />

              <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Besoin d'une réponse rapide ?
                </h4>
                <p className="text-blue-700 text-sm">
                  Appelez ou WhatsApp : +212 6 12 34 56 78
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    name="name"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Votre adresse email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="inscription">Demande d'inscription</option>
                  <option value="information">Demande d'information</option>
                  <option value="visite">Planifier une visite</option>
                  <option value="autre">Autre</option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Décrivez votre demande en détail..."
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Prêt à commencer votre parcours ?
        </h2>
        <p className="text-xl opacity-90 mb-8">
          Rejoignez des milliers d'étudiants qui ont choisi l'excellence
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-800 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition">
            Planifier une visite
          </button>
          <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-800 transform hover:scale-105 transition">
            Télécharger la brochure
          </button>
        </div>
      </div>
    </div>
  );
};

const Input = ({ name, type = "text", placeholder, value, onChange }) => (
  <input
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    required
  />
);

const ContactCard = ({ icon, title, text, bg, color }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
    <div
      className={`${bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
    >
      {React.cloneElement(icon, { className: `${color} w-8 h-8` })}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

const InfoItem = ({ icon, title, text, bg }) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className={`${bg} p-3 rounded-full`}>{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

export default Contact;

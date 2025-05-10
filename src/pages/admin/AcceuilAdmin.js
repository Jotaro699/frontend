// src/pages/Accueil.js
import React from "react";
import { GraduationCap, Users, CheckCircle, Bell } from "lucide-react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const stats = [
  {
    title: "Total Étudiants",
    value: 650,
    icon: <GraduationCap size={20} />,
    color: "primary",
  },
  {
    title: "Total Enseignants",
    value: 42,
    icon: <Users size={20} />,
    color: "success",
  },
  {
    title: "Parents Payés ce Mois",
    value: "85%",
    icon: <CheckCircle size={20} />,
    color: "info",
  },
  {
    title: "Paiements en Retard",
    value: 15,
    icon: <Bell size={20} />,
    color: "danger",
  },
];

const studentGrowthData = [
  { month: "Jan", students: 580 },
  { month: "Fév", students: 590 },
  { month: "Mar", students: 600 },
  { month: "Avr", students: 620 },
  { month: "Mai", students: 650 },
];

const subjectDistributionData = [
  { name: "Sciences", value: 35 },
  { name: "Lettres", value: 25 },
  { name: "Économie", value: 20 },
  { name: "Arts", value: 20 },
];

const COLORS = ["#0d6efd", "#198754", "#ffc107", "#dc3545"];

const AccueilAdmin = () => {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Tableau de bord général</h2>

      {/* Statistiques */}
      <div className="row mb-5">
        {stats.map((stat, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className={`card border-${stat.color} shadow-sm`}>
              <div className="card-body d-flex align-items-center">
                <div className={`text-${stat.color} me-3`}>{stat.icon}</div>
                <div>
                  <div className="small text-muted">{stat.title}</div>
                  <div className="fs-5 fw-bold">{stat.value}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Graphiques */}
      <div className="row mb-5">
        <div className="col-lg-8 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-3">Évolution des Étudiants</h5>
              <div style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={studentGrowthData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="students"
                      stroke="#0d6efd"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-3">Répartition des Matières</h5>
              <div style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={subjectDistributionData}
                      dataKey="value"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                    >
                      {subjectDistributionData.map((_, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccueilAdmin;


import './App.css';
import React from 'react';

function ProjectCard({ title, info }) {
    return (
      <div className="bg-gray-800 text-white p-6 rounded-lg mb-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{info}</p>
      </div>
    );
  }

  export default ProjectCard;
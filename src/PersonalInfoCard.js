import './App.css';
import React from 'react';

function PersonalInfoCard({ title, info }) {
    return (
      <div className="bg-gray-200 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p>{info}</p>
      </div>
    );
  }


  export default PersonalInfoCard;
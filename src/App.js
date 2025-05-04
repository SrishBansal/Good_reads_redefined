
import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState([
    { name: "Location 1", experience: 2 },
    { name: "Location 2", experience: 5 },
    { name: "Location 3", experience: 1 },
  ]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  const filteredLocations = locations.filter(location => 
    location.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedLocations = filteredLocations.sort((a, b) => a.experience - b.experience);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <button onClick={toggleDarkMode} className="toggle-btn">
        Toggle Dark Mode
      </button>
      <input 
        type="text" 
        placeholder="Search locations..." 
        onChange={(e) => setSearch(e.target.value)} 
        className="search-input"
      />
      <ul>
        {sortedLocations.map((location, index) => (
          <li key={index} className="location-item">
            {location.name} - {location.experience} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

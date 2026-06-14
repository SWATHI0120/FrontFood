import { useState } from "react";
import "../styles/Search.css";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("Coimbatore");

  const apps = query
    ? [
        {
          name: "Zomato",
          url: `https://www.google.com/search?q=${query}+${location}+zomato`,
          logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
        },
        {
          name: "Swiggy",
          url: `https://www.google.com/search?q=${query}+${location}+swiggy`,
          logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
        },
        {
          name: "Uber Eats",
          url: `https://www.google.com/search?q=${query}+${location}+uber+eats`,
          logo: "https://freepnglogo.com/images/all_img/uber-eats-logo-2020-8c13.png",
        },
        {
          name: "EatSure",
          url: `https://www.google.com/search?q=${query}+${location}+eatsure`,
          logo: "https://cdn-1.webcatalog.io/catalog/eatsure/eatsure-icon-filled-128.png?v=1771807142496",
        },
      ]
    : [];

  return (
    <div className="search-page">
      <h1 className="title">🍽️ Food Search</h1>
      <p className="subtitle">
        Find food availability across online ordering apps
      </p>

      {/* Search Controls */}
      <div className="search-box">
        <select
          className="location-select"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          {[
            "Coimbatore",
            "Chennai",
            "Trichy",
            "Madurai",
            "Mysore",
            "Bangalore",
            "Hyderabad",
            "Mumbai",
            "Delhi",
            "Pune",
            "Kolkata",
          ].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <input
          className="search-input"
          type="text"
          placeholder="Search food (eg: Idly, Biriyani, Pizza)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query && (
          <button className="clear-btn" onClick={() => setQuery("")}>
            ✖ Clear
          </button>
        )}
      </div>

      {/* Results */}
      <div className="search-results">
        {apps.map((app, index) => (
          <a
            key={index}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="search-card"
          >
            <img src={app.logo} alt={app.name} />
            <span className="app-badge">{app.name}</span>

            <h3>
              {query} in {location}
            </h3>

            <span className="view-link">View Results →</span>
          </a>
        ))}
      </div>

      {!query && (
        <p className="hint">
          🔍 Enter a food name to check availability
        </p>
      )}
    </div>
  );
}

export default Search;
import React, { useState } from "react";
import { useEffect } from "react";
import M from "materialize-css";
import "./StayNear.css";
// LOGICA DE FIREBASE

const SearchForm = (props) => {
    const [selectedPrice, setSelectedPrice ] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedSchool, setSelectedSchool] = useState(null)

  useEffect(() => {
    let elements = document.querySelectorAll("select");
    let instances = M.FormSelect.init(elements);
  }, []);

  const preCallback = () => {
    if (!selectedPrice || !selectedState || !selectedSchool)
      return
    let filters = {price: selectedPrice, state: selectedState, school: selectedSchool}
    props.callback(filters)
  };

  return (
    <div>
      <div className="input-field col s12">
        <select onChange={(e) => setSelectedPrice(e.target.value)}>
          <option value="" disabled selected>
            Range
          </option>
          <option value="3">All</option>
          <option value="1">&#60; 100</option>
          <option value="2">100 - 250</option>
          <option value="3">&#62; 250</option>
        </select>
        <label>Prize</label>
      </div>

      <div className="input-field col s12">
        <select onChange={(e) => setSelectedState(e.target.value)}>
          <option value="" disabled defaultValue>
            Choose a state
          </option>
          <option value="1">Nayarit</option>
          <option value="2">Jalisco</option>
          <option value="3">Monterrey</option>
          <option value="3">Cd. de México</option>
        </select>
        <label>State</label>
      </div>

      <div className="input-field col s12">
        <select onChange={(e) => setSelectedSchool(e.target.value)}>
          <option value="" disabled defaultValue>
            Choose a School
          </option>
          <option value="1">ITESM</option>
          <option value="2">ITESO</option>
          <option value="3">UNAM</option>
          <option value="4">UDG</option>
          <option value="5">UAG</option>
        </select>
        <label>School</label>
      </div>

      <a className="waves-effect waves-light btn" onClick={preCallback}>FILTER</a>
    </div>
  );
};

export default SearchForm;

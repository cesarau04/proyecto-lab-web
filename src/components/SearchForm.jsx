import React, { useState } from "react";
import { useEffect } from "react";
import M from "materialize-css";
import "./StayNear.css";
// LOGICA DE FIREBASE

const SearchForm = (props) => {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);

  useEffect(() => {
    let elements = document.querySelectorAll("select");
    let instances = M.FormSelect.init(elements);
  }, []);

  const preCallback = () => {
    let filters = {
      price: selectedPrice,
      state: selectedState,
      school: selectedSchool,
    };

    if (!selectedPrice) {
      filters = { ...filters, price: "All" };
    }
    if (!selectedState) {
      filters = { ...filters, state: "Jalisco" };
    }
    if (!selectedSchool) {
      filters = { ...filters, school: "ITESM" };
    }

    filters = props.callback(filters);
  };

  return (
    <div>
      <div className="input-field col s12">
        <select
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="All" defaultValue>
            All
          </option>
          <option value="<100">&#60; 100</option>
          <option value="100-250">100 - 250</option>
          <option value=">250">&#62; 250</option>
        </select>
        <label>Prize</label>
      </div>

      <div className="input-field col s12">
        <select onChange={(e) => setSelectedState(e.target.value)}>
          <option value="Jalisco" defaultValue>
            Jalisco
          </option>
          <option value="Nayarit">Nayarit</option>
          <option value="Monterrey">Monterrey</option>
          <option value="Cd. de México">Cd. de México</option>
        </select>
        <label>State</label>
      </div>

      <div className="input-field col s12">
        <select onChange={(e) => setSelectedSchool(e.target.value)}>
          <option value="ITESM" defaultValue>
            ITESM
          </option>
          <option value="ITESO">ITESO</option>
          <option value="UNAM">UNAM</option>
          <option value="UDG">UDG</option>
          <option value="UAG">UAG</option>
        </select>
        <label>School</label>
      </div>

      <a className="waves-effect waves-light btn" onClick={preCallback}>
        FILTER
      </a>
    </div>
  );
};

export default SearchForm;

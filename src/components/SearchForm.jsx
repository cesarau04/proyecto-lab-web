import React from 'react'
import './StayNear.css';
// LOGICA DE FIREBASE

const SearchForm = () => {
    return (
        <div>
            <form action="#">
                <p class="range-field">
                    <input type="range" id="test5" min="0" max="100" />
                </p>
            </form>
            <div class="input-field col s12">
                <select>
                    <option value="" disabled selected>Choose a state</option>
                    <option value="1">Nayarit</option>
                    <option value="2">Jalisco</option>
                    <option value="3">Monterrey</option>
                    <option value="3">Cd. de México</option>
                </select>
                <label>State</label>
            </div>

            <div class="input-field col s12">
                <select>
                    <option value="" disabled selected>Choose a School</option>
                    <option value="1">ITESM</option>
                    <option value="2">ITESO</option>
                    <option value="3">UNAM</option>
                    <option value="4">UDG</option>
                    <option value="5">UAG</option>
                </select>
                <label>School</label>
            </div>
        </div>

    );
}

export default SearchForm;
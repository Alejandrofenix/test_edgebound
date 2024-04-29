import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SearchField = () => {
    const [form, setForm] = useState({
        searchQuery: '',
    });
    const [error, setError] = useState('');

    const setValue = (name, value) => {
        const currentForm = { ...form };
        if (value.length <= 50) {
            currentForm[name] = value;
            setForm(currentForm);
            setError('');
        }
    };

    const setQuerySearch = (event) => {
        const { name, value } = event.target;
        setValue(name, value);
    };

    const searchPokemon = async () => {
        if (!form.searchQuery) {
            setError('Por favor ingresa un nombre de Pokémon.');
            return;
        }
        const query = form.searchQuery.toLowerCase().trim();

        const pokemonInfoUrl = new URL(`${window.location.origin}/pokemon/${query}`);
        window.location.href = pokemonInfoUrl;


    };

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control me-3"
                placeholder="Buscar Pokémon"
                name="searchQuery"
                value={form.searchQuery}
                onChange={setQuerySearch}
            />
            <button
                className="btn btn-primary rounded-circle btn-lg"
                type="submit"
                onClick={searchPokemon}
                style={{ backgroundColor: "#4fc1e9", borderColor: "#451559", border: "2px solid #451559" }}
            >
                <i className="bi bi-search"></i>
            </button>
            <div className="invalid-feedback" style={{ display: 'block', marginBottom: '0.5rem', color: '#F2DA5E' }}>{error}</div>
        </div>
    );
};

export default SearchField;

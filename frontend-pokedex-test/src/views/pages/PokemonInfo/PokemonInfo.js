import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import PokedexService from "../../../services/pokedexService/pokedexService";
import ColoredShape from '../../../components/ColoredShape/ColoredShape';
import NotFoundImage from '../../../assets/img/not_found_pokemon.png';
import ListWithSubList from '../../../components/ListWithSubList/ListWithSubList';
import PokedexCard from '../../../components/PokedexCard/PokedexCard';
const PokemonInfo = () => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const pokemonName = window.location.pathname.split("/").pop();
    useEffect(() => {
        setLoading(true)
        const searchPokemon = async () => {

            try {

                const foundPokemon = await PokedexService.searchPokemon(pokemonName);
                if (foundPokemon) {
                    setPokemon(foundPokemon);
                } setLoading(false)

            } catch (error) {
                setLoading(false)

            }
        };
        searchPokemon();
        return () => {
        };
    }, []);

    return loading ?
        (
            <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#05AFF2" }}>

                <div className="spinner-border" role="status">
                </div>
            </div>
        ) : pokemon === null ?
            <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#05AFF2" }}>
                <div className="card-group">
                    <PokedexCard name='Pokémon no encontrado' imageUrl={NotFoundImage} />
                </div>
            </div>
            :

            (
                <div className="d-flex justify-content-center align-items-center  vh-100" style={{ backgroundColor: "#05AFF2" }}>

                    <div className="card-group">
                        <PokedexCard name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} imageUrl={pokemon.sprites.front_default} />



                        <div className="card" >
                            <div className="card-body">
                                <div><h5 className="card-title">Information</h5></div>
                            </div>

                            <ListWithSubList
                                title="Stats"
                                items={pokemon.stats}
                                limit={6}
                                renderItem={(item) => `${item.stat.name}: ${item.base_stat}`}
                            />
                            <ListWithSubList
                                title="Forms"
                                items={pokemon.forms}
                                limit={6}
                                renderItem={(item) => item.name}
                            />
                            <ListWithSubList
                                title="Abilities"
                                items={pokemon.abilities}
                                limit={6}
                                renderItem={(item) => item.ability.name}
                            />
                        </div>
                    </div>
                </div>
            );
};



export default PokemonInfo;

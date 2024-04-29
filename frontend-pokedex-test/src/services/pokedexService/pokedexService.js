
export class PokedexService {
    constructor() {
        this.baseUrl = "https://pokeapi.co/api/v2/";
    }

    async searchPokemon(pokemon) {
        const url = `${this.baseUrl}pokemon/${pokemon}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;

    }
}

export default new PokedexService();

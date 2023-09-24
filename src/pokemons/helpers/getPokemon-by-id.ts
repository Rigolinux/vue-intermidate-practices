import type { Pokemon, PokemonResponse } from "../interfaces";
import pokemonApi from "../api/pokemonApi";
import { sleep } from "./spleep";



export const getPokemonById = async (id: string):Promise<Pokemon> => {

    await sleep(2000);

    const { data } = await pokemonApi.get<PokemonResponse>(`/pokemon/${id}`);
    return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default,     
    };
};
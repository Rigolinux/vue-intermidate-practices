import type { PokemonResponse, Pokemon,PokemonsListResponse } from "../interfaces/";
import pokemonApi from '../api/pokemonApi';
import axios from "axios";
import { sleep } from "./spleep";




export const getPokemons = async(): Promise<Pokemon[]> => {

    await sleep(4000);
    
    const { data } = await pokemonApi.get<PokemonsListResponse>('/pokemon?limit=45')

    const pokemonPromises: Promise<Pokemon>[] = [];
   
    for(const {url} of data.results){
        const pokemonPromise = axios.get<PokemonResponse>(url).then(({data})=>
        {
            return {
                id: data.id,
                name: data.name,
                frontSprite: data.sprites.front_default,
            }
        })

        pokemonPromises.push(pokemonPromise);
        
    }

    const pokemons = await Promise.all(pokemonPromises);

    return pokemons;
}
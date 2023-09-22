import { getPokemons } from '../helpers/getPokemon';
import {computed, onMounted, ref} from 'vue';
import type { Pokemon } from '../interfaces/pokemons';

const pokemons = ref<Pokemon[]>([]);
const isLoading = ref(true);


export const usePokemons = () => {

    onMounted( async() => {
        await loadPokemons();
    })

    // if(pokemons.value.length === 0){

    //     getPokemons()
    //         .then((pokemonsResponse) => {
            
    //         pokemons.value = pokemonsResponse;
    //         isLoading.value = false;
    //         });
    // }

    const loadPokemons = async() => {
        const pokemonsResponse = await getPokemons();
        pokemons.value = pokemonsResponse;
        isLoading.value = false;
    }



    return{
        pokemons,
        isLoading,
        count: computed(() => pokemons.value.length),
    }
};
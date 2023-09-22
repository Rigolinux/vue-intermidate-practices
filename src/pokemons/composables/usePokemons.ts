import { getPokemons } from '../helpers/getPokemon';
import {computed, onMounted, ref} from 'vue';
import type { Pokemon } from '../interfaces/pokemons';


import { useQuery } from '@tanstack/vue-query';


export const usePokemons = () => {

    const { isLoading, data:pokemons, isError,error} = useQuery(['pokemons'], getPokemons);




     return{
        pokemons,
        isLoading,
        count: computed(() => pokemons.value?.length ?? 0),
        isError,
        error
     }
};
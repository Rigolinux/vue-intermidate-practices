import { getPokemons } from '../helpers/getPokemon';
import {computed, onMounted, ref, watchEffect} from 'vue';
import type { Pokemon } from '../interfaces/pokemons';


import { useQuery } from '@tanstack/vue-query';


export const usePokemons = () => {

    const { isLoading, data:pokemons, isError,error} = useQuery(['pokemons'], getPokemons,
    
    {
      retry: 1,
      retryDelay: 1000,
    });

    watchEffect(() => {
       //  console.log('isErrot', isError.value);
         
    });


     return{
        pokemons,
        isLoading,
        count: computed(() => pokemons.value?.length ?? 0),
        isError,
        error
     }
};
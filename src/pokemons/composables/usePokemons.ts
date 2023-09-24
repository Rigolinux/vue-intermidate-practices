import { getPokemons } from '../helpers/getPokemon';
import {computed, watchEffect} from 'vue';



import { useQuery } from '@tanstack/vue-query';
import { initialPokemons } from '../data/initial-data';


export const usePokemons = () => {

    const { isLoading, data:pokemons, isError,error} = useQuery(['pokemons'], getPokemons,
    
    {
      retry: 1,
      retryDelay: 1000,
      initialData: initialPokemons
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
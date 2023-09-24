
import type { Pokemon } from '@/pokemons/interfaces'
import { reactive } from 'vue'

interface Store {

    //state
    pokemons: {
        list          : Pokemon[];
        count         : number;
        isLoading     : boolean;
        hasError      : boolean;
        errorMessage?  : string;
    };

    //actions -- methods that you call throughout your application that call mutations

    starLoadingPokemons: () => Promise<void>;
    loadedPokemons: (payload: Pokemon[]) => void;
    loadPokemonsFailed: (payload: string) => void;

}

const store = reactive<Store> ({
    pokemons: {
        list: [],
        count: 0,
        isLoading: false,
        hasError: false,
        errorMessage: undefined
    },
    starLoadingPokemons: async function (): Promise<void> {
        this.pokemons = {
            ...this.pokemons,
            isLoading: true,
            hasError: false,
            errorMessage: undefined
        };
    },
    loadedPokemons: function (payload: Pokemon[]): void {
        this.pokemons = {
            list: payload,
            count: payload.length,
            isLoading: false,
            hasError: false,
            errorMessage: undefined
        }
    },
    loadPokemonsFailed: function (payload: string): void {
        this.pokemons = {
            ...this.pokemons,
            isLoading: false,
            hasError: true,
            errorMessage: payload
        }
    }
});


export default store;
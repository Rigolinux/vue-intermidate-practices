<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import store from '@/store/pokemon.store';

import PokemonCardList from '../components/PokemonCardList.vue';
import { getPokemons } from '../helpers/getPokemon';

useQuery(
  ['pokemons'],
  getPokemons,
  {
    select(data) {
      store.loadedPokemons(data);
    }
  
  }
)


</script>

<template>
  <h3 v-if="store.pokemons.isLoading">Loading...</h3>
  <div v-else-if="store.pokemons.hasError">
    <h3>Error</h3>
    <p>{{ store.pokemons.errorMessage }}</p>
  </div>
  <div v-else>
    <h1>Pokemon List - Native {{ store.pokemons.count }} </h1>

    <PokemonCardList :pokemons="store.pokemons.list ?? []" />
    
  </div>
</template>


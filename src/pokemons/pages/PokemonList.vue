<script setup lang="ts">

import { usePokemons } from '../composables/usePokemons';
import PokemonCardList from '../components/PokemonCardList.vue';

const { pokemons, isLoading,count,isError, error } = usePokemons();



//requieres suspense
//const data = await getPokemons();



// getPokemons().then((data) => {
//   pokemons.value = data;
// });

</script>

<template>
  <h3 v-if="isLoading">Loading...</h3>
  <div v-else-if="isError">
    <h3>Error</h3>
    <p>{{ error }}</p>
  </div>
  <div v-else>
    <h1>Pokemon List {{ count }} </h1>

    <PokemonCardList :pokemons="pokemons ?? []" />
    
  </div>
</template>


<script setup lang="ts">
import type { Pokemon } from '../interfaces/pokemons';
import PokemonCard from './PokemonCard.vue';

interface Props {
  pokemons: Pokemon[];
}

const props = defineProps<Props>();

</script>

<template>
    <div class="card-list">
        <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" 
        :pokemon="pokemon"      
        />     
    </div>
</template>

<style scoped>

.card-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>
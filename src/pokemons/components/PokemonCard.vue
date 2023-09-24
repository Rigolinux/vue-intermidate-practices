<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import type { Pokemon } from '../interfaces/pokemons';
import { useRouter } from 'vue-router';
import { getPokemonById } from '../helpers/getPokemon-by-id';

interface Props {
  pokemon: Pokemon;
}

const props = defineProps<Props>();

const router = useRouter();

const queryClient = useQueryClient();

const goTo = () => {
  router.push({ name: 'pokemon-id', params: { id: props.pokemon.id } });
};

const prefetchpokemon = async() => {
  await queryClient.prefetchQuery({
    queryKey: ['pokemon', props.pokemon.id.toString()],
    queryFn: () => getPokemonById(props.pokemon.id.toString()),
  });
};

</script>

<template>

    <div class="pokemon-card" @click="goTo()" @mouseenter="prefetchpokemon" >
       <img :src="props.pokemon.frontSprite" :alt="pokemon.name" /> 
       <h3>{{ pokemon.name }}</h3>
    </div>

</template>



<style scoped>

.pokemon-card{
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}

img{
    width: 150px;
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 0px 5px 0px rgba(255,255,255,0.1);
    transition: all 0.5s;
}

img:hover{
    box-shadow: 0px 2px 10px rgba(255,255,255,0.5);
    transition: all 0.5s;
}

</style>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePokemon } from '../composables/usePokemon';
import { useQueryClient } from '@tanstack/vue-query';

const router = useRoute();

const { id } = router.params;

const { pokemon, isLoading, isError, errorMessage } = usePokemon(id.toString());

const queryClient = useQueryClient();

const invalidateQueries = () => {
  queryClient.invalidateQueries(
    ['pokemon', id.toString()],
   
  );
};

</script>

<template>
  <h1 v-if="isLoading"
  > Loading... </h1>
  <h1 v-else-if="isError">
    {{ errorMessage }} </h1>
  <div v-else-if="pokemon">
    <h1>{{ pokemon.name }}</h1>
    <div class="character-container"> 
      <img :src="pokemon.frontSprite" :alt="pokemon.name" />
    
    </div>
    <div>
      <button
      @click="invalidateQueries"
      >
        Invalidate Queries
      </button>
    </div>
  </div>

</template>

<style scoped>

.character-container{
  display: flex;
  flex-direction: row;
}
img {
  width: 150px;
  border-radius: 5px;
}

button {
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}
</style>
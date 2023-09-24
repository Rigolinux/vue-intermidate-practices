<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import type { RouterLink } from '@/router/list-routes';

import { pokemonRoute } from '../router';

const routeLinks: RouterLink[] = pokemonRoute.children?.map(({ name, path, props }) => {

  const { title, visible } = props as { title: string, visible: boolean };

  return {
    name: name?.toString() ?? '',
    path: path,
    title,
    visible,
  }
}) || [];


</script>

<template>
  <NavBar :links="routeLinks" is-secondary />
  <div>
    <!-- <h4>Pokemon Layout</h4> -->
    <!--suspense -->
   <!--  <Suspense>

      <RouterView />

      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense> -->
    <RouterView />

  </div>
</template>



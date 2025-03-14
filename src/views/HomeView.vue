<script setup lang="ts">
import MenuProvider from '@/components/Pages/MenuProvider.vue'
import Navigation from '@/components/Navigation/Navigation.vue'
import { useMenuStore } from '@/stores/menu'
import { RouterView } from 'vue-router'
const menu = useMenuStore()
</script>

<template>
  <Navigation />
  <div
    :class="['flex flex-col flex-1 h-[calc(100%-64px)] overflow-hidden bg-primary-50', 'transition-transform', menu.sidebarShowed ? 'transform duration-300 md:pl-80' : 'transform duration-300 md:pl-4']">
    <MenuProvider>
      <Suspense>
        <RouterView />
      </Suspense>
    </MenuProvider>
  </div>
</template>
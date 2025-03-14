<script setup lang="ts">
  // components
  import Button from '@/components/Button.vue';

  // icons
  import {
    PhArrowsCounterClockwise, 
    PhFileText,
    PhMagnifyingGlass 
  } from '@phosphor-icons/vue';

  defineProps({
    reportButton: {
      type: Boolean,
      default: false
    }
  })
</script>

<template>
  <div class="filters rounded-2xl">

    <form class="filter-body bg-gray-50 mx-auto space-y-3 p-4 rounded-t-2xl">
      <slot></slot>
    </form>
    
    <div class="filter-footer rounded-b-2xl px-4 py-3 bg-primary-50 flex justify-end">
      <div class="filter-buttons flex gap-3 flex-wrap">
        <Button label="Ulangi" style-type="outline" class-name="bg-white">
          <PhArrowsCounterClockwise size="18" class="ml-1" weight="regular" />
        </Button>

        <Button v-if="reportButton" label="Lihat Laporan" style-type="outline" class-name="bg-white">
          <PhFileText size="18" class="ml-1" weight="regular" />
        </Button>

        <Button label="Cari Data">
          <PhMagnifyingGlass size="18" class="ml-1" weight="regular" />
        </Button>
      </div>
    </div>
    
  </div>
</template>
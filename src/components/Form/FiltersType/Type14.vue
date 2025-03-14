<script setup lang="ts">
  import Select from '@/components/Select.vue'
  import DatePicker from '@/components/DatePicker.vue'
</script>

<template>
  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Distribusi/Wilayah:</label>

    <Select placeholder="Semua Distribusi/Wilayah"/>
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block"
      >Area:</label
    >

    <Select placeholder="Semua Area" />
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block"
      >Posko:</label
    >

    <Select placeholder="Semua Posko" />
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Periode Tanggal:</label>

    <DatePicker />
  </div>
</template>

<script setup lang="ts">
  import Select from '@/components/Select.vue'
</script>

<template>
  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Regional:</label>

    <Select placeholder="Semua Regional"/>
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Unit Induk Distribusi/Wilayah:</label>

    <Select placeholder="Semua Unit Induk Distribusi/Wilayah"/>
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block"
      >Unit Pelaksanaan Pelayanan Pelanggan:</label
    >

    <Select placeholder="Semua Unit Pelaksanaan Pelayanan Pelanggan" />
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block"
      >Unit Layanan Pelanggan:</label
    >

    <Select placeholder="Semua Unit Layanan Pelanggan" />
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Periode</label>

    <div class="grid grid-cols-2 gap-x-2">
      <Select placeholder="Juli" />
      <Select placeholder="2023" />
    </div>
  </div>
</template>

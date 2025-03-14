<script setup lang="ts">
  import Select from '@/components/Select.vue'
  import DatePicker from '@/components/DatePicker.vue'
  import InputWithSuffix from '../InputWithSuffix.vue';
</script>

<template>
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
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Posko:</label>

    <Select placeholder="Semua Posko" />
  </div>
  
  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Periode Tanggal:</label>

    <DatePicker />
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Durasi:</label>

    <div class="flex flex-col gap-y-1">
      <Select placeholder="Durasi Menit" />

      <div class="grid grid-flow-col auto-cols-auto gap-x-1.5">
        <InputWithSuffix />
        <small class="flex items-center">s/d</small>
        <InputWithSuffix />
      </div>
    </div>
  </div>
</template>

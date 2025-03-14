<script setup lang="ts">
  import Select from '@/components/Select.vue'
  import DatePicker from '@/components/DatePicker.vue'
  import InputWithFilter from '../InputWithFilter.vue'
</script>

<template>
  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Periode Tanggal:</label>

    <DatePicker />
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Unit PLN:</label>

    <div class="flex flex-col gap-y-1">
      <Select placeholder="Pilih Unit" />

      <div class="grid grid-flow-col auto-cols-auto gap-x-1.5">
        <Select placeholder="Pilih Area" />
        <Select placeholder="Pilih Rayon" />
      </div>
    </div>
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Status:</label>

    <Select placeholder="Pilih Status"/>
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block"
      >SLA:</label
    >

    <Select placeholder="Pilih Durasi SLA" />
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Cari Report Number:</label>

    <InputWithFilter placeholder="cari report" :filters="[{id: 1, title: 'Pilih Jenis'}]" />
  </div>
</template>

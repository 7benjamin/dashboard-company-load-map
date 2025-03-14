<script setup lang="ts">
  import InputWithFilter from '../InputWithFilter.vue'
  import DatePicker from '@/components/DatePicker.vue'
  import InlineRadioGroup from '@/components/Form/InlineRadioGroup.vue'
</script>

<template>
  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Jenis Pengaduan:</label>

    <InlineRadioGroup :radio-items="[{id: 1, title: 'Gangguan', checked: true}, {id: 2, title: 'Keluhan'}]" />
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Cari Report Number:</label>

    <InputWithFilter placeholder="cari report" :filters="[{id: 1, title: 'Nama Pelapor'}]" />
  </div>

  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:items-center">
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Periode Tanggal:</label>

    <DatePicker />
  </div>
</template>

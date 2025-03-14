<script setup lang="ts">
  import Select from '@/components/Select.vue'
  import DatePicker from '@/components/DatePicker.vue'
  import InlineRadioGroup from '@/components/Form/InlineRadioGroup.vue'
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
    <label class="text-gray-800 font-semibold mb-2 sm:mb-0 block">Group By Kode Unit Distribusi:</label>

    <InlineRadioGroup :radio-items="[{id: 1, title: 'Tidak', checked: true}, {id: 2, title: 'Ya, Grupkan'}]" />
  </div>
</template>

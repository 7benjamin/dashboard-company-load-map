<script setup lang="ts">
  import { PhCalendarBlank } from '@phosphor-icons/vue';
  import { ref } from 'vue'
  import VueTailwindDatepicker from 'vue-tailwind-datepicker'
  

const dateValue = ref('')
const formatter = ref({
  date: 'DD MMM YYYY',
  month: 'MMM'
})
</script>

<template>
  <div class="flex">
    <vue-tailwind-datepicker 
      v-model="dateValue"
      :formatter="formatter"
      separator="   s/d   "
      :shortcuts="false"
      :auto-apply="false"
      as-single 
      use-range
      v-slot="{ value, placeholder }"
    >
      <div class="flex">
        <div class="flex-1">
          <button
            type="button"
            class="w-full flex items-center justify-between px-4 py-2 text-sm leading-6 placeholder:text-gray-400 text-gray-900 border-0 border-transparent rounded-lg outline-0 bg-gray-200 focus:outline-0 focus:border-0 focus:ring-0"
          >
            <span class="text-gray-900">
              {{ value || placeholder }}
            </span>
            <PhCalendarBlank size="18" weight="regular"/>
          </button>
        </div>
      </div>
    </vue-tailwind-datepicker>
  </div>
</template>
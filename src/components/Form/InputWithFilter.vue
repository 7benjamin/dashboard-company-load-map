<script setup lang="ts">
import { PhMagnifyingGlass } from '@phosphor-icons/vue';
import { type PropType } from 'vue'

interface FilterItems {
  id: number;
  title: string;
}

const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  filters: {
    type: Array as PropType<FilterItems[]>,
    required: true
  }
})
</script>

<template>
  <div class="relative w-full overflow-hidden rounded-lg">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <PhMagnifyingGlass size="18" class="text-gray-900" weight="regular" />
    </div>
    <input
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      type="text"
      class="w-full px-4 py-2 pl-10 text-sm leading-6 placeholder:text-gray-400 text-gray-900 border-0 border-transparent rounded-lg outline-0 bg-gray-200 focus:outline-0 focus:border-0 focus:ring-0"
    />
    <div class="absolute inset-y-0 right-0 flex items-center">
      <label for="filters" class="sr-only">filters</label>
      <span class="block border border-gray-600 h-5"></span>
      <select
        id="filters"
        name="filters"
        class="h-full bg-gray-200 text-sm rounded-lg border-transparent py-0 pl-2 pr-7 text-gray-900 focus:outline-0 focus:border-0 focus:ring-0"
      >
        <option :key="filter.id" :value="filter.id" v-for="filter in filters">{{ filter.title }}</option>
      </select>
    </div>
  </div>
</template>

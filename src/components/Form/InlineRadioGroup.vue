<template>
  <div>
    <fieldset>
      <div class="space-y-3 sm:flex sm:items-center sm:space-y-0 sm:space-x-5">
        <div v-for="item in radioItems" :key="item.id" class="flex items-center">
          <input :id="`${item.id}`" type="radio" name="radio"
            :checked="item.hasOwnProperty('checked') && item.checked === true"
            class="w-4 h-4 border-gray-300 text-primary-500 peer focus:ring-primary-500" />
          <label :for="`${item.id}`" class="block ml-3 text-sm font-medium text-gray-700 peer-checked:text-primary-500">{{
            item.title }}</label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

interface Item {
  id: number;
  title: string;
  checked?: boolean;
}

defineProps({
  radioItems: {
    type: Array as PropType<Item[]>,
    required: true
  }
})
</script>

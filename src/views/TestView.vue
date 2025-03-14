<template>
  <div>
    <fieldset>
      <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
        <div
          v-for="item in radioItems"
          :key="item.id"
          class="flex items-center"
        >
          <input
            :id="item.id"
            type="radio"
            name="radio"
            class="h-4 w-4 border-gray-300 text-primary-500 peer focus:ring-primary-500"
          />
          <label
            :for="item.id"
            class="ml-3 block text-sm font-medium text-gray-700 peer-checked:text-primary-500"
            >{{ item.title }}</label
          >
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
defineProps({
  radioItems: Object
})
</script>

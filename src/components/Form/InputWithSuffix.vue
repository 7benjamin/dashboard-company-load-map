<script setup lang="ts">
  const props = defineProps({
    placeholder: {
        type: String,
        default: "",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    readonly: {
        type: Boolean,
        default: false,
    }
  })
</script>

<template>
  <div class="relative w-full overflow-hidden rounded-lg bg-gray-200">
    <input
      autocomplete="off"
      type="text"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      inputmode="numeric"
      pattern="[0-9.]*"
      oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
      onblur="this.value = this.value ? this.value + ' Menit' : ''"
      onfocus="this.value = this.value.replace(/[^0-9.]/g, '')"
      class="w-full px-4 py-2 text-sm leading-6 placeholder:text-gray-400 text-gray-900 border-0 border-transparent rounded-lg outline-0 bg-gray-200 focus:outline-0 focus:border-0 focus:ring-0"
    />
  </div>
</template>

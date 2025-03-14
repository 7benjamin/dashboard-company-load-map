<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  },
  onClick: {
    type: Function as unknown as () => (payload: MouseEvent) => void,
    default: () => {}
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  },
  styleType: {
    type: String as () => 'filled' | 'secondary' | 'outline' | 'text',
    default: 'filled'
  }
})

const buttonStyle = computed(() => {
  switch (props.styleType) {
    case 'filled':
      return 'text-white border-transparent rounded-lg bg-primary-500 hover:bg-primary-600 focus:outline-0 disabled:bg-primary-200 disabled:text-primary-400'

    case 'secondary':
      return 'text-primary-500 bg-primary-50 border-transparent rounded-lg hover:bg-primary-200 focus:outline-0 disabled:bg-primary-300'

    case 'outline':
      return 'bg-none text-primary-500 border border-primary-500 rounded-lg disabled:border-primary-300 disabled:text-primary-300'

    case 'text':
      return 'bg-none text-primary-500 border border-transparent hover:border-primary-500 rounded-lg disabled:border-primary-300 disabled:text-primary-300'
  }
})
</script>

<template>
  <button
    :type="type"
    @click="onClick"
    :disabled="isLoading ? true : disabled"
    :class="['px-3 py-2 text-sm font-semibold', buttonStyle, className]"
  >
    <div class="flex items-center" v-if="!isLoading">
      <span class="me-1">{{ label }}</span>
      <slot></slot>
    </div>
    <span v-else>
      <center>
        <svg
          class="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </center>
    </span>
  </button>
</template>

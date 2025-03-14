<template>
    <span :class="['inline-flex items-center justify-center rounded-full', backgroundClass, sizeClass, className]">
        <span :class="['leading-none', fontClass]">
            {{ nameInitial }}
        </span>
    </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    fontClass: {
        type: String,
        default: "text-sm font-medium text-white"
    },
    backgroundClass: {
        type: String,
        default: "bg-primary-400"
    },
    sizeClass: {
        type: String,
        default: "w-8 h-8"
    },
    className: {
        type: String,
        default: ""
    }
})

function createInitial(name: String) {
    const wordCapital = name
        .split(" ")
        .map(word => word.charAt(0).toUpperCase())
        .join("");
    try {
        return wordCapital.slice(0, 2);
    } catch (error) {
        return wordCapital.slice(0, 1);
    }

}

const nameInitial = computed(() => {
    return createInitial(props.name)
})
</script>
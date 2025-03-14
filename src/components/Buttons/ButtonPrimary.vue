<script setup lang="ts">
defineProps({
    type: {
        type: String as () => "button" | "submit" | "reset",
        default: "button",
    },
    onClick: {
        type: Function as unknown as () => (payload: MouseEvent) => void,
        default: () => { },
    },
    label: {
        type: String,
        default: "",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
    className: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <button :type="type" @click="onClick" :disabled="disabled"
        :class="['px-4 py-2 mt-2 text-sm font-bold text-white border-transparent rounded-lg bg-primary-500 focus:outline-0 disabled:bg-primary-400', className]">
        <slot></slot>
        <span v-if="!isLoading">{{ label }}</span>
        <span v-else>
            <center>
                <lottie-player autoplay loop mode="normal"
                    src="https://assets2.lottiefiles.com/packages/lf20_lNbR6W7kY6.json"
                    style="height:1.2rem"></lottie-player>
            </center>
        </span>
    </button>
</template>
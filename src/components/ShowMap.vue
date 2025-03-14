<script setup lang="ts">

const props = defineProps({
    datamap: {
        type: String,
        default: "",
    }
})

</script>

<template>
     <div class="flex w-full">
            <object type="text/html" :data=datamap width="" height="" style="overflow:auto;width:100%;height:calc(100vh - 87px);">
            </object>
    </div>
</template>
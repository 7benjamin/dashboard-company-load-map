<script setup lang="ts">
import type { MenuItemModel } from '@/types/menu'
import { IconDotOutline } from '@/utils/icons';

defineProps({
    item: {
        type: Object as () => MenuItemModel,
        required: true
    },
    selected: {
        type: Boolean,
        required: true
    },
    isChildren: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="group">
        <RouterLink :to="item.path"
            :class="[selected ? 'aside-single-item-active' : 'aside-single-item-inactive', isChildren ? 'mt-1' : 'mt-0']">

            <IconDotOutline v-if="isChildren"
                :class="['w-6 h-6', selected ? 'aside-single-item-icon stroke-white' : 'aside-single-item-icon-inactive']" />

            <component :is="item.icon"
                :class="[selected ? 'text-gray-600 fill-white' : 'text-aside group-hover:text-gray-600 group-hover:fill-white', 'mr-2 flex-shrink-0 h-6 w-6']"
                aria-hidden="true" />
            {{ item.name }}
        </RouterLink>
    </div>
</template>
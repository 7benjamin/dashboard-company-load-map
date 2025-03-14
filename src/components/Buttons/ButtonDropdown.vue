<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { ref, type PropType } from 'vue';

type Data = {
    name: string;
};
const props = defineProps({
    className: {
        type: String,
        default: "",
    },
    textStyle: {
        type: String,
        default: "text-sm font-medium text-gray-700",
    },
    buttonStyle: {
        type: String,
        default: "rounded-md border border-gray-300 bg-white",
    },
    data: {
        type: Array as PropType<Data[]>,
        default: () => [
            { name: 'Pilih Data' },
        ],
        required: true,
    },
    checked: {
        type: Number,
        default: 0,
    },
});

const emit = defineEmits(["update:checked"]);

const searchByChecked = ref(props.checked)

function changeSearchBy(index: number) {
    searchByChecked.value = index
    emit("update:checked", index);
}
</script>

<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton
                :class="['inline-flex items-center justify-center w-full px-2 py-2 rounded-md shadow-sm focus:outline-none focus:ring-0', textStyle, buttonStyle, className]">
                {{ props.data[searchByChecked].name }}
                <ChevronDownIcon class="w-4 h-4 ml-2 -mr-1" aria-hidden="true" />
            </MenuButton>
        </div>

        <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
            <MenuItems
                class="absolute left-0 z-20 w-56 mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                    <MenuItem v-slot="{ active }" v-for="(item, index) in props.data">
                    <a @click="changeSearchBy(index)"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'cursor-pointer block px-4 py-2 text-sm']">
                        {{ item.name }}
                    </a>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>
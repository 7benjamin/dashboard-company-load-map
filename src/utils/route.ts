
import type { MenuItemModel } from '../types/menu'
import type { RouteRecordRaw } from 'vue-router'
import {
    IconMonitor,
    IconPolygon

} from '@/utils/icons'

export const navigationIcon = [
    IconPolygon,
    IconMonitor,
]

const convertToDashedString = (input: string): string => {
    // Menghapus tanda '/' di awal dan akhir string
    input = input.replace(/^\/+|\/+$/g, '');

    // Membagi string menjadi bagian-bagian menggunakan '/'
    const parts = input.split('/');

    // Menggabungkan bagian-bagian dengan tanda '-'
    return `/${parts.join('-')}`;
}

export const convertRouteToMenu = (data: RouteRecordRaw[], basePath: string = '/home', iconIndex: number = 0): MenuItemModel[] => {
    return data.filter((i) => i.path !== '' && i.name != undefined).map((item, i: number) => {
        const convertedItem: MenuItemModel = {
            name: item.name?.toString() || '',
            path: `${basePath}/${item.path}`,
            expanded: false,
            icon: navigationIcon[i],
            children: [],
        };

        // if (item.children) {
        //     convertedItem.icon = navigationIcon[iconIndex];
        //     iconIndex = (iconIndex + 1) % navigationIcon.length;
        //     convertedItem.children = convertRouteToMenu(item.children, `${basePath}/${item.path}`, iconIndex);
        // }

        return convertedItem
    })
}

export const removeExtraSlashes = (input: string): string => {
    // Menggunakan ekspresi reguler untuk mengganti tanda '/' lebih dari 2 dengan satu tanda '/'
    return input.replace(/\/{3,}/g, '/');
}

export const hasMoreThanTwoSlashes = (input: string): boolean => {
    // Menggunakan ekspresi reguler untuk mencari tanda '/' lebih dari 2 kali
    const matches = input.match(/\//g);
    return matches ? matches.length > 2 : false;
}
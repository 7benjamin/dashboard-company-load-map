interface MenuItemModel {
    name: string;
    path: string;
    icon: any;
    expanded: boolean;
    children: MenuItemModel[];
}

export type {
    MenuItemModel,
}
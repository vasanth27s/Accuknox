import { atom } from "recoil";

export const activeTabState = atom({
    key: 'activeTabState',
    default: 'CSPM Executive Dashboard',
})

export const tabsState = atom({
    key: 'tabsState',
    default: ['CSPM', 'CWPP ', 'Image', 'Ticket'],
})

export const categoryWidgetsState = atom({
    key: 'categoryWidgetsState',
    default: [],
})

export const showAddWidgetScreen = atom({
    key: 'showAddWidgetScreen',
    default: false,
})

export const searchQueryState = atom({
    key: 'searchQueryState',
    default: '',
});

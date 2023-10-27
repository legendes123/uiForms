export interface ITabValue {
    name:string,
    id:string,
    isSelected:boolean
}

export interface ITab {
    tabTitle:string,
    tabName:string,
    tabValue: ITabValue[],
}
export interface IDefaultState {
    isOpen: boolean,
    tabSelected: string,
    counterSelectedFilters:number,
    tab: ITab[]

}

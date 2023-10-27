import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IDefaultState} from "../types/types";
import {area, district, filtersValue, metro, residentialComplex,} from "../data/data";





const initialState: IDefaultState = {
    isOpen: false,
    tabSelected:'residentialComplex',
    counterSelectedFilters:0,
    tab:[
        {
            tabTitle:filtersValue.residentialComplex,
            tabName:'residentialComplex',
            tabValue:residentialComplex,
        },
        {
            tabTitle:filtersValue.district,
            tabName:'district',
            tabValue:district
        },
        {
            tabTitle:filtersValue.area,
            tabName:'area',
            tabValue:area
        },
        {
            tabTitle:filtersValue.metro,
            tabName:'metro',
            tabValue:metro
        }
    ],

};





const dropDownSlice = createSlice({
    name: "dropDown",
    initialState,
    reducers: {
        changeStatusIsOpen(state) {
            state.isOpen = !state.isOpen
        },
        changeSelectedTab(state,action:PayloadAction<string>) {
            state.tabSelected = action.payload
        },
        changeElemSelected(state,action:PayloadAction<string>) {

            const tab = state.tab.filter((elem)=> elem.tabName === state.tabSelected)
            const [tabValue] = tab
            const [a] = tabValue.tabValue.filter(x => x.id === action.payload)
            if(a.isSelected){
                state.counterSelectedFilters--
            } else{
                state.counterSelectedFilters++
            }
            a.isSelected = !a.isSelected

        },
    },


});

export const {
    changeStatusIsOpen,
    changeSelectedTab,
    changeElemSelected

} = dropDownSlice.actions;
export default dropDownSlice.reducer;

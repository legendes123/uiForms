import  {FC} from 'react';
import {changeSelectedTab} from "../../store/dropDownSlice";
import {useAppDispatch} from "../../hooks/hooks";
import {ITab} from "../../types/types";
import './tab.css';

interface TabbProps {
    isSelected: boolean;
    value:ITab
}
const Tab:FC<TabbProps> = ({isSelected,value}) => {
    const dispatch = useAppDispatch()

    function handleChangeChangeStatusSelectedTab(){
        dispatch(changeSelectedTab(value.tabName))
    }

    return (
        <div className={
            isSelected
                ?   'tab__item tab_selected'
                :   'tab__item'
        } onClick={handleChangeChangeStatusSelectedTab}>
            <span className={
                isSelected
                    ?   'tab__span span_selected'
                    :   'tab__span'
            }>{value.tabTitle}</span>
        </div>
    );
};

export default Tab;

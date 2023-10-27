import {FC} from 'react';
import './tabList.css';
import {useAppSelector} from "../../hooks/hooks";
import Tab from "../tab/tab";

const TabList:FC = () => {
    const tabSelected = useAppSelector(state => state.dropDown.tabSelected)
    const tab = useAppSelector(state => state.dropDown.tab)
    return (
        <div className="tabs" onClick={()=>{}}>
            <div className="tabs__container">
                {tab.map((elem)=>{
                    return <Tab isSelected={elem.tabName === tabSelected} value={elem}></Tab>
                })}
            </div>
        </div>
    );
};

export default TabList;

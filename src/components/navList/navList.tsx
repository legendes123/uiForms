import './navList.css';
import {useAppSelector} from "../../hooks/hooks";
import Card from "../card/card";
import {ITab, ITabValue} from "../../types/types.tsx";

const NavList = () => {
    const tabSelected = useAppSelector(state => state.dropDown.tabSelected)
    const tab = useAppSelector(state => state.dropDown.tab)
    const showTab = tab.filter((elem:ITab)=> elem.tabName === tabSelected)
    const [{tabValue}] = showTab
    return (
        <div className="nav_list">
            {tabValue.map((elem:ITabValue)=>{
                return <Card elem={elem}/>
            })}
        </div>
    );
};

export default NavList;

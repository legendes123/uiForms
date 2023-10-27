import './selected.css';
import { useAppSelector} from "../../hooks/hooks";
import SelectedCard from "../selectedCard/selectedCard";
import HorizontalScroll from "react-scroll-horizontal";
import {ITab, ITabValue} from "../../types/types.tsx";
import {FC} from "react";

const Selected:FC = () => {

    const tabSelected = useAppSelector(state => state.dropDown.tabSelected)
    const tab = useAppSelector(state => state.dropDown.tab)
    const showTab = tab.filter((elem:ITab)=> elem.tabName === tabSelected)
    const [{tabValue}] = showTab
    const selectedTask = tabValue.filter((elem:ITabValue) => elem.isSelected)
    const hasBlock = selectedTask.length > 0 ? true : false

    return (
            <>
                {
                    hasBlock && (
                        <div className="selected">
                            <HorizontalScroll className="scrolls__container">
                                {selectedTask.map((elem:ITabValue)=>{
                                    return <SelectedCard elem={elem}></SelectedCard>
                                })}
                            </HorizontalScroll>
                        </div>
                    )
                }
            </>


    );
};

export default Selected;

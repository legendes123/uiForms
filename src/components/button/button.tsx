import './button.css';
import  IconSearch  from '../../icon/Search.svg';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {changeStatusIsOpen} from "../../store/dropDownSlice";
import Circle from "../circle/circle";
import {FC} from "react";

const Button:FC = () => {
    const counterSelectedFilters = useAppSelector(state => state.dropDown.counterSelectedFilters)
    const isActive = useAppSelector(state => state.dropDown.isOpen)
    const dispatch = useAppDispatch()

    function handleChangeChangeStatusOpen(){
        dispatch(changeStatusIsOpen())
    }

    return (
        <button onClick={handleChangeChangeStatusOpen} className={isActive ? "button isActive" : "button"}>
            <div className="button__container">
                <img src={IconSearch}/>
                <span className="button__span">ЖК,ОКРУГ,РАЙОН,МЕТРО</span>
            </div>
            {counterSelectedFilters > 0 && <Circle counterSelectedFilters={counterSelectedFilters}></Circle>}

        </button>
    );
};

export default Button;

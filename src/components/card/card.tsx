import  {FC} from 'react';
import IconCrossAccept from "../../icon/Checkbox.svg";
import {useAppDispatch} from "../../hooks/hooks";
import {changeElemSelected} from "../../store/dropDownSlice";
import CircleAccept from "../circleAccept/circleAccept";
import './card.css';
import {ITabValue} from "../../types/types.tsx";


interface DropDownItemProps {
    elem:ITabValue
}
const Card:FC<DropDownItemProps> = ({elem}) => {
    const {name,id,isSelected} = elem
    const dispatch = useAppDispatch()
    function handleChangeItemStatusSelected(){
        dispatch(changeElemSelected(id))
    }
    return (
        <div className="card" onClick={handleChangeItemStatusSelected}>
            <div className="card__container">
                <span className="card__title">{name}</span>
                {isSelected ? <img src={IconCrossAccept}/> : <CircleAccept/>}
            </div>
        </div>
    );
};

export default Card;

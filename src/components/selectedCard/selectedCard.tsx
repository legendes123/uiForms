import {FC} from 'react';
import IconCross from "../../icon/Vector (1).svg";
import {useAppDispatch} from "../../hooks/hooks";
import {changeElemSelected} from "../../store/dropDownSlice";
import './selectedCard.css';
import {ITabValue} from "../../types/types.tsx";

interface SelectedCard {
    elem:ITabValue
}
const SelectedCard:FC<SelectedCard> = ({elem}) => {
    const {name,id} = elem
    const dispatch = useAppDispatch()
    function handleChangeSelectedItem(){
        dispatch(changeElemSelected(id))
    }

    return (
        <div className="selected__card">
            <span className="card__span">{name.toUpperCase()}</span>
            <img src={IconCross} className="svg" onClick={handleChangeSelectedItem}/>
        </div>
    );
};

export default SelectedCard;

import Button from "../../components/button/button";
import DropDown from "../../components/dropDown/dropDown";
import {useAppSelector} from "../../hooks/hooks";
import './content.css';
import {FC} from "react";


const Content:FC = () => {
    const isOpen = useAppSelector(state => state.dropDown.isOpen)

    return (
        <div className="content">
            <div>
                <label className="label">Локация</label>
                <Button/>
            </div>
            {
                isOpen && <DropDown/>
            }
        </div>
    );
};

export default Content;

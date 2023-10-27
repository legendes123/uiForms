import './dropDown.css';
import TabList from "../tabList/tabList";
import NavList from "../navList/navList";
import Selected from "../selected/selected";
import {FC} from "react";

const DropDown:FC = () => {
    return (
        <div className="container">
            <TabList/>
            <Selected/>
            <NavList/>
        </div>
    );
};

export default DropDown;

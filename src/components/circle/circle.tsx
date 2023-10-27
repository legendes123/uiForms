import  {FC} from 'react';
import './circle.css';

interface CircleProps{
    counterSelectedFilters:number
}
const Circle:FC<CircleProps> = ({counterSelectedFilters}) => {

    return (
        <div className="circle__button">
            <span className="circle__counter">{counterSelectedFilters}</span>
        </div>
    );
};

export default Circle;

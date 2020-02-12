import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function StepBar(props){
    const data = useSelector(state => state.rootReducer);
	const history = useSelector(state => state.historyReducer);

    return(
        <div className="stepBar">
            <div className="StepInfo">
                <div><img src={history.img === undefined ? data[0].img : history.img} alt="Car"></img></div>
                <div>
                    <b>TOTAL</b>
                    <span>{history.total === undefined ? data[0].sale_price.toFixed(3)+' '+data[0].currency_unit : history.total.toFixed(3)+' '+history.unit }</span>
                </div>
            </div>
            <button className={props.active}>
             <Link to={`${process.env.PUBLIC_URL}`+props.link}
             >{props.title}</Link>
            </button>
        </div>
    )
}
export default StepBar
import React, {useState,useEffect, Fragment} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../actions'
import StepBar from '../StepBar'

function Colors() {
	const [color, setColorr] = useState(0);
	const data = useSelector(state => state.rootReducer);
	const history = useSelector(state => state.historyReducer);
	const dispatch = useDispatch();
	useEffect(() =>{
		setColorr(0);
		dispatch(allActions.userActions.setColor(history.color))
	},[]);
  	const selected = 
	data[history.model].color.map((item,index) =>{
    	return (
        	<li key={item.id}
          	className={(history.color === undefined) ? (index === color ? 'selectedColor':''):(index===history.color) ? 'selectedColor':''}
          	style={{background:item.code}}
          	onClick={() =>{dispatch(allActions.userActions.setColor(index));dispatch(allActions.userActions.setImg(item.img))}}>{}</li> 
      	)
    })
  	return(
		<Fragment>
    	<div className="box color">
        	<div className="info"><span>Hayalindeki araca dair rengini seç, tarzını hemen yansıt</span></div>
        	<div className="carInfo">
          		<span>{data[history.model].short_model}</span>
          		<div className="carImage">
					<img src={history.img === undefined ? data[history.model].img: history.img} alt="logo" />
				</div>
        	</div>
        	<div className="colorSelector">
          		{selected}
        	</div>
      	</div>
		<StepBar title="ACCESSORIES" link="/accessories"/>
		</Fragment>
 	)
}
export default Colors
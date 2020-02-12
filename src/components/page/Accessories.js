import React, { useState, useEffect, Fragment } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../actions'
import StepBar from '../StepBar'

function Accessories() {
	const [accessories, setAccessories] = useState([]);
  	const data = useSelector(state => state.rootReducer);
  	const history = useSelector(state => state.historyReducer);
  	const dispatch = useDispatch();
  	const control = (a) => {
	history['acces'].map(data=>{
		if((a-1) === data.id){
			return 'checked'
		}
		return ''
	   })
}
  	useEffect(() =>{
	 	setAccessories(
      	data[history.model].accessories.map(d=> {
        return{
          	checked:false,
          	id:d.id,
          	title:d.title,
          	price:d.price,
          	currency_unit:d.currency_unit,
        }
      })
    )
  	},[]);
  	function checked_select(item, event) {
    	let checked = event.target.checked;
    	if(checked){
      		dispatch(allActions.userActions.setTotal((history.total !== undefined ? history.total:data[history.model].sale_price)+item.price,data[history.model].currency_unit)); 
    	}else{
      		dispatch(allActions.userActions.setTotal((history.total !== undefined ? history.total:data[history.model].sale_price)-item.price,data[history.model].currency_unit)); 
    	}
    	setAccessories(
      		accessories.map(data=>{
       			if(item.id === data.id){
         			data.checked = checked; 
       			}
       		return data
      	})
    )
    dispatch(allActions.userActions.setAccessories(accessories)); 
};
try{
	if(history['acces'] !== undefined){
		const accessoriesList = data === "" ? 'aa' : (
			history['acces'].map((item,index) =>{
			return (
				<li key={item.id} className={(item.checked.toString() === 'true')?'active':''}>
					<h2>{item.title}</h2>
					<span>{item.price.toFixed(3)+' '+item.currency_unit}</span>
					<div className="check">
					  	<input 
						defaultChecked={item.checked} 
						type="checkbox" id={'check'+item.id}
              			onChange={(e) => checked_select(item, e)}/>
					  	<label htmlFor={'check'+item.id}></label>
					</div>
				</li> 
			)
			})
		  )
		return(
        <Fragment>
			<div className="box">
				<div className="info"><span>Hayalindeki araca dair rengini seç, tarzını hemen yansıt</span></div>
				<div className="accessoriesList">
					{accessoriesList}
				</div>
				<div className="opacty"></div>
		  	</div>
      	<StepBar title="SUMMARY" link="/summary"/>
    	</Fragment>
		)
	}else{
    const accessoriesList =(
    	accessories.map((item,index) =>{
        return (
        <li key={item.id} className={item.checked ? 'active':''}>
        	<h2>{item.title}</h2>
            <span>{item.price.toFixed(3)+' '+item.currency_unit}</span>
            <div className="check">
				<input 
				defaultChecked={history['acces'] !== undefined ? control(item.id):''} 
				type="checkbox" id={'check'+item.id}
				onChange={(e) => checked_select(item, e)}
				/>
				<label htmlFor={'check'+item.id}></label>
            </div>
        </li> 
        )
      })
	)
    return(
    <Fragment>
    	<div className="box">
      	<div className="info"><span>Hayalindeki araca dair rengini seç, tarzını hemen yansıt</span></div>
      	<div className="accessoriesList">
       		{accessoriesList}
      	</div>
      	<div className="opacty"></div>
    </div>
    <StepBar title="SUMMARY" link="/summary"/>
    </Fragment>
	)
}
}catch(error) {
    return(
	    <div className="box">
    	<div className="info"><span>Hayalindeki araca dair rengini seç, tarzını hemen yansıt</span></div>
      	<div className="accessoriesList">
        	Yüklenemedi...
      </div>
    </div>
    )
  }
}
export default Accessories;

    

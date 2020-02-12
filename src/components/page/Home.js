import React, {Fragment } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../actions'
import StepBar from '../StepBar'
function Home() {
	const data = useSelector(state => state.rootReducer);
  	const history = useSelector(state => state.historyReducer).model;
	const dispatch = useDispatch();
  	try {
    const list=(
    	data.map((item,index) =>{
			return (
				<div className={(history === index ? 'item active':'item')} key={item.id}>
					<div className="carInfo">
						<span>{item.short_model}</span>	
						<img src={item.img} />
						<div className="carPrice"><b>{item.sale_price.toFixed(3)+' '+item.currency_unit}</b>'den başlayan <br></br> fiyatlarla.</div>
						<button onClick={() =>{
							dispatch(allActions.userActions.setModel(index));
							dispatch(allActions.userActions.setAccessories());
							dispatch(allActions.userActions.setImg(item.img));
							dispatch(allActions.userActions.setTotal(item.sale_price,item.currency_unit));
						}}>
							SELECT
						</button>
					</div>
				</div>
			)
    	})
    )
   	return(
		<Fragment>
    	<div className="box carsList">
			{list}
		</div>
			<StepBar title="COLOR" link="/colors"/>
		</Fragment>
   	)
  	}catch (error) {
    return(
    	<div className="alert">{error}</div>
    )
  }
}
export default Home
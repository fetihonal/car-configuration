import React, {Fragment } from 'react';
import { useSelector } from 'react-redux';
import StepBar from '../StepBar'
function Summary(){
  	const data = useSelector(state => state.rootReducer);
  	const history = useSelector(state => state.historyReducer);
  	const selectedModel = history.model;
  	try {
    return(
      	<Fragment>
      	<div className="box carBuy">
        	<div className="active item" >
          		<div className="carInfo">
            		<span>{data[selectedModel].short_model}</span>	
                	<img src={history.img === undefined ? data[history.model].img:history.img} alt={data[selectedModel].model} />
            	</div>
          	</div>
          	<div className="item">
            	<ul>
                	<li>
                    	<h3>MODEL</h3>
                    	<p>{data[history.model].model}</p>
                	</li>
                	<li>
                    	<h3>COLOR</h3>
                    	<p>{data[history.model]['color'][history.color].title}</p>
                	</li>
                	<li>
                    	<h3>ACCESSORIES</h3>
                    	<p>{ history['acces'] !== undefined ?
                        	history['acces'].map(a =>{
                        	if(a.checked)
                          		return  a.title+' + '
                        	}):
                        	''
                    	}</p>
                </li>
            </ul>
        </div>
      </div>
      <StepBar title="BUY NOW" link="/" active="stepBarActive"/>
      </Fragment>
    )
	}catch (error) {
		return <div className="alert">Bir Hata Oluştu !</div>
	}
}
export default Summary

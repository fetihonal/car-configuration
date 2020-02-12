import React, { Fragment,useState,useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './page/Home'
import Colors from './page/Colors'
import Accessories from './page/Accessories'
import Summary from './page/Summary'
import NoMatch from './page/NoMatch'
import { useDispatch } from 'react-redux';
import allActions from './actions'
function Main(){
	const [model, setModel] = useState(null);
	const dispatch = useDispatch();
	
	useEffect(() => {
	   setModel(0);
	   dispatch(allActions.userActions.setModel(0))
	   dispatch(allActions.userActions.setColor(0))
    }, []);
	return (
    <Fragment>
    	<Switch>
		{(model !== null) & model !== undefined ?
        	<Fragment>
				<Route exact path='/' component={Home} />
				<Route path='/colors' component={Colors}/>
				<Route path='/accessories' component={Accessories}/>
				<Route path='/summary' component={Summary}/>
				<Route component={NoMatch}/>
            </Fragment>
            :
            <Redirect to={`${process.env.PUBLIC_URL}/`} />
        }
     	</Switch>
    </Fragment>
    )
}
export default Main


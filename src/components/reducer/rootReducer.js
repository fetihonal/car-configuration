
import data from '../data/data.json'
function rootReducer(state = data.cars, action) {
    switch (action.type) { 
    	case "UpdateColor":
        return action.payload;
        default:
        return state;
    }
}
export default rootReducer
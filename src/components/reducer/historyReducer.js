const historyReducer = (state = {}, action) => {
    switch(action.type){
        case "SELECT_MODEL":
            return {
                ...state,
                model: action.payload
            }
        case "SELECT_COLOR":
            return {
                ...state,
                color: action.payload
            }
        case "SELECT_COLOR_IMG":
            return {
                ...state,
                img: action.payload
			}   
		case "SET_ACCESSORIES":
        	return {
            	...state,
                acces: action.payload
			}   
        case "SET_TOTAL":
            return {
                ...state,
                total: action.payload,
                unit:action.unit
            }
        case "READ_MENU":
            return {
                ...state,
                menu: action.payload,
                title:action.title
            }
        default:
            return state
    }
}

export default historyReducer;
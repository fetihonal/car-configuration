const setModel = (model) => {
    return {
        type: "SELECT_MODEL",
        payload: model
    }
}
const setColor = (color) => {
    return {
        type: "SELECT_COLOR",
        payload: color
    }
}
const setImg = ( image ) => {
    return {
        type: "SELECT_COLOR_IMG",
        payload: image
    }
}
const setAccessories = ( accessories ) => {
    return {
        type: "SET_ACCESSORIES",
        payload: accessories
    }
}
const setTotal = ( total,unit ) => {
    return {
        type: "SET_TOTAL",
        payload: total,
        unit:unit
    }
}
const readMenu = ( menu,a ) => {
    return {
        type: "READ_MENU",
        payload: menu,
        title: a
    }
}

export default {
    setModel,
    setColor,
    setImg,
    setAccessories,
    setTotal,
    readMenu
}
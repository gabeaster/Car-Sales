export const removeFeature = item => {
    // console.log(item)
    return {
        type: "REMOVE_FEATURE",
        payload: item
    };
};

export const buyItem = item => {
    // console.log(item)
    return {
        type: "BUY_ITEM", 
        payload: item
    };
};


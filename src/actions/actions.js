export const removeFeature = item => {
    console.log(item)
    return {
        type: "REMOVE_FEATURE",
        payload: item
    };
};


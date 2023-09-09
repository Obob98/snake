const deepClone = (arg) => {
    if (typeof arg !== 'object')
        return arg;
    let temp;
    temp = Array.isArray(arg) ? [...arg] : { ...arg };
    for (const key in temp) {
        temp[key] = deepClone(temp[key]);
    }
    return temp;
};
export default deepClone;

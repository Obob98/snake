const deepClone = (arg: Object): any => {
    if (typeof arg !== 'object') return arg

    let temp
    temp = Array.isArray(arg) ? [...arg] : { ...arg }

    for (const key in temp) {
        temp[key as keyof typeof temp] = deepClone(temp[key as keyof typeof temp])
    }

    return temp
}

export default deepClone
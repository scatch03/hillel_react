const objectToEntries = (obj) => {
    if (!obj || !Object.keys(obj).length) {
        return null;
    }
    return Object.entries(obj)
}


export {objectToEntries}
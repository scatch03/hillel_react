const isPlainObject = arg => {
    return typeof arg === 'object' && arg !== null && !Array.isArray(arg);
}

const arrayByTwo = (arr) => {
    return Array.from(
        { length: Math.ceil(arr.length / 2) }, 
        (_, i) => arr.slice(2 * i, 2 * (i + 1))
    )
}

const pairsToObj = (pairs) => {
    if (!Array.isArray(pairs)) {
      return {};
    }
    return pairs.reduce((obj, pair) => {
      if (Array.isArray(pair) && pair.length === 2) {
        const [key, value] = pair;
        obj[key] = value;
      }
      return obj;
    }, {});
  }

const deepEntries = (arg, prefix=``) => {
    if (!isPlainObject(arg)){
        return arg;
    }

    const flattenedObjProps = Object.entries(arg).map(([key, value]) => {
        const longKey = prefix ? `${prefix}.${key}` : `${key}`
        if (!isPlainObject(value)){
            return [longKey , value]
        }
        return deepEntries(value, longKey)
    }).flat(Infinity);
    return arrayByTwo(flattenedObjProps)
}

const equalById = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].id !== arr2[i].id) {
      return false;
    }
  }

  return true;
}

export {deepEntries, pairsToObj, equalById}
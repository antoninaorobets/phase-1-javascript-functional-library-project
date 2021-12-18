function myEach(collection, callback) {
    let arr = checkIfArray(collection);

    for (let element of arr) {
        callback(element)
    }
    return collection;
}

function myMap(collection, callback) {
    let arr = checkIfArray(collection);
    let newCollection = []
    for (let element of arr) {
        newCollection.push(callback(element))
    }
    return newCollection;
}



function myReduce(collection, callback, acc){
    let arr = checkIfArray(collection);
    let returnValue = acc
    let i = 0
    if (returnValue === undefined) {
        returnValue = arr[i++]
    }
    for (; i < arr.length; i++) {
        returnValue = callback(returnValue, arr[i])
    }
    return returnValue
}

function checkIfArray(collection) {
    if (!Array.isArray(collection)) {
        return Object.values(collection);
    } else {
       return [...collection];
    }
}

function myFind(collection, predicate) {
    let arr = checkIfArray(collection);
    for (let element of arr) {
        if (predicate(element)) {
            return element
        }
    }
}

function myFilter(collection, predicate){
    let arr = checkIfArray(collection);
    let filtetedArr = []
    for (let element of arr) {
        if (predicate(element)) {
            filtetedArr.push(element)
        }
    }
    return filtetedArr
}

function mySize(collection) {
    let arr = checkIfArray(collection);
    let size = 0
    for (let element of arr) {
        size++
    }
    return size
}

function myFirst(array, n) {
    if (n) { return array.slice(0,n)}
    else { return array[0] } 
}

function myLast(array, n) {
    if (n) { return array.slice(-n)}
    else { return array[array.length - 1]} 
}

function mySortBy(array, callback) {
    let mapped = array.map((v, i) => {return {i, value: callback(v)}} )
    mapped.sort((a,b) => {
        if (a.value > b.value) {
          return 1;
        }
        if (a.value < b.value) {
          return -1;
        }
        return 0;
      })
    return  mapped.map((v)=> array[v.i] )
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}

function myFlatten(array, shallow, newArr = []) {
    for (let arg of array) {
        if (Array.isArray(arg)) {
            if (shallow) {
                newArr.push(...arg)
            } else {
                myFlatten(arg, false, newArr)
            }
        }
        else { newArr.push(arg) }
    }
    return newArr
}

myFlatten([1, [2], [3, [[4]]]],true);
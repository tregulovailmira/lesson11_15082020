function power (basis, pow) {
    if (pow === 0) {
        return 1;
    }
    const powAbs = Math.abs(pow);
    const result = basis * power(basis, powAbs - 1);
    if (pow > 0) {
        return result;
    }
    return 1 / result;
}

console.log(power(1, 1));

function sumOfELements (elem) {
    if (elem === 1) {
        return 1;
    }
    return elem + sumOfELements(elem - 1)
}

console.log(sumOfELements(6));

function logPar (number) {
    if (number === 1) {
        return '()';
    }
    return `(${logPar(number - 1)})`;
}

console.log(logPar(2));

function logRange (min, max) {
    if (min === undefined ||max === undefined) {
        console.error('Enter a valid range');
        return;
    }
    console.log(min);
    if (min < max) {
        logRange(min + 1, max);
    };
}

logRange(1, 12);

function customFlat (array, depth = 1) {
    if(depth < 0) {
        console.error('Depth must be a positive value');
        return;
    }
    let newArr = [];

    if(depth === 0) {
        newArr = newArr.concat(array);
        return newArr;
    }

    for(let i = 0; i < array.length; i++) {
        if( Array.isArray(array[i]) ) {
            //always arrays;
            const buffer = customFlat(array[i], depth - 1);
            newArr = newArr.concat(buffer);
        } else {
            //always rest
            newArr.push(array[i]);
        }
    }
    return newArr;
}

const symbolExample = Symbol('test');
const symbolExample2 = Symbol('test2');
const object = {
    test: 'test',
    symbolExample: symbolExample,
    [symbolExample2]: 555,
}
object[symbolExample] = 456;
console.log(object);

function log(...rest) { // rest operator
    const array = ['test', 'string', true, {}];
    console.log(rest);
    console.log(array);
    console.log(...array, ...rest); //spread operator
}

log(1, 'test', 4, 'st', 5);


const arr1 = [1, 2, 3, 4];
const arr2 = [4, 5, 6, 7];
function merge(array1, array2) {
    return [...array1,...array2];
};
console.log(merge(arr1, arr2));

const object1 = {
    test: 'test',
    log: 'log',
};
const arr3 = [4, 5, 6, 7];
function mergeArrayObject(array, object) {
    return [...array, object];
};
console.log(mergeArrayObject(arr3, object1));

const set = new Set(['pizza', 'pizza', 'pizza']);

set.add(['pizza', 'pizza', 'pizza']);
set.add('coffe');
set.add('coffe');
set.add('coffe');
set.add('tea');

console.log(set);

const arrayCopy = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 8, 8, 9]
function getUnique(arrayWithCopies) {
    const set = new Set(arrayWithCopies);
    console.log(set);
    return[...set];
}

console.log(getUnique(arrayCopy));
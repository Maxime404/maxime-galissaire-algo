module.exports = function anagram(str1, str2) {

    let str1Obj = {};
    let str2Obj = {};    
    let sameObjCounter = 0;

    if (str1.length !== str2.length) {
        return false;
    }

    str1Obj = makeItObj(str1);
    str2Obj = makeItObj(str2);

    for (const str1ObjKey of Object.keys(str1Obj)) {
        if (str1Obj[str1ObjKey] === str2Obj[str1ObjKey]) {
            sameObjCounter++;
        } 
    }
    
    return sameObjCounter === Object.keys(str1Obj).length ? true : false;
}

function makeItObj(string) {
    let obj = {};

    for (const character of string.toLowerCase()) {
        if (!obj[character]) {
            obj[character] = 1;
        } else {
            obj[character]++
        }
    }
    return obj;
}
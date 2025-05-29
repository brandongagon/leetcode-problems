
// Determine if 2 strings are isomorphic
const isIsomorphic = (str1, str2) => {
    console.log('Checking Strings');
    // if strings are not same length, they can't be isomorphic
    if (str1.length !== str2.length) return false;

    // mappings for our strings. 
    // we need 2 arrays since we need to map both ways (e.g. a->b, b->a)
    let map1 = [];
    let map2 = [];

    for (let i=0;i<str1.length;i++) {
        let char1 = str1.charCodeAt(i);
        let char2 = str2.charCodeAt(i);

        if (map1[char1] === undefined && map2[char2] === undefined) {
            map1[char1] = char2;
            map2[char2] = char1;
        } else if (map1[char1] !== char2 || map2[char2] !== char1) {
            return false;
        }
    }
    
    return true;
};

console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('paper', 'title'));


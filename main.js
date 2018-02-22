'use strict';

// function permutations(arr) {  // USING RECURSION. CAN TAKE AND ANY ARRAY SIZE AS INPUT. IT IS SLOWER

//     var array = []
//     var count = 0;

//     function perm(a, n) {

//         if (n === 0) {
//             // console.log('n is 0: ' + arr); 
//             array.push(a.slice(0));
//             return true;
//         }
//         if (n != 0) {

//             for (let i = 0; i < n; i++) {

//                 count++;
//                 perm(a, n - 1);
//                 // console.log(array)
//                 const j = n % 2 === 0 ? 0 : i;
//                 [a[j], a[n]] = [a[n], a[j]];
//                 //   console.log('-switch-')
//                 //   console.log('n: ' + n)
//                 //   console.log('i: ' + i)               
//                 //  console.log('count: ' + count)

//             }

//             // console.log('loop end')
//             // console.log(perm(a, n - 1))
//             // console.log(array)
//             // console.log(n)
//             return perm(a, n - 1)
//         }
//     }

//     perm(arr, arr.length - 1)

//     return array;
// }
// console.time('f')
// var newArr = permutations(['span', 'eng', 'dutch', 'Hung', 'Span']);
// console.timeEnd('f')
//console.log(newArr)




console.time('f')

function possibles(arr) {

    var chance = [];

    for (let o1 of arr) {

        for (let o2 of arr) {
            if(o2 === o1) continue

            for (let o3 of arr) {
                if (o3 === o1 || o3 === o2) continue

                for (let o4 of arr) {

                    if (o4 === o1 || o4 === o2 || o4 === o3) continue

                    for (let o5 of arr) {
                                            
                        if (o5 === o1 || o5 === o2 || o5 === o3 || o5 === o4) continue
                                                       
                            chance.push([o1,o2,o3,o4,o5]);
                       
                    }
                }
            }
        }
    }
    return chance;
}

var obj = {}
obj.nations = possibles(['Norw', 'Span', 'Eng', 'Ukran', 'Japan']);
obj.animals = possibles(['Fox', 'Horse', 'Dog', 'Snails', 'Zebra']);
obj.colors = possibles(['Blue', 'Red', 'Green', 'Yellow', 'Ivory']);
obj.drinks = possibles(['Tea', 'Milk', 'Water', 'Coffee', 'Juice']);
obj.smokes = possibles(['LS', 'Kools', 'Chesterfields', 'Parliaments', 'OG']);


var ll = obj.nations.length - 1
var pos = [];
var count = 0;

for (let i = 0; i < ll; i++) { // NATIONS
    count++;

    if (obj.nations[i][0] != 'Norw') continue // --  10 -- If first nation is Norwegian

    for (let ii = 0; ii < ll; ii++) { // SMOKES
        count++;

        if (!(obj.smokes[ii].indexOf('Parliaments') === obj.nations[i].indexOf('Japan'))) continue // --  15 -- If blue index is after Norwegian

        
        for (let iii = 0; iii < ll; iii++) { // COLORS
            count++;

            if (!(obj.colors[iii].indexOf('Blue') === obj.nations[i].indexOf('Norw') + 1)) continue // --  15 -- If blue index is after Norwegian

            if (!(obj.colors[iii].indexOf('Green') === obj.colors[iii].indexOf('Ivory') + 1)) continue // --  6 -- Green house is after Ivory

            if (!(obj.colors[iii].indexOf('Red') === obj.nations[i].indexOf('Eng'))) continue // --  2 -- the Englishman lives in the red house

            if (!(obj.smokes[ii].indexOf('Kools') === obj.colors[iii].indexOf('Yellow'))) continue // --  8 -- Kools are smoked in the yellow house

            for (let iiii = 0; iiii < ll; iiii++) { // ANIMALS
                count++;


                if (!(obj.animals[iiii].indexOf('Dog') === obj.nations[i].indexOf('Span'))) continue // --  3 -- Spaniard owns the dog

                if (!(obj.smokes[ii].indexOf('OG') === obj.animals[iiii].indexOf('Snails'))) continue // --  7 -- Old Gold smoker owns snails

                if (!(obj.smokes[ii].indexOf('Chesterfields') === obj.animals[iiii].indexOf('Fox') - 1 || obj.smokes[ii].indexOf('Chesterfields') === obj.animals[iiii].indexOf('Fox') + 1)) continue // --  11 -- Chesterfield next to Fox

                if (!(obj.smokes[ii].indexOf('Kools') === obj.animals[iiii].indexOf('Horse') - 1 || obj.smokes[ii].indexOf('Kools') === obj.animals[iiii].indexOf('Horse') + 1)) continue // --  12 -- Kools next to Horse

                for (let v = 0; v < ll; v++) { // DRINKS
                    count++;

                    if (!(obj.drinks[v].indexOf('Coffee') === obj.colors[iii].indexOf('Green'))) continue // --  4 -- Coffee is drunk in the green house

                    if (!(obj.nations[i].indexOf('Ukran') === obj.drinks[v].indexOf('Tea'))) continue // --  5 -- Ukranian drinks tea

                    if (!(obj.drinks[v].indexOf('Milk') === 2)) continue // --  9 -- Milk is drunk in the middle house

                    if (!(obj.drinks[v].indexOf('Juice') === obj.smokes[ii].indexOf('LS'))) continue // --  13 -- Juice drinker smokes LS

                    pos.push([obj.nations[i], obj.smokes[ii], obj.colors[iii], obj.animals[iiii], obj.drinks[v]])

                }
            }
        }
    }
}
console.log(count)
console.timeEnd('f')
console.log(pos)
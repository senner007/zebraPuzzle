var animals = ['Fox', 'Horse', 'Dog', 'Snails', 'Zebra']

var colors = ['Blue', 'Red', 'Green', 'Yellow', 'Ivory']

var smokes = ['LS', 'Kools', 'Chesterfields', 'Parliaments', 'OG']

var drinks = ['Tea', 'Milk', 'Water', 'Coffee', 'Juice']

var nation = ['Norw', 'Span', 'Eng', 'Ukran', 'Japan'];

console.time('f')
function possibles(arr) {

var chance = [];

    for (let o1 of arr) {
        for (let o2 of arr) {
            for (let o3 of arr) {
                for (let o4 of arr) {
                    for (let o5 of arr) {
                        let newarr = [];

                        if (!newarr.includes(o1)) {
                            newarr.push(o1)
                        }
                        if (!newarr.includes(o2)) {
                            newarr.push(o2)
                        }
                        if (!newarr.includes(o3)) {
                            newarr.push(o3)
                        }
                        if (!newarr.includes(o4)) {
                            newarr.push(o4)
                        }
                        if (!newarr.includes(o5)) {
                            newarr.push(o5)
                        }

                        if (newarr.length === 5) {
                            chance.push(newarr);
                        }
                    }
                }
            }
        }
    }
    return chance;

}

var obj = {}
obj.nations = possibles(nation);
obj.animals = possibles(animals);
obj.colors = possibles(colors);
obj.drinks = possibles(drinks);
obj.smokes = possibles(smokes);


var ll = obj.nations.length -1
var pos = [];


for (let i = 0; i < ll; i++) { // NATIONS

    if (obj.nations[i][0] != 'Norw') continue    // --  10 -- If first natin is Norwegian
    
    for (let ii = 0; ii < ll; ii++) { // SMOKES

       if (!(obj.smokes[ii].indexOf('Parliaments') === obj.nations[i].indexOf('Japan'))) continue // --  15 -- If blue index is after Norwegian
        
        for (let iii = 0; iii < ll; iii++) { // COLORS

            if (!(obj.colors[iii].indexOf('Blue') === obj.nations[i].indexOf('Norw') + 1)) continue // --  15 -- If blue index is after Norwegian
      
            if (!(obj.colors[iii].indexOf('Green') === obj.colors[iii].indexOf('Ivory') + 1)) continue // --  6 -- Green house is after Ivory

            if (!(obj.colors[iii].indexOf('Red') === obj.nations[i].indexOf('Eng'))) continue // --  2 -- the Englishman lives in the red house

            if (!(obj.smokes[ii].indexOf('Kools') === obj.colors[iii].indexOf('Yellow'))) continue // --  8 -- Kools are smoked in the yellow house

            for (let iiii = 0; iiii < ll; iiii++) { // ANIMALS

                
                if (!(obj.animals[iiii].indexOf('Dog') === obj.nations[i].indexOf('Span'))) continue // --  3 -- Spaniard owns the dog

                if (!(obj.smokes[ii].indexOf('OG') === obj.animals[iiii].indexOf('Snails'))) continue // --  7 -- Old Gold smoker owns snails

                if (!(obj.smokes[ii].indexOf('Chesterfields') === obj.animals[iiii].indexOf('Fox') - 1 || obj.smokes[ii].indexOf('Chesterfields') === obj.animals[iiii].indexOf('Fox') + 1)) continue // --  11 -- Chesterfield next to Fox
    
                if (!(obj.smokes[ii].indexOf('Kools') === obj.animals[iiii].indexOf('Horse') - 1 || obj.smokes[ii].indexOf('Kools') === obj.animals[iiii].indexOf('Horse') + 1)) continue // --  12 -- Kools next to Horse
                
                for (let v = 0; v < ll; v++) { // DRINKS

                    if (!(obj.drinks[v].indexOf('Coffee') === obj.colors[iii].indexOf('Green'))) continue // --  4 -- Coffee is drunk in the green house

                    if (!(obj.nations[i].indexOf('Ukran') === obj.drinks[v].indexOf('Tea'))) continue // --  5 -- Ukranian drinks tea

                    if ( !(obj.drinks[v].indexOf('Milk') === 2) ) continue // --  9 -- Milk is drunk in the middle house

                    if (!(obj.drinks[v].indexOf('Juice') === obj.smokes[ii].indexOf('LS'))) continue // --  13 -- Juice drinker smokes LS

                    let newarr = []
                    let condition = 0;

                    newarr.push(obj.nations[i])

                    newarr.push(obj.smokes[ii])

                    newarr.push(obj.colors[iii])

                    newarr.push(obj.animals[iiii])

                    newarr.push(obj.drinks[v])

                    pos.push(newarr)

                }    
            }    
        }  
    }  
}

console.timeEnd('f')
console.log(pos)


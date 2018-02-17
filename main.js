var animals = ['fox', 'horse', 'dog', 'snails', 'Zebra']

var colors = ['Blue', 'red', 'green', 'yellow', 'ivory']

var smokes = ['LS', 'Kools', 'Chesterfields', 'Parliaments', 'Old Gold']

var drinks = ['tea', 'milk', 'water', 'coffee', 'juicc']

var nation = ['Norw', 'Span', 'Eng', 'Hung', 'Japan'];


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

console.time('f')
var obj = {}
obj.nations = possibles(nation);
obj.animals = possibles(animals);
obj.colors = possibles(colors);
obj.drinks = possibles(drinks);
obj.smokes = possibles(smokes);

console.timeEnd('f')
console.log(obj.smokes.length)

var ll = obj.nations.length -1
var pos = [];

for (let i = 0; i < ll; i++) {
    
    for (let ii = 0; ii < ll; ii++) {
        
        for (let iii = 0; iii < ll; iii++) {
            let newarr = []
            let condition = 0;


            newarr.push(obj.nations[i])


            newarr.push(obj.smokes[ii])


            newarr.push(obj.colors[iii])

            //console.log(newarr)
            if (newarr[0].indexOf('Norw') === 0) {  // --  1 -- If first natin is Norwegian
                condition++       
            }
            if (newarr[2].indexOf('Blue') === newarr[0].indexOf('Norw') +1) { // --  2 -- If second colors is blue
                condition++
            }
            if (newarr[2].indexOf('Blue') === newarr[0].indexOf('Norw') + 1) { // --  2 -- If second colors is blue
                condition++
            }        

            if (condition === 2) {
                pos.push(newarr)
            }
        
        }  
    }  
}
console.log(pos)


var deret1 = [45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10]
var deret2 = [45, 100, 99, 3, 2, 81, 22, 55, 1, 2, 3, 4, 5]

function minMax(deret){
    var min = Math.min(...deret)
    var max = Math.max(...deret)

    console.log("Nilai Minimal : ", min)
    console.log("Nilai Maksimal : ", max)
}

console.log("Deret 1 : ", deret1)
minMax(deret1)

console.log("Deret 2 : ", deret2)
minMax(deret2)

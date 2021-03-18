//Bài số 1
let A1 = [1, 2, "a"]
let A2 = [1, 3, "b", 2, 6, 8]
let res = []

for(let i =0 ; i< A2.length; i++){
    if(!A1.includes(A2[i])){
        res.push(A2[i])
    }
}
for(let i =0 ; i< A1.length; i++){
    if(!A2.includes(A1[i])){
        res.push(A1[i])
    }
}
console.log(res)

//Bài số 2
let arr = [
    {
        name : 'Arsenal',
        points: 75,
        GD : 45
    },
    {
        name : 'Chelsea',
        points: 75,
        GD : 45
    },
    {
        name : 'Manchester United',
        points: 60,
        GD : 29
    },
    {
        name : 'Liverpool',
        points: 88,
        GD : 39
    }
]


arr.sort((a, b)=>{
    if(b.points == a.points) {
        if(b.GD == a.GD){
            let x = a.name.toLowerCase()
            let y = b.name.toLowerCase()
            if(x < y) {return -1}
            if(x > y) {return 1}
        } else {
            return b.GD - a.GD
        }
    } else {
        return b.points - a.points;
    }
})

console.log(arr)
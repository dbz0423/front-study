var foods = {
    best: '小龙虾',
    good: '火锅',
    nomal: '快餐',
    bad: '方便面',
}

// 获取foods 中的 best 和 bad
// var best = foods.best
// var bad = foods.bad

// 解构赋值
// var {best , bad} = foods
// var {best:best1 , bad : bad1 ,hello} = foods

// console.log(best1)
// console.log(bad1)
// console.log(hello)

const address = {
    city: {
        name: '南京市',
        area: {
            name: '栖霞区',
            school: {
                name:'南工',
            }
        }
    }
}
// 传统写法取出属性
// console.log(address.city.name)

// 解构赋值取出属性
let {
    city:{
        name:cityName,
        area:{
            name:areaName,
            school:{
                name:schoolName
            }
        }
    }
} = address
console.log(cityName)
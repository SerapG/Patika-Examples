const arr = [1, 2, 3, 4]

const first = arr[0]
const last = arr[arr.length - 1]

console.log(first, last)

// Range, Range Error
const ranged = arr[4] //undefined
//ranged.sayi //undefined.sayi --> crash -> range error
console.log("ranged", ranged)


//Array ,Map, Set --> Container

const arr2 = [1, 1, 1, 1, 1, 1]
const arr3 = [1, 'a', { x: 5 }, false, [{}]]

console.log(arr3)

arr[3] = 5
arr[4] = 6
arr[6] = 7
console.log(arr)
delete arr[4]
console.log(arr)


arr.push(10)//sonuna eleman ekledik
console.log(arr)
arr.pop() // sondaki elemani sildik
console.log("Arr 1:", arr)

const newLenght = arr.push(11, 12, 13, 14)
const removed = arr.pop()
console.log("Removed", removed)
console.log("newLenght", newLenght)

// Mutability / immutability
//immutable functions: arraylere degisiklikleri uygulayip degisiklik
//uygulanmis halini return ederler orjinali degistirmezler

const mapped = arr.map((n, index, arr5) => {
    return n + 1
})

console.log(mapped)
//arr.slice
//arr.filter
//arr.find

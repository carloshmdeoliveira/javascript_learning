const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`) // 0 = 1 , 1 = 2 , 2 = 3 , 3 = 4 , 4 = 5
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`) // 0 = 1 , 1 = 2 , 2 = 3 , 3 = 4 , 4 = 5, 6 = 7, 7 = 8, 8 = 9, 9 = 10
}

externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`) // Par = 0,0. 0,1, 0,2... até 2,2 
    }
}
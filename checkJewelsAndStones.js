function checkJewelsAndStones() {
    let s = "aAAbbbb"       // String S representing the stones you have
    let j = "aA"       // String J representing the types of stones that are jewels
    let num = 0       // number the stones you have are also jewels
    for (i = 0; i < j.length; i++) {
        for (k = 0; k < s.length; k++) {
            if (j[i] === s[k]) {       // find the stones  you have in the stones that are jewels
                num = num + 1 
            }
        }
    }
    return num
}
checkJewelsAndStones()

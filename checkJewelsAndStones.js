
function checkJewelsAndStones() {
    let s = document.getElementById("s").value // String S representing the stones you have
    // let s = "aAAbbbb" // S representing the stones you have
    let j = document.getElementById("j").value // String J representing the types of stones that are jewels
    // let j = "aA" // J representing the types of stones that are jewels
    let result = document.getElementById("result")  // result the stones you have are also jewels
    let num = 0 // number the stones you have are also jewels
    for (i = 0; i < j.length; i++) {
        for (k = 0; k < s.length; k++) {
            if (j[i] === s[k]) { // find the stones  you have in the stones that are jewels
                num = num + 1
            }
        }
    }
    // return num
    result.value = num
}
checkJewelsAndStones()

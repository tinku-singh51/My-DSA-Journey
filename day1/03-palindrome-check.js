function isPalindrome(str){
    let strsplit = str.split("");
    let strrever = strsplit.reverse("");
    let strjoinn = strrever.join("");
    return str === strjoinn;
}

isPalindrome("level")


// second and easy way

function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

isPalindrome("level")
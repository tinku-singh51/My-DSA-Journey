function reverseString(str) {
    // write your code below
   let strArray  = str.split("");
   let strrev = strArray .reverse();
    let strjoin = strrev.join("");
    return (strjoin);
}

reverseString("Hello");
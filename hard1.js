function checkString(str) {
    let stringArr = str.split(" ");
    if(stringArr[0]=== "{" && stringArr[stringArr.length - 1] === "}") {
        return true;
    } else if (stringArr[0]=== "[" && stringArr[stringArr.length - 1]  === "]") {
        return true;
    }else if (stringArr[0]=== "(" && stringArr[stringArr.length - 1]  === ")") {
        return true;
    }else {
        return false;
    }
}
console.log(checkString("[ ddddd ]"));
//Write a JavaScript program that accept array of names and give you two random names
function randomNames(arr) {
    arr = ["ahmed", "mona", "sara", "kareem", "hamada", "amr", "salem"];
    Math.random().floor
}
//Write a JavaScript program that accept array of nummbers and give you the index of it if it's found.
function numIndexes(arr, num) {
    var arrlog=[];
    arr = Array(prompt("Enter numbers seperated by ',' :-")).toString().split(",");
    num = prompt("Enter a number to find its index :-");
        for (var i = 0; i < arr.length; i++) {
            if ((arr[i]) === num)
            arrlog.push(i);
        }
        if(arrlog.length!==0)
        document.write("Number founded at "+arrlog)
        else
        document.write("Number not found");
}
//Write a JavaScript program that accept string and give you the indexes of a specific chars on it.
function charIndexes(str, chr) {
    var arr = [];
    str = String(prompt("Enter a string :-"));
    chr = String(prompt("Enter a char to find its index :-"));
    for (var i = 0; i <= str.length; i++) {
        if (str[i] === chr)
            arr.push(i)
    }
    document.write(arr);
}
//Write a JavaScript program that accept number form the user and give you results based on some conditions.
function fizzBuzz(num) {
    num = Number(prompt("Enter a number:-"));
    if (num%3===0 && num%5===0 )
    document.write("FiZZBuzz");
    else if(num % 3===0)
    document.write("Fizz");
    else if (num%5===0)
    document.write("Buzz");
    else
    document.write("None");
}

document.getElementById("Message").innerHTML = "<sup>Hello</sup> <sub> World </sub>!!";

document.getElementById("Message2").innerText = "Hello World using InnerText";

// let Name = prompt("What's Your Name ??");
// document.getElementById("name").innerText = `Welcome ${Name}`;

console.log("The type of Input you have provide is" ,typeof Name); // Returns the data type of the variable

function convert() {
    let input = document.getElementById("inputvalue").value;
    console.log("Input value is equal to:", input);
    let inch = input / 2.54;
    console.log("Converted value is equal to:", inch);
    document.getElementById("convertedvalue").innerText = ` ${inch.toFixed(3)} inches`;
}


//printing the Random Char from The Given Name

function GenerateRandomChar(){
    let input = document.getElementById("inputword").value;
    console.log("The given word is : ", input);
    console.log("The length of the given word is : ", input.length);
    let randomnumber = Math.random() * input.length ;
    console.log("The random number generated between the length of the word is : ", randomnumber)
    document.getElementById("randomchar").innerText = `${input.charAt(Number(randomnumber))}` ;
}

function CheckPalindrome(){
    let input = document.getElementById("palindromeinput").value;
    console.log("The given sentence is:", input);

    // Convert to lowercase and remove non-alphanumeric characters
    input = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string
    let reverse = input.split('').reverse().join('');

    // Check if the cleaned string is equal to its reverse
    let result = (input === reverse) ? "It is a Palindrome" : "It is not a Palindrome";
    
    document.getElementById("palindromeresult").innerText = result;
}

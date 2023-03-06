function random() { 
    let guess = document.getElementById('guess').value;
    // check if input is empty
    if(guess === ""){
        alert("Please enter a number!");
        return false;
    }
    // getting the random number
    let random_number = Math.floor(Math.random()*100);
    // now showing the result
    let result = document.getElementById('result');
    result.innerHTML = 'The correct number was ' + random_number;
}

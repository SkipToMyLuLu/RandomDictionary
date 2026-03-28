// Get JSONC Data
fetch('./words.json')
    .then(response => response.json()) //What im guessing this does: probably takes the output of fetch
    // and the .then turns response into that output, and parses it into JSON
    .then(data => console.log(data)) //What im guessing this does: takes the data from before, and turns it into 
// the var data, and logs it
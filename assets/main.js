// COMPLETE THE TODOs BELOW...
// Note: The primary TODOs for this Activity will not require 
// you to edit the HTML or CSS.

// On our HTML page, we have a #search-button, a #textbox input,
// box a #sentence, and a #search-results DIV.
//const textboxinput = document.querySelector('#textboxinput')//
//const sentence = document.querySelector('sentence')//
//const searchbutton = document.querySelector('search-button')//
//const searchresults = document.querySelector('search-results')//





// TODO 1: Use querySelector to assign EACH of the above 
// elements to a variable, just like this:
let searchButton = document.querySelector('#search-button')
let textBox = document.querySelector('#textbox')
let sentence = document.querySelector('#sentence')
let searchResults = document.querySelector('#search-results')

searchButton.addEventListener('click', function () {
  let userInput = textBox.value.toLowerCase().trim()
  let wordSearch = sentence.innerText.split(' ')
  let found = 0

  if (sentence.innerText.toLowerCase().includes(userInput)) {

    for (let x = 0; x < wordSearch.length; x++) {
      if (wordSearch[x].includes(userInput)) {
        found += 1
      }
      for (let x = 0; x < wordSearch.length; x++) {
        if (wordSearch[x].toLowerCase() === textBox.value.toLowerCase()) {
        wordSearch[x] = '<span class="highlight">' + wordSearch[x] + "</span>"; sentence.innerHTML = wordSearch.join(' ');

        }
      }

      searchResults.innerText = found + "Found!"

    }
  }else {
    searchResults.innerText = "Too Bad So Sad"
  }

  
})




  // TODO 2: Write an IF statement which determines whether
  // the user-supplied string from #textbox is included in
  // the #sentence string.

  // Hint 1: To get the user-supplied string from the input 
  // box (#textbox), use the property .value on the variable
  // you assigned the textbox element to.

  // Hint 2: To get the string contained within #sentence, use
  // the property .innerText on the variable you assigned the
  // #sentence element to.

  // Hint 3: You can check whether string1 contains string2
  // by using string1.includes(string2) – which will return
  // true or false. 

  // TODO 3: If the user-supplied string is included in the
  // #sentence string, update the innerText of #search-results
  // with a success message (such as, "A match was found!"),
  // otherwise update it with a failure message (such as, 
  // "No results. Too bad!")



// STRETCH GOALS (easiest to hardest):
//
//  • Customize the CSS to your liking.
//  • Use .trim() to remove unnecessary whitespace from the
//    user-supplied string.
//  • Use .toLowerCase() on both the sentence and the user-
//    supplied string, so that your word search is 
//    NOT case-sensitive.
//  • Count the number of times the word appears.
//  • Display the word count for the user.
//  • Find a way to highlight the matching word(s). 
//    Hint: .split() and Iteration.

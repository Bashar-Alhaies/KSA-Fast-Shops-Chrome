
let SelectedTextString, selectedText; // add another one for final selected text


// function to get Selected text 
let selectedTextFunction = () =>{
  let message ="";
  selectedText = window.getSelection().toString().trim();
  if(selectedText.length > 0){
    message = {
      text: selectedText
    }
    console.log(message)
    chrome.runtime.sendMessage(message)
  }
}

// Add Event lister to window to get selected text 
window.addEventListener('mouseup',selectedTextFunction)




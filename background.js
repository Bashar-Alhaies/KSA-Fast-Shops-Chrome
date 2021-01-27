var word = "";

chrome.runtime.onMessage.addListener(receiver)
function receiver(request, sender, sendResponse){
  word = request.text;
} 

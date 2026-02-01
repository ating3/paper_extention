document.addEventListener("mouseup",saveHighlightedText)

function saveHighlightedText(event){
    const selectedText = window.getSelection().toString().trim();
    if(selectedText.length > 0){
        console.log("Highlighted:", selectedText);
    }
}
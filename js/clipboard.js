function copyToClipBoard(){
  var editorText = document.getElementById('mytext').value;

  if(editorText.length!=0){
    window.clipboardData.setData("Text", editorText);
  }
}


document.getElementById('copy').addEventListener('click',copyToClipBoard)

function clickHandler(e) {
  var rowId, srcElement, rowElement;
  if (window.event) {
    e = window.event;
  }
  srcElement = e.srcElement ? e.srcElement : e.row;
  if (srcElement.className == "Outline") {
     rowId = srcElement.id + "r";
     rowElement = document.all(rowId);
     if (rowElement.style.display == "none") {
        rowElement.style.display = "";
        srcElement.src = "i/minus.gif";
     } else {
        rowElement.style.display = "none";
        srcElement.src = "i/plus.gif";
     }
  }
}

document.onclick = clickHandler;


let _video;

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  _video = document.getElementById('video');
  
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  elmnt.onmousedown = dragMouseDown;
  

  function dragMouseDown(e) {
    _video = document.getElementById('video');
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.classList.add('dragging');
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    _video = _video || document.getElementById('video');
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    _video.style.clipPath = `polygon(${elmnt.style.left} ${elmnt.style.top}, ${elmnt.style.left} ${(elmnt.offsetTop - pos2) + elmnt.scrollHeight + 'px'}, ${(elmnt.offsetLeft - pos1) + elmnt.scrollWidth + 'px'} ${(elmnt.offsetTop - pos2) + elmnt.scrollHeight + 'px'}, ${(elmnt.offsetLeft - pos1) + elmnt.scrollWidth + 'px'} ${elmnt.style.top})`;
  }
  
  function closeDragElement() {
    elmnt.classList.remove('dragging');
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
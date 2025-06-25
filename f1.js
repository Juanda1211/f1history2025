function openCity(evt, Name) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablinks");
  var clickedTab = document.getElementById(Name);
  // If the clicked tab is already open, close it
  if (clickedTab && clickedTab.style.display === "block") {
    clickedTab.style.display = "none";
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    return;
  }
  // Otherwise, show the clicked tab and hide others
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  clickedTab.style.display = "block";
  evt.currentTarget.className += " active";
}

var save = document.title;

window.onblur = function() {
  document.title="Come back :c";
}

window.onfocus = function() {
  document.title=save;
}

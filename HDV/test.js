(function(){
	var $links = document.querySelectorAll(".aco a");
  var $targets = document.querySelectorAll(".aco div");



  for	(var i=0; i<$links.length; i++){
    $links[i].addEventListener("click", showContent);
  }

  function deActiveLinks(){
    for	(var i=0; i<$links.length; i++){
      $links[i].classList.remove("active");
    }
  }

  function hideTargets(){
    for	(var i=0; i<$targets.length; i++){
      $targets[i].style.display = "none";
    }
  }

  function showContent(){
    var $this = this;
    var anchor = this.hash;
    var $target = document.querySelector(anchor);
    deActiveLinks();
    $this.classList.add("active");
    hideTargets();
    $target.style.display = "block";
  }
  $links[0].click();


})()
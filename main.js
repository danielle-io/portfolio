(function (window) {

  function addHandlers() {
    $('.nav-link').on('click', function (event) {
      removeActiveFromNavItems('#' + this.id);
      collapseAndExpandContainers('#' + this.id);
    });

    $('.card-flip').on('click', function (event) {
      var element = document.getElementById(this.id);
      element.classList.toggle("is-flipped");

      $('#' + this.id + 'Front').toggle('hide-element');
      $('#'  + this.id + 'Back').toggle('hide-element');
    });
  }
  function removeActiveFromNavItems(clickedItem) {
    const navItems = getClassNames();
    for (i in navItems) {
      if (navItems[i] !== clickedItem) {
        $(navItems[i]).removeClass("nav-active");
        $(navItems[i]).addClass("nav-inactive");
      }
      else {
        $(clickedItem).removeClass("nav-inactive");
        $(clickedItem).addClass("nav-active");
      }
    }
  }

  function collapseAndExpandContainers(itemName) {
    const navItems = getClassNames();
    var className = itemName + "Collapse";
    $(className).collapse('show', true);
    for (i in navItems) {
      var nextClassName = navItems[i] + "Collapse";
      if (nextClassName !== className) {
        $(nextClassName).collapse('hide', true);
      }
    }
  }

  function getClassNames() {
    return ['#home', '#about', '#projects', '#resume', '#contact'];
  }

  addHandlers();
  $('#homeCollapse').collapse('show', true);

  // var card = document.querySelector('.card');
  // card.addEventListener('click', function () {
  //   card.classList.toggle('is-flipped');
  // });

})(window)

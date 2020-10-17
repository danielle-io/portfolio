// Load code from data file
scheduleyCode = projectData.Scheduley.code;
searchEngineCode = projectData.ICSSearchEngine.code;

document.getElementById('code-scheduley').innerHTML = scheduleyCode;
document.getElementById('code-search-engine').innerHTML = searchEngineCode;
var $window = $(window);

function checkWindowWidth() {

  var windowWidth = $window.width();

  // Toggle label change
  if (windowWidth <= 1109) {
    document.getElementById('toggleLabel').innerHTML = "";
  }
  else {
    document.getElementById('toggleLabel').innerHTML = "Toggle Dark Mode";
  }
  // Mobile
  if (windowWidth <= 500) {
    $('.modal-dialog').removeClass('modal-collapsed').addClass('modal-expanded');
    $('.clickHere').html("Click For More Info");
    $('.memorable').html("Memorable Accomplishments");
    $('.downloadPdf').addClass('none');
    $('.downloadLink').removeClass('none');
    $('.virtualHelpImages').addClass('none');
    $("iframe").height(1200);
  }
  else {
    $('.modal-dialog').removeClass('modal-expanded').addClass('modal-collapsed');
    $('.clickHere').html("Click Here For Additional Info / Images")
    $('.memorable').html("My Memorable Accomplishments On This Project");
    $('.downloadPdf').removeClass('none');
    $('.downloadLink').addClass('none');
    $('.virtualHelpImages').removeClass('none');
    $("iframe").height(900);
  }
  $('.custom-control-label').removeClass('none');

}

function lightModeSettings() {
  document.getElementById('pageBackgroundColor').className = "light-mode";
  $('.first-name').removeClass('first-name-dark').addClass('first-name-light');
  $('.last-name').removeClass('last-name-dark').addClass('last-name-light');
  $('.swe-text').removeClass('swe-text-dark').addClass('swe-text-light');
  $('.card').removeClass('background-dark').addClass('background-light');
  $('.fixed-header').removeClass('background-dark').addClass('background-light');
  $('.project-text').removeClass('text-color-dark').addClass('text-color-light');
  $('.btn-info').removeClass('btn-info-dark').addClass('btn-info-light');
  $('.modal-content').removeClass('background-dark').addClass('background-light');
  $('.card-title').removeClass('card-title-dark').addClass('card-title-light');
  $('.custom-control-label').removeClass('text-color-dark-modified').addClass('text-color-light-modified');
  $('.project-links').removeClass('links-dark').addClass('links-light');
  $('.caption-text').removeClass('text-color-dark').addClass('text-color-light');
  $('.mdl-button').removeClass('mdl-button-dark').addClass('mdl-button-light');
  $('.navbar').addClass('navbar-light').removeClass('navbar-dark');
  $('#pageBody').removeClass('page-body-bckg-dark').addClass('page-body-bckg-light');
  $('.close').removeClass('close-dark');
  $('.card-icons-dash').removeClass('card-icons-dash-dark-mode');
}

function darkModeSettings() {
  document.getElementById('pageBackgroundColor').className = "dark-mode";
  $('.first-name').removeClass('first-name-light').addClass('first-name-dark');
  $('.last-name').removeClass('last-name-light').addClass('last-name-dark');
  $('.swe-text').removeClass('swe-text-light').addClass('swe-text-dark');
  $('.card').removeClass('background-light').addClass('background-dark');
  $('.fixed-header').removeClass('background-light').addClass('background-dark');
  $('.project-text').removeClass('text-color-light').addClass('text-color-dark');
  $('.btn-info').removeClass('btn-info-light').addClass('btn-info-dark');
  $('.modal-content').removeClass('background-light').addClass('background-dark');
  $('.card-title').removeClass('card-title-light').addClass('card-title-dark');
  $('.custom-control-label').removeClass('text-color-light-modified').addClass('text-color-dark-modified');
  $('.project-links').removeClass('links-light').addClass('links-dark');
  $('.caption-text').removeClass('text-color-light').addClass('text-color-dark');
  $('.navbar').addClass('navbar-dark').removeClass('navbar-light');
  $('#pageBody').removeClass('page-body-bckg-light').addClass('page-body-bckg-dark');
  $('.mdl-button').removeClass('mdl-button-light').addClass('mdl-button-dark');
  $('.close').addClass('close-dark');
  $('.card-icons-dash').addClass('card-icons-dash-dark-mode');
}

// Modify elements to window width on load
$(document).ready(function () {
  checkWindowWidth();
  $('html, body').animate({ scrollTop: 0 }, 'fast');
  $('#pageBody').removeClass('page-body-bckg-light');
  $('#pageBody').removeClass('page-body-bckg-dark');
  if ($(darkModeSwitch).prop("checked")) {
    darkModeSettings();
  }
});

// Modify elements when window resized
$(window).resize(function () {
  checkWindowWidth();
});

(function (window) {
  function addHandlers() {

    $('.nav-link').on('click', function (event) {

      if (!$('#' + this.id).hasClass("nav-active")) {
        removeActiveFromNavItems('#' + this.id);
        collapseAndExpandContainers('#' + this.id);

        if (this.id === "projects" || this.id === "about") {
          $('#second-nav').removeClass('none');
          if ($(darkModeSwitch).prop("checked")) {
            $('#pageBody').addClass('page-body-bckg-dark');
          }
          else {
            $('#pageBody').addClass('page-body-bckg-light');
          }
          if (this.id === "about") {
            $('.project-buttons').addClass('none');
            $('.about-buttons').removeClass('none');
          }
          else {
            $('.about-buttons').addClass('none');
            $('.project-buttons').removeClass('none');
          }
        }
        else {
          $('#second-nav').addClass('none');
          $('.project-buttons').addClass('none');
          $('.about-buttons').addClass('none');
          $('#pageBody').removeClass('page-body-bckg-light');
          $('#pageBody').removeClass('page-body-bckg-dark');
        }
      }
      else {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
      }
    });

    $('.name-container').on('click', function (event) {
      if ($('#firstName').hasClass('flash-color')) {
        $('#firstName').removeClass('flash-color');
        $('#lastName').removeClass('flash-color');
      }
      else {
        $('#firstName').addClass('flash-color');
        $('#lastName').addClass('flash-color');
      }
    });


    $('.mdl-button').on('click', function (event) {
      console.log(this.id);
      var element = document.getElementById(this.id);

      var trimmedId = this.id.slice(0, -1)

      var element = $('#' + trimmedId + "Card");
      $('html, body').animate({ scrollTop: $(element).offset().top - 200 }, 'slow');
    });

    $('.card-flip').click(function (e) {
      var $card = $(this);
      if ($card.hasClass("flipped")) {
        $card.removeClass('flipped');
      } else {
        $card.addClass('flipped');
      }
      // Scroll to top of card on click
      var element = $('#' + this.id);
      $('html, body').scrollTop(element.offset().top - 200);
    });

    $('.project-modal-link').on('click', function (event) {
      getProjectModalText(event.target.id);
    });

    $('#darkModeSwitch').change(function (event) {

      if ($(this).prop("checked")) {
        darkModeSettings();
      }
      else {
        lightModeSettings();
      }
    });
  }

  function getProjectModalText(containerName) {
    var titleText = "";
    var descriptionText = "";
    var imagesText = "";
    var code = "";
    var sampleCodeText = "";
    document.getElementById('code-background-image').className = "none";
    $('#code').removeClass('inner-code-dark-one');
    $('#code').removeClass('inner-code-dark');
    $('#code').addClass('inner-code');

    switch (containerName) {
      case "PengWin":
        titleText = "PengWin";
        descriptionText = projectData.PengWin.descriptionText;
        accomplishmentsText = projectData.PengWin.accomplishmentsText;
        imagesText = projectData.PengWin.imagesText;
        break;
      case "VirtualHelp":
        titleText = "Virtual Help";
        descriptionText = projectData.VirtualHelp.descriptionText;
        accomplishmentsText = projectData.VirtualHelp.accomplishmentsText;
        imagesText = projectData.VirtualHelp.imagesText;
        if ($window.width() <= 500) {
          imagesText = "";
        }
        break;
      case "UntitledJaneGame":
        titleText = "Untitled Jane Game";
        descriptionText = projectData.UntitledJaneGame.descriptionText;
        accomplishmentsText = projectData.UntitledJaneGame.accomplishmentsText;
        imagesText = projectData.UntitledJaneGame.imagesText;
        code = projectData.UntitledJaneGame.code;
        sampleCodeText = "Scroll through some sample code from this project.";
        document.getElementById('code-background-image').className = "jane-code";
        break;
      case "ICSSearchEngine":
        titleText = "ICS Search Engine";
        descriptionText = projectData.ICSSearchEngine.descriptionText;
        accomplishmentsText = projectData.ICSSearchEngine.accomplishmentsText;
        imagesText = projectData.ICSSearchEngine.imagesText;
        break;
      case "Scheduley":
        titleText = "Scheduley";
        descriptionText = projectData.Scheduley.descriptionText;
        accomplishmentsText = projectData.Scheduley.accomplishmentsText;
        imagesText = projectData.Scheduley.imagesText;
        break;
      case "default":
        titleText = "";
        descriptionText = "";
        break;
    }
    document.getElementById('titleText').innerHTML = titleText;
    document.getElementById('descriptionText').innerHTML = descriptionText;
    document.getElementById('accomplishmentsText').innerHTML = accomplishmentsText;
    document.getElementById('imagesText').innerHTML = imagesText;
    document.getElementById('code').innerHTML = code;
    document.getElementById('sampleCodeText').innerHTML = sampleCodeText;
  }

  function removeActiveFromNavItems(clickedItem) {
    $('.nav-link').removeClass('nav-active').addClass('nav-inactive');
    $(clickedItem).removeClass("nav-inactive").addClass("nav-active");
  }

  function collapseAndExpandContainers(itemName) {
    $('.collapse').collapse('hide', true);
    if (itemName !== "#projects") {
      $(itemName + "Collapse").collapse('show', true);
      $('#projectsCollapse').addClass('none');

    }
    else {
      $('#projectsCollapse').removeClass('none');
    }
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }

  addHandlers();
  $('#homeCollapse').collapse('show', true);

})(window)

// Animation
// Wraps each letter in its own span
var textWrapper = document.querySelector('.firstName .name-header');
var textWrapperTwo = document.querySelector('.lastName .name-header');
var textWrapperThree = document.querySelector('.social-link-icons');

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapperTwo.innerHTML = textWrapperTwo.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapperThree.innerHTML = textWrapperThree.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.firstName .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    easing: "easeInOutSine",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.lastName .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 500,
    easing: "easeInOutSine",
    delay: (el, i) => 50 * i
  }).add({
    opacity: 1,
    targets: '.social-link-icons',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeInOutSine",
  });


// Load code from data file
scheduleyCode = projectData.Scheduley.code;

document.getElementById('code-front').innerHTML = scheduleyCode;
document.getElementById('code-background-image-front').className = "scheduley-code";

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

  // Modal placement change
  if (windowWidth <= 500) {
    $('.modal-dialog').removeClass('modal-collapsed').addClass('modal-expanded');
    $('.clickHere').html("Click For More Info")
  }
  else {
    $('.modal-dialog').removeClass('modal-expanded').addClass('modal-collapsed');
    $('.clickHere').html("Click Here For Additional Info / Images")
  }
}

$(document).ready(function () {
  checkWindowWidth();
});

$(window).resize(function () {
  checkWindowWidth();
});

(function (window) {
  function addHandlers() {

    $('.nav-link').on('click', function (event) {

      if (!$('#' + this.id).hasClass("nav-active")) {
        removeActiveFromNavItems('#' + this.id);
        collapseAndExpandContainers('#' + this.id);
      }
    });

    $('.card-flip').on('click', function (event) {
      var element = document.getElementById(this.id);
      element.classList.toggle("is-flipped");

      $('#' + this.id + 'Front').toggle('hide-element');
      $('#' + this.id + 'Back').toggle('hide-element');
    });

    $('.project-modal-link').on('click', function (event) {
      getProjectModalText(event.target.id);
    });

    $('#customSwitches').change(function (event) {
      // Dark Mode Settings
      if ($(this).prop("checked")) {
        document.getElementById('pageBackgroundColor').className = "dark-mode";
        $('.card').removeClass('background-light').addClass('background-dark');
        $('.project-text').removeClass('text-color-light').addClass('text-color-dark');
        $('.btn-info').removeClass('btn-info-light').addClass('btn-info-dark');
        $('.modal-content').removeClass('background-light').addClass('background-dark');
        $('.card-text').removeClass('text-color-light').addClass('text-color-dark');
        $('.card-title').removeClass('card-title-light').addClass('card-title-dark');
        $('.custom-control-label').removeClass('text-color-light-modified').addClass('text-color-dark-modified');
        $('.project-links').removeClass('links-light').addClass('links-dark');
        $('.download-link-and-icon').removeClass('links-light').addClass('links-dark');
        $('.caption-text').removeClass('text-color-light').addClass('text-color-dark');
        $('.navbar').addClass('navbar-dark').removeClass('navbar-light');
        $('.close').addClass('close-dark');
      }
      // Light Mode Settings
      else {
        document.getElementById('pageBackgroundColor').className = "light-mode";
        $('.card').removeClass('background-dark').addClass('background-light');
        $('.project-text').removeClass('text-color-dark').addClass('text-color-light');
        $('.btn-info').removeClass('btn-info-dark').addClass('btn-info-light');
        $('.modal-content').removeClass('background-dark').addClass('background-light');
        $('.card-text').removeClass('text-color-dark').addClass('text-color-light');
        $('.card-title').removeClass('card-title-dark').addClass('card-title-light');
        $('.custom-control-label').removeClass('text-color-dark-modified').addClass('text-color-light-modified');
        $('.project-links').removeClass('links-dark').addClass('links-light');
        $('.download-link-and-icon').removeClass('links-dark').addClass('links-light');
        $('.caption-text').removeClass('text-color-dark').addClass('text-color-light');
        $('.navbar').addClass('navbar-light').removeClass('navbar-dark');
        $('.close').removeClass('close-dark');
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
    $(itemName + "Collapse").collapse('show', true);
  }

  addHandlers();
  $('#homeCollapse').collapse('show', true);

})(window)

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
      $('#' + this.id + 'Back').toggle('hide-element');
    });

    $('.project-modal-link').on('click', function (event) {
      getProjectModalText(event.target.id);
    });
  }


  function getProjectModalText(containerName) {
    var titleText = "";
    var descriptionText = "";
    switch (containerName) {
      case "PengWin":
        titleText = "PengWin"
        descriptionText = "The Innovation Lab presented the idea for this application, and my team and I spent 20 week researching, designing, and " +
          "coding this project. I was one of the two lead developers on this project, responsible for bringing the research and design " +
          "team's ideas to life on this cross-platform, user-friendly application." +
          "Task completion was validated using image recognition utilizing Google Vision's API. Some features included: " +
          "Creation of routines & activities, dropdown menus with autofill, image and video embedding, deletion, " +
          "duplication, and modifying on activities, routines and rewards, the ability to add custom labels to routines,two user interfaces - one for children and one for parents."
        accomplishmentsText = "<li class='project-details-list'><span>I built out a de-coupled, normalized, relational database schema, " +
          "and managed both the user data and user image databases.</span></li>" +
          "<li class='project-details-list'><span>I implemented image recognition functionality to " +
          "validate the child's progress by leveraging Google Vision's API and using Firebase to store and analyze captured images from a device's " +
          "camera.</span></li>" +
          "<li class='project-details-list'><span>I designed the parent accounts to be heavily reusable and customizable by allowing activities and routines to be " +
          " edited, duplicated, and deleted. Furthermore, I added a tagging system to allow tags to be made, colored, applied, and removed from routines. " +
          "Activities can be created from the routine creation page, or an existing activity can be added to the routine through the use of a " +
          "searchable dropdown menu.</span></li>" +
          "<li class='project-details-list'><span>For increased convenience for the user, I created the ability to make public activities, which can be " +
          "discovered, copied, and modified to a user's liking. These items are stored in read-only mode until added to a user's " +
          "catalogue, where they then become part of their available options.</span></li>";
        imagesText = "";
        break;
      case "VirtualHelp":
        titleText = "Virtual Help"
        descriptionText = "Virtual Help is an online tutoring solution for connecting students with TAs to get assistance on the project. " +
          "I led my team in creating this system for a UCI Professor that wanted a solution for accomodating the tutoring needs of students " +
          "with the virtual limitations presented by COVID-19. The system allows students to select their course, describe their issues, attach " +
          "files, and even input formatted code in a special code-friendly text box on our UI. Tutors can see all open requests in order of submission " +
          "select the one they choose to assist with, and the student is then notified of the pending session. The student has 60 seconds to accept the " +
          "session, and upon acceptance, both the student and the tutor are directed to a private Zoom meeting to address the student's questions. " +
          "The application allows TAs and students to see their session histories, and students can re-submit previously closed or missed sessions " +
          "through their history UI. Students can also rate their session and submit an explanation for the rating upon the session closing." +
          "The application does everything in real-time, and addresses both success and failure scenarios for pairing students with TAs. " +
          "Additionally, a CMS system allows the application's control to lie in the hands of administrators, who are able to adjust user permissions " +
          "and availble courses that can be addressed on the application."
        accomplishmentsText = "<li class='project-details-list'><span>I fully designed the application's UI using Adobe XD and Figma, then " +
          "wrote the code to bring the mockups to life.</span></li>" +
          "<li class='project-details-list'><span>I researched and chose the application tech stack, including selecting Vue.js for the " +
          "front-end, and Ably for the real-time database.</span></li>" +
          "<li class='project-details-list'><span>I implemented the real-time database so that TA's and students can " +
          "interact in real-time, and the UI reflects the current state of the application without requiring any action " +
          "by the user in order to reflect a change.</span></li>" +
          "<li class='project-details-list'><span>I built the functionality on the front end for TA, student, and administrative users, " +
          "including but not limited to: user forms, container collapsing and animations, form validation, the acceptance " +
          "countdown, user history, active/inactive button styling, modals, and screen changes.</span></li>";
        "<li class='project-details-list'><span>I created a functional CMS so that admins can control the " +
          "application users, permissions and courses.</span></li>" +
          "<li class='project-details-list'><span>I designed and implemented the session rating system on the front and backend." +
          "</span></li>";
        imagesText = "<div class='card-img'>" +
          "<img src='/images/virtualHelp2.gif' alt='A demo rating a tutoring session on the Virtual Help UI'" +
          "class='d-block w-100'></div>";
        break;
      case "UntitledJaneGame":
        titleText = "Untitled Jane Game"
        descriptionText = "";
        accomplishmentsText = "<li class='project-details-list'><span>I led development on the project alongside one other developer, " +
          "learning Unity on my own and coming up with the level concepts and conditions.</span></li>" +
          "<li class='project-details-list'><span>I wrote the dialogue, designed, and coded all of the intro screens and animations using the sprites " +
          "created by the design team.</span></li>";
        imagesText = "<div class='card-img'> </div>";
        break;
      case "ICSSearchEngine":
        titleText = "ICS Search Engine"
        descriptionText = "I worked with two teammates to learn the ins and outs of search engine " +
          "logic, then applied the logic to our own search engine, using the webpages within the UCI ICS website.";
        accomplishmentsText = "<li class='project-details-list'><span>I wrote the UI for the application, modeling the design after " +
          "popular search engines with a home page and center search bar that shifts to the top of the page above results " +
          "upon submitting an initial query.</span></li>" +
          "<li class='project-details-list'><span>I expanded on the basic logic of the search engine by implementing two-gram indexing - which " +
          "allowed the order of two word searches to take priority over the two words individually.</span></li>";
        imagesText = "<div class='card-img'> </div>";
        break;
      case "UntitledJaneGame":
        titleText = "Untitled Jane Game"
        descriptionText = "";
        accomplishmentsText = "<li class='project-details-list'><span>I led development on the project alongside one other developer, " +
          "learning Unity on my own and coming up with the level concepts and conditions.</span></li>" +
          "<li class='project-details-list'><span>I wrote the dialogue, designed, and coded all of the intro screens and animations using the sprites " +
          "created by the design team.</span></li>";
        imagesText = "<div class='card-img'> </div>";
        break;
      case "Scheduley":
        titleText = "Scheduley"
        descriptionText = "";
        accomplishmentsText = "<li class='project-details-list'><span></span></li>";
        imagesText = "<div class='card-img'> </div>";
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


})(window)

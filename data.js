var projectData = {
  "PengWin":
  {
    "descriptionText":
      `The Innovation Lab presented the idea for this application, and my team and I spent 20 weeks researching, designing, and 
      coding this project. I was one of the two lead developers on this project, responsible for bringing the research and design 
      team's ideas to life on this cross-platform, user-friendly application.
      Task completion was validated using image recognition utilizing Google Vision's API. Some features included: 
      creation of routines & activities, dropdown menus with autofill, image and video embedding, deletion, 
      duplication, and modification available on activities, routines and rewards, the ability to add custom labels to routines, 
      two user interfaces - one for children and one for parents.`,
    "accomplishmentsText":
      "<li class='project-details-list'><span>I built out a de-coupled, normalized, relational database schema, " +
      "and managed both the user data and user image databases.</span></li>" +
      "<li class='project-details-list'><span>I implemented image recognition functionality to " +
      "validate the child's progress by leveraging Google Vision's API and using Firebase to store and analyze captured images from a device's " +
      "camera.</span></li>" +
      "<li class='project-details-list'><span>I designed the parent accounts to be heavily reusable and customizable by allowing activities and routines to be " +
      "edited, duplicated, and deleted. Furthermore, I added a tagging system to allow tags to be made, colored, applied, and removed from routines. " +
      "Activities can be created from the routine creation page, or an existing activity can be added to the routine through the use of a " +
      "searchable dropdown menu.</span></li> " +
      "<li class='project-details-list'><span>For increased convenience for the user, I created the ability to make public activities, which can be " +
      "discovered, copied, and modified to a user's liking. These items are stored in read-only mode until added to a user's " +
      "catalogue, where they then become part of their available options.</span></li>",
    "imagesText": ""
  },

  "VirtualHelp": {
    "titleText": "Virtual Help",
    "descriptionText":
      `Virtual Help is an online tutoring solution for connecting students with TAs to get assistance on the project.  
      I led my team in creating this system for a UCI Professor that wanted a solution for accomodating the tutoring needs of students  
      with the virtual limitations presented by COVID-19. The system allows students to select their course, describe their issues, attach  
      files, and even input formatted code in a special code-friendly text box on our UI. Tutors can see all open requests in order of submission  
      select the one they choose to assist with, and the student is then notified of the pending session. The student has 60 seconds to accept the  
      session, and upon acceptance, both the student and the tutor are directed to a private Zoom meeting to address the student's questions.  
      The application allows TAs and students to see their session histories, and students can re-submit previously closed or missed sessions  
      through their history UI. Students can also rate their session and submit an explanation for the rating upon the session closing. 
      The application does everything in real-time, and addresses both success and failure scenarios for pairing students with TAs.  
      Additionally, a CMS system allows the application's control to lie in the hands of administrators, who are able to adjust user permissions  
      and availble courses that can be addressed on the application.`,
    "accomplishmentsText":
      "<li class='project-details-list'><span>I fully designed the application's UI using Adobe XD and Figma, then " +
      "wrote the code to bring the mockups to life.</span></li> " +
      "<li class='project-details-list'><span>I researched and chose the application tech stack, including selecting Vue.js for the " +
      "front-end, and Ably for the real-time database.</span></li>" +
      "<li class='project-details-list'><span>I implemented the real-time database so that TA's and students can " +
      "interact in real-time, and the UI reflects the current state of the application without requiring any action " +
      "by the user in order to reflect a change.</span></li>" +
      "<li class='project-details-list'><span>I built the functionality on the front end for TA, student, and administrative users, " +
      "including but not limited to: user forms, container collapsing and animations, form validation, the acceptance " +
      "countdown, user history, active/inactive button styling, modals, and screen changes.</span></li>" +
      "<li class='project-details-list'><span>I created a functional CMS so that admins can control the " +
      "application users, permissions and courses.</span></li>" +
      "<li class='project-details-list'><span>I designed and implemented the session rating system on the front and backend." +
      "</span></li>",
    "imagesText":
      `<div class= 'card-img' >
      <img src='/images/virtualHelp2.gif' alt='A demo rating a tutoring session on the Virtual Help UI'
        class='d-block w-100'></div>`
  },


  "ICSSearchEngine": {
    "titleText": "ICS Search Engine",
    "descriptionText":
      `I worked with two teammates to learn the ins and outs of search engine  
      logic, then applied the logic to our own search engine, using the webpages within the UCI ICS website.`,
    "accomplishmentsText":
      "<li class= 'project-details-list'> <span>I wrote the UI for the application, modeling the design after " +
      "popular search engines with a centered search bar on the home page that shifts to the top of the results page " +
      "upon submitting an initial query.</span></li>" +
      "<li class='project-details-list'><span>I expanded on the basic logic of the search engine by implementing two-gram indexing which " +
      "allowed the order of two word searches to take priority over the two words individually ranked.</span></li> ",
    "imagesText": `<div class='card-img'> </div>`
  },

  "UntitledJaneGame": {
    "titleText": "Untitled Jane Game",
    "descriptionText":
      `Our character is Jane Deux, a software engineer with big dreams and a college degree. After having already completed the “intern grind”
    during her years in school, Jane won’t settle for anything less than what she deserves out in the real world. Jane’s goal is to climb the
    corporate ladder and prove herself as a strong and capable engineer, despite the stereotypes and challenges involved with being a minority
    in the tech industry. Jane’s new place of work is at a small startup with a male majority workforce in the Californian town of Arsenic Valley.`,
    "accomplishmentsText":
      "<li class='project-details-list'> <span>I led development on the project alongside one other developer," +
      " learning Unity on my own and coming up with the level concepts and conditions.</span></li>" +
      "<li class='project-details-list'><span>I wrote the dialogue, designed, and coded all of the intro screens and animations using the sprites " +
      "created by the design team.</span></li>",
    "imagesText": `<div class='card-img' > </div>`,
    "code":
      `              
      using UnityEngine;

      namespace WickedStudios
      {
        public class LevelOne : Level
      {
        public int columns = 11;
        public int rows = 11;
        public int paperObjectTotal = 0;

        public GameObject boss;
        public GameObject player;
        public GameObject plant;
        public GameObject coworker;
        public GameObject paper;
        public GameObject[] desks;
        public GameObject floorTiles;
        public GameObject bookcase;

        public static LevelOne instance = null;

        private void Update()
        {
          CheckLevelOver();
        }

        void Awake()
        {
          SoundManager.instance.StopCurrentAudio();
          GameManager.instance.ResetPlayerAndAntiPlayerPoints();
        }

        private void Start()
        {
          SoundManager.instance.PlayLevelAudio(1);
        }

        // Overrides the base class SetupLevel.
        public override void SetupLevel(BoardManager bm)
        {
            bm.BoardSetup(rows, columns, floorTiles);
            bm. InitialiseList(rows, columns);
            AddCharacters(bm);
            AddSetPositionObjects(bm);
            AddRandomPositionObjects(bm);
        }

        private void AddSetPositionObjects(BoardManager bm)
        {
          Vector3[]{new Vector3(0, 5, 0),
          new Vector3(4, 5, 0), new Vector3(5, 2, 0), new Vector3(9, 2, 0)};

          for (int i = 0; i < 4; i++)
          {
            bm.AddObjectToBoardAtPosition(desks[0], deskPositions[i]);
          }
            bm.AddObjectToBoardAtPosition(plant, new Vector3(-1, 7, 0));
            bm.AddObjectToBoardAtPosition(bookcase, new Vector3(-1, 1, 0));
            bm.AddObjectToBoardAtPosition(bookcase, new Vector3(9, 0, 0));
        }

        private void AddCharacters(BoardManager bm)
        {
          Vector3 coworkerPosition = bm.GetRandomPosition();
          bm.AddObjectToBoardAtPosition(coworker, coworkerPosition);

          Vector3 playerPosition = bm.GetRandomPosition();
          bm.AddObjectToBoardAtPosition(player, playerPosition);
          bm.AddObjectToBoardAtPosition(boss, new Vector3(10, 7, 0));
        }

        public void AddRandomPositionObjects(BoardManager bm)
        {
          for (int i = 0; i < bm.ChooseRandomNumInRange(8, 10); i++)
            {
                Vector3 paperPosition = bm.GetRandomPosition();
                if (bm.isValidPosition(paperPosition))
                {
                bm.AddObjectToBoardAtPosition(paper, paperPosition);
                    ++paperObjectTotal;
                }
            }
        }
        public int GetPaperObjectsLeft()
        {
          GameObject[] papers = GameObject.FindGameObjectsWithTag("Paper");
          return papers.Length;
        }

        public override int CheckLevelOver()
        {
            if (GameManager.instance.GetPlayerPoints() + 
            (GameManager.instance.GetAntiPlayerPoints() / 2) >= paperObjectTotal)
            {
                if (GameManager.instance.GetPlayerPoints() < GameManager.instance.GetAntiPlayerPoints())
                {
                    return -1;
                }
                if (GameManager.instance.GetPlayerPoints() > GameManager.instance.GetAntiPlayerPoints())
                {
                    return 1;
                }
            }
            return 0;
        }

        public override void SetLevelText()
        {
                int playerPoints = GameManager.instance.GetPlayerPoints();
            int coworkerPoints = GameManager.instance.GetAntiPlayerPoints();
        }

        public override string GetNextScene()
        {
            return "Level2Intro";
        }
    }
}
  `

  },
  "Scheduley":
  {
    "titleText": "Scheduley",
    "descriptionText":
      `This idea came to my teammate and I during a hackathon. We wanted a solution for group 
      scheduling that solved the problems the current popular systems presented.
      Between friends and clubs, there are a lot of events to organize, each with its own set of
      different schedules to consider. The current solution is to use a site called when2meet where
      the user must manually copy over their availability from their own calendar for each event.   
      While functional, the process can be frustrating and repetitive, which is why we came up with  
      Scheduley, a group availability site that imports personal Google Calendar information.
      Scheduley allows each user to fill out a shared calendar using their own linked Google Calendar account, 
      and a color-coded group schedule is created detailing when each person on the shared link 
      is available. New members can access and add their calendar by simply entering the calendar 
      name and password. Because Scheduley relies on Google Calendar information rather than user input, the user
      will never have to re-enter their availability for any group they join.`,
    "accomplishmentsText":
      "<li class='project-details-list'> <span>I built out an interactive UI that " +
      "simplified creating and sharing calendars across groups.</span></li>" +
      "<li class='project-details-list'><span>I was able to strategically display user data so as not to " +
      "reveal user's personal information by replacing events text with a user's name for group member's " +
      "to see. </span></li>",
    "imagesText": `<div class='card-img'> </div> `,
    "code": `
    let calendarResponse;
    let globalCalendar = [];
    
    $(function() {
        document.getElementById("submit").onclick = function loadCal() {
            document.getElementById("calendar").classList.remove('hide');        
            document.getElementById("form").classList.add('garbage');
            document.getElementById("groups").classList.remove('garbage');
            var username = document.getElementById('calKey').value;
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://localhost:3000/schedule?user="+username,
                "method": "GET"
            }
              
              $.ajax(settings).done(function (response) {
                    let calendarId = response.calendarID;
                    let displayId = response.displayID;
                    prefix = 'https://www.googleapis.com/calendar/v3/calendars/'
    
                    var url = prefix + calendarId + '/events?key=' + apiKey
    
                    fetch(url).then(response => response.json()).then(response => {
                        globalCalendar = parseCalendarResponse(response,displayId);
                        return globalCalendar;
                    }).then((globalCalendar) => {
                        var calendarEl = document.getElementById('calendar');
        
                        var calendar = new FullCalendar.Calendar(calendarEl, {
                            plugins: [ 'timeGrid' ],
                            defaultView: 'timeGridWeek',
                            events: globalCalendar,
                            minTime: "06:00:00",
                            maxTime: "22:00:00"
                        });
                
                        calendar.render();
                    });
              });
        document.getElementById("join").onclick = function loadCal() {  
                        var calendarEl = document.getElementById('calendar');
                        $('#calendar').html('');
        
                        var calendar = new FullCalendar.Calendar(calendarEl, {
                            plugins: [ 'timeGrid', 'googleCalendar' ],
                            defaultView: 'timeGridWeek',
                            googleCalendarApiKey: apiKey,
                            eventSources: [
                                {
                                  googleCalendarId: calId,
                                  className: 'class-one'
    
                                },
                                {
                                  googleCalendarId: calIdTwo,
                                  className: 'nice-event'
                                },
                                {
                                    googleCalendarId: calIdThree,
                                    className: 'class-two'
                                }
                              ],
                              minTime: "06:00:00",
                                maxTime: "22:00:00"
                        });
                
                        calendar.render();
        }
    
    
        document.getElementById("start").onclick = function loadCal() {  
            var calendarEl = document.getElementById('calendar');
                    $('#calendar').html('');
    
                    var calendar = new FullCalendar.Calendar(calendarEl, {
                        plugins: [ 'timeGrid', 'googleCalendar' ],
                        defaultView: 'timeGridWeek',
                        googleCalendarApiKey: apiKey,
                        eventSources: [
                            {
                                googleCalendarId: calId,
                                className: 'nice-event'
                            }
                            ],
                            minTime: "06:00:00",
                            maxTime: "22:00:00"
                    });
            
                    calendar.render();
        }
    
        $("#groupName").change(function() {
            document.getElementById("join").classList.remove('disabled');
        });    
        }
    
        function parseCalendarResponse(calendarData, displayId) {
            let calendarDataItems = calendarData['items'];
            let displayStructure = [];
            for (let i = 0; i < calendarDataItems.length; i++) {
                let startDate = new Date(calendarDataItems[i]['start']['dateTime']);
                let endDate = new Date(calendarDataItems[i]['end']['dateTime']);
                let title = calendarDataItems[i]['summary'];
    
                let url = calendarDataItems[i]['htmlLink'];
                displayStructure.push(
                    {
                        'start' : startDate.getTime(),
                        'end' : endDate.getTime(),
                        'title' : displayId,
                        'url' : url
                    }
                );
                
            }
        return displayStructure;
        }
    });`
  }
}
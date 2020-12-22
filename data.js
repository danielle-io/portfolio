var projectData = {
  PengWin: {
    descriptionText: `The Innovation Lab presented the idea for this application, and my team and I spent 20 weeks researching, designing, and 
      coding this project. I was one of the two lead developers on this project, responsible for bringing the research and design 
      team's ideas to life on this cross-platform, user-friendly application.
      Task completion was validated using image recognition utilizing Google Vision's API. Some features included: 
      creation of routines & activities, dropdown menus with autofill, image and video embedding, deletion, 
      duplication, and modification available on activities, routines and rewards, the ability to add custom labels to routines, 
      two user interfaces - one for children and one for parents.`,
    accomplishmentsText:
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
    imagesText: "",
  },

  VirtualHelp: {
    titleText: "Virtual Help",
    descriptionText: `Virtual Help is an online tutoring solution for connecting students with TAs to get assistance on the project.  
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
    accomplishmentsText:
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
    imagesText: `<div class= 'card-img' >
      <img src='./images/virtualHelp2.gif' alt='A demo rating a tutoring session on the Virtual Help UI'
        class='d-block w-100'></div>`,
  },
  ZKeeper: {
    titleText: "z-keeper",
    descriptionText: `Z-Keeper is a simple mobile application that works on both Android and IOS. Users are able to track their sleep 
      as well as how tired they are feeling throughout the day, which provides some insight into how the amount of sleep they 
      get affects them. Using Ionic Storage, the data a user enters is kept locally, and will persist upon loading up the application. 
      The user interface caters to both new and existing users, with a tiredness slider scale for users familiar with the ratings, 
      and a tiredness list view for new users, that sync with one another, allowing users to toggle back and forth between the two 
      views when deciding what rating to submit.`,
    accomplishmentsText: `<li class='project-details-list'><span>I fully designed the application's UI using mobile UI guidelines.</span></li> 
      <li class='project-details-list'><span>I utilized Ionic Services to query and store data in Ionic Storage.</span></li>
      <li class='project-details-list'><span>I implemented bottom navigation using Ionic Tabs, and ensured data persists between pages.</span></li>`,
    imagesText: `<div class= 'card-img'>
      <img src='./images/zKeeperLogs.png' alt='The logs page of the z-keeper application'
        class='d-block w-50 mobile-images'></div>
       <div style='margin-top: 25px;'></div>
        <img src='./images/zKeeperTrack.png' alt='The sleep tracking page of the z-keeper application'
        class='d-block w-50 mobile-images'></div>`,
  },

  WICSJobs: {
    titleText: "WICS Jobs",
    descriptionText: `WICS Jobs allows users to anonymously submit job data, and learn about ratings from WICS members 
    at companies that interest them. This was a quick project we worked on for just a few days. We imported the data
    by converting a Google Form .csv to JSON, after splitting the contact info from the ratings, to ensure anonymity.`,
    accomplishmentsText: `<li class='project-details-list'><span>I fully designed the application's UI.</span></li> 
      <li class='project-details-list'><span>I implemented an interactive map using a JavaScript library. I modified the library to multiply 
      the state's opacity based on the amount of entries submitted for that state.</span></li>
      <li class='project-details-list'><span>I added on click state facts so there's something to display when a state has no relevant user data.</span></li>
      <li class='project-details-list'><span>I implemented TypeScript classes for converting user data to uniform formats, and added 
      state abbreviation and state fact classes.</span></li>`,
    imagesText: `<div class= 'card-img'>
      <img src='./images/WICSJobsMap.png' alt='The state map view of the WICS Jobs application'
        class='d-block mobile-images' style='width: 70%;'>
        <div style='margin-top: 25px;'></div>
        <img src='./images/WICSJobsSumTable.png' alt='The summary review table on the WICS Jobs application'
        class='d-block mobile-images' style='width: 70%;'>
        <div style='margin-top: 25px;'></div>
        <img src='./images/WICSJobsIndTable.png' alt='The individual review table on the WICS Jobs application'
        class='d-block mobile-images' style='width: 70%;'>`,
  },

  ICSSearchEngine: {
    titleText: "ICS Search Engine",
    descriptionText: `I worked with two teammates to learn the ins and outs of search engine  
      logic, then applied the logic to our own search engine, using the webpages within the UCI ICS website.`,
    accomplishmentsText:
      "<li class= 'project-details-list'> <span>I wrote the UI for the application, modeling the design after " +
      "popular search engines with a centered search bar on the home page that shifts to the top of the results page " +
      "upon submitting an initial query.</span></li>" +
      "<li class='project-details-list'><span>I expanded on the basic logic of the search engine by implementing two-gram indexing which " +
      "allowed the order of two word searches to take priority over the two words individually ranked.</span></li> ",
    imagesText: `<div class='card-img'> </div>`,
    code: `  
    import os
    from nltk import WordNetLemmatizer
    from lxml import html
    import re
    import math
    import sys
    from bs4 import BeautifulSoup as Soup
    import warnings
    
    
    class TokenizeContent:
    
        # treats warnings as errors so we can catch them using bs4
        warnings.simplefilter('error', UserWarning)
    
        # nltk.download('wordnet')
        lemmatizer = WordNetLemmatizer()
    
        def create_markup_dict(self, markupDict: dict, line: str):
            try:
                soup = Soup(line, "html.parser")
                for section in soup.find_all(['h5', 'h6', 'i', 'u']):
                    for word in self.getValidWords(section.text):
                        if word in markupDict.keys():
                            markupDict[word] += 0.5
                        else:
                            markupDict[word] = 0.5
                for section in soup.find_all(['h2', 'h3', 'h4', 'bold', 'strong', 'a']):
                    for word in self.getValidWords(section.text):
                        if word in markupDict.keys():
                            markupDict[word] += 1
                        else:
                            markupDict[word] = 1
                for section in soup.find_all('h1'):
                    for word in self.getValidWords(section.text):
                        if word in markupDict.keys():
                            markupDict[word] += 2
                        else:
                            markupDict[word] = 2
                for section in soup.find_all('title'):
                    for word in self.getValidWords(section.text):
                        if word in markupDict.keys():
                            markupDict[word] += 3
                        else:
                            markupDict[word] = 3
            except UserWarning:
                pass
    
    
        def tokenize_words_in_line(self, snippetArr, urlsAndContentDict: dict, 
          indexDictionary: dict,
          helperArrayPositionDict: dict, line: str, 
          urlName: str, markUpDict: dict, corpusSize):
            try:
    
                # remove html markup
                htmlParse = html.document_fromstring(line.encode("utf-8"))
                content = htmlParse.text_content()
    
                content = content.strip()
                content = content.lower()
    
                # Split words by space and punctuation
                for word in re.split('! |!|; |;|, |,|\s+|\.', content):
    
                    if word not in self.stop_words:
                        word.replace('\'', '')
                        word.replace('\"', '')
                        word.replace('-', '')
                        word.replace('(', '')
                        word.replace(')', '')
    
                        # If its alphanumeric, but we allow # and $
                        if re.fullmatch(r"[#$a-zA-Z0-9]{2,}", word):
    
                            # Include this valid token in the returned snippet array
                            snippetArr.append(word)
    
                            # Example: removes s from plural words
                            wordAfterLemmatizer = self.lemmatizer.lemmatize(word)
    
                            if wordAfterLemmatizer:
                                # ADDED / IN FRONT OF $ TO NOT BREAK DATABASE
                                wordAfterLemmatizer = self.hideFirstCharDollarSign(wordAfterLemmatizer)
    
                                # Update content dictionary
                                if wordAfterLemmatizer in urlsAndContentDict[urlName]['words']:
                                    urlsAndContentDict[urlName]['words'][wordAfterLemmatizer] += 1
                                else:
                                    urlsAndContentDict[urlName]['words'][wordAfterLemmatizer] = 1
    
    
                            # if token is not yet in dictionary, insert it, with the value
                            # set to an empty dict.
                            position = -1
    
                            if wordAfterLemmatizer not in indexDictionary:
    
                                indexDictionary[wordAfterLemmatizer] = dict()
                                indexDictionary[wordAfterLemmatizer]['word'] = wordAfterLemmatizer
                                
                                # # INNER dict for the URL's keys (urlName and tf)
                                # indexDictionary[wordAfterLemmatizer]['urls'] = dict()
                                indexDictionary[wordAfterLemmatizer]['urls'] = []
                                indexDictionary[wordAfterLemmatizer]['urls'].append({
                                    'urlName': urlName,
                                    'tf': 1
                                })
    
                                # add the word to the arr index helper dict so we can know what
                                # INDEX the dictionary with the URL is at so we dont have to
                                # loop over it checking (cant index it in a list)
                                helperArrayPositionDict[wordAfterLemmatizer] = dict()
                                helperArrayPositionDict[wordAfterLemmatizer]['word']/
                                 = wordAfterLemmatizer
    
                                # we know its at index 0 since the URL list is empty in this if
                                helperArrayPositionDict[wordAfterLemmatizer]['urls'] = dict()
                                helperArrayPositionDict[wordAfterLemmatizer]['urls'][urlName] = 0
    
                            # token already in our index
                            else:
    
    
                                # check if URL is in the helper so we can get
                                # the array index number to alter the entry
                                if urlName in helperArrayPositionDict[wordAfterLemmatizer]['urls']:
                                    position = helperArrayPositionDict[wordAfterLemmatizer]['urls'][urlName]
    
                                    # update the dictionary at that position
                                    indexDictionary[wordAfterLemmatizer]['urls'][position]['tf'] += 1
    
                                    # url must be appended to the list, and that index must be added to the
                                # helper dictionary
                                else:
                                    indexDictionary[wordAfterLemmatizer]['urls'].append({
                                        'urlName': urlName,
                                        'tf': 1
                                    })
    
                                    position = len(indexDictionary[wordAfterLemmatizer]['urls']) - 1
                                    helperArrayPositionDict[wordAfterLemmatizer]['urls'][urlName] = position
    
                            lengthOfUrlDictionary = len(indexDictionary[wordAfterLemmatizer]['urls'])
    
                            indexDictionary[wordAfterLemmatizer]['df'] = lengthOfUrlDictionary
    
                            # Calculate the tfidf for every search
                            tf = indexDictionary[wordAfterLemmatizer]['urls'][position]['tf']
    
                            tfidf = self.getTfidf(int(tf), int(lengthOfUrlDictionary), corpusSize)
    
                            indexDictionary[wordAfterLemmatizer]['urls'][position]['tfidf'] = math.log(tfidf)
    
                # IF THE WORD IS IN SPECIAL MARKUP: add the tf that was in the already scanned markUpDict
                for word, additionalTf in markUpDict.items():
                    if word in urlsAndContentDict[urlName]['words']:
                        urlsAndContentDict[urlName]['words'][word] += additionalTf
    
            except Exception as e:
                if str(e) != 'Document is empty':
                    exc_type, exc_obj, exc_tb = sys.exc_info()
                    fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
    
    
        def getTfidf(self, tf, df, totalDocs):
            return (1 + math.log(tf)) * math.log(totalDocs / df)
    
        def hideFirstCharDollarSign(self, stringToCheck):
            while stringToCheck[0] == '$':
                stringToCheck = '/' + stringToCheck
            return stringToCheck
        
        def getValidWords(self, content):
            validWords = []
            content = content.strip()
            content = content.lower()
            for word in re.split('! |!|; |;|, |,|\s+|\.', content):
                if word not in self.stop_words:
                    word.replace('\'', '')
                    word.replace('\"', '')
                    word.replace('-', '')
                    word.replace('(', '')
                    word.replace(')', '')
    
                    if re.fullmatch(r"[#$a-zA-Z0-9]{2,}", word):
                        wordAfterLemmatizer = self.lemmatizer.lemmatize(word)
    
                        # ADDED / IN FRONT OF $ TO NOT BREAK DATABASE
                        if wordAfterLemmatizer:
                            wordAfterLemmatizer = self.hideFirstCharDollarSign(wordAfterLemmatizer)
    
                        validWords.append(wordAfterLemmatizer)
            return validWords
    `,
  },

  UntitledJaneGame: {
    titleText: "Untitled Jane Game",
    descriptionText: `Our character is Jane Deux, a software engineer with big dreams and a college degree. After having already completed the “intern grind”
    during her years in school, Jane won’t settle for anything less than what she deserves out in the real world. Jane’s goal is to climb the
    corporate ladder and prove herself as a strong and capable engineer, despite the stereotypes and challenges involved with being a minority
    in the tech industry. Jane’s new place of work is at a small startup with a male majority workforce in the Californian town of Arsenic Valley.`,
    accomplishmentsText:
      "<li class='project-details-list'> <span>I led development on the project alongside one other developer," +
      " learning Unity on my own and coming up with the level concepts and conditions.</span></li>" +
      "<li class='project-details-list'><span>I wrote the dialogue, designed, and coded all of the intro screens and animations using the sprites " +
      "created by the design team.</span></li>",
    imagesText: `<div class='card-img' > </div>`,
    code: `              
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
  `,
  },
  Scheduley: {
    titleText: "Scheduley",
    descriptionText: `This idea came to my teammate and I during a hackathon. We wanted a solution for group 
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
    accomplishmentsText:
      "<li class='project-details-list'> <span>I built out an interactive UI that " +
      "simplified creating and sharing calendars across groups.</span></li>" +
      "<li class='project-details-list'><span>I was able to strategically display user data so as not to " +
      "reveal user's personal information by replacing events text with a user's name for group member's " +
      "to see. </span></li>",
    imagesText: `<div class='card-img'> </div> `,
    code: `
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
    });`,
  },
};

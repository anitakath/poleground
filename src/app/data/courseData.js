

const courses = {
    DANCE: [
        { group: "DANCE", title: "Sensual Floorwork", duration: 75, scheduled_at: "2025-04-01T18:00:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13",  },
        { group: "DANCE", title: "Sexy Floorwork", duration: 75, scheduled_at: "2025-03-31T18:00:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "mixed", room: "studio 1", spots: "5/15",},
          
        { group: "DANCE", title: "Floorwork Plastique", duration: 75, scheduled_at: "2025-04-05T12:00:00", description: "Explore various contemporary styles.", instructor: "Natalia", id: "4", level: "intermediate - advanced", room: "studio 1", spots: "6/15",},
         
        { group:"DANCE" , title: "Sensual Floorwork" , duration :75 , scheduled_at :"2025-04-02T16:30:00" , description :"Sensual Floorwork." , instructor :"Natalia" , id :"5" , level :"mixed" , room :"studio 3" , spots :"8 /10",  },
        { group: "DANCE", title: "Sexy Floorwork", duration: 75, scheduled_at: "2025-04-02T18:00:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "mixed", room: "studio 1", spots: "5/15",},
          
        { group: "DANCE", title: "Heels Flow", duration: 75, scheduled_at: "2025-04-04T16:30:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "intermediate - advanced", room: "studio 1", spots: "5/15",},
   
        { group: "DANCE", title: "Heels Essentials", duration: 75, scheduled_at: "2025-03-31T20:15:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "beginner", room: "studio 2", spots: "5/15",},
        { group: "DANCE", title: "Heels Essentials", duration: 75, scheduled_at: "2025-04-05T11:18:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "beginner", room: "studio 1", spots: "5/15",},
          


        { group: "DANCE", title: "Sensual Floorwork", duration: 75, scheduled_at: "2025-04-25T18:00:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13",  },
        { group: "DANCE", title: "Sexy Floorwork", duration: 75, scheduled_at: "2025-03-24T18:00:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "mixed", room: "studio 1", spots: "5/15",},
          
        { group: "DANCE", title: "Floorwork Plastique", duration: 75, scheduled_at: "2025-03-29T12:00:00", description: "Explore various contemporary styles.", instructor: "Natalia", id: "4", level: "intermediate - advanced", room: "studio 1", spots: "6/15",},
         
        { group:"DANCE" , title: "Sensual Floorwork" , duration :75 , scheduled_at :"2025-03-28T16:30:00" , description :"Sensual Floorwork." , instructor :"Natalia" , id :"5" , level :"mixed" , room :"studio 3" , spots :"8 /10",  },
        { group: "DANCE", title: "Sexy Floorwork", duration: 75, scheduled_at: "2025-03-26T18:00:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "mixed", room: "studio 1", spots: "5/15",},
          
        { group: "DANCE", title: "Heels Flow", duration: 75, scheduled_at: "2025-03-26T16:30:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "intermediate - advanced", room: "studio 1", spots: "5/15",},
   
        { group: "DANCE", title: "Heels Essentials", duration: 75, scheduled_at: "2025-03-24T20:15:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "beginner", room: "studio 2", spots: "5/15",},
        { group: "DANCE", title: "Heels Essentials", duration: 75, scheduled_at: "2025-03-29T11:18:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "beginner", room: "studio 1", spots: "5/15",},
          
    ],
      
        POLE:[
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-03-31T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-02T16:30:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-05T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },

          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-03-31T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-01T19:15:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-03T16:30:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },

          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-03-31T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"early intermediate" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-03T20:30:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"early intermediate" ,room:"studio 3 ",spots:"4 /10", },
  
          { group:"POLE" , title:"Pole 4" , duration :75 , scheduled_at :"2025-04-04T19:15:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"intermediate" ,room:"studio 3 ",spots:"4 /10", },
         
          { group:"POLE" , title:"Pole 5" , duration :75 , scheduled_at :"2025-04-03T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"advanced" ,room:"studio 3 ",spots:"4 /10", },
         
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-04-04T16:30:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'beginner', room:'studio 3', spots:'2/6', },
          
          { group:'POLE', title:'Pole Choreo 3', duration:75, scheduled_at:'2025-04-05T11:15:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'early intermediate', room:'studio 3', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 3', duration:75, scheduled_at:'2025-03-31T16:30:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'early intermediate', room:'studio 3', spots:'2/6', },
         
          { group:'POLE', title:'Pole Choreo 4', duration:75, scheduled_at:'2025-04-02T16:30:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'intermediate', room:'studio 3', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 5', duration:75, scheduled_at:'2025-04-03T19:30:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
         



          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-03-24T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-03-24T16:30:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-03-29T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },

          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-03-24T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-03-25T19:15:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-03-26T16:30:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },

          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-03-26T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"early intermediate" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-03-27T20:30:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"early intermediate" ,room:"studio 3 ",spots:"4 /10", },
  
          { group:"POLE" , title:"Pole 4" , duration :75 , scheduled_at :"2025-03-28T19:15:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"intermediate" ,room:"studio 3 ",spots:"4 /10", },
         
          { group:"POLE" , title:"Pole 5" , duration :75 , scheduled_at :"2025-03-27T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"advanced" ,room:"studio 3 ",spots:"4 /10", },
         
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-03-28T16:30:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
          
          { group:'POLE', title:'Pole Choreo 3', duration:75, scheduled_at:'2025-03-29T11:15:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 3', duration:75, scheduled_at:'2025-03-26T16:30:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
         
          { group:'POLE', title:'Pole Choreo 4', duration:75, scheduled_at:'2025-03-26T16:30:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 5', duration:75, scheduled_at:'2025-03-26T19:30:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
         
        ],

        FLEXIBILITY: [
            { group: 'FLEXIBILITY', title: 'Flexi Hips & Middle Splits', duration: 75, scheduled_at: '2025-03-31T19:30:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

            { group: 'FLEXIBILITY', title: 'Flexi Front Splits', duration: 75, scheduled_at: '2025-04-01T19:30:00', description: 'Start your day with a good stretch.', instructor: 'Petra', id: '2', level: 'mixed', room: 'studio 3', spots: '8/15' },
           
            { group: 'FLEXIBILITY', title: 'Flexi Backbends', duration: 75, scheduled_at: '2025-04-03T19:30:00', description: 'Master advanced flexibility techniques.', instructor: 'Anne', id: '3', level: 'mixed', room: 'studio 2', spots: '4/8' },
           
            { group: 'FLEXIBILITY', title: 'Yoga meets Flexi', duration: 75, scheduled_at: '2025-03-31T11:15:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Natalia', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
            { group: 'FLEXIBILITY', title: 'Yoga meets Flexi', duration: 75, scheduled_at: '2025-04-02T19:30:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Natalia', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
            { group: 'FLEXIBILITY' , title:'Yoga meets Flexi' , duration :75 , scheduled_at :'2025-04-06T12:30:00' , description :'Increase your range of motion with dynamic stretches.' , instructor :'Anne' , id :'6' , level :'mixed' , room :'studio 3' , spots :'4 /8'},
        ],
        PLAYGROUND: [
          { group: 'PLAYGROUND', title: 'Playground', duration: 60, scheduled_at: '2025-03-31T21:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-31T18:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-31T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-06T12:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-01T20:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-01T18:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-02T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-02T18:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-03T18:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-04T16:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-04T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-05T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-06T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         
        ],
        SPECIALS: [
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-04-01T18:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Exotic Heels with Daria Che" , duration :180 , scheduled_at :"2025-03-30T14:00:00" , description :"die legendäre Daria Che kommt zu uns!" , instructor :"Daria Che" , id :"1" , level :"intermediate - advanced" ,room:"studio 2 ",spots:"0 /10", },
        ]
};


export default courses


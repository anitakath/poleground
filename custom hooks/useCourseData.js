

const useCourseData = () =>{

    const courses = {

      // ------- 1. WEEK
        DANCE: [
          /*
          { group: "DANCE", title: "Sensual Floorwork", duration: 75, scheduled_at: "2025-04-01T18:00:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13",  },
          { group: "DANCE", title: "Sexy Floorwork", duration: 75, scheduled_at: "2025-03-31T18:00:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "mixed", room: "studio 1", spots: "5/15",},
          
          { group: "DANCE", title: "Floorwork Plastique", duration: 75, scheduled_at: "2025-04-05T12:00:00", description: "Explore various contemporary styles.", instructor: "Natalia", id: "4", level: "intermediate - advanced", room: "studio 1", spots: "6/15",},
         
          { group:"DANCE" , title: "Sensual Floorwork" , duration :75 , scheduled_at :"2025-04-02T16:30:00" , description :"Sensual Floorwork." , instructor :"Natalia" , id :"5" , level :"mixed" , room :"studio 3" , spots :"8 /10",  },
          { group: "DANCE", title: "Sexy Floorwork", duration: 75, scheduled_at: "2025-04-02T18:00:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "mixed", room: "studio 1", spots: "5/15",},
          
          { group: "DANCE", title: "Heels Flow", duration: 75, scheduled_at: "2025-04-04T16:30:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "intermediate - advanced", room: "studio 1", spots: "5/15",},
   
          { group: "DANCE", title: "Heels Essentials", duration: 75, scheduled_at: "2025-03-31T20:15:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "beginner", room: "studio 2", spots: "5/15",},
          { group: "DANCE", title: "Heels Essentials", duration: 75, scheduled_at: "2025-04-05T11:18:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "beginner", room: "studio 1", spots: "5/15",},
          
*/

           // ------- 2. WEEK

/*
          { group: "DANCE", title: "Sensual Floorwork", duration: 75, scheduled_at: "2025-04-25T18:00:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13",  },
          { group: "DANCE", title: "Sexy Floorwork", duration: 75, scheduled_at: "2025-03-24T18:00:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "mixed", room: "studio 1", spots: "5/15",},
          
          { group: "DANCE", title: "Floorwork Plastique", duration: 75, scheduled_at: "2025-03-29T12:00:00", description: "Explore various contemporary styles.", instructor: "Natalia", id: "4", level: "intermediate - advanced", room: "studio 1", spots: "6/15",},
         
          { group:"DANCE" , title: "Sensual Floorwork" , duration :75 , scheduled_at :"2025-03-28T16:30:00" , description :"Sensual Floorwork." , instructor :"Natalia" , id :"5" , level :"mixed" , room :"studio 3" , spots :"8 /10",  },
          { group: "DANCE", title: "Sexy Floorwork", duration: 75, scheduled_at: "2025-03-26T18:00:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "mixed", room: "studio 1", spots: "5/15",},
          
          { group: "DANCE", title: "Heels Flow", duration: 75, scheduled_at: "2025-03-26T16:30:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "intermediate - advanced", room: "studio 1", spots: "5/15",},
   
          { group: "DANCE", title: "Heels Essentials", duration: 75, scheduled_at: "2025-03-24T20:15:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "beginner", room: "studio 2", spots: "5/15",},
          { group: "DANCE", title: "Heels Essentials", duration: 75, scheduled_at: "2025-03-29T11:18:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "beginner", room: "studio 1", spots: "5/15",},
          
        
*/
          // ------- 3. WEEK
          // ------- 4. WEEK
          // ------- 5. WEEK
          // ------- 6. WEEK
          // ------- 7. WEEK
          // ------- 8. WEEK

        
        
        ],
      
        POLE:[

          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-03-31T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-01T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-02T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-03T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-04T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-05T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-06T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-07T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-08T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-09T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-10T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-11T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-12T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-13T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-14T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-15T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-16T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-17T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-18T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-19T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-20T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-21T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-22T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-23T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-24T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-25T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-26T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-27T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-28T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-29T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-30T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },




          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-03-31T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-02T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-04T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },

          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-06T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-07T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-09T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },

          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-11T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-13T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-14T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },

          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-16T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-18T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-20T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },

          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-21T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-23T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-25T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },

          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-27T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-28T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-30T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },


          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-04-05T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-04-12T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-04-19T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-04-26T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
        


          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-01T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-03T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
  

          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-08T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-10T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
  
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-15T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-17T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
  

          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-22T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-24T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
  

          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-29T19:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-05-01T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
  

          /*

          { group:"POLE" , title:"Pole 4" , duration :75 , scheduled_at :"2025-04-04T19:15:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"intermediate" ,room:"studio 3 ",spots:"4 /10", },
         
          { group:"POLE" , title:"Pole 5" , duration :75 , scheduled_at :"2025-04-03T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"advanced" ,room:"studio 3 ",spots:"4 /10", },
         
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-04-04T16:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'beginner', room:'studio 3', spots:'2/6', },
          
          { group:'POLE', title:'Pole Choreo 3', duration:75, scheduled_at:'2025-04-05T11:15:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'early intermediate', room:'studio 3', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 3', duration:75, scheduled_at:'2025-03-31T16:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'early intermediate', room:'studio 3', spots:'2/6', },
         
          { group:'POLE', title:'Pole Choreo 4', duration:75, scheduled_at:'2025-04-02T16:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'intermediate', room:'studio 3', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 5', duration:75, scheduled_at:'2025-04-03T19:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
         



          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-03-24T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-03-24T16:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-03-29T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },

          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-03-24T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-03-25T19:15:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-03-26T16:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },

          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-03-26T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-03-27T20:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 3 ",spots:"4 /10", },
  
          { group:"POLE" , title:"Pole 4" , duration :75 , scheduled_at :"2025-03-28T19:15:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"intermediate" ,room:"studio 3 ",spots:"4 /10", },
         
          { group:"POLE" , title:"Pole 5" , duration :75 , scheduled_at :"2025-03-27T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"advanced" ,room:"studio 3 ",spots:"4 /10", },
         
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-03-28T16:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
          
          { group:'POLE', title:'Pole Choreo 3', duration:75, scheduled_at:'2025-03-29T11:15:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 3', duration:75, scheduled_at:'2025-03-26T16:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
         
          { group:'POLE', title:'Pole Choreo 4', duration:75, scheduled_at:'2025-03-26T16:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 5', duration:75, scheduled_at:'2025-03-26T19:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
         
          */

          // ------- 3. WEEK
          // ------- 4. WEEK
          // ------- 5. WEEK
          // ------- 6. WEEK
          // ------- 7. WEEK
          // ------- 8. WEEK
       
        ],

        FLEXIBILITY: [

          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-04-05T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-04-12T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-04-19T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-04-26T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-05-03T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-05-10T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-05-17T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-05-24T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-05-31T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-06-07T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-06-14T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-06-21T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

          /*
            { group: 'FLEXIBILITY', title: 'Flexi Hips & Middle Splits', duration: 75, scheduled_at: '2025-03-31T19:30:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

            { group: 'FLEXIBILITY', title: 'Flexi Front Splits', duration: 75, scheduled_at: '2025-04-01T19:30:00', description: 'Start your day with a good stretch.', instructor: "Anne", id: '2', level: 'mixed', room: 'studio 3', spots: '8/15' },
           
            { group: 'FLEXIBILITY', title: 'Flexi Backbends', duration: 75, scheduled_at: '2025-04-03T19:30:00', description: 'Master advanced flexibility techniques.', instructor: 'Anne', id: '3', level: 'mixed', room: 'studio 2', spots: '4/8' },
           
            { group: 'FLEXIBILITY', title: 'Yoga meets Flexi', duration: 75, scheduled_at: '2025-03-31T11:15:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Natalia', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
            { group: 'FLEXIBILITY', title: 'Yoga meets Flexi', duration: 75, scheduled_at: '2025-04-02T19:30:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Natalia', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
            { group: 'FLEXIBILITY' , title:'Yoga meets Flexi' , duration :75 , scheduled_at :'2025-04-06T12:30:00' , description :'Increase your range of motion with dynamic stretches.' , instructor :'Anne' , id :'6' , level :'mixed' , room :'studio 3' , spots :'4 /8'},
        */
        

          // ------- 3. WEEK
          // ------- 4. WEEK
          // ------- 5. WEEK
          // ------- 6. WEEK
          // ------- 7. WEEK
          // ------- 8. WEEK
          ],
        PLAYGROUND: [
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-03-31T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-01T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-02T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-03T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-04T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-05T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-06T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-07T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-08T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-09T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-10T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-11T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-12T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-13T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         
        


          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-03-31T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-01T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-02T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-03T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-04T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-07T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-08T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-09T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-10T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-11T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          

          //MITTWOCHS!

          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-02T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-09T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-16T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-23T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-30T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-05-07T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-05-14T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-05-21T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-05-28T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          



          // ------- 3. WEEK
          // ------- 4. WEEK
          // ------- 5. WEEK
          // ------- 6. WEEK
          // ------- 7. WEEK
          // ------- 8. WEEK
        
        ],
        SPECIALS: [
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-04-06T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-04-13T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-04-20T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-04-27T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-05-04T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            /* { group:"SPECIALS" , title:"Exotic Heels with Daria Che" , duration :180 , scheduled_at :"2025-04-13T14:00:00" , description :"die legendäre Daria Che kommt zu uns!" , instructor :"Daria Che" , id :"1" , level :"intermediate - advanced" ,room:"studio 2 ",spots:"0 /10", },*/
        
        

      // ------- 3. WEEK
      // ------- 4. WEEK
      // ------- 5. WEEK
      // ------- 6. WEEK
      // ------- 7. WEEK
      // ------- 8. WEEK
        
        ],


        /*
        OFFICE:[
          { group:"OFFICE" , title:"Off Ice Training" , duration :75 , scheduled_at :"2025-03-31T19:30:00" , description: "Unser Off-Ice Training bietet dir die perfekte Gelegenheit, deine Fähigkeiten außerhalb des Eises zu verbessern! In dieser 75-minütigen Einheit wirst du an deiner Kraft, Flexibilität und Ausdauer arbeiten, um deine Leistung auf dem Eis zu steigern. Unter der Anleitung von unserer erfahrenen Trainerin Anne wirst du gezielte Übungen durchführen, die speziell für Eiskunstläufer:innen entwickelt wurden. Egal, ob du ein Anfänger bist oder bereits Erfahrung hast, diese Trainingseinheit ist ideal für alle Levels. Nutze die Chance, deine Technik zu verfeinern und dich optimal auf die nächste Saison vorzubereiten. Melde dich jetzt an und sichere dir einen Platz in Studio 1 – wir freuen uns auf dich!" , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"5 /10", },
          
        ]*/
      };


    return{ courses }

}

export default useCourseData
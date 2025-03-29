

const useCourseData = () =>{

    


    const courses = {
        DANCE: [
          { group: "DANCE", title: "Sensual Floorwork", duration: 75, scheduled_at: "2025-03-18T18:00:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13",  },
          { group: "DANCE", title: "Sexy Floorwork", duration: 75, scheduled_at: "2025-03-17T18:00:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "mixed", room: "studio 1", spots: "5/15",},
          
          { group: "DANCE", title: "Floorwork Plastique", duration: 75, scheduled_at: "2025-03-22T12:00:00", description: "Explore various contemporary styles.", instructor: "Natalia", id: "4", level: "intermediate-advanced", room: "studio 1", spots: "6/15",},
         
          { group:"DANCE" , title: "Sensual Floorwork" , duration :75 , scheduled_at :"2025-03-19T16:30:00" , description :"Sensual Floorwork." , instructor :"Natalia" , id :"5" , level :"mixed" , room :"studio 3" , spots :"8 /10",  },
          { group: "DANCE", title: "Sexy Floorwork", duration: 75, scheduled_at: "2025-03-19T18:00:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "mixed", room: "studio 1", spots: "5/15",},
          
          { group: "DANCE", title: "Heels Flow", duration: 75, scheduled_at: "2025-03-21T16:30:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "intermediate - advanced", room: "studio 1", spots: "5/15",},
   
          { group: "DANCE", title: "Heels Essentials", duration: 75, scheduled_at: "2025-03-17T20:15:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "beginner", room: "studio 2", spots: "5/15",},
          { group: "DANCE", title: "Heels Essentials", duration: 75, scheduled_at: "2025-03-22T11:18:00", description: "Sexy-Sexier-You! In diesem kurs wollen wir deine freche, verspielte, wilde und extrem verführerische Seite hervorholen. Geimeinsam studieren wir hierfür eine fließende und kraftvolle Choreografie. Bitte bring Knieschoner mit und trage spicy Kleidung, ind er du dich wohl und sexy fühlst. High Heels sind herzlich willkommen, aber kein Muss und geben der Choreo ein gewisses Etwas ;-). Der Kurs ist beginnerfreundlich. ", instructor: "Anne", id: "2", level: "beginner", room: "studio 1", spots: "5/15",},
          
        ],
      
        POLE:[
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-03-17T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-03-19T16:30:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-03-22T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },

          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-03-17T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-03-18T19:15:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-03-20T16:30:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },

          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-03-17T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"early intermediate" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-03-20T20:30:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"early intermediate" ,room:"studio 3 ",spots:"4 /10", },
  
          { group:"POLE" , title:"Pole 4" , duration :75 , scheduled_at :"2025-03-21T19:15:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"intermediate" ,room:"studio 3 ",spots:"4 /10", },
         
          { group:"POLE" , title:"Pole 5" , duration :75 , scheduled_at :"2025-03-20T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"advanced" ,room:"studio 3 ",spots:"4 /10", },
         
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-03-21T16:30:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
          
          { group:'POLE', title:'Pole Choreo 3', duration:75, scheduled_at:'2025-03-22T11:15:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 3', duration:75, scheduled_at:'2025-03-17T16:30:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
         
          { group:'POLE', title:'Pole Choreo 4', duration:75, scheduled_at:'2025-03-19T16:30:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 5', duration:75, scheduled_at:'2025-03-19T19:30:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
         
        ],

        FLEXIBILITY: [
            { group: 'FLEXIBILITY', title: 'Flexi Hips & Middle Splits', duration: 75, scheduled_at: '2025-03-17T19:30:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

            { group: 'FLEXIBILITY', title: 'Flexi Front Splits', duration: 75, scheduled_at: '2025-03-18T19:30:00', description: 'Start your day with a good stretch.', instructor: 'Petra', id: '2', level: 'mixed', room: 'studio 3', spots: '8/15' },
           
            { group: 'FLEXIBILITY', title: 'Flexi Backbends', duration: 75, scheduled_at: '2025-03-20T19:30:00', description: 'Master advanced flexibility techniques.', instructor: 'Anne', id: '3', level: 'mixed', room: 'studio 2', spots: '4/8' },
           
            { group: 'FLEXIBILITY', title: 'Yoga meets Flexi', duration: 75, scheduled_at: '2025-03-17T11:15:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Natalia', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
            { group: 'FLEXIBILITY', title: 'Yoga meets Flexi', duration: 75, scheduled_at: '2025-03-19T19:30:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Natalia', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
            { group: 'FLEXIBILITY' , title:'Yoga meets Flexi' , duration :75 , scheduled_at :'2025-03-23T12:30:00' , description :'Increase your range of motion with dynamic stretches.' , instructor :'Anne' , id :'6' , level :'mixed' , room :'studio 3' , spots :'4 /8'},
        ],
        PLAYGROUND: [
          { group: 'PLAYGROUND', title: 'Playground', duration: 60, scheduled_at: '2025-03-17T21:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-17T18:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-17T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-23T12:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-18T20:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-18T18:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-19T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-19T18:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-20T18:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-21T16:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-21T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-22T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-23T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         
        ],
        SPECIALS: [
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-03-18T18:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
         

        ]
    
      };




    return{ courses }

}

export default useCourseData
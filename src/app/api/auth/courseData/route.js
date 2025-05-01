const useCourseData = () =>{

    const courses = {

      // ------- 1. WEEK
        DANCE: [

          { group: "DANCE", title: "Floorwork", duration: 75, scheduled_at: "2025-04-28T19:30:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13",  },
          { group: "DANCE", title: "Floorwork", duration: 75, scheduled_at: "2025-05-05T19:30:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13",  },
          { group: "DANCE", title: "Floorwork", duration: 75, scheduled_at: "2025-05-12T19:30:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13",  },
          { group: "DANCE", title: "Floorwork", duration: 75, scheduled_at: "2025-05-19T19:30:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13",  },
          { group: "DANCE", title: "Floorwork", duration: 75, scheduled_at: "2025-05-26T19:30:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13",  },
          
          { group: "DANCE", title: "Floorwork", duration: 75, scheduled_at: "2025-06-02T19:30:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13",  },
          { group: "DANCE", title: "Floorwork", duration: 75, scheduled_at: "2025-06-09T19:30:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13",  },
          { group: "DANCE", title: "Floorwork", duration: 75, scheduled_at: "2025-06-16T19:30:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13" },
          { group: "DANCE", title: "Floorwork", duration: 75, scheduled_at: "2025-06-23T19:30:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13" },
          { group: "DANCE", title: "Floorwork", duration: 75, scheduled_at: "2025-06-30T19:30:00", description: "In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor: "Anne", id: "DANCE-1", level: "mixed", room: "studio 1", spots: "3/13" },
         
          { group: "DANCE", title: "Floorwork", duration: 75, scheduled_at: "2025-07-07T19:30:00", description:"In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor:"Anne", id:"DANCE-1", level:"mixed", room:"studio 1", spots:"3/13" },
          { group:"DANCE", title:"Floorwork", duration:75, scheduled_at:"2025-07-14T19:30:00", description:"In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor:"Anne", id:"DANCE-1", level:"mixed", room:"studio 1", spots:"3/13" },
          { group:"DANCE", title:"Floorwork", duration:75, scheduled_at:"2025-07-21T19:30:00", description:"In diesem Kurs wollen wir fließende Bewegungsabläufe erschaffen und eine sinnlich-verführerische Choreografie am Boden einstudieren. Bitte bring Knieschoner mit und trage Kleidung, in der du dich wohlfühlst und auf der du am Boden sliden kannst. High Heels sind herzlich willkommen, aber kein Muss. Der Kurs ist beginnerfreundlich.", instructor:"Anne", id:"DANCE-1", level:"mixed", room:"studio 1", spots:"3/13" }
        

        ],
      
        POLE:[


         
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-22T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-24T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-25T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-26T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-27T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
        
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-04-29T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-01T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-02T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-03T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-04T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-06T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-08T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-10T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-11T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          

          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-13T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-15T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-16T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-17T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-18T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-20T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-22T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-23T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-24T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-25T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          

          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-27T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-29T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-30T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-05-31T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-01T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          


          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-03T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-05T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-06T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-07T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-08T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-10T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-12T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-13T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-14T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-15T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-17T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-19T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-20T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-21T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-22T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-24T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-26T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-27T18:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-28T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 0-1" , duration :75 , scheduled_at :"2025-06-29T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 1 ",spots:"4 /10", },
          



          //JUNI!

          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-25T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-27T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-28T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-04-30T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-02T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-04T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-05T19:30:00" , description :"Introduction to pole dance techniques." ,instructor :"Natalia", id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-07T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
         
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-11T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-09T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },


          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-12T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-14T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-16T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-18T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
       

          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-19T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-21T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-23T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-25T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
       


          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-26T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-28T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-05-30T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-01T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
       

          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-02T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-04T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-06T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-08T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-09T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-11T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-13T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
         
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-15T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
        

          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-16T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-18T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-20T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
         
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-22T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
        


          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-23T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-25T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-27T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
         
          { group:"POLE" , title:"Pole 1-2" , duration :75 , scheduled_at :"2025-06-29T11:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
        






          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-04-19T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Natalia", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-04-26T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
          //MAI!!!
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-05-03T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Natalia", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-05-10T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-05-17T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Natalia", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-05-24T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-05-31T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Natalia", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
          //JUNI!!
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-06-07T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-06-14T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-06-21T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },
          { group:'POLE', title:'Pole Choreo 1-2', duration:75, scheduled_at:'2025-06-28T11:30:00', description:'Create a choreography using pole techniques.', instructor:"Anne", id:'7', level:'beginner', room:'studio 2', spots:'2/6', },

          //JULI!!!


          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-15T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-17T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
  

          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-22T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-24T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Malak" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
  

          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-04-29T19:00:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-05-01T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
  

          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-05-06T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-05-08T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
  

          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-05-13T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-05-15T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
  
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-05-20T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-05-22T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
  

          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-05-27T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-05-29T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
  
          //JUNI
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-06-03T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-06-05T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-06-10T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-06-12T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-06-17T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-06-19T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-06-24T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Natalia" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },
          { group:"POLE" , title:"Pole 3" , duration :75 , scheduled_at :"2025-06-26T19:30:00" , description :"Introduction to pole dance techniques." , instructor :"Anne" , id :"1" , level :"early intermediate" ,room:"studio 1 ",spots:"4 /10", },

       
        ],

        SILK: [
         
          { group: 'ARIALSILK', title: 'Arial Silk ', duration: 75, scheduled_at: '2025-04-23T18:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'beginner', room: 'studio 1', spots: '6/12' },
         
          { group: 'ARIALSILK', title: 'Arial Silk', duration: 75, scheduled_at: '2025-04-30T18:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'beginner', room: 'studio 1', spots: '6/12' },
         
          { group: 'ARIALSILK', title: 'Arial Silk', duration: 75, scheduled_at: '2025-05-07T18:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'beginner', room: 'studio 1', spots: '6/12' },
         
          { group: 'ARIALSILK', title: 'Arial Silk', duration: 75, scheduled_at: '2025-05-09T18:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'intermediate', room: 'studio 1', spots: '6/12' },
         
          { group: 'ARIALSILK', title: 'Arial Silk', duration: 75, scheduled_at: '2025-05-14T18:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'beginner', room: 'studio 1', spots: '6/12' },
         
          { group: 'ARIALSILK', title: 'Arial Silk', duration: 75, scheduled_at: '2025-05-21T18:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'beginner', room: 'studio 1', spots: '6/12' },
         
          { group: 'ARIALSILK', title: 'Arial Silk', duration: 75, scheduled_at: '2025-05-28T18:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'beginner', room: 'studio 1', spots: '6/12' },
       
          { group: 'ARIALSILK', title: 'Arial Silk', duration: 75, scheduled_at: '2025-06-04T18:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'beginner', room: 'studio 1', spots: '6/12' },
         
          { group: 'ARIALSILK', title: 'Arial Silk', duration: 75, scheduled_at: '2025-06-11T18:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'beginner', room: 'studio 1', spots: '6/12' },
          
          { group: 'ARIALSILK', title: 'Arial Silk', duration: 75, scheduled_at: '2025-06-18T18:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'beginner', room: 'studio 1', spots: '6/12' },
         
          { group: 'ARIALSILK', title: 'Arial Silk', duration: 75, scheduled_at: '2025-06-25T18:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'beginner', room: 'studio 1', spots: '6/12' },
         
        ],

        KIDS:[
    

          { group: 'KIDS', title: 'Luftakrobatik (8-12)', duration: 60, scheduled_at: '2025-04-23T15:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'KIDS', title: 'Luftakrobatik (13-16)', duration: 60, scheduled_at: '2025-04-23T16:15:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
       

          { group: 'KIDS', title: 'Luftakrobatik (8-12)', duration: 60, scheduled_at: '2025-04-30T15:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'KIDS', title: 'Luftakrobatik (13-16)', duration: 60, scheduled_at: '2025-04-30T16:15:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
       
        
          { group: 'KIDS', title: 'Luftakrobatik (8-12)', duration: 60, scheduled_at: '2025-05-07T15:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'KIDS', title: 'Luftakrobatik (13-16)', duration: 60, scheduled_at: '2025-05-07T16:15:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
       
          { group: 'KIDS', title: 'Luftakrobatik (8-12)', duration: 60, scheduled_at: '2025-05-09T15:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'KIDS', title: 'Luftakrobatik (13-16)', duration: 60, scheduled_at: '2025-05-09T16:15:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
       
          { group: 'KIDS', title: 'Luftakrobatik (8-12)', duration: 60, scheduled_at: '2025-05-14T15:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'KIDS', title: 'Luftakrobatik (13-16)', duration: 60, scheduled_at: '2025-05-14T16:15:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
       
          { group: 'KIDS', title: 'Luftakrobatik (8-12)', duration: 60, scheduled_at: '2025-05-21T15:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'KIDS', title: 'Luftakrobatik (13-16)', duration: 60, scheduled_at: '2025-05-21T16:15:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
       
          { group: 'KIDS', title: 'Luftakrobatik (8-12)', duration: 60, scheduled_at: '2025-05-28T15:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'KIDS', title: 'Luftakrobatik (13-16)', duration: 60, scheduled_at: '2025-05-28T16:15:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
       
          { group: 'KIDS', title: 'Luftakrobatik (8-12)', duration: 60, scheduled_at: '2025-06-04T15:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'KIDS', title: 'Luftakrobatik (13-16)', duration: 60, scheduled_at: '2025-06-04T16:15:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
       

          { group: 'KIDS', title: 'Luftakrobatik (8-12)', duration: 60, scheduled_at: '2025-06-11T15:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'KIDS', title: 'Luftakrobatik (13-16)', duration: 60, scheduled_at: '2025-06-11T16:15:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
       

          { group: 'KIDS', title: 'Luftakrobatik (8-12)', duration: 60, scheduled_at: '2025-06-18T15:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'KIDS', title: 'Luftakrobatik (13-16)', duration: 60, scheduled_at: '2025-06-18T16:15:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
       
          { group: 'KIDS', title: 'Luftakrobatik (8-12)', duration: 60, scheduled_at: '2025-06-25T15:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'KIDS', title: 'Luftakrobatik (13-16)', duration: 60, scheduled_at: '2025-06-25T16:15:00', description: 'Improve your flexibility for better performance.', instructor: 'Anne', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
       
        ],

        FLEXIBILITY: [

          /* MONTAGS */


          { group: 'FLEXIBILITY', title: 'Yoga', duration: 75, scheduled_at: '2025-04-21T18:00:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Stella', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
          { group: 'FLEXIBILITY', title: 'Yoga', duration: 75, scheduled_at: '2025-04-28T18:00:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Stella', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
          { group: 'FLEXIBILITY', title: 'Yoga', duration: 75, scheduled_at: '2025-05-05T18:00:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Stella', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
          { group: 'FLEXIBILITY', title: 'Yoga', duration: 75, scheduled_at: '2025-05-12T18:00:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Stella', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
          { group: 'FLEXIBILITY', title: 'Yoga', duration: 75, scheduled_at: '2025-05-19T18:00:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Stella', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
          { group: 'FLEXIBILITY', title: 'Yoga', duration: 75, scheduled_at: '2025-05-26T18:00:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Stella', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
          { group: 'FLEXIBILITY', title: 'Yoga', duration: 75, scheduled_at: '2025-06-02T18:00:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Stella', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
          { group: 'FLEXIBILITY', title: 'Yoga', duration: 75, scheduled_at: '2025-06-09T18:00:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Stella', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
          { group: 'FLEXIBILITY', title: 'Yoga', duration: 75, scheduled_at: '2025-06-16T18:00:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Stella', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
          { group: 'FLEXIBILITY', title: 'Yoga', duration: 75, scheduled_at: '2025-06-23T18:00:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Stella', id: '4', level: 'mixed', room: 'studio 1', spots: '7/12' },
          
       
      
          /* DIENSTAGS */
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-04-29T19:30:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-05-06T19:30:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-05-13T19:30:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-05-20T19:30:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-05-27T19:30:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-06-03T19:30:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-06-10T19:30:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-06-17T19:30:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-06-24T19:30:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         
        
        
        
        
          /* SAMSTAGS */
        
        
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-04-26T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-05-03T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-05-10T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-05-17T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-05-24T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-05-31T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-06-07T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-06-14T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-06-21T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-06-28T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-07-05T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-07-12T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

          { group: 'FLEXIBILITY', title: 'Full Body Stretch', duration: 75, scheduled_at: '2025-07-19T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'FLEXIBILITY', title: ' Full Body Stretch', duration: 75, scheduled_at: '2025-07-26T13:00:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
  
        ],
        PLAYGROUND: [
      

          /* 1. WOCHE */
          
         
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-21T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-22T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-23T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-23T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-24T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-24T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-25T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-25T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-26T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-27T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         


          /* 2. WOCHE */
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-28T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-29T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-04-30T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-04-30T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-01T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-01T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-02T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-02T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-03T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-04T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         
          

          /* 3. WOCHE */
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-05T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-06T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-05-07T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-07T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-08T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-08T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-09T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-10T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-11T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         



          /* 4. WOCHE */
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-12T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-13T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-05-14T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-14T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-15T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-15T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-16T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-16T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-17T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-18T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         



          /* 5. WOCHE */
           
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-19T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-20T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-05-21T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-21T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-22T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-22T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-23T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-23T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-24T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-25T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         


          /* 6. WOCHE */

          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-26T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-27T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-05-28T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-28T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-29T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-29T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-30T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-30T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-05-31T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-01T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         

          /* 7. WOCHE */

          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-02T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-03T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-06-04T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-04T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-05T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-05T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-06T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-06T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-07T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-08T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         

          /* 8. WOCHE */

          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-09T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-10T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-06-11T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-11T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-12T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-12T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-13T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-13T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-14T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-15T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         

          /* 9. WOCHE */

          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-16T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-17T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-06-18T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-18T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-19T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-19T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-20T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-20T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-21T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-22T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         


          /* 10. WOCHE */

          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-23T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-24T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-06-25T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 2', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-25T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-26T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-26T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-27T16:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-27T19:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-28T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 90, scheduled_at: '2025-06-29T11:30:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         
        
        
        ],
        SPECIALS: [
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-04-27T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-05-04T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-05-11T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-05-18T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-05-25T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-06-01T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-06-08T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-06-15T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-06-22T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
            { group:"SPECIALS" , title:"Pole For Two" , duration :75 , scheduled_at :"2025-06-29T13:00:00" , description :"Introduction to pole dance techniques - together with your bestie." , instructor :"Anne" , id :"1" , level :"beginner" ,room:"studio 2 ",spots:"4 /10", },
        
        ],


    
      };


    return{ courses }

}

export default useCourseData
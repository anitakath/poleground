const useRetreatData = () => {
    const EVENTS_DUMMY = [
        {
            id: 1,
            group: "RETREAT",
            title: "RETREAT IN PORTUGAL",
            descriptionsTitle: "Komm mit uns nach Portugal!",
            subDescription: "Erlebe 10 unvergessliche Tage voller Poledance, Floorwork, Flexibilität und Yoga an der atemberaubenden Küste von Cascais, einer charmanten Stadt in der Nähe von Lissabon. Lass dich von der Schönheit der Natur inspirieren, während wir gemeinsam durch malerische Wanderwege streifen. Genieße ein exklusives Weintasting und entdecke die kulturellen Highlights bei einem Städtetrip nach Lissabon. In einer Gruppe von maximal 15 Personen schaffen wir eine familiäre Atmosphäre, in der du neue Freundschaften schließen und dich vernetzen kannst. Sei Teil dieser einzigartigen Erfahrung und lass uns gemeinsam unvergessliche Erinnerungen schaffen!",
            descriptionsTable: [
                { title: "Hotel & Essen" },
                { title: "4h Pole / Dance / Flexibility täglich" },
                { title: "Wanderungen durch die Natur" },
                { title: "Weintasting" },
                { title: "Städtetrip nach Lissabon" },
            ],
            level: "mixed",
            price: "ab 1500 Euro",
            imagePath: "/Start/damian-barczak-SCoZX8yrLig-unsplash.jpg",
            websitespath: "/poledance/events/retreat"
        },
        {
            id: 2,
            group: "PHOTOSHOOT",
            title: "PHOTOSHOOT",
            descriptionsTitle: " Lasse dich, deinen Körper und Fortschritt auf wunderschönste Art fotografisch festhalten",
            subDescription: " Wir bieten diverse Hintergründe für dein persönliches Fotoshoot an. [....] Zeig dich, feier dich!",
            descriptionsTable: [
                { title: " 1h Photoshooting " },
                { title: " 3 bis alle Fotos " },
                { title: " Snacks und Drinks " },
                { title: " wundervolle Menschen " },
                { title: " 10%-Gutscheine für den Onlineshop fiktiverPoleShop.de " },
            ],
            level: "mixed",
            price: "ab 100 Euro",
            imagePath: "/Events/pexels-pixabay-163497.jpg",
            websitespath: "/poledance/events/photoshoot"
        },
        {
            id: 1,
            group: "SHOWNIGHT",
            title: "SHOWNIGHT @ POLEGROUND",
            descriptionsTitle: "das Poleground feiert! - einfach so",
            subDescription: "Das Poleground lädt dich herzlich ein, mit uns zu feiern! Am 26. April 2025 ab 16 Uhr verwandelt sich unser Studio in einen Ort voller Kreativität und Gemeinschaft. Hier haben unsere talentierten Teilnehmer:innen die Möglichkeit, ihre Choreografien in Pole, Aerial und Dance vor einem begeisterten Publikum zu präsentieren – ganz gleich, ob allein, im Duo oder in Gruppen. Bereits ab 14 Uhr dürfen die Aufführenden ins Studio kommen, um sich vorzubereiten und letzte Proben durchzuführen. Das Publikum kann ab 15:30 Uhr eintreten (Eintritt: 10 Euro pro Person, Kinder bis 16 Jahre haben freien Eintritt). Im Ticketpreis ist ein Freigetränk enthalten, und für das leibliche Wohl sorgt ein kleines Buffet mit einer Auswahl an köstlichen Snacks. Die erste Aufführung findet von 16 bis 17 Uhr statt, gefolgt von Teil 2 der Shownight von 17:15 bis 18 Uhr. Zwischen den Aufführungen und danach gibt es reichlich Gelegenheit zum Austausch und Networking – also bring deine Freunde mit und lass uns gemeinsam einen unvergesslichen Abend erleben! Melde dich rechtzeitig an, um dir einen der begehrten Slots zu sichern. Andernfalls setzen wir dich auf die Warteliste.   ",
            descriptionsTable: [
                { title: "...." },
                
            ],
            level: "mixed",
            price: "ab 150 Euro",
            imagePath: "/Events/shangyou-shi-U6mlid4nor8-unsplash.jpg",
            websitespath: "/poledance/events/shownight"
        },
        /*
        {
            id: 1,
            group: "PICKNICK X POLE IM PARK ",
            title: "PICKNICK X POLE  IM PARK",
            descriptionsTitle: "Gemeinsames Picknick im Park / Alternativ: Brunch im Poleground",
            subDescription: "Das Poleground lädt Kund:innen und Freunde zu einem Picknick im Park ein -  es wird neben ein paar Snacks eine freistehende Pole und ein Arial Tuch mitgebracht. Es wird zwar ein paar Snacks geben, aber bitte bring gern dein eigenes Essen und Trinken mit.",
            descriptionsTable: [
                { title: "Bei schlechtem Wetter (Regen, oder <17°C) verlegen wir das Picknick in unser Studio" },
                { title: "Ggf WhatsAppGruppe für Organisation" },
                
            ],
            level: "mixed",
            price: "0 Euro",
            imagePath: "/Events/pexels-anna-guerrero-788383-1957011.jpg",
            websitespath: "/poledance/events/shownight"
        },*/
    ];

    return { EVENTS_DUMMY };
}

export default useRetreatData;
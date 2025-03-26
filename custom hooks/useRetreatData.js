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
            title: "SPRING BREAK! PHOTOSHOOT",
            descriptionsTitle: "Sommer, Sonne, heiße Poolparties und Wir!",
            subDescription: "Wir wollen die bevorstehend blühende Frühlingszeit und die bis zuletzt eingelümmelt wunderschönen Körper zelebrieren!! Die Sonnenstunden werden länger, die Röcke kürzer! Die Welt wird farbenfroher. Zeig dich, feier dich!",
            descriptionsTable: [
                { title: "1h Photoshooting" },
                { title: "3-alle Fotos" },
                { title: " Snacks und Drinks " },
                { title: " wundervolle Menschen " },
                { title: " 10%-Gutscheine für den Onlineshop Polesports.de" },
            ],
            level: "mixed",
            price: "ab 100 Euro",
            imagePath: "/Events/pexels-pixabay-163497.jpg",
            websitespath: "/poledance/events/photoshoot"
        },
    ];

    return { EVENTS_DUMMY };
}

export default useRetreatData;
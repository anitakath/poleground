

const usePricetableData = () =>{

    const priceTable = {
        "Erwachsene": [
            {
                "Probetraining": [
                    { title: "Probetraining für Neukundinnen", price: "10 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "Starterpaket 5er Karte", price: "60 Euro", info: "(nach Kauf 2 Monate gültig)", detailedInfo:"detailed info"}
                ],
                "Pole & Arial Silk": [
                    { title: "Einzelstunde", price: "25 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "5er Karte", price: "100 Euro", info: "(nach Kauf 4 Monate gültig)", detailedInfo:"detailed info" },
                    { title: "10er Karte", price: "150 Euro", info: "(nach Kauf 6 Monate gültig)", detailedInfo:"detailed info" },
                    { title: "Unlimited Monthly Pass", price: "150 Euro", info: "(besuche innerhalb eines Monats so viele Pole & Arial Silk Classes wie du möchtest und Platz im Kurs ist)", detailedInfo:"detailed info" }
                ],
                "Dance / Yoga / Flexibility / Workout": [
                    { title: "Einzelstunde", price: "15 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "5er Karte", price: "60 Euro", info: "(nach Kauf 4 Monate gültig)", detailedInfo:"detailed info" },
                    { title: "10er Karte", price: "100 Euro", info: "(nach Kauf 6 Monate gültig)", detailedInfo:"detailed info" },
                    { title: "Unlimited Monthly Pass", price: "100 Euro", info: "(besuche innerhalb eines Monats so viele Dance, Yoga und Flexibility Kurse wie du möchtest und Platz im Kurs ist)", detailedInfo:"detailed info"}
                ],
                "Mitgliedschaften": [
                    
                    { title: "Silber", duration: "6 Monate", price: "70 Euro/Monat", detailedInfo: "beinhaltet 8x Pole, 4x Flexi, 4x Dance, 2x Playground pro Monat - also insgesamt ...", info:"Für alle, die ihre Reise im Poledance beginnen möchten.", },
                    { title: "Silber", duration: "12 Monate", price: "65 Euro/Monat", detailedInfo: "beinhaltet 8x Pole, 4x Flexi, 4x Dance, 2x Playground pro Monat - also insgesamt ...", info:"Für alle, die ihre Reise im Poledance beginnen möchten.", },
                   
                    { title: "Gold", duration: "6 Monate", price: "115 Euro/Monat", info:"Für alle, die ihre Reise im Poledance festigen möchten.", detailedInfo:"beinhaltet 8x Pole, 8x Flexi, 2x Dance, 2x Playground pro Monat", },
                    { title: "Gold", duration: "12 Monate", price: "100 Euro/Monat", info:"Für alle, die ihre Reise im Poledance festigen möchten.", detailedInfo:"beinhaltet 8x Pole, 8x Flexi, 2x Dance, 2x Playground pro Monat" },
                   
                    { title: "Platin", duration: "6 Monate", price: "140Euro/Monat", info:"Für alle, die ihrer Reise im Poledance den Feinschliff geben möchten.", detailedInfo:"beinhaltet 12x Pole, 8x Flexi, 4x Dance, 4x Playground pro Monat" },
                    { title: "Platin", duration: "12 Monate", price: "120 Euro/Monat", info:"Für alle, die ihrer Reise im Poledance den Feinschliff geben möchten.", detailedInfo:"beinhaltet 12x Pole, 8x Flexi, 4x Dance, 4x Playground pro Monat" },
                   
                    { title: "Diamant", duration: "6 Monate", price: "160 Euro/Monat", info:"Für alle Verrückten, die das Poleground zu ihrem 2. Zuhause machen wollen.", detailedInfo:"beinhaltet 12x Pole, 8x Flexi, 8x Dance, unbegrenzt Playground pro Monat" },
                    { title: "Diamant", duration: "12 Monate", price: "150 Euro/Monat", info:"Für alle Verrückten, die das Poleground zu ihrem 2. Zuhause machen wollen.", detailedInfo:"beinhaltet 12x Pole, 8x Flexi, 8x Dance, unbegrenzt Playground pro Monat" },
                   
                 ]
            }
        ],
        "Kids and Teens": [
            {
                "Probetraining": [
                    { title: "Probestunde", price: "5 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "für Neukund:innen", price: "30 Euro", info: "" , detailedInfo:"detailed info"}
                ],
                "Pole & Arial Silk": [
                    { title: "Einzelstunde", price: "15 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "5er Karte", price: "60 Euro", info: "(nach Kauf 4 Monate gültig)", detailedInfo:"detailed info"},
                    { title: "10er Karte", price: "110 Euro", info: "(nach Kauf 6 Monate gültig)", detailedInfo:"detailed info"}
                ],
                "Dance / Yoga / Flexibility / Workout": [
                    { title: "Einzelstunde", price: "12 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "5er Karte", price: "50 Euro", info: "(nach Kauf 4 Monate gültig)", detailedInfo:"detailed info" },
                    { title: "10er Karte", price: "80 Euro", info: "(nach Kauf 6 Monate gültig)", detailedInfo:"detailed info" },
                ],
                "Mitgliedschaften": [
                    
                    { title: "In Planung", info: "..." },
                   
                 ]
            }
        ],
        "Sonderkonditionen": [
            {
                "Schüler:innen, Auszubildende, Student:innen und Arbeitslose": [
                    {
                        title:
                            '15% Rabatt auf die regulären Preise',
                       info:
                            'Schicke uns deinen Nachweis per E-Mail',
                        detailedInfo:"detailed info"
                    }
                ]
            }
        ]
    };



    return{priceTable}

}

export default usePricetableData


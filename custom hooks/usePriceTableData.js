

const usePricetableData = () =>{

    const priceTable = {
        "Erwachsene": [
            {
                "Probetraining": [
                    { title: "Probetraining für Neukund:Innen", price: "10 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "Starterpaket 5er Karte", price: "65 Euro", info: "(nach Kauf 2 Monate gültig)", detailedInfo:"detailed info"}
                ],
                "Pole ": [ /* & später: Arial Silk & Arial Hoop */
                    { title: "Einzelstunde", price: "20 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "5er Karte", price: "90 Euro", info: "(nach Kauf 4 Monate gültig)", detailedInfo:"detailed info" },
                    { title: "10er Karte", price: "170 Euro", info: "(nach Kauf 6 Monate gültig)", detailedInfo:"detailed info" },
                    /*{ title: "Unlimited Monthly Pass", price: "150 Euro", info: "(besuche innerhalb eines Monats so viele Pole & Arial Silk Classes wie du möchtest und Platz im Kurs ist)", detailedInfo:"detailed info" }*/
                ],
                " Yoga / Flexibility / Workout": [ /* & später: Dance */
                    { title: "Einzelstunde", price: "15 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "5er Karte", price: "65 Euro", info: "(nach Kauf 4 Monate gültig)", detailedInfo:"detailed info" },
                    { title: "10er Karte", price: "120 Euro", info: "(nach Kauf 6 Monate gültig)", detailedInfo:"detailed info" },
                   /* { title: "Unlimited Monthly Pass", price: "100 Euro", info: "(besuche innerhalb eines Monats so viele Dance, Yoga und Flexibility Kurse wie du möchtest und Platz im Kurs ist)", detailedInfo:"detailed info"}*/
                ],
                /*"Mitgliedschaften": [
                    
                    { title: " Silber", termofcontract: "6 Monate", price: "70 Euro/Monat", detailedInfo: "beinhaltet 4x Pole/Arial/Dance, 2x Flexi, 2x Playground pro Monat", info:"Für alle, die ihre Reise im Poledance beginnen möchten.", },
                    { title: "Silber",termofcontract: "12 Monate", price: "65 Euro/Monat", detailedInfo: "beinhaltet 4x Pole/Arial/Dance, 2x Flexi, 2x Playground pro Monat", info:"Für alle, die ihre Reise im Poledance beginnen möchten.", },
                   
                    { title: "Gold", termofcontract: "6 Monate", price: "115 Euro/Monat", info:"Für alle, die ihre Reise im Poledance festigen möchten.", detailedInfo:"beinhaltet 6x Pole/Arial/Dance, 3x Flexi, 2x Playground pro Monat", },
                    { title: "Gold", termofcontract: "12 Monate", price: "100 Euro/Monat", info:"Für alle, die ihre Reise im Poledance festigen möchten.", detailedInfo:"beinhaltet 6x Pole/Arial/Dance, 3x Flexi, 2x Playground pro Monat" },
                   
                    { title: "Platin", termofcontract: "6 Monate", price: "140 Euro/Monat", info:"Für alle, die ihrer Reise im Poledance den Feinschliff geben möchten.", detailedInfo:"beinhaltet 8x Pole/Arial/Dance, 4x Flexi, 4x Playground pro Monat" },
                    { title: "Platin", termofcontract: "12 Monate", price: "120 Euro/Monat", info:"Für alle, die ihrer Reise im Poledance den Feinschliff geben möchten.", detailedInfo:"beinhaltet 8x Pole/Arial/Dance, 4x Flexi, 4x Playground pro Monat" },
                   
                    { title: "Diamant", termofcontract: "6 Monate", price: "200 Euro/Monat", info:"Für alle Verrückten, die das Poleground zu ihrem 2. Zuhause machen wollen.", detailedInfo:"beinhaltet 10x Pole/Arial/Dance, 6x Yoga/Flexi, unbegrenztes Austoben im Playground pro Monat" },
                    { title: "Diamant", termofcontract: "12 Monate", price: "190 Euro/Monat", info:"Für alle Verrückten, die das Poleground zu ihrem 2. Zuhause machen wollen.", detailedInfo:"beinhaltet 10x Pole/Arial/Dance, 6x Yoga/Flexi, unbegrenztes Austauben im Playground pro Monat" },
                   
                 ]*/
            }
        ],
       /* "Kids and Teens": [
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
        ],*/
        "Sonderkonditionen": [
            {
                "Schüler:innen, Auszubildende, Student:innen und Arbeitslose": [
                    {
                        title:
                            '15% Rabatt auf die regulären Preise.',
                       info:
                            ' Ausgenommen sind das Probetraining sowie das Starterpaket. Schicke uns deinen Nachweis per E-Mail',
                        detailedInfo:"detailed info"
                    }
                ]
            }
        ]
    };



    return{priceTable}

}

export default usePricetableData


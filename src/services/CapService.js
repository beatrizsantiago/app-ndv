export async function GetCaps() {
    try {
        let data = [
            {
                "local": "2151 Neque. Av.",
                "phone": "(305) 19835-9140",
                "leader": "Merrill",
                "id": "EFBA7219-199D-0FF8-1F11-74DA7950060C",
                "date": "segunda",
                "hour": "19:00",
                "latitude": "-1.38383",
                "longitude": "-141.59425"
            },
            {
                "local": "205-5251 Ut Rd.",
                "phone": "(453) 89482-8723",
                "leader": "Ivan",
                "id": "1B706D3B-872B-EF8B-AB23-9187742343EB",
                "date": "quinta",
                "hour": "21:00",
                "latitude": "43.8905",
                "longitude": "106.51817"
            },
            {
                "local": "954-2494 Vitae St.",
                "phone": "(045) 34009-7833",
                "leader": "Wang",
                "id": "EEE46251-4DB0-59F3-2BF6-7BD698470F91",
                "date": "quarta",
                "hour": "21:00",
                "latitude": "-71.35488",
                "longitude": "68.59987"
            },
            {
                "local": "476-4649 Mauris Rd.",
                "phone": "(169) 21051-0077",
                "leader": "Robert",
                "id": "0F3EB45E-910E-26B5-8BFA-DE6DE54DBA00",
                "date": "segunda",
                "hour": "19:00",
                "latitude": "50.89745",
                "longitude": "43.76636"
            },
            {
                "local": "3455 Porttitor St.",
                "phone": "(279) 33559-7835",
                "leader": "Hayes",
                "id": "0FFB5F96-3ADA-F426-AE2C-6FB4B63AFB64",
                "date": "segunda",
                "hour": "19:00",
                "latitude": "42.3258",
                "longitude": "160.96908"
            },
            {
                "local": "8874 Nec St.",
                "phone": "(333) 79844-7252",
                "leader": "Kennan",
                "id": "EC77EA15-ADDD-16DA-E2F9-5E7E89C45D4F",
                "date": "quinta",
                "hour": "19:00",
                "latitude": "-19.65458",
                "longitude": "106.54157"
            },
            {
                "local": "P.O. Box 334, 4625 Nunc. St.",
                "phone": "(960) 96667-4604",
                "leader": "Axel",
                "id": "E19B1D59-8CF2-C36F-4462-A7BC09F17CEE",
                "date": "sexta",
                "hour": "21:00",
                "latitude": "33.67873",
                "longitude": "75.06137"
            },
            {
                "local": "134-4896 Ligula Road",
                "phone": "(704) 45613-9323",
                "leader": "Martin",
                "id": "AF1406A1-5371-3743-656C-E5209DB3BF4F",
                "date": "domingo",
                "hour": "19:00",
                "latitude": "36.88574",
                "longitude": "-85.46672"
            },
            {
                "local": "898-1090 Lacinia. Street",
                "phone": "(723) 94000-9542",
                "leader": "Kaseem",
                "id": "C8775368-EAF4-E778-8B22-75B6F5AB037B",
                "date": "sexta",
                "hour": "21:00",
                "latitude": "-87.97861",
                "longitude": "81.54262"
            },
            {
                "local": "5785 Nec Rd.",
                "phone": "(311) 60592-6394",
                "leader": "Kasimir",
                "id": "4B5C2AE6-E6F6-A8A1-C180-1C06EE02BBFD",
                "date": "domingo",
                "hour": "20:00",
                "latitude": "43.83037",
                "longitude": "71.74033"
            }
        ]

        return data

    } catch (error) {
        console.warn("Error GetCaps: ", error);
        throw error
    }
}

export default { GetCaps }
export async function Events(dateInit, dateEnd) {
    try {
        let data = {
            monday: {
                date: '2020-07-20T00:00:00',
                events: [
                    {
                        "id": "5f1a07d7b980e352656d73ab",
                        "name": "Tabernáculo",
                        "startTime": "19:00",
                        "endTime": "21:00"
                    },
                ]
            },
            tuesday: {
                date: '2020-07-21T00:00:00',
                events: [
                    {
                        "id": "5f1a07d7eac737d950c2bba4",
                        "name": "Reunião Evangelismo",
                        "startTime": "20:00",
                        "endTime": "22:00"
                    },
                ]
            },
            wednesday: {
                date: '2020-07-22T00:00:00',
                events: [
                    {
                        "id": "5f1a07d7da784ad41a8f9db3",
                        "name": "Busca e Intercessão",
                        "startTime": "05:30",
                        "endTime": "07:00"
                    },
                    {
                        "id": "5f1a07d7da784ad41a8f9dc3",
                        "name": "Casa de Paz",
                        "startTime": "20:00",
                        "endTime": "21:00"
                    },
                ]
            },
            thursday: {
                date: '2020-07-23T00:00:00',
                events: [
                    {
                        "id": "5f1a07d7c655fce2b7571ecd",
                        "name": "Busca e Intercessão",
                        "startTime": "05:30",
                        "endTime": "07:00"
                    },
                ]
            },
            friday: {
                date: '2020-07-24T00:00:00',
                events: [
                    {
                        "id": "5f1a07d7a2bf090f0937d3be",
                        "name": "Busca e Intercessão",
                        "startTime": "05:30",
                        "endTime": "07:00"
                    },
                ]
            },
            saturday: {
                date: '2020-07-25T00:00:00',
                events: [
                    {
                        "id": "5f1a07d7594c31c3f8d41567",
                        "name": "Culto de Jovens",
                        "startTime": "19:00",
                        "endTime": "20:30"
                    },
                ]
            },
            sunday: {
                date: '2020-07-26T00:00:00',
                events: [
                    {
                        "id": "5f1a07d7136568bf98fcb639",
                        "name": "Culto da Família",
                        "startTime": "17:00",
                        "endTime": "19:00"
                    }
                ]
            }
        }

        return data

    } catch (error) {
        console.warn("Error Events: ", error);
        throw error
    }
}

export default { Events }
export async function GetLifes() {
    try {
        let datas = [
            {
                "id": "5f15e5f011bef22b0510c8b4",
                "name": "Good Aguirre Contreras",
                "phone": "+55 (928) 409-3190"
            },
            {
                "id": "5f15e5f04d64bb4700ea734f",
                "name": "Ines Copeland Knight",
                "phone": "+55 (988) 566-3560"
            },
            {
                "id": "5f15e5f00bb0be15571a70b3",
                "name": "Armstrong Wilder Johnston",
                "phone": "+55 (867) 498-2960"
            },
            {
                "id": "5f15e5f0202896dbfa491915",
                "name": "Mayra Hendrix Daniels",
                "phone": "+55 (801) 438-2917"
            },
            {
                "id": "5f15e5f0e1123ff6f362957c",
                "name": "Gale Snider Justice",
                "phone": "+55 (868) 559-3684"
            }
        ]

        return datas

    } catch (error) {
        console.warn("Error GetLifes", error);
        throw error
    }
}

export default { GetLifes }
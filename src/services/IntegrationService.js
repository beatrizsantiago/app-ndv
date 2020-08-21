import axios from 'axios'
import useSWR from 'swr'

export async function GetLifes() {
    try {
        let lifes = await axios.get('integration/lifes')
        return lifes.data

    } catch (error) {
        console.warn("Error GetLifes", error.response);
        throw error.response
    }
}

export async function SendFeedback(lifeId, content) {
    try {
        console.warn(lifeId, content);
        await axios.post('integration/lifes/feedbacks', { lifeId, content })
        return true

    } catch (error) {
        console.warn("Error SendFeedback", error.response);
        throw error.response
    }
}


export async function RegisterNewLife(fullName, typeConversion, phone, email, age, baptismOtherChurch, baptismToday, baptismMinister) {
    try {
        await axios.post('integration/lifes', { fullName, phone, typeConversion, email, age, baptismOtherChurch, baptismToday, baptismMinister })
        return true

    } catch (error) {
        console.warn("Error RegisterNewLife", error);
        throw error
    }
}

export default { GetLifes, SendFeedback, RegisterNewLife }
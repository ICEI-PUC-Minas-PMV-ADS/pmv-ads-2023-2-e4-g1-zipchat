import { get, post } from "./httpAgent"
import { AI } from '../constants'

const ANAMNESE_URI = 'anamnese'

export const sendAnamnese = async (userName, message) => {
    return post(ANAMNESE_URI, {
            emissor: `${userName}`,
            texto: message,
            data: new Date().toISOString()
        })
}

export const dtoAnamneses = (response) => {
    return response.map(message => ({
        id: message.id,
        title: message.sintomas,
        messages:[
        {
        author: 'me',
        body: message.sintomas
        },
        {
        author: AI,
        body: message.resultadoIA          
        }
    ]
    }));
}

export const getAnamneses = async (userName) => {
    console.log(userName)
    return get(`${ANAMNESE_URI}/usuario/${userName}`)
}
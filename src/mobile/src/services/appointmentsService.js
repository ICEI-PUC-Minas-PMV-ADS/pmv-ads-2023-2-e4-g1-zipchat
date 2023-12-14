import { get, post } from "./httpAgent"

const APPOINMENT_URI = 'calendar'

export const createAppointments = (appointment) => {
    console.log("appointment")
    console.log(appointment)
    return post(APPOINMENT_URI, appointment)
}
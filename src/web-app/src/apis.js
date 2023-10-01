import axios from 'axaios'

const HOST_URL = 'http://'

export async function get(url) {
    try {
      const response = await axios.get(`${HOST_URL}/${url}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


export async function post(url, data) {
    try {
      const response = await axios.post(`${HOST_URL}/${url}`, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

const chat = [
  {
    order: 0,
    type: 'response',
    message: 'Seja bem-vindo, vamos começar a anmnese'
  }
] 

const chatReducer = (state = {quote: chat}, action) => {
  console.log("action")
    console.log(action)
    switch (action.type) {
        case 'ADD_AWNSER':
            return {
                quote: [
                  ...state.quote,
                  {
                    order: state.quote.length++,
                    type: 'awnser',
                    message: action.payload.message,
                  }
                ]
            }
        default:
            return state
    }
}

export default chatReducer;
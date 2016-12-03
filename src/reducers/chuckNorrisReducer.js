
export default function chuckReducer(state = {
    id:1,
    joke:'this is a joke, and is really funny',
    error: false
}, action){

  switch (action.type) {
    case 'JOKE_COMPLETED':{
      console.log(action.payload);
      return state = {
        ...state,
        id: action.payload.response.value.id,
        joke: action.payload.response.value.joke
      }
      break;
    }
    case 'JOKE_CANCELED':{
      return state = {
        ...state,
        id:-1,
        joke: undefined,
        error:true
      }
      break;
    }
    default:{
      return state
    }
  }

}

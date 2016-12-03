import axios from 'axios'

export function newJoke(){
  return function(dispatch){
    axios.get('http://api.icndb.com/jokes/random.')
    .then((response)=>{
      dispatch({
        type: 'JOKE_COMPLETED',
        payload:{
          response: response.data
        }
      })
    })
    .catch((err)=>{
      dispatch({
        type:'JOKE_CANCELED',
        payload: {
          error:err
        }
      })
    });
  }
}

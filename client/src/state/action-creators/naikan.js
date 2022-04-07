import { ADD_NOTE, REMOVE_NOTE} from '../types';
import { naikanService } from "../../service";



export function addNote(note,next) {
    return(dispatch, getState) => {
      naikanService.addNote(note).then(response => {
        switch(response.status) {
          case 200:{
            console.log(response);
            dispatch({type: ADD_NOTE, payload: response.data.text})
            if (next) next(response)
            break;
          }
          case 400: {
            if (next) next(response)
            break;
          }
          default:
                break;
        }
      })
    }
  }
  
  export function removeNote(id,next) {
    
    return(dispatch, getState) => {
      naikanService.removeNote(id).then(response => {
        switch(response.status) {
          case 200:{
            console.log(response);
            dispatch({type: REMOVE_NOTE, payload: response.data.id})
            if (next) next(response)
            break;
          }
          case 400: {
            if (next) next(response)
            break;
          }
          default:
                break;
        }
      })
    }
  }

  // export function fetchNote(note,next) {
  //   return(dispatch, getState) => {
  //     naikanService.fetchNote(note).then(response => {
  //       console.log(response);
  //       switch(response.status) {
  //         case 200:{
  //           dispatch({type: FETCH_NOTE, payload: response.data.text})
  //           if (next) next(response)
  //           break;
  //         }
  //         case 400: {
  //           if (next) next(response)
  //           break;
  //         }
  //         default:
  //               break;
  //       }
  //     })
  //   }
  // }

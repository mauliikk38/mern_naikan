import { ADD_NOTE, REMOVE_NOTE,
  //  FETCH_NOTE
} from '../types';

const initialState = {
  add: localStorage.add ? JSON.parse(localStorage.add) : {},
  remove: localStorage.remove ? JSON.parse(localStorage.remove) : {},
  // fetch: localStorage.fetch ? JSON.parse(localStorage.fetch) : {},
};


const naikanReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:{
      // localStorage.setItem('add', JSON.stringify(action.payload));
      return {
        ...state,
        add: action.payload
    };
      // return[
      //   ...state,
      //   {
          
      //     ...action.note.payloads
      //   }
      // ];
    }
    case REMOVE_NOTE:
      {
      // localStorage.setItem('remove', JSON.stringify(action.payload));
      // return state.filter(note => note.id !== action.id);
       return {
                ...state,
                remove: action.payload
            };
    
      }
    // case FETCH_NOTE:
    //   {
    //     localStorage.getItem('fetch', JSON.stringify(action.payload));
      
    //     // return state.find();
    //     return {
    //       ...state,
    //       fetch: action.payload
    //   };
    // }
    default:
      return state;

  }
};
export default naikanReducer;

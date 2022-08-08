// 3. MEMBUAT GLOBAL STATE :
const initialState = {
    popup : false,
    isLogin : false,
    isLoading : false,
    user : 'Mukhlis',
  }

// 2. MEMBUAT REDUCER :
const reducer = (state=initialState, action) => {
    if(action.type==='CHANGE_POPUP'){
      return {
        ...state,
        popup: action.value
      }
    }
    if(action.type==='CHANGE_ISLOGIN'){
      return {
        ...state,
        isLogin: action.value
      }
    }
    if(action.type==='CHANGE_ISLOADING'){
      return {
        ...state,
        isLoading: action.value
      }
    }
    if(action.type==='CHANGE_USER'){
      return {
        ...state,
        user: action.value
      }
    }
    return state;
  }

  export default reducer;
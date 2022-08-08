import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const actionUserName =()=>(dispatch)=>{
    setTimeout(() => {
      return dispatch ({
        type:'CHANGE_USER', 
        value: 'Mukhlis KA'})
    }, 3000);  
  }

export const registerUserAPI =(data)=>(dispatch)=>{
    // console.log(data);
    const auth = getAuth();
    dispatch({type: 'CHANGE_ISLOADING', value: true})
    return(
      createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential)=>{
        console.log(userCredential.user)
        dispatch({type: 'CHANGE_ISLOADING', value: false})
      })
      .catch(function (error) {
        console.log=error.message;
        console.log=error.code;
        dispatch({type: 'CHANGE_ISLOADING', value: false})
      })
    )
}

export const loginUserAPI =(data)=>(dispatch)=>{
  return new Promise((resolve, reject)=>{ // membuat promise
    const auth = getAuth();
    dispatch({type: 'CHANGE_ISLOADING', value: true})
      signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response)=>{
        const dataUser = {
          email : response.user.email,
          uid : response.user.uid,
          emailVerified : response.user.emailVerified
        }
        console.log(dataUser)
        dispatch({type: 'CHANGE_ISLOADING', value: false})
        // menambahkan logic login setelah login selesai
        dispatch({type: 'CHANGE_ISLOGIN', value: true})
        dispatch({type: 'CHANGE_ISLOGIN', value: dataUser})
        resolve(true)
      })
      .catch(function (error) {
        console.log=error.message;
        console.log=error.code;
        dispatch({type: 'CHANGE_ISLOADING', value: false})
        // menambahkan logic login setelah login selesai
        dispatch({type: 'CHANGE_ISLOGIN', value: false})
        reject(false)
      })
  })
}
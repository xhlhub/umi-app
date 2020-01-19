export default {
    namespace: 'app',
  
    state: {
      loginstate:false,
    },
    effects: {
      *test({ payload },{ put }){
        yield put({type:"logout"})
      }
    },
    reducers: {
      logout(state, {payload}){
        debugger
        console.log(state.loginstate)
        state.loginstate=!state.loginstate;
        return state
      }
    }
  }
  
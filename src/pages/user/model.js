import { getUserApi } from '@/services/user'
export default {
    namespace: 'user',
  
    state: {
      userList: [
          {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
          },
          {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
          },
        ],
      count:0,
    },
  
    effects: {
      *updateuser({payload},{ put ,call}){
        const res =  yield call(getUserApi,payload)
        if(res.success){
          // yield put({payload:res.data,type:'updateuserList'})
        }
      }
    },
  
    reducers: {
      addcount(state, {payload}){
        state.count++;
        return state
      },
      updateuserList(state, {payload}){
        return {...state,userList:payload}
      },
      addUser(state, {payload}){
        state.userList.push(payload)
        return state
      }
    }
  }
  
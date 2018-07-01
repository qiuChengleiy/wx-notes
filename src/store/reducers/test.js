import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT,ADD } from '../types/counter'

export default handleActions({
  [ADD] (state,action) {
    return {
      ...state,
      name: state.name + 'haha' + action.type + action.payload.name,
      pass: state.name + state.pass
    }
  },
  [DECREMENT] (state) {
    return {
      ...state,
      pass: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      days: state.pass + '->' + action.payload
    }
  }
}, {
  name: 'wepy',
  pass: 0
})
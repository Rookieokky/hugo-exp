// Import Actions
import { SET_LEAVE_ANIMATION } from './HomeActions';

// Initial State
const initialState = {
  animation: '',
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEAVE_ANIMATION:
      return Object.assign({}, state, {
        animation: action.animation,
      });
    default:
      return state;
  }
};

export const getLeaveAnimation = state => state.home.animation;

export default HomeReducer;

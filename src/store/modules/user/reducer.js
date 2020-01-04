import produce from 'immer';

const INITIAL_STATE = {
  user: null,
}

export default function userReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        const { user } = action.payload;
        draft.user = user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.user = null;
        break;
      }
      default:
    }
  })
}

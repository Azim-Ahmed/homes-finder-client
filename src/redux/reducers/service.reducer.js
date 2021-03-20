import { serviceConstants } from '../actions/constant';

const initState = {
  categories: [],
  loading: false,
  error: null,
};

const serviceReducer = (state = initState, action) => {
  switch (action.type) {
    case serviceConstants.GET_ALL_SERVICE_SUCCESS:
      return {
        ...state,
        services: action.payload.services,
      };
    case serviceConstants.GET_ALL_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default serviceReducer;

import axios from '../../helpers-axios/axios';
import { serviceConstants } from './constant';

export const getAllServices = () => {
  return async (dispatch) => {
    dispatch({
      type: serviceConstants.GET_ALL_SERVICE_REQUEST,
    });
    const res = await axios.get(`/services/getAllServices`);
    //console.log(res);
    if (res.status === 200) {
      dispatch({
        type: serviceConstants.GET_ALL_SERVICE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: serviceConstants.GET_ALL_SERVICE_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

// export const getAllService = (slug) => {
//   return async (dispatch) => {
//     const res = await axios.get(`/products/${slug}`);
//     console.log(res);
//     if (res.status === 200) {
//       dispatch({
//         type: productConstants.GET_PRODUCTS_BY_SLUG,
//         payload: res.data,
//       });
//     }
//   };
// };

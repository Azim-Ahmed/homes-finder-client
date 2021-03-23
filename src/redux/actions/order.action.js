import axios from '../../helpers-axios/axios';
import { orderConstants } from './constant';
export const getAllOrder = () => {
  return async (dispatch) => {
    dispatch({
      type: orderConstants.GET_ALL_ORDER_REQUEST,
    });
    const res = await axios.get(`/category/getcategory`);
    // console.log(res);
    if (res.status === 200) {
      const { order } = res.data;
      dispatch({
        type: orderConstants.GET_ALL_ORDER_SUCCESS,
        payload: { orders: order },
      });
    } else {
      dispatch({
        type: orderConstants.GET_ALL_ORDER_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

import { setPresidents, setLoading, setError } from '../actions';
import { fetchData } from '../utils/api';

export const getPresidents = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const presidents = await fetchData('http://localhost:3001/api/v1/presidents');
      dispatch(setPresidents(presidents));
    } catch (error) {
      dispatch(setError(error));
    }
    dispatch(setLoading(false));
  }
}

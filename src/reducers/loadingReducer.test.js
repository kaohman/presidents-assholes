import loadingReducer from './loadingReducer';
import { setLoading } from '../actions';

describe('loadingReducer', () => {
  it('should return the initial state', () => {
    const expected = false;
    const result = loadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with an error', () => {
    const expected = true;
    const result = loadingReducer(undefined, setLoading(expected));
    expect(result).toEqual(expected);
  });
});
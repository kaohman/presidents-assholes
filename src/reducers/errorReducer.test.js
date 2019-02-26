import errorReducer from './errorReducer';
import { setError } from '../actions';

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with an error', () => {
    const expected = 'this is an error';
    const result = errorReducer(undefined, setError(expected));
    expect(result).toEqual(expected);
  });
});
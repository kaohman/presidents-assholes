import partyReducer from './partyReducer';
import { setParty } from '../actions';

describe('partyReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = partyReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with an error', () => {
    const expected = 'Whig';
    const result = partyReducer(undefined, setParty(expected));
    expect(result).toEqual(expected);
  });
});
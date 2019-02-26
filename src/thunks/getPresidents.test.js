import { setPresidents, setLoading, setError } from '../actions';
import { fetchData } from '../utils/api';
import { getPresidents } from './getPresidents';
jest.mock('../utils/api');

describe('getPresidents', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('should call dispatch with the setLoading(true) action', () => {
    const thunk = getPresidents();
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct params', () => {
    // const thunk = getPresidents();
    // thunk(mockDispatch);
    // expect(mockDispatch).toHaveBeenCalledWith(fetchData('http://localhost:3001/api/v1/presidents'));
  });

  it('should call dispatch with the setPresidents action if everything is ok', () => {

  });

  it('should call dispatch with the setError action if unsuccessful', () => {

  });

  it('should call dispatch with the setLoading(false) action', () => {

  });
});
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
    const thunk = getPresidents();
    thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith('http://localhost:3001/api/v1/presidents');
  });

  it('should call dispatch with the setPresidents action if everything is ok', async () => {
    const mockPresidents = [
      {
        number: 1,
        president: "George Washington",
        birth_year: 1732,
        death_year: 1799,
        took_office: "1789-04-30",
        left_office: "1797-03-04",
        party: "No Party"
      },
      {
        number: 2,
        president: "John Adams",
        birth_year: 1735,
        death_year: 1826,
        took_office: "1797-03-04",
        left_office: "1801-03-04",
        party: "Federalist"
      }
    ]
    fetchData.mockReturnValue(mockPresidents);
    const thunk = getPresidents();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setPresidents(mockPresidents));
  });

  it('should call dispatch with the setError action if unsuccessful', async () => {
    const mockError = new Error('error message');
    fetchData.mockImplementation(mockError);
    const thunk = getPresidents();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError(mockError));
  });

  it('should call dispatch with the setLoading(false) action', async () => {
    const thunk = getPresidents();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });
});
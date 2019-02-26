import presidentsReducer from './presidentsReducer';
import { setPresidents } from '../actions';

describe('presidentsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = presidentsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with an error', () => {
    const expected = [
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
      },
    ];
    const result = presidentsReducer(undefined, setPresidents(expected));
    expect(result).toEqual(expected);
  });
});
import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of SET_PRESIDENTS', () => {
    const presidents = [
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
    const expected = {
      type: 'SET_PRESIDENTS',
      presidents
    };
    const result = actions.setPresidents(presidents);
    expect(result).toEqual(expected);
  });

  it('should have a type of SET_LOADING', () => {
    const loading = false;
    const expected = {
      type: 'SET_LOADING',
      loading
    };
    const result = actions.setLoading(loading);
    expect(result).toEqual(expected);
  });

  it('should have a type of SET_ERROR', () => {
    const error = 'this is an error';
    const expected = {
      type: 'SET_ERROR',
      error
    };
    const result = actions.setError(error);
    expect(result).toEqual(expected);
  });
});
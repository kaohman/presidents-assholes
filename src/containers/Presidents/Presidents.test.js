import { Presidents, mapStateToProps } from './Presidents';

describe('Presidents', () => {

  describe('mapStateToProps', () => {
    it('should return an object with a presidents array', () => {
      const mockState = {
        party: 'Whig',
        presidents: [
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
        ],
        otherState: false
      };
      const expected = {
        party: 'Whig',
        presidents: [
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
        ]
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
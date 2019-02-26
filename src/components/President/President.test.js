import President from './President';
import { shallow } from 'enzyme';
import React from 'react';

describe('President', () => {
  let wrapper;
  let presidentMock;

  beforeEach(() => {
    presidentMock = {
      number: 2,
      president: "John Adams",
      birth_year: 1735,
      death_year: 1826,
      took_office: "1797-03-04",
      left_office: "1801-03-04",
      party: "Federalist"
    };
    wrapper = shallow(
      <President
        president={presidentMock}
      />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
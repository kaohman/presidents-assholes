import { FilterControls, mapDispatchToProps } from './FilterControls';
import { setParty } from '../../actions';
import { shallow } from 'enzyme';
import React from 'react';

describe('FilterControls', () => {
  let wrapper;
  let setPartyMock;

  beforeEach(() => {
    setPartyMock = jest.fn();
    wrapper = shallow(
      <FilterControls
        setParty={setPartyMock}
      />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('updateParty', () => {
    it('should update the party when a new option is selected', () => {
      const mockEvent = { target: { value: 'Whig' } };
      wrapper.find('select').simulate('change', mockEvent);
      expect(setPartyMock).toHaveBeenCalledWith('Whig');
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with setParty is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setParty();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setParty();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
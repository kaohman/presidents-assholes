import { FilterControls, mapDispatchToProps } from './FilterControls';
import { setParty } from '../../actions';

describe('FilterControls', () => {
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
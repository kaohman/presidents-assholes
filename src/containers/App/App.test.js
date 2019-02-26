import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getPresidents } from '../../thunks/getPresidents';
jest.mock('../../thunks/getPresidents');

describe('App', () => {

  describe('mapStateToProps', () => {
    it('should return an object with a presidents array', () => {
      const mockState = {
        error: 'error message',
        loading: false,
        otherState: false
      };
      const expected = {
        error: 'error message',
        loading: false
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with getPresidents when componentDidMount is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getPresidents();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getPresidents();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });
  });
});
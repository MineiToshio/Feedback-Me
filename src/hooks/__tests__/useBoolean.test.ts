import useBoolean from '../useBoolean';
import { act, renderHook } from '@testing-library/react';

describe('useBoolean', () => {
  it('can update state with the standard setter function', () => {
    const { result } = renderHook(() => useBoolean());

    expect(result.current.state).toStrictEqual(false);
    act(() => result.current.setState(true));
    expect(result.current.state).toStrictEqual(true);
    act(() => result.current.setState(false));
    expect(result.current.state).toStrictEqual(false);
  });

  it('updates the state with the memoized helper functions', () => {
    const { result } = renderHook(() => useBoolean());

    expect(result.current.state).toStrictEqual(false);
    act(() => result.current.setTrue());
    expect(result.current.state).toStrictEqual(true);
    act(() => result.current.setFalse());
    expect(result.current.state).toStrictEqual(false);
  });

  it('updates the state with toggle helper functions', () => {
    const { result } = renderHook(() => useBoolean(false));

    expect(result.current.state).toStrictEqual(false);
    act(() => result.current.toggleState());
    expect(result.current.state).toStrictEqual(true);
    act(() => result.current.toggleState());
    expect(result.current.state).toStrictEqual(false);
  });
});

import { fireEvent } from "@testing-library/dom";
import { renderHook } from "@testing-library/react";
import useHandleOutsideClick from "../useHandleOutsideClick";

jest.mock("react", () => {
  return {
    ...jest.requireActual("react"),
    useRef: () => {
      return {
        current: {
          contains: () => false,
        },
      };
    },
  };
});

describe("useHandleOutsideClick", () => {
  it("fire the callback when user click outside the window", () => {
    const mockCallback = jest.fn(() => {})

    renderHook(() => useHandleOutsideClick(mockCallback));
    fireEvent.mouseDown(document);
    expect(mockCallback).toHaveBeenCalled();
  });

  it("don't fire the callback", () => {
    const mockCallback = jest.fn(() => {})
    
    renderHook(() => useHandleOutsideClick(mockCallback));

    expect(mockCallback).toHaveBeenCalledTimes(0);
  });
});

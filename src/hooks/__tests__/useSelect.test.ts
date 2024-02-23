import useSelect from "../useSelect";
import { act, renderHook } from "@testing-library/react";

const mockOptions = [
  {
    value: 1,
    label: "UI",
  },
  {
    value: 2,
    label: "UX",
  },
  {
    value: 3,
    label: "Enhancement",
  },
  {
    value: 4,
    label: "Bug",
  },
];

describe("useSelect", () => {
  it("can update open state with the toggle functions", () => {
    const { result } = renderHook(() => useSelect(mockOptions[0].value, mockOptions));

    expect(result.current.open).toStrictEqual(false);
    act(() => result.current.toggleOpen());
    expect(result.current.open).toStrictEqual(true);
    act(() => result.current.toggleOpen());
    expect(result.current.open).toStrictEqual(false);
  });

  it("get the selectedOption correctly", () => {
    const { result } = renderHook(() => useSelect(mockOptions[0].value, mockOptions));

    expect(result.current.selectedOption).toStrictEqual(mockOptions[0]);
  });
});

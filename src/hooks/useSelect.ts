import { useMemo } from "react";
import useBoolean from "./useBoolean";
import useHandleOutsideClick from "./useHandleOutsideClick";

export type Option = {
  label: string;
  value: number;
};

const useSelect = (value: number | undefined, options: Option[]) => {
  const {
    state: open,
    toggleState: toggleOpen,
    setFalse: closeOptions,
  } = useBoolean(false);

  const selectedOption = useMemo(
    () => options.find((o) => o.value === value),
    [options, value],
  );

  const ref = useHandleOutsideClick(closeOptions);

  return {
    open,
    toggleOpen,
    selectedOption,
    ref,
  };
};

export default useSelect;

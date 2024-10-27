import { useState, useCallback } from "react";

const useToggleString = (active: string) => {
  const [activeElement, setActiveElement] = useState<string>(active);

  const handleChange = useCallback((active: string) => {
    setActiveElement(active);
  }, []);
  return {
    activeElement,
    handleChange,
  };
};

export default useToggleString;

/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
type SliderToggleContextProps = {
  on:  string | undefined;
  toggle: () => void;
};
const SliderToggleContext = createContext<SliderToggleContextProps>({
  on: undefined,
  toggle: () => {},
});
export const SliderToggleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [on, setOn] = useState(undefined as string | undefined);
  const toggle = () => setOn((prev) => prev === undefined ? "true" : undefined );
  return (
    <SliderToggleContext.Provider value={{ on, toggle }}>
      {children}
    </SliderToggleContext.Provider>
  );
};
export const useSliderToggle = () => useContext(SliderToggleContext);

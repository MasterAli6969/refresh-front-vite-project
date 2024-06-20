export interface CustomButtonPropsType {
  color: "light" | "dark" | "warning";
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

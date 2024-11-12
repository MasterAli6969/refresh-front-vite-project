import "./ValueTypeTexte.css";

export interface IValueTypeTexteProps {
  value?: string;
  type?: "texte" | "password";
  className?: string;
}

export const ValueTypeTexte = ({
  value = "Value",
  type = "texte",
  className,
  ...props
}: IValueTypeTexteProps): JSX.Element => {
  const variantsClassName = "type-" + type;

  return (
    <div className={"value-type-texte " + className + " " + variantsClassName}>
      <div className="value">{value} </div>
    </div>
  );
};

import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: "1.902rem", // 1.585rem * 1.2
  height: "1.243rem", // 1.036rem * 1.2
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: "0.146rem", // 0.122rem * 1.2
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(0.659rem)", // 0.549rem * 1.2
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#32ADE6",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "0.439rem solid #fff", // 0.366rem * 1.2
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: "0.952rem", // 0.793rem * 1.2
    height: "0.952rem", // 0.793rem * 1.2
  },
  "& .MuiSwitch-track": {
    borderRadius: "1.902rem", // 1.585rem * 1.2
    backgroundColor: "#292C33",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function CustomIOSSwitch() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<IOSSwitch sx={{}} defaultChecked />}
        label=""
      />
    </FormGroup>
  );
}

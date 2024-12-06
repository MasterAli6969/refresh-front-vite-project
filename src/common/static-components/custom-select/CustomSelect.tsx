import { FC, useState, useEffect } from "react";
import styles from "./custom_select.module.scss";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

export interface CustomSelectDataType {
  id: number | string;
  selectItem: string;
}

export interface CustomSelectPropsType {
  width?: string;
  title?: string;
  customSelectData?: CustomSelectDataType[];
  handleSelectId?: (key: string | number) => void;
}

const CustomSelect: FC<CustomSelectPropsType> = ({
  width = "100%",
  title,
  customSelectData = [
    { id: 1, selectItem: "selectItem1" },
    { id: 2, selectItem: "selectItem2" },
  ],
  handleSelectId,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  useEffect(() => {
    if (customSelectData.length > 0) {
      const defaultValue = customSelectData[0].id.toString();
      setSelectedValue(defaultValue);
      if (handleSelectId) {
        handleSelectId(defaultValue);
      }
    }
  }, [customSelectData, handleSelectId]);

  const handlerSelect = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (handleSelectId) {
      handleSelectId(value);
    }
  };

  return (
    <div className={styles.div}>
      {title && <h3>{title}</h3>}
      <div>
        <Select
          value={selectedValue}
          onChange={handlerSelect}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            width: `${width}`,
            backgroundColor: "#24272E",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "0.75rem",
            height: "2.5rem",
            "& .MuiSelect-icon": {
              color: "#555",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3E4044",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3E4044",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3E4044",
            },
            "& .MuiInputBase-input": {
              color: "#fff",
              fontSize: "0.75rem",
              lineHeight: "1.5",
            },
            "& .MuiInputBase-input.Mui-disabled": {
              color: "#9C9DA0",
            },
            "& .MuiSelect-placeholder": {
              color: "#9C9DA0",
            },
            "&.Mui-focused": {
              backgroundColor: "transparent", // Уберите подсветку по своему вкусу
            },
          }}
        >
          {customSelectData.length === 0 ? (
            <MenuItem disabled sx={{ fontSize: "0.75rem" }}>
              Ooops, server error, please wait...
            </MenuItem>
          ) : (
            customSelectData.map((item) => (
              <MenuItem
                key={item.id}
                value={item.id.toString()}
                sx={{ fontSize: "0.75rem" }}
              >
                {item.selectItem}
              </MenuItem>
            ))
          )}
        </Select>
      </div>
    </div>
  );
};

export default CustomSelect;

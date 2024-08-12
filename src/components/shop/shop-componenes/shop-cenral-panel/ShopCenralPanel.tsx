import { FC, useState, useEffect, useCallback } from "react";

import CustomToggleButton from "../../../../common/static-components/custom-toggle-button/CustomToggleButton";
import CustomInput from "../../../../common/static-components/custom-input/CustomInput";

import styles from "./shop_cenral_panel.module.scss";
import ProsuctItemList from "./shop-cenral-panel-components/prosuct-item-list/ProsuctItemList";

const ShopCenralPanel: FC = () => {
  const [selectedPropductType, setSelectedPropductType] = useState<string>("");

  const [searchPropduct, setSearchPropduct] = useState<string>("");

  const handleSelectPropductType = useCallback(() => {
    setSelectedPropductType("Product");
  }, []);

  const handleChangeSearchProduct = (value: string) => {
    setSearchPropduct(value);
  };

  useEffect(() => {
    handleSelectPropductType();
  }, [handleSelectPropductType]);

  const handleSelectPropductTypeClick = (type: string) => {
    setSelectedPropductType(type);
  };

  return (
    <div className={styles.div}>
      <div className={styles.subdiv_button_type}>
        <CustomToggleButton
          active={selectedPropductType === "Product"}
          onClick={() => handleSelectPropductTypeClick("Product")}
        >
          <img src="" alt="" />
          <h3>Товары</h3>
        </CustomToggleButton>
        <CustomToggleButton
          active={selectedPropductType === "Tariffs"}
          onClick={() => handleSelectPropductTypeClick("Tariffs")}
        >
          <img src="" alt="" />
          <h3>Тарифы</h3>
        </CustomToggleButton>
      </div>
      <div className={styles.subdiv_search_input}>
        <CustomInput
          value={searchPropduct || ""}
          onChange={handleChangeSearchProduct}
          placeholder="Поиск товаров"
        />
      </div>
      <div className={styles.subdiv_product_panel}>
        <ProsuctItemList searchInputValue={searchPropduct} />
      </div>
    </div>
  );
};

export default ShopCenralPanel;

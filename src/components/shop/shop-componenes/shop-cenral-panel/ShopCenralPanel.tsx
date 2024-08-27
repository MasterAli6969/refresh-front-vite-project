import { FC, useState } from "react";

import CustomToggleButton from "../../../../common/static-components/custom-toggle-button/CustomToggleButton";
import CustomInput from "../../../../common/static-components/custom-input/CustomInput";

import styles from "./shop_cenral_panel.module.scss";
import ProductItemList from "./shop-cenral-panel-components/product-item-list/ProductItemList";

const ShopCenralPanel: FC = () => {
  const [selectedPropductType, setSelectedPropductType] = useState<string>("");

  const [searchPropduct, setSearchPropduct] = useState<string>("");

  const handleChangeSearchProduct = (value: string) => {
    setSearchPropduct(value);
  };

  const handleToggleChange = (activeItem: string) => {
    setSelectedPropductType(activeItem);
  };

  return (
    <div className={styles.div}>
      <div className={styles.subdiv_button_type}>
        <CustomToggleButton
          onToggleChange={handleToggleChange}
          buttonsText={["Товары", "Тарифы"]}
        />
      </div>

      <div className={styles.subdiv_search_input}>
        <CustomInput
          value={searchPropduct || ""}
          onChange={handleChangeSearchProduct}
          placeholder="Поиск товаров"
        />
      </div>
      <div className={styles.subdiv_product_panel}>
        <ProductItemList
          productRenderType={selectedPropductType}
          searchInputValue={searchPropduct}
        />
      </div>
    </div>
  );
};

export default ShopCenralPanel;

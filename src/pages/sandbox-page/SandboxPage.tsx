import { FC } from "react";
import CustomAvatarName from "../../common/static-components/custom-avatar-name/CustomAvatarName";
import CustomButton from "../../common/static-components/custom-button/CustomButton";
import CustomConfirmationModalWindow from "../../common/static-components/custom-confirmation-modal-window/CustomConfirmationModalWindow";
import CustomUserName from "../../common/static-components/custom-user-name/CustomUserName";
import CustomCounterInput from "../../common/static-components/custom-counter-input/CustomCounterInput";
import CustomDualButtonYesNo from "../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CustomIconButton from "../../common/static-components/custom-icon-button/CustomIconButton";
import CustomInput from "../../common/static-components/custom-input/CustomInput";
import CustomToggleButton from "../../common/static-components/custom-toggle-button/CustomToggleButton";
import CustomTextarea from "../../common/static-components/custom-textarea/CustomTextarea";
import CustomSwitchButton from "../../common/static-components/custom-switch-button/CustomSwitchButton";
import CustomStatickList from "../../common/static-components/custom-statick-list/CustomStatickList";
import CustomSelect from "../../common/static-components/custom-select/CustomSelect";
import CustomRadioButton from "../../common/static-components/custom-radio-button/CustomRadioButton";
import CustomPcIcon from "../../common/static-components/custom-pc-icon/CustomPcIcon";
import CustomPasswordInput from "../../common/static-components/custom-password-input/CustomPasswordInput";
import CustomMailInput from "../../common/static-components/custom-mail-input/CustomMailInput";
import CustomLogo from "../../common/static-components/custom-logo/CustomLogo";
import CustomMenuRightOpenWrapper from "../../common/smart-component/custom-menu-right-open-wrapper/CustomMenuRightOpenWrapper";
//МОДАЛЬНЫЕ ОКНА
import ReplenishmentBalanceModalWindows from "../../common/special-componet/replenishment-balance-modal-windows/ReplenishmentBalanceModalWindows";
import ChangeLocationModalWindow from "../../components/control-panel/control-panel-components/control-panel-pc-icons/pc-icon/pc-icon-menu/pc-icon-menu-modal-windows/change-location-modal-window/ChangeLocationModalWindow";
import EditPcModalWindow from "../../components/control-panel/control-panel-components/control-panel-pc-icons/pc-icon/pc-icon-menu/pc-icon-menu-modal-windows/edit-pc-modal-window/EditPcModalWindow";
import ScreenshotSavedModalWindows from "../../components/control-panel/control-panel-components/control-panel-pc-icons/pc-icon/pc-icon-menu/pc-icon-menu-modal-windows/screenshot-saved-modal-windows/ScreenshotSavedModalWindows";
// ТЕСТОВЫЕ ДАННЫЕ ДЛЯ ПРОВЕРКИ РЕНДЕРА
import MoneyIconMini from "../../assets/icons/MoneyIconMini.svg";
import GuestSessionModalWindow from "../../components/control-panel/control-panel-components/control-panel-pc-icons/pc-icon/pc-icon-menu/pc-icon-menu-modal-windows/guest-session-modal-window/GuestSessionModalWindow";

const SandboxPage: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
        maxWidth: "35rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomAvatarName</h2>
        <CustomAvatarName name="CA" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomUserName</h2>
        <CustomUserName initials="CU" name="CustomUserName" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomToggleButton</h2>
        <CustomToggleButton
          label="vfnkfvlfdjkvfn"
          buttonsText={["CustomToggleButton1", "CustomToggleButton2"]}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomButton</h2>
        <CustomButton color="transparent">CustomButton</CustomButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomConfirmationModalWindow</h2>
        <CustomConfirmationModalWindow
          redaxStateKey={"CustomConfirmationModalWindow"}
          text="CustomConfirmationModalWindow"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomCounterInput</h2>
        <CustomCounterInput label="CustomCounterInput" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomDualButtonYesNo</h2>
        <CustomDualButtonYesNo
          buttonRightText="CustomDualButtonYesNo"
          redaxStateKey={"CustomDualButtonYesNo"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomTextarea</h2>
        <CustomTextarea
          label="CustomTextarea"
          plaseholder="CustomTextarea plaseholder"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomSwitchButton</h2>
        <CustomSwitchButton
          buttonLeft="CustomSwitchButton1"
          buttonRight="CustomSwitchButton2"
          componentLeft={() => (
            <CustomButton color="dark">
              <p>CDSSDCSDS</p>
            </CustomButton>
          )}
          componentRight={() => (
            <CustomDualButtonYesNo
              buttonRightText="CustomDualButtonYesNo"
              redaxStateKey="CustomDualButtonYesNo"
            />
          )}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomStatickList</h2>
        <CustomStatickList
          customStatickListData={[
            {
              id: 1,
              title: "CustomStatickList1",
              url: "#",
            },
            {
              id: 2,
              title: "CustomStatickList2",
              url: "#",
            },
            {
              id: 3,
              title: "CustomStatickList3",
              url: "#",
            },
            {
              id: 4,
              title: "CustomStatickList4",
              url: "#",
            },
          ]}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomSelect</h2>
        <CustomSelect
          customSelectData={[
            {
              id: 1,
              selectItem: "CustomSelect1",
            },
            {
              id: 2,
              selectItem: "CustomSelect2",
            },
            {
              id: 3,
              selectItem: "CustomSelect3",
            },
            {
              id: 4,
              selectItem: "CustomSelect4",
            },
          ]}
          selectTitle="vddfvdfvdf"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomRadioButton</h2>
        <CustomRadioButton
          radioLeft="CustomRadioButton1"
          redioRight="CustomRadioButton1"
          title="CustomRadioButton"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomPcIcon</h2>
        <CustomPcIcon number={1} status="CustomPcIcon" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomPasswordInput</h2>
        <CustomPasswordInput
          label="CustomPasswordInput"
          name="CustomPasswordInput"
          value="CustomPasswordInput"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomMailInput</h2>
        <CustomMailInput
          label="CustomMailInput"
          name="6cs51cd"
          value="6c1dsc5d"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomLogo</h2>
        <CustomLogo display="block" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomInput</h2>
        <CustomInput label="CustomInput" placeholder="CustomInput" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomIconInput</h2>
        <CustomInput
          icon={MoneyIconMini}
          label="CustomInput"
          placeholder="CustomInput"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>CustomIconButton</h2>
        <CustomIconButton>
          <div style={{ width: "50px", backgroundColor: "red" }}></div>
        </CustomIconButton>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <CustomMenuRightOpenWrapper
          openMenu={() => (
            <CustomStatickList
              customStatickListData={[
                { id: 1, title: "CustomStatickList1", url: "#" },
                { id: 2, title: "CustomStatickList1", url: "#" },
                { id: 3, title: "CustomStatickList1", url: "#" },
                { id: 4, title: "CustomStatickList1", url: "#" },
              ]}
            />
          )}
        >
          <h2 style={{ border: "1px solid green" }}>Custom</h2>
        </CustomMenuRightOpenWrapper>
      </div>
      <h1>ТУТ У НАС ИДУТ СПЕЦИФИЧНЫЕ КОМПОНЕНТЫ И УМНЫЕ МОДАЛЬНЫЕ ОКНА</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>ReplenishmentBalanceModalWindows</h2>

        <ReplenishmentBalanceModalWindows redaxStateKey={"cdsncjdsnk"} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>ChangeLocationModalWindow</h2>
        <ChangeLocationModalWindow redaxStateKey={"cbhjdscbjhds"} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>EditPcModalWindow</h2>
        <EditPcModalWindow redaxStateKey={"jnvkfdjvnkdfj"} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>ScreenshotSavedModalWindows</h2>
        <ScreenshotSavedModalWindows redaxStateKey={"cdkfvkfdlvndf"} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
          padding: "1rem",
        }}
      >
        <h2>GuestSessionModalWindow</h2>
        <GuestSessionModalWindow redaxStateKey="CustomInputIconsSpesial" />
      </div>
    </div>
  );
};

export default SandboxPage;
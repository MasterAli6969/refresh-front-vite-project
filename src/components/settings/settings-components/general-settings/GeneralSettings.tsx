import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./general_settings.module.scss";
import { ValueTypeTexte } from "../ValueTypeTexte/ValueTypeTexte";

const GeneralSettings: FC = () => {
  //className={styles.div}

  return (
    <div className="frame-480966718">
      <div className="frame-480966719">
        <div className="frame-480966440">
          <div className="div2">Название клуба </div>
          <div className="div3">Оно будет отображаться как в веб-панели </div>
        </div>
        <div className="search-default2">
          <div className="title">Введите название клуба </div>
        </div>
      </div>
      <div className="frame-480966720">
        <div className="frame-480966440">
          <div className="div2">Язык </div>
          <div className="div3">Язык контрольной панели </div>
        </div>
        <div className="combobox">
          <div className="frame-480966699">
            <div className="frame-480966441">
              <div className="frame-480966700">
                <img
                  className="icons-8-russian-federation-50-1"
                  src="icons-8-russian-federation-50-10.png"
                />
                <div className="div4">Русский </div>
              </div>
              <img className="svg" src="svg0.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-480966731">
        <div className="frame-480966440">
          <div className="div2">Временная зона </div>
          <div className="div3">Выберите временную зону вашего центра </div>
        </div>
        <div className="combobox">
          <div className="frame-480966699">
            <div className="frame-480966441">
              <div className="frame-480966700">
                <div className="gmt-3-moscow-russia">
                  GMT(+3) Moscow, Russia{" "}
                </div>
              </div>
              <img className="svg2" src="svg1.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-480966722">
        <div className="frame-480966440">
          <div className="div5">Основная платежная валюта </div>
          <div className="div6">
            Оно будет отображаться как в веб-панели, так и в клиентской части{" "}
          </div>
        </div>
        <div className="combobox">
          <div className="frame-480966699">
            <div className="frame-480966441">
              <div className="frame-480966700">
                <div className="div7">₽ (Российский рубль) </div>
              </div>
              <img className="svg3" src="svg2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="frame-480966721">
        <div className="frame-480966440">
          <div className="div8">Регистрация клиентов </div>
          <div className="div9">
            Включение данной функции сделает регистрацию клиентов обязательной и
            сделает невозможной гостевой сессию{" "}
          </div>
        </div>
        <div className="input">
          <div className="background"></div>
        </div>
      </div>
      <div className="frame-480966729">
        <div className="frame-480966440">
          <div className="div10">Конвертация гостевого сеанса </div>
          <div className="div11">
            Разрешить регистрацию пользователя из среды гостевого сеанса. Баланс
            и время пользователя будут перенесены автоматически{" "}
          </div>
        </div>
        <div className="input">
          <div className="background"></div>
        </div>
      </div>
      <div className="frame-480966723">
        <div className="frame-480966440">
          <div className="div12">Возврат средств и отмена покупок </div>
          <div className="div13">
            Установить ограничение на отмену покупок и возврат средств (мин){" "}
          </div>
        </div>
        <div className="body">
          <ValueTypeTexte
            value="Введите время.."
            className="value-instance"
          ></ValueTypeTexte>
          <img className="frame-480966469" src="frame-4809664690.svg" />
        </div>
      </div>
      <div className="frame-480966725">
        <div className="frame-480966440">
          <div className="div12">Режим смены администратора </div>
          <div className="div9">
            При выборе строгого режима, смена администратора будет закрыта в
            назначенное время{" "}
          </div>
        </div>
        <div className="frame-480966449">
          <div className="frame-480966452">
            <div className="frame-480966448">
              <div className="div14">Свободный </div>
              <div className="frame-4809664492">
                <div className="ellipse-22"></div>
              </div>
            </div>
            <div className="frame-480966447">
              <div className="div14">Строгий </div>
              <div className="frame-4809664493"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-480966726">
        <div className="frame-4809664402">
          <div className="div15">Верификация с помощью телефона </div>
          <div className="sms">
            Если вы хотите использовать верификацию пользователя с помощью SMS,
            включите данную функцию{" "}
          </div>
        </div>
        <div className="input">
          <div className="background"></div>
        </div>
      </div>
      <div className="frame-480966727">
        <div className="frame-4809664402">
          <div className="_18">Ограничение посещения (18+) </div>
          <div className="_22-00">
            Ограничение посещения клиентов не достигших совершеннолетнего
            возраста после 22:00{" "}
          </div>
        </div>
        <div className="input">
          <div className="background"></div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;

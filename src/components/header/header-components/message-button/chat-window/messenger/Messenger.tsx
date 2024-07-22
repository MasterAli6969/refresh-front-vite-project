import { FC, useState } from "react";

import { messageOutgoingEmployeesData } from "../../../../data";

import styles from "./messenger.module.scss";

export interface MessageDataType {
  id: number;
  name: string;
  time: string;
  message: string;
}

const Messenger: FC = () => {
  const [messageElement, setMessageElement] = useState<MessageDataType>({
    id: 0,
    name: "Я",
    time: "",
    message: "",
  });

  const [massageArray, setMessageArray] = useState<MessageDataType[]>([
    messageOutgoingEmployeesData,
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageElement({
      ...messageElement,
      message: event.target.value,
    });
  };

  const handleSend = () => {
    if (messageElement.message.trim()) {
      const newMessage = {
        ...messageElement,
        id: massageArray.length + 1,
        time: new Date().toLocaleTimeString().slice(0, 5),
      };
      setMessageArray([...massageArray, newMessage]);
      setMessageElement({
        id: 0,
        name: "Ваше Имя",
        time: "",
        message: "",
      });
    }
  };

  return (
    <div className={styles.div}>
      <div className={styles.subdiv_message_window}>
        {massageArray.map((item: MessageDataType) => {
          return (
            <div key={item.id} className={styles.incoming_message}>
              <div>
                <h4>{item.name}</h4>
                <p>{item.time}</p>
              </div>
              <div>
                <h4>{item.message}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.subdiv_input_message}>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Введите  сообщение"
        />
        <button onClick={handleSend}>
          <p>Отправить</p>
        </button>
      </div>
    </div>
  );
};

export default Messenger;

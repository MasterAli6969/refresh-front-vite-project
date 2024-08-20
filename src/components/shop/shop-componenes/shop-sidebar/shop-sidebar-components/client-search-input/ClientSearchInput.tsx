import { FC, useCallback, useEffect, useMemo, useState } from "react";
import SearchIcon from "../../../../../../assets/icons/SearchIcon.svg";
import CloseIcon from "../../../../../../assets/icons-svg-components/CloseIcon";

import { clientSearchTestData } from "../../../data";
import styles from "./client_search_input.module.scss";

interface ClientDataType {
  id: number;
  name: string;
}

const ClientSearchInput: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [clientsData, setClientsData] = useState<ClientDataType[]>([]);
  const [selectClient, setSelectClient] = useState<string>("");

  const handleGetClientsData = useCallback(() => {
    setClientsData(clientSearchTestData);
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClose = () => {
    setIsFocused(false);
    setSearch("");
    setSelectClient("");
  };

  const handleSelectUser = (id: number) => {
    const user = clientsData.find((item) => item.id === id);
    if (user) {
      setSelectClient(user.name);
      setIsFocused(false);
    }
  };

  useEffect(() => {
    handleGetClientsData();
  }, [handleGetClientsData]);

  const filterClientsData = useMemo(() => {
    return clientsData.filter((client) =>
      client.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, clientsData]);

  return (
    <div className={styles.div}>
      <div className={styles.subdiv_search}>
        <img src={SearchIcon} alt="Search Icon" />
        {selectClient === "" ? (
          <input
            type="text"
            value={search}
            onFocus={handleFocus}
            onChange={handleChange}
            placeholder="Поиск клиентов"
          />
        ) : (
          <div>
            <p>{selectClient}</p>
          </div>
        )}

        {isFocused ||
          (selectClient != "" && (
            <span onClick={handleClose} className={styles.closeIcon}>
              <CloseIcon />
            </span>
          ))}
      </div>

      {isFocused && (
        <div className={styles.subdiv_client_list}>
          <ul>
            {filterClientsData.length === 0 && search ? (
              <h1>Ожидание...</h1>
            ) : (
              filterClientsData.map((item: ClientDataType) => (
                <li key={item.id} onClick={() => handleSelectUser(item.id)}>
                  <p>{item.name}</p>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClientSearchInput;

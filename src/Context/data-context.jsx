import { useContext, useState } from "react";
import { createContext } from "react";

const DataContext = createContext();
const DataProvider = ({ children }) => {
    const [name, setName] = useState("");


  return (
    <DataContext.Provider value={{ name, setName }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };

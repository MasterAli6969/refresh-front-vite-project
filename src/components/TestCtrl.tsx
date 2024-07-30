import { useState, useEffect } from "react";

interface Person {
  name: string;
  age: number;
  lastName: string;
  sex: string;
}

const SelectableSquares: React.FC = () => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const [isCtrlPressed, setIsCtrlPressed] = useState<boolean>(false);

  // Пример массива объектов
  const people: Person[] = [
    { name: "John", age: 30, lastName: "Doe", sex: "Male" },
    { name: "Jane", age: 25, lastName: "Smith", sex: "Female" },
    { name: "Alice", age: 28, lastName: "Johnson", sex: "Female" },
    { name: "Bob", age: 32, lastName: "Brown", sex: "Male" },
    { name: "Carol", age: 27, lastName: "Davis", sex: "Female" },
    { name: "Dave", age: 29, lastName: "Miller", sex: "Male" },
    { name: "Eve", age: 26, lastName: "Wilson", sex: "Female" },
    { name: "Frank", age: 35, lastName: "Moore", sex: "Male" },
    { name: "Grace", age: 33, lastName: "Taylor", sex: "Female" },
    { name: "Henry", age: 31, lastName: "Anderson", sex: "Male" },
  ];

  const handleSquareClick = (index: number) => {
    if (isCtrlPressed) {
      setSelectedIndices((prevSelected) => {
        if (prevSelected.includes(index)) {
          return prevSelected.filter((item) => item !== index);
        } else {
          return [...prevSelected, index];
        }
      });
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Control") {
      setIsCtrlPressed(false);
      if (selectedIndices.length > 0) {
        const selected = selectedIndices.map((i) => people[i]);
        setSelectedPeople(selected);
        console.log("Selected people:", selectedPeople);
        alert("Молодец выделил!");
        setSelectedIndices([]); // Optional: clear selection after alert
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Control") {
      setIsCtrlPressed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [selectedIndices]);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {people.map((_, index) => (
        <div
          key={index}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: selectedIndices.includes(index) ? "blue" : "gray",
            cursor: "pointer",
          }}
          onClick={() => handleSquareClick(index)}
        >
          <p>{_.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SelectableSquares;

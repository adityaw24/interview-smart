import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { InputGroup } from "./components/ui/input-group";
import { Button, Card, Input, Stack } from "@chakra-ui/react";

function App() {
  const [number, setNumber] = useState("");

  const initResult = {
    original: 0,
    reversed: 0,
    difference: 0,
  };
  const [result, setResult] = useState(initResult);

  function handleInput(e) {
    //please put your logic here
    // remove any non-digit characters
    const cleanedValue = e.target.value.replace(/[^0-9]/g, "");
    setNumber(cleanedValue);
  }

  const handleKeyPress = (e) => {
    // Submit when Enter key is pressed
    if (e.key === "Enter") {
      calculateDifference();
    }
  };

  const calculateDifference = () => {
    if (!number && number.trim() !== "") {
      setResult(initResult);
      return;
    }

    // convert to number to remove leading zeros
    const originalNum = Number(number);

    // reverse the number
    const reversedNum = Number(
      originalNum.toString().split("").reverse().join("")
    );

    // Calculate absolute difference
    const difference = Math.abs(originalNum - reversedNum);

    setResult((prev) => ({
      ...prev,
      original: originalNum,
      reversed: reversedNum,
      difference: difference,
    }));
  };

  return (
    <>
      <Stack gap={8}>
        <Stack direction={"row"} gap={6}>
          <Input
            placeholder="Enter a number"
            variant={"flushed"}
            value={number}
            onChange={handleInput}
            // onKeyPress={handleKeyPress}
            onKeyDown={handleKeyPress}
          />
          <Button variant={"surface"} onClick={calculateDifference}>
            Calculate
          </Button>
        </Stack>

        <Card.Root>
          <Card.Body gap={2}>
            <Card.Description>
              Original Number: {result.original}
            </Card.Description>
            <Card.Description>
              Reversed Number: {result.reversed}
            </Card.Description>
            <Card.Description>
              Difference Number: {result.difference}
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Stack>
    </>
  );
}

export default App;

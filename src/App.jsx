import { useEffect, useState } from "react";
import "./App.css";
import { Button, Card, Input, Stack } from "@chakra-ui/react";

function App() {
  const [number, setNumber] = useState("");

  const initResult = {
    original: 0,
    reversed: 0,
    difference: 0,
  };
  const [result, setResult] = useState(initResult);

  const [resultFizzBuzz, setResultFizzBuzz] = useState([]);

  const [resultFibonacci, setResultFibonacci] = useState([]);

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

  const printFizzBuzz = (num) => {
    if (num) {
      if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
      } else if (num % 3 === 0) {
        return "Fizz";
      } else if (num % 5 === 0) {
        return "Buzz";
      }
    }
    return num;
  };

  const fizzBuzz = (num) => {
    let result = [];

    if (num) {
      for (let i = 1; i <= Number(num); i++) {
        result.push(printFizzBuzz(i));
      }
    }
    setResultFizzBuzz(result);
    return result;
  };

  const fibonacci = (num) => {
    const result = [];

    let a = 0;
    let b = 1;
    if (num) {
      for (let i = 0; i < Number(num); i++) {
        result.push(printFizzBuzz(Number(a)));
        const c = a + b;
        a = b;
        b = c;
      }

      // result.map((item) => printFizzBuzz(Number(item)));
    }
    // console.log(result);
    setResultFibonacci(result);
    return result;
  };

  useEffect(() => {
    fizzBuzz(result.difference);
    fibonacci(result.difference);
  }, [result.difference]);

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
            <Card.Description>
              Fizzbuzz Number: {resultFizzBuzz.join(", ")}
            </Card.Description>
            <Card.Description>
              Fibonacci Number: {resultFibonacci.join(", ")}
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Stack>
    </>
  );
}

export default App;

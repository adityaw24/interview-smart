import "./styles.css";

export default function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState({
    original: 0,
    reversed: 0,
    difference: 0
  });

  
  function handleInput() {
    //please put your logic here
    // remove any non-digit characters
    const cleanedValue = e.target.value.replace(/[^0-9]/g, '');
    setNumber(cleanedValue);
  }

  const calculateDifference = () => {
    if (!number && number.trim() !== '') return;

    // convert to number to remove leading zeros
    const originalNum = Number(number);
    
    // reverse the number
    const reversedNum = Number(originalNum.toString().split('').reverse().join(''));

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
    <div className="App">
      <div>
        Number: <input />
        <button>Submit</button>
      </div>
      <div>Result: 0</div>
    </div>
  );
}

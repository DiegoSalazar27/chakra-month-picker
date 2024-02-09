# Chakra Month Picker

Month picker component for ReactJS Using ChakraUI.

## Usage

```tsx
import { useState } from 'react';
import { MonthPicker, MonthInput } from 'react-lite-month-picker';

function Example() {
  const [selectedMonthData, setSelectedMonthData] = useState({
    month: 1,
    year: 2024,
  });
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure(); // Chakra Hook to handle open/close

  const handleChange = useCallback((newValue: MonthPickerValue) => {
    setSelectedMonthData(newValue);
  }, []);

  return (
    <div>
        <MonthInput
          value={selectedMonthData}
          toggle={onToggle}
          isOpen={isOpen}
        />
        <MonthPicker
          lang="es"
          isOpen={isOpen}
          value={selectedMonthData}
          onChange={handleChange}
          onClose={onClose}
        />
    </div>
  );
}

export default Example;
```

### Selected month data

Currently selected month data is an object with the following structure:

```ts
{
  month: number,
  year: number,
}
```

It will get saved on set parent component state with `onChange` event.

## License

MIT © [Diego Salazar](https://github.com/diegosalazar27)

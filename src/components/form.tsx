import { Box, HStack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import {
  MonthInput,
  MonthPicker,
  MonthPickerValue,
} from "@diegosalazar27/chakra-month-picker/";

export function Form() {
  const [value, setValue] = useState<MonthPickerValue>({
    month: 0,
    year: 2024,
  });
  const { isOpen, onClose, onToggle } = useDisclosure(); // Chakra Hook to handle open/close

  function handleChange(data: MonthPickerValue) {
    setValue(data);
  }

  return (
    <HStack spacing={4} maxW={"container.lg"}>
      <Box position={"relative"}>
        <MonthInput value={value} toggle={onToggle} isOpen={isOpen} />
        <MonthPicker
          lang="es"
          isOpen={isOpen}
          value={value}
          onChange={handleChange}
          onClose={onClose}
        />
      </Box>
      <Box maxW={"400px"}>
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </Box>
    </HStack>
  );
}

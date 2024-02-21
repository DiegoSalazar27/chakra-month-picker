import {
  Box,
  HStack,
  Heading,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Form } from "./components/form";

function App() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <VStack pb={20} spacing={10} minW={"full"} justifyContent={"center"}>
      <VStack maxW={"container.sm"} py={10} spacing={10}>
        <HStack w={"full"} justifyContent={"space-between"}>
          <Box></Box>
          <Heading>Chakra Month Picker</Heading>
          <Tooltip label={`Toggle ${colorMode} Mode`}>
            <IconButton
              icon={colorMode === "dark" ? <MdDarkMode /> : <MdLightMode />}
              aria-label={`Toggle ${colorMode} Mode`}
              size="sm"
              onClick={toggleColorMode}
            />
          </Tooltip>
        </HStack>
        <Text textAlign={"center"}>A custom field for handling months</Text>
        <Form />
      </VStack>

      <VStack spacing={6} maxW={"400px"}>
        <Heading>Input value</Heading>

        <Text>The Input returns an object with the following shape</Text>
        <pre>{`{"month": number, "year": number}`}</pre>
      </VStack>

      <VStack maxW={"2xl"}>
        <Heading>Input Props</Heading>
        <TableContainer>
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Prop Name</Th>
                <Th>Description</Th>
                <Th>Type</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>isOpen</Td>
                <Td>Decides if the MonthPicker is open or closed</Td>
                <Td>boolean</Td>
              </Tr>
              <Tr>
                <Td>toggle</Td>
                <Td>Toggles the boolean</Td>
                <Td>() ={">"} void</Td>
              </Tr>
              <Tr>
                <Td>lang</Td>
                <Td>The languague of the INTL for the Input</Td>
                <Td>string</Td>
              </Tr>
              <Tr>
                <Td>value</Td>
                <Td>The current value of the input</Td>
                <Td>MonthPickerValue</Td>
              </Tr>
              <Tr>
                <Td>disabled</Td>
                <Td>If the input is disabled</Td>
                <Td>boolean</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>

      <VStack maxW={"2xl"}>
        <Heading>MonthPicker Props</Heading>
        <TableContainer>
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Prop Name</Th>
                <Th>Description</Th>
                <Th>Type</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>isOpen</Td>
                <Td>Decides if the MonthPicker is open or closed</Td>
                <Td>boolean</Td>
              </Tr>
              <Tr>
                <Td>onClose</Td>
                <Td>Closes the MonthPicker</Td>
                <Td>() ={">"} void</Td>
              </Tr>
              <Tr>
                <Td>lang</Td>
                <Td>The languague of the INTL for the Month Picker</Td>
                <Td>string</Td>
              </Tr>
              <Tr>
                <Td>value</Td>
                <Td>Current Value</Td>
                <Td>MonthPickerValue</Td>
              </Tr>
              <Tr>
                <Td>onChange</Td>
                <Td>Function to change the value of the MonthPicker</Td>
                <Td>(newValue: MonthPickerValue) ={">"} void</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </VStack>
  );
}

export default App;

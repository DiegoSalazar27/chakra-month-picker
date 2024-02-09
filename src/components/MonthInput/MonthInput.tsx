import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { MonthPickerValue } from "../MonthPicker/MonthPicker";

export type MonthInputParams = {
  isOpen: boolean;
  toggle: () => void;
  lang: string;
  value: MonthPickerValue;
  disabled?: boolean;
};
export function MonthInput(props: MonthInputParams) {
  return (
    <Button
      variant="unstyled"
      py={2}
      px="4"
      minW={"200px"}
      w={"full"}
      // fontSize={4}
      border="1px solid"
      borderColor={"gray.300"}
      borderRadius={"var(--input-border-radius)"}
      onClick={() => !props.disabled && props.toggle()}
      display="flex"
      alignItems={"center"}
      justifyContent="space-between"
      disabled={props.disabled}
      bg={props.disabled ? "gray.200" : "transparent"}
      cursor={props.disabled ? "no-drop" : "pointer"}
    >
      <Text fontWeight={"500"}>
        {new Date(props.value.year, props.value.month).toLocaleString(
          props.lang ? props.lang : "en",
          {
            month: "long",
          }
        )}{" "}
        {props.value.year}
      </Text>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-calendar"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    </Button>
  );
}

MonthInput.defaultProps = {
  lang: "en-US",
  size: "large",
};

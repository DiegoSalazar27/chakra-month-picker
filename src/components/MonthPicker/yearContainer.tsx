import { Flex, Button, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export function YearContainer({
  year,
  changeYear,
}: {
  year: number;
  changeYear: (year: number) => void;
}) {
  const color = useColorModeValue("#333", "#FFF");

  return (
    <Flex
      width={"full"}
      justifyContent="space-evenly"
      alignItems={"center"}
      mb={2}
      mt="2"
    >
      <Button
        variant="unstyled"
        aria-label="Previous Year"
        onClick={() => changeYear(year - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </Button>
      <Text
        color={color}
        as={"span"}
        aria-description="Year selected"
        fontSize={"1.4rem"}
      >
        {year}
      </Text>
      <Button
        variant="unstyled"
        aria-label="Next Year"
        onClick={() => changeYear(year + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </Button>
    </Flex>
  );
}

import {
  Button,
  Grid,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { YearContainer } from "./yearContainer";
export type GetMonthNamesParams = {
  format?: "short" | "numeric" | "2-digit" | "long" | "narrow" | undefined;
  locale?: string | string[] | undefined;
};

export type MonthPickerValue = {
  month: number;
  year: number;
};
export type MonthPickerParams = {
  lang: string;
  value: MonthPickerValue;
  min?: MonthPickerValue;
  isOpen: boolean;
  onClose: () => void;
  onChange: (newValue: MonthPickerValue) => void;
};
export function MonthPicker(props: MonthPickerParams) {
  const [month, setMonth] = useState<number>(
    props.value.month ? props.value.month : new Date().getMonth()
  );
  const [year, setYear] = useState<number>(
    props.value.year ?? new Date().getFullYear()
  );

  const changeYear = (year: number) => {
    setYear(year);
  };

  const getMonthNames = ({
    locale = "en",
    format = "short",
  }: GetMonthNamesParams) => {
    const formatter = new Intl.DateTimeFormat(locale, {
      month: format,
      timeZone: "UTC",
    });
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
      const mm = month < 10 ? `0${month}` : month;
      return new Date(`2023-${mm}-01T00:00:00+00:00`);
    });
    return months.map((date) => formatter.format(date));
  };

  const changeMonth = (month: number) => {
    setMonth(month);
    props.onClose();
    props.onChange({
      month: month,
      year: year,
    });
  };

  return (
    <Popover
      // returnFocusOnClose={false}
      isOpen={props.isOpen}
      onClose={props.onClose}
      placement="top"
      closeOnBlur={true}
    >
      <PopoverContent textColor={"#555"} fontWeight="500" p={0}>
        <PopoverHeader p={0}>
          <YearContainer changeYear={changeYear} year={year} />
        </PopoverHeader>
        {/* <PopoverArrow />
    <PopoverCloseButton /> */}
        <PopoverBody>
          <Grid templateColumns="repeat(3, 1fr)" gap={2}>
            {getMonthNames({ locale: props.lang }).map((monthName, index) => {
              return (
                <Button
                  key={index}
                  variant={
                    index == month && props.value.year == year
                      ? "solid"
                      : "ghost"
                  }
                  border="1px solid"
                  borderColor={"transparent"}
                  display="flex"
                  onClick={() => {
                    if (!props.min) {
                      changeMonth(index);
                      return;
                    }

                    if (
                      props.value.year < props.min.year ||
                      (props.value.year === props.min.year &&
                        index < props.min.month)
                    ) {
                      console.log("invalid");
                      return;
                    }

                    return changeMonth(index);
                  }}
                  textColor={
                    index == month && props.value.year == year
                      ? "white"
                      : "#777"
                  }
                  // colorScheme={
                  //   index == month && props.value.year == year
                  //     ? "primary"
                  //     : "transparent"
                  // }
                  disabled={
                    props.min
                      ? props.value.year < props.min.year ||
                        (props.value.year === props.min.year &&
                          index < props.min.month)
                      : false
                  }
                  borderRadius={"7px"}
                >
                  {monthName}
                </Button>
              );
            })}
          </Grid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
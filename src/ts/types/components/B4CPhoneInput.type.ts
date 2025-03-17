import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";

export interface B4CPhoneInputProps {
  countryCode: string;
  handleCountryCodeChange: (event: SelectChangeEvent<string>) => void;
  phoneNumber: string;
  handlePhoneNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
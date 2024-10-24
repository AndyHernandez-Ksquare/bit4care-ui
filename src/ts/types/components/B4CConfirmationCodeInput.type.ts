import { Dispatch, SetStateAction } from "react";

export interface B4CConfirmationCodeInputProps {
  countryCode: string;
  phoneNumber: string;
  confirmation: boolean;
  setConfirmation: Dispatch<SetStateAction<boolean>>
  setActiveStep: Dispatch<SetStateAction<number>>
}
import { CreateAppReq } from "@/ts/types/api/applicationRequest";
import { GetOneCarer } from "@/ts/types/api/carer/GetOneCarer.type";
import dayjs, { Dayjs } from "dayjs";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

// Define the shape of the context data
interface ServiceDataContextType {
  provider: GetOneCarer | null;
  setProvider: Dispatch<SetStateAction<GetOneCarer | null>>;
  selectedDate: Dayjs | null;
  setSelectedDate: Dispatch<SetStateAction<Dayjs | null>>;
  startTime: Dayjs | null;
  setStartTime: Dispatch<SetStateAction<Dayjs | null>>;
  endTime: Dayjs | null;
  setEndTime: Dispatch<SetStateAction<Dayjs | null>>;
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
  applicationRequest: CreateAppReq | null;
  setApplicationRequest: Dispatch<SetStateAction<CreateAppReq | null>>;
}

// Create the context
const ServiceDataContext = createContext<ServiceDataContextType | undefined>(
  undefined,
);

// Create the context provider component
export const ServiceDataProvider = ({ children }: { children: ReactNode }) => {
  const [provider, setProvider] = useState<GetOneCarer | null>(null);
  const [applicationRequest, setApplicationRequest] =
    useState<CreateAppReq | null>(null);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs());
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs());
  const [duration, setDuration] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  return (
    <ServiceDataContext.Provider
      value={{
        provider,
        setProvider,
        selectedDate,
        setSelectedDate,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        duration,
        setDuration,
        price,
        setPrice,
        applicationRequest,
        setApplicationRequest,
      }}
    >
      {children}
    </ServiceDataContext.Provider>
  );
};

// Create a custom hook to use the context easily
export const useServiceData = () => {
  const context = useContext(ServiceDataContext);
  if (!context) {
    throw new Error("useServiceData must be used within a ServiceDataProvider");
  }
  return context;
};

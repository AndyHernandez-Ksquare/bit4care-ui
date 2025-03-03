export const getHourlyRate = (isNurse: boolean, hours: number) => {
  if (isNurse) {
    if (hours >= 1 && hours <= 6) return 189;
    if (hours >= 7 && hours <= 12) return 172;
    return 155;
  } else {
    if (hours >= 1 && hours <= 6) return 85;
    if (hours >= 7 && hours <= 12) return 77;
    return 73;
  }
};

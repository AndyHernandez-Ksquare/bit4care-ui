export const nacionalities = ["Mexicana", "Extranjera"];

export const nacionalitiesOptions = nacionalities.map((nacionality) => ({
  label: nacionality,
  value: nacionality.toLowerCase(),
}));

// Calculate Aryan's age based on his birthday
// Aryan's birthday is assumed to be in 2018 (making him 6 years old in 2024)
// This is a dynamic calculation based on the current date

export function getAryanAge() {
  // Assuming Aryan was born in 2018
  const birthYear = 2018;
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  // If we're past September (assuming birthday is in September), he's the full age
  // Otherwise, he's one year younger
  const age =
    currentMonth >= 8 ? currentYear - birthYear : currentYear - birthYear - 1;

  return Math.max(age, 6); // Ensure minimum age of 6
}

export function getAryanAgeText() {
  const age = getAryanAge();
  return `${age} years old`;
}

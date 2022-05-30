function validatePIN(pin) {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e) => e.toString());
  pin_length = pin.split("").filter((e) => e in num).length;
  return (pin_length == 4 || pin_length == 6) && pin_length == pin.length
    ? true
    : false;
}

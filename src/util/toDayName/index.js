export default function toDayName(dayIndex) {
  switch (dayIndex) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tues";
    case 3:
      return "Wed";
    case 4:
      return "Thurs";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
    default:
      throw new Error(`${dayIndex} is invalid. Pick a number 0 - 6`);
  }
}

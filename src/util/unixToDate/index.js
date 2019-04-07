import toMonthName from "../toMonthName";
import toDayName from "../toDayName";

export default function unixToDate(timestamp) {
  if (!Number.isInteger(timestamp)) {
    throw new Error(`${timestamp} is not a number.`);
  }

  const date = new Date(timestamp * 1000);
  const month = toMonthName(date.getMonth());
  const day = toDayName(date.getDay());
  const year = date.getFullYear();
  const dayOfMonth = date.getDate();

  return `${day} ${month} ${dayOfMonth} ${year}`;
}

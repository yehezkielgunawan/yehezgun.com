export const formatDate = (date: string | Date, time: boolean = true): string  => {
  const convertedDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const optionsWithoutTime: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return convertedDate.toLocaleDateString(
    "en-EN",
    time ? options : optionsWithoutTime
  );
};

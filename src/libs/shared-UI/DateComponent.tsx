import dayjs from "dayjs";

export const DateComponent = ({ dateString }: { dateString: string }) => {
  return (
    <time dateTime={dateString}>{dayjs(dateString).format("MMM	d, YYYY")}</time>
  );
};

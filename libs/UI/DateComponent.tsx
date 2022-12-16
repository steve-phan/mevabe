import { format } from "date-fns";

export const DateComponent = ({ dateString }: { dateString: string }) => {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), "LLLL	d, yyyy")}
    </time>
  );
};

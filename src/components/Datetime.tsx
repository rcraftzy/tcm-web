import { LOCALE } from "../config";

interface DatetimesProps {
  pubDate: string | Date;
  modDate: string | Date | undefined | null;
}

export interface Props extends DatetimesProps {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
  readingTime?: string;
}

export default function Datetime({
  pubDate,
  modDate,
  size = "sm",
  className,
  readingTime,
}: Props) {
  return (
    <span className={`italic ${size === "sm" ? "text-xs" : "text-sm"}`}>
      <FormattedDatetime pubDate={pubDate} modDate={modDate} />
      <span> ({readingTime})</span> {/* display reading time */}
    </span>
  );
}

const FormattedDatetime = ({ pubDate, modDate }: DatetimesProps) => {
  const myDatetime = new Date(
    modDate && modDate > pubDate ? modDate : pubDate
  );

  const date = myDatetime.toLocaleDateString(LOCALE.langTag, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });


  return (
    <>
      <time dateTime={myDatetime.toISOString()}>{date}</time>
      <span aria-hidden="true"> | </span>
      <span className="sr-only">&nbsp;at&nbsp;</span>
    </>
  );
};

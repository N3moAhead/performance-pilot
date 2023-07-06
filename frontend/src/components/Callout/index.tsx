import { FC } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface CalloutProps {
  title: string;
  Icon: FC;
  children: any;
  color: "blue" | "amber" | "green";
}

export default function Callout(props: CalloutProps) {
  const { title, Icon, color, children } = props;
  const { theme } = useTheme();

  const colorVariants = {
    blue: "bg-blue-50 dark:bg-blue-900 dark:border-sky-500 border-blue-700 text-blue-700 dark:text-sky-200",
    amber:
      "bg-amber-50 dark:bg-amber-900 dark:border-yellow-500 border-amber-700 text-amber-700 dark:text-yellow-200",
    green:
      "dark:bg-emerald-900 dark:text-green-200  dark:border-green-500 bg-green-50 border-green-700 text-green-700",
  };

  return (
    <div
      className={`${colorVariants[color]} relative mt-6 rounded-md border-l-4 py-3 pl-4 pr-3 text-sm`}
    >
      {/* Title Space */}
      <div className='flex items-start font-semibold'>
        <span className={`${colorVariants[color]} mr-1.5 h-5 w-5`}>
          <Icon />
        </span>
        <span className={`${colorVariants[color]} font-semibold`}>{title}</span>
      </div>
      <div className={`${colorVariants[color]} mt-2`}>{children}</div>
    </div>
    // <Callout
    //   className='mt-6 dark:border-green-500 dark:bg-emerald-900  dark:!text-green-200'
    //   title={"Overperforming (+34.3%)"}
    //   icon={ArrowTrendingUpIcon}
    //   color='emerald'
    // >
    //   <span className='dark:text-green-200'>
    //     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    //     eirmod tempor.
    //   </span>
    // </Callout>
  );
}

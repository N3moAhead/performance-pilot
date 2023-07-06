import { ReactNode } from "react";
import { Card } from "@tremor/react";

interface GlowingCardProps {
  className: string;
  decorationColor:
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose"
    | undefined;
  decoration: any;
  children: ReactNode;
}

export default function GlowingCard(props: GlowingCardProps) {
  const { className, decorationColor, decoration, children } = props;

  const colorVariations = {
    slate: "bg-slate-500",
    gray: "bg-gray-500",
    zinc: "bg-zinc-500",
    neutral: "bg-neutral-500",
    stone: "bg-stone-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
    amber: "bg-amber-500",
    yellow: "bg-yellow-500",
    lime: "bg-lime-500",
    green: "bg-green-500",
    emerald: "bg-emerald-500",
    teal: "bg-teal-500",
    cyan: "bg-cyan-500",
    sky: "bg-sky-500",
    blue: "bg-blue-500",
    indigo: "bg-indigo-500",
    violet: "bg-violet-500",
    purple: "bg-purple-500",
    fuchsia: "bg-fuchsia-500",
    pink: "bg-pink-500",
    rose: "bg-rose-500",
  };

  return (
    <div className='group relative rounded-md'>
      {/* <div
        className={`${
          colorVariations[decorationColor ? decorationColor : "indigo"]
        } group-hover:blur-md transition-all absolute inset-0 rounded-sm blur`}
      /> */}
      <div className='relative rounded-md'>
        <Card
          className={className.concat(" ring-0")}
          decorationColor={decorationColor}
          decoration={decoration}
        >
          {children}
        </Card>
      </div>
    </div>
  );
}

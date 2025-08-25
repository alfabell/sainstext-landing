"use client";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
};

export default function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = false,
}: Props) {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 blur-xl",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
          animate && "animate-[bgSlide_6s_linear_infinite]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
          animate && "animate-[bgSlide_6s_linear_infinite]"
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>

      <style jsx global>{`
        @keyframes bgSlide {
          0% { background-position: 0 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }
      `}</style>
    </div>
  );
}

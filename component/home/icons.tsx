// component/home/icons.tsx
import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

/* === Audience (Section 2) === */
export const UserIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden {...props}>
    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 8a7 7 0 0 1 14 0v1H5Z" />
  </svg>
);

export const GearIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden {...props}>
    <path d="M19.14 12.94a7.4 7.4 0 0 0 .06-.94 7.4 7.4 0 0 0-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.65l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96c-.51-.4-1.06-.72-1.64-.95l-.36-2.53a.5.5 0 0 0-.5-.43H9.67a.5.5 0 0 0-.5.43l-.36 2.53c-.58.23-1.13.55-1.64.95l-2.39-.96a.5.5 0 0 0-.61.22L2.66 8.83a.5.5 0 0 0 .12.65L4.81 11.06c-.03.31-.05.63-.05.94s.02.63.05.94L2.78 14.52a.5.5 0 0 0-.12.65l1.92 3.32a.5.5 0 0 0 .61.22l2.39-.96c.5.39 1.05.71 1.64.94l.36 2.53a.5.5 0 0 0 .5.43h3.66a.5.5 0 0 0 .5-.43l.36-2.53c.59-.23 1.14-.55 1.64-.94l2.39.96a.5.5 0 0 0 .61-.22l1.92-3.32a.5.5 0 0 0-.12-.65l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5Z" />
  </svg>
);

export const BuildingIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden {...props}>
    <path d="M3 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3h4a2 2 0 0 1 2 2v11h-4v-4H7v4H3Zm4-10h2V8H7Zm0 4h2v-2H7Zm4-4h2V8h-2Zm0 4h2v-2h-2Z" />
  </svg>
);

/* === Category (Section 3) === */
export const BookIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden {...props}>
    <path d="M3 4a2 2 0 0 1 2-2h9a3 3 0 0 1 3 3v15a1 1 0 0 1-1.447.894L12 19.118 8.447 20.894A1 1 0 0 1 7 20V3H5a1 1 0 0 0-1 1v16H3V4Zm6 1v12.382l3-1.5 3 1.5V5a1 1 0 0 0-1-1H9Z" />
  </svg>
);

export const CapIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden {...props}>
    <path d="M12 3 1 8l11 5 9-4.091V17h2V8L12 3ZM4 13v4a4 4 0 0 0 4 4h8v-2H8a2 2 0 0 1-2-2v-4Z" />
  </svg>
);



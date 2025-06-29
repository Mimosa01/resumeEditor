import type { ReactNode, RefObject } from "react";

type Props = {
  children: ReactNode;
  dropdownRef: RefObject<HTMLDivElement | null>
}

export default function Dropdown ({ children, dropdownRef }: Props) {
  return (
    <div className={`relative inline-block`} ref={dropdownRef}>
      { children }
    </div>
  )
}
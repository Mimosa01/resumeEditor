import { useDropdown } from "../../hooks/useDropdown";
import { useState, useEffect, useRef } from "react";
import type { SectionType } from "../../types/constants.types";
import Dropdown from "../atoms/Dropdown";
import AddSection from "../molecules/AddSection";
import SectionMenu from "./SectionMenu";

type Props = {
  items: SectionType[];
};

export default function DropdownSection({ items }: Props) {
  const { isOpen, dropdownRef, toggle } = useDropdown();
  const [dropUp, setDropUp] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = 200;

      if (spaceBelow < dropdownHeight) {
        setDropUp(true);
      } else {
        setDropUp(false);
      }
    }
  }, [isOpen]);

  return (
    <Dropdown dropdownRef={dropdownRef}>
      <AddSection isOpen={isOpen} onClick={toggle} />
      {isOpen && (
        <div
          ref={containerRef}
          className={`
            absolute left-0 py-2.5 min-w-[224px] w-full z-20 bg-white rounded-xl shadow-popup
            ${dropUp ? "bottom-full mb-2" : "top-full mt-2"}
          `}
          style={{}}
        >
          <SectionMenu items={items} toggle={toggle} />
        </div>
      )}
    </Dropdown>
  );
}

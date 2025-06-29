type SwitchProps = {
  checked?: boolean;
  onClick?: () => void;
  label?: string;
};

export default function Switch({ checked = false, onClick, label }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onClick}
      tabIndex={0}
      className={`relative w-9 h-5.5 border-2 rounded-full transition-colors duration-300 cursor-pointer
        ${checked ? 'border-neutral-800' : 'border-neutral-300'}
      `}
    >
      <span
        className={`absolute top-1/2 left-0.5 w-3.5 h-3.5 rounded-full -translate-y-1/2 transition-transform duration-300
          ${checked ? 'translate-x-3.5 bg-neutral-800' : 'translate-x-0 bg-neutral-300'}
        `}
      />
    </button>
  );
}
import Switch from "../atoms/Switch";
import Text from "../atoms/Text";

type Props = {
  text: string;
  enabled: boolean;
  label: string;
  toggle: () => void;
};

export default function ButtonSwitch({ text, enabled, label, toggle }: Props) {
  return (
    <div
      className="px-[15px] py-3 bg-neutral-100 rounded-xl flex items-center justify-between gap-4"
    >
      <Text className="font-wix-text text-neutral-800 text-lg leading-5.5">
        {text}
      </Text>
      <Switch checked={enabled} onClick={toggle} label={label} />
    </div>
  );
}
import type { MouseEventHandler } from "react";
type CounterButtonProps = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean; // 任意にしたい場合は ?
}

export function CounterButton({ label, onClick, disabled }: CounterButtonProps) {
    return <button onClick={onClick} disabled={disabled}>{label}</button>;
}
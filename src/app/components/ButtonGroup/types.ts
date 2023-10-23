export type Button = {
  id: number;
  icon: string;
  label: string;
  hoverLabel: string;
  onClick: () => void;
};

export type VerticalButtonGroupProps = {
  buttons: Button[];
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};
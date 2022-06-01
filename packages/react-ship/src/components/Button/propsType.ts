

export type ButtonSize = 'lg' | 'sm' | 'xs' | 'base';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'info' | 'warning';
export type ButtonHTMLTypes = 'submit' | 'button' | 'reset';
export interface BaseButtonProps {
  /** className 自定义类名 */
  className?: string,
  disabled?: boolean,
  size?: ButtonSize,
  href?: string,
  loading?: boolean,
  icon?: React.ReactElement,
  type?: ButtonType,
  children?: React.ReactNode,
}


export type ButtonNativeProps = {
  htmlType?: ButtonHTMLTypes
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;
export type ButtonAnchorProps = {
  target?: string
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<ButtonNativeProps & ButtonAnchorProps>;

/// <reference types="react" />
export declare type ButtonSize = 'lg' | 'sm' | 'xs' | 'base' | 'normal';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'info' | 'warning' | 'text';
export declare type ButtonHTMLTypes = 'submit' | 'button' | 'reset';
export interface BaseButtonProps {
    /**
     * 自定义类名
     * @description       自定义类名 dd
     * @description.en-US customs className
     * @default           null
     */
    className?: string;
    /**
     * 禁用按钮
     * @description       禁用按钮
     * @description.en-US disable button
     * @default           false
     */
    disabled?: boolean;
    /**
     * 弱按钮
     * @description       弱按钮
     * @description.en-US outline button
     * @default           false
     */
    outline?: boolean;
    /**
     * loading button
     * @description       loading button
     * @description.en-US outline button
     * @default           false
     */
    loading?: boolean;
    /**
     * block 按钮
     * @description       block button
     * @description.en-US block button
     * @default           false
     */
    block?: boolean;
    /**
     * block 按钮
     * @description       block button
     * @description.en-US block button
     * @default           false
     */
    shape?: boolean;
    /**
     * size button
     * @description       size button
     * @description.en-US size button
     * @default           normal
     */
    size?: ButtonSize;
    /**
     * link button
     * @description       link button
     * @description.en-US link button
     * @default           false
     */
    href?: string;
    /**
     * icon button
     * @description       icon button
     * @description.en-US icon button
     * @default           null
     */
    icon?: React.ReactElement;
    /**
     * button type
     * @description       button type
     * @description.en-US button type
     * @Other           type=default
     */
    type?: ButtonType;
    /**
     * 自定义类名
     * @description       自定义类名
     * @description.en-US customs className
     * @Other           支持定义默认值
     */
    children?: React.ReactNode;
}
export declare type ButtonNativeProps = {
    htmlType?: ButtonHTMLTypes;
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;
export declare type ButtonAnchorProps = {
    target?: string;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;
export declare type ButtonProps = Partial<ButtonNativeProps & ButtonAnchorProps>;

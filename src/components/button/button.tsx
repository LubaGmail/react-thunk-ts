import { ButtonHTMLAttributes } from "react";
import {
    BaseButton,
    GoogleButton,
    ProductButton,
    CheckoutButton
} from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted',
    checkout = 'checkout'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
    return (
        {
            [BUTTON_TYPE_CLASSES.base]: BaseButton,
            [BUTTON_TYPE_CLASSES.google]: GoogleButton,
            [BUTTON_TYPE_CLASSES.inverted]: ProductButton,
            [BUTTON_TYPE_CLASSES.checkout]: CheckoutButton,
        }[buttonType]     // 'googleType'  
    )
}

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, buttonType }: ButtonProps) => {
    const CustomButton = getButton(buttonType)
    
    return (
        <CustomButton>
            {children}
        </CustomButton>
    )
}

export default Button

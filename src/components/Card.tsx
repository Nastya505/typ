import React, {Children, FC} from "react";

export enum CardVariant {
    outline = "outline",
    primary ="primary",
}

interface CardProps{
    width: string;
    height: string;
    variant: CardVariant;
    children: React.ReactNode;
    
}

const Card: FC<CardProps> = ({width, height, variant, children}) => {
    return(
        <div style={{
            width, 
            height,
            background: variant === CardVariant.outline ? 'red' : 'none', 
            border: variant === CardVariant.primary? '3px solid yellow' : 'none',
         }}>
           {children}
        </div>
    )
}

export default Card;
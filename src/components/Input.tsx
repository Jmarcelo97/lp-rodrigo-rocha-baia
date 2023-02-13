import classNames from "classnames";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    id: string;
    type: string;
    error?: string;
    value?: any;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ className, id, error, ...rest }, ref) => {
    return (
        <input
            className={classNames("rounded-full text-black py-2 px-4", className)}
            id={id}
            ref={ref}
            {...rest}
        />
    );
};

export const Input = forwardRef(InputBase);
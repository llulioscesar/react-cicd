import React, { FC, useEffect, useState } from "react";
import './style.css';

type Props = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const Input: FC<Props> = (props) => {
    const { value, onChange, placeholder } = props;

    const [val, setVal] = useState(value);

    useEffect(() => {
        setVal(value);
    }, [value]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value);
        onChange(e.target.value);
    }

    return (
        <input
            className="input--field"
            type="text"
            placeholder={placeholder}
            value={val}
            onChange={handleOnChange}
        />
    )
};

export default Input;
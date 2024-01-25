import React, {FC, useEffect} from "react";
import './style.css';

type Props = {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
};

const Check: FC<Props> = (props) => {
    const { checked = false, onChange, label = '' } = props;

    const [value, setValue] = React.useState(checked);

    useEffect(() => {
        setValue(checked);
    } , [checked]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked);
        onChange && onChange(event.target.checked);
    }

    return (
        <div>
            <input type="checkbox" onChange={handleChange} checked={value}/>
            {label}
        </div>
    )
}

export default Check;
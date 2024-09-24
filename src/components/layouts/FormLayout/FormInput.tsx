import { Input } from "antd";
import { Controller } from "react-hook-form";

type Props = {
    type: string;
    name: string;
};

const FormInput = ({ type, name }: Props) => {
    return (
        <div>
            <label htmlFor="name">Name</label>
            <Controller
                name={name}
                render={({ field }) => (
                    <Input type={type} id={name} {...field} />
                )}
            />
        </div>
    );
};

export default FormInput;

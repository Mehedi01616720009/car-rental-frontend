import FormInput from "@/components/layouts/FormLayout/FormInput";
import FormLayout from "@/components/layouts/FormLayout/FormLayout";
import { Button } from "antd";
import { FieldValues } from "react-hook-form";

const AddUser = () => {
    const onSubmit = async (data: FieldValues) => {
        console.log(data);
    };

    return (
        <FormLayout onSubmit={onSubmit}>
            <FormInput type="name" name="name" />
            <FormInput type="password" name="password" />
            <Button htmlType="submit">Add</Button>
        </FormLayout>
    );
};

export default AddUser;

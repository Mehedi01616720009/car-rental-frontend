import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authApi } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";

const LoginForm = () => {
    const form = useForm();
    const dispatch = useAppDispatch();
    const [loginAction, { isError, error }] = authApi.useLoginMutation();

    if (isError) {
        console.log({ error });
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const result = await loginAction(data).unwrap();
        form.reset();
        const user = verifyToken(result.token);
        console.log(user);
        if (result.success) {
            dispatch(setUser({ user: result.data, token: result.token }));
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-3">
                <FormField
                    control={form.control}
                    name="email"
                    defaultValue={""}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Enter Email"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    defaultValue={""}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Enter Password"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default LoginForm;

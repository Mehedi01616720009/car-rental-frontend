import LoginForm from "@/components/LoginForm/LoginForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Login = () => {
    return (
        <div className="h-dvh flex justify-center items-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <LoginForm />
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;

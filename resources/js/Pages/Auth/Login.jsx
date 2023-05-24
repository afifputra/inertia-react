import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { InertiaHead } from "@inertiajs/inertia-react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Checkbox,
    Button,
    Typography,
    Spinner,
} from "@material-tailwind/react";

export function Login() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 2000);
    };

    return (
        <>
            <InertiaHead title="Login" />
            <img
                src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                className="absolute inset-0 z-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
            <div className="container mx-auto p-4">
                <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Sign In
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input type="email" label="Email" size="lg" />
                        <Input type="password" label="Password" size="lg" />
                        <div className="-ml-2.5">
                            <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            variant="gradient"
                            fullWidth
                            onClick={handleClick}
                            disabled={isClicked}
                        >
                            {isClicked && (
                                <div className="flex justify-center items-center">
                                    <Spinner
                                        color="white"
                                        className="h-4 w-4"
                                    />
                                    <Typography
                                        className="ml-2 font-bold"
                                        variant="small"
                                    >
                                        Loading
                                    </Typography>
                                </div>
                            )}
                            {!isClicked && "Sign In"}
                        </Button>
                        <Typography
                            variant="small"
                            className="mt-6 flex justify-center"
                        >
                            Tidak punya akun?
                            <Link href={route("register")}>
                                <Typography
                                    as="span"
                                    variant="small"
                                    color="blue"
                                    className="ml-1 font-bold"
                                >
                                    Sign up
                                </Typography>
                            </Link>
                        </Typography>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}

export default Login;
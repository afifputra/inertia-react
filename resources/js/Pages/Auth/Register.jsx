import { Link, useForm } from "@inertiajs/inertia-react";
import useToast from "@/hooks/useToast";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

import { ToastContainer } from "react-toastify";

export function Register() {
    const showToast = useToast();
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        agreement: false,
    });

    function handleSubmit(e) {
        e.preventDefault();

        if (!data.agreement) {
            showToast(
                "You must agree the Terms and Conditions",
                "error",
                () => {
                    console.log("callback");
                }
            );
            return;
        }

        post(route("register"), {
            onSuccess: () => reset(),
        });
    }

    return (
        <>
            <ToastContainer containerId="toastContainer" />
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
                            Sign Up
                        </Typography>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardBody className="flex flex-col gap-4">
                            <Input
                                label="Name"
                                size="lg"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <Input
                                type="email"
                                label="Email"
                                size="lg"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <Input
                                type="password"
                                label="Password"
                                size="lg"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <Input
                                type="password"
                                label="Confirm Password"
                                size="lg"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                            />
                            <div className="-ml-2.5">
                                <Checkbox
                                    label="I agree the Terms and Conditions"
                                    checked={data.agreement}
                                    onChange={(e) =>
                                        setData("agreement", e.target.checked)
                                    }
                                />
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                                variant="gradient"
                                fullWidth
                                type="submit"
                                disabled={processing}
                            >
                                Sign Up
                            </Button>
                            <Typography
                                variant="small"
                                className="mt-6 flex justify-center"
                            >
                                Already have an account?
                                <Link href={route("login")}>
                                    <Typography
                                        as="span"
                                        variant="small"
                                        color="blue"
                                        className="ml-1 font-bold"
                                    >
                                        Sign in
                                    </Typography>
                                </Link>
                            </Typography>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </>
    );
}

export default Register;

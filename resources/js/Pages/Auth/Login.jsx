import { Link, InertiaHead, useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Button,
    Typography,
    Spinner,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export function Login() {
    const { appName } = usePage().props;

    const { data, setData, post, processing, errors, clearErrors } = useForm({
        email: "",
        password: "",
    });

    const handleEmail = (e) => {
        setData("email", e.target.value);

        if (errors.email) {
            clearErrors("email");
        }
    };

    const handlePassword = (e) => {
        setData("password", e.target.value);

        if (errors.password) {
            clearErrors("password");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("login.store"), {
            onSuccess: () => {
                Inertia.visit(route("dashboard"));
            },
            onError: () => {
                console.log("error");
            },
        });
    };

    return (
        <>
            <InertiaHead title={`Login - ${appName}`} />
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
                    <form onSubmit={handleSubmit}>
                        <CardBody className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <Input
                                    type="email"
                                    label="Email"
                                    size="lg"
                                    onChange={handleEmail}
                                    value={data.email}
                                    error={Boolean(errors.email)}
                                />
                                {errors.email && (
                                    <div className="flex items-center gap-2">
                                        <InformationCircleIcon className="h-5 w-5 text-red-500" />
                                        <Typography variant="small" color="red">
                                            {errors.email}
                                        </Typography>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <Input
                                    type="password"
                                    label="Password"
                                    size="lg"
                                    autoComplete="on"
                                    onChange={handlePassword}
                                    value={data.password}
                                    error={Boolean(errors.password)}
                                />
                                {errors.password && (
                                    <div className="flex items-center gap-2">
                                        <InformationCircleIcon className="h-5 w-5 text-red-500" />
                                        <Typography variant="small" color="red">
                                            {errors.password}
                                        </Typography>
                                    </div>
                                )}
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                                variant="gradient"
                                fullWidth
                                disabled={processing}
                                type="submit"
                            >
                                {processing && (
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
                                {!processing && "Sign In"}
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
                    </form>
                </Card>
            </div>
        </>
    );
}

export default Login;

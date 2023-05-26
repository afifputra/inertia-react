import { usePage, InertiaHead } from "@inertiajs/inertia-react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

import LayoutDashboard from "@/components/layouts/LayoutDashboard";

export function Dashboard() {
    const { user } = usePage().props;
    console.log(user);

    return (
        <>
            <InertiaHead title="Dashboard" />
            <LayoutDashboard>
                <div className="mt-12 mb-8 flex flex-col gap-12">
                    <Card>
                        <CardHeader
                            variant="gradient"
                            color="blue"
                            className="mb-0 p-6"
                        >
                            <Typography variant="h6" color="white">
                                Dashboard
                            </Typography>
                        </CardHeader>
                        <CardBody>
                            <Typography varian="lead">
                                Selamat datang, {user.name}!
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
            </LayoutDashboard>
        </>
    );
}

export default Dashboard;

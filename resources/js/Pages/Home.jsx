import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

import Dashboard from "@/components/layouts/Dashboard";

export function Home() {
    return (
        <Dashboard>
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
                    <CardBody className="overflow-x-scroll">
                        <Typography
                            color="gray"
                            className="w-full min-w-[640px]"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Neque facere voluptatibus accusantium
                            molestiae velit quos nulla at nihil culpa nesciunt,
                            aspernatur sit veritatis asperiores vero sint omnis,
                            eum voluptas mollitia, cupiditate laborum alias ab
                            commodi quod saepe. Natus, nulla necessitatibus
                            excepturi fugit id aspernatur repudiandae eos, cum
                            suscipit distinctio totam. Similique nihil facere
                            impedit accusantium minus dignissimos rerum maxime
                            amet, architecto consequatur, sunt mollitia at
                            officiis quo sequi velit. Suscipit consectetur
                            voluptatem sint fugit iure facere aliquid voluptas,
                            ipsa quisquam! Molestiae officiis in voluptatem,
                            veritatis dolore, facilis beatae consequuntur
                            aliquid fugiat harum corrupti, ullam quidem soluta
                            voluptatibus neque ab sit?
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </Dashboard>
    );
}

export default Home;

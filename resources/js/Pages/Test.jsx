import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Test() {
    return (
        <>
            <Head title="Test" />
            <h1 className="text-3xl font-bold underline">Test</h1>
            <p className="text-xl">This is a test page.</p>
            <Link
                href={route("home")}
                className="text-blue-500 hover:text-blue-700 underline focus-within:text-blue-700"
            >
                Back to Home
            </Link>
        </>
    );
}

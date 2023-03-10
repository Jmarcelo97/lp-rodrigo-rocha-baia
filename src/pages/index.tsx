import { GetStaticProps } from "next/types";

import { Head } from "../components/Head";
import { HomeForm } from "../components/Home/Form";
import { Mockup } from "../components/Home/Mockup";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <main className="bg-mobile sm:bg-home 2xl:bg-home-xl bg-no-repeat bg-center bg-cover h-screen w-screen">
                <div className="flex flex-col sm:grid sm:grid-cols-2 h-full w-full max-w-6xl mx-auto gap-4 p-4">
                    <HomeForm />
                    <Mockup />
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {}
    };
};
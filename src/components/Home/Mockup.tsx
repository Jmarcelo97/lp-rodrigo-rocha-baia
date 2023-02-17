import Image from "next/image";

import MockupImage from "../../assets/images/mockup.png";

export function Mockup() {
    return (
        <div className="mt-16 sm:mt-0 hidden sm:flex items-center justify-center w-full">
            <Image
                src={MockupImage}
                alt="Mockup Plano Liberdade"
                quality={100}
                width={600}
                className="ml-auto max-w-[280px] sm:max-w-[350px] sm:mr-4 2xl:mr-0"
            />
        </div>
    );
}
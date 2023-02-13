import Image from "next/image";

import MockupImage from "../../assets/images/mockup.png";

export function Mockup() {
    return (
        <div className="flex items-center justify-center w-full">
            <Image
                src={MockupImage}
                alt="Mockup Plano Liberdade"
                quality={100}
                width={600}
                className="ml-auto mr-4 max-w-[350px] 2xl:mr-0"
            />
        </div>
    );
}
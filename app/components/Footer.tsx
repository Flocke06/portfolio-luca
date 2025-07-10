    import Image from "next/image";

    export default function Footer() {

        return (
            <div className="h-[6rem] bg-neutral flex flex-col">

                <div className="bg-neutral w-[60rem] mx-auto h-screen flex justify-center items-center gap-4">
                    <div>
                        <Image
                            alt="instagram"
                            width={25}
                            height={25}
                            src={"/images/icons/instagram.png"}
                        />
                    </div>
                    <div>
                        <Image
                            alt="linkedin"
                            width={25}
                            height={25}
                            src={"/images/icons/linkedin.png"}
                        />
                    </div>
                </div>

                <div className="h-0 w-2/5 border-t border-white mx-auto "></div>

                <div className="bg-neutral w-[60rem] mx-auto h-screen flex justify-center items-center text-xl">
                    <div>
                        Impressum
                    </div>
                </div>
            </div>
        )
    }
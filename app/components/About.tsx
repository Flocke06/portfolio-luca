import Image from "next/image";

export default function About() {

    return (

        <div className="h-[130rem] md:h-[120rem] lg:h-[120rem] xl:h-[60rem] 2xl:h-[80rem] bg-black text-white p-0 m-0">
            <div className="grid grid-cols-12 ">
                <div className="flex flex-col justify-center items-center col-span-12 mx-9 mt-[10rem] 2xl:col-span-5 xl:col-span-4">
                    <Image
                        alt="luca"
                        src={"/images/man.jpg"}
                        width={600}
                        height={700}
                        className="rounded  2xl:ml-[3rem] xl:mt-[4rem] 2xl:mt-[10rem] h-50 w-50 "
                    />
                </div>

                <div className="flex flex-col justify-center items-center col-span-12 xl:col-span-8 2xl:col-span-7 mt-[5rem] xl:mt-[15rem] 2xl:mt-[21rem]">
                    <h1 className="text-4xl md:5xl 2xl:mr-[9rem]">Ich bin Luca</h1>

                    <p className="mx-6 md:mx-9 2xl:mr-[9rem] leading-[1.5] text-xl mt-[4rem] xl:mt-[2rem] md:text-2xl xl:text-lg 2xl:text-xl">Kunst ist für mich mehr als nur ein Ausdruck – sie ist eine Reise durch Farben, Formen und
                        Emotionen. Seit vielen Jahren widme ich mich der kreativen Arbeit, inspiriert von der Natur, urbanen Strukturen
                        und den kleinen Momenten des Lebens. Meine Werke erzählen Geschichten, die jeder Betrachter auf seine eigene
                        Weise erleben kann. Egal ob auf Leinwand, digital oder in Skulpturen – meine Kunst ist ein Spiegel meiner
                        Gedanken und Erlebnisse.
                    </p>

                    <p className="mx-6 md:mx-9 2xl:mr-[9rem] leading-[1.5] text-xl mt-[4rem] md:text-2xl xl:text-lg 2xl:text-xl">Von den ersten Skizzen auf Papier bis hin zu großformatigen Installationen – meine Kunst
                        entwickelt sich ständig weiter. Ich experimentiere mit verschiedenen Medien, Techniken und Materialien, um neue
                        Perspektiven zu schaffen. Mein Stil ist geprägt von lebendigen Kontrasten, minimalistischen Details und der
                        Suche nach dem perfekten Gleichgewicht zwischen Chaos und Harmonie. Wenn du mehr über meine Arbeiten erfahren
                        möchtest, freue ich mich über deine Nachricht!
                    </p>
                    <div className=" mx-1 md:w-full px-2 mr-10 md:px-0 md:pr-[5rem] text-right mt-9 md:mt-[6rem] xl:mt-[2rem] opacity-60">
                        <p className="italic text-xl">
                            „Die Dinge haben nur den Wert, den man ihnen verleiht.“
                        </p>
                        <p className="italic text-xl mt-2">
                            ~Jean Baptiste Molière
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
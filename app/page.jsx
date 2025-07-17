"use client";
import * as Icon from "react-feather";
import Image from "next/image";

export default function Home() {
    const name = "Bilge Kılıç";
    const linkedInUrl = "https://www.linkedin.com/in/bilge-kılıç-574890107";
    const mail = "bbilgekilic@gmail.com";

    let clickCount = 0;

    const handleClick = () => {
        clickCount++;

        if (clickCount % 5 == 0) {
            window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
        }
    };

    return (
        <div className="max-w-[48rem] flex flex-col gap-16 items-center min-h-screen mx-auto overflow-auto px-6 py-2">
            <header className="flex flex-col items-center mt-6 md:mt-14">
                <section className="flex flex-col items-center bg-white p-[1.5rem] gap-4 rounded-lg shadow-md min-w-[20rem]">
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className="rounded-full shadow-lg border"
                        height={144}
                        width={144}
                        alt=""
                    />

                    <h1 className="text-[2.5rem] leading-[1.3] font-extrabold tracking[-0.05rem] mx-[1rem]">
                        {name}
                    </h1>

                    <section className="text-base">
                        <a
                            href={"mailto:" + mail}
                            className="flex justify-center text-[#666] hover:underline mb-1"
                        >
                            <Icon.Mail className="size-4 mr-[0.4rem] self-center"></Icon.Mail>
                            <span className="">{mail}</span>
                        </a>
                        <a
                            href={linkedInUrl}
                            className="flex justify-center text-[#666] hover:underline"
                        >
                            <Icon.Linkedin className="size-4 mr-[0.4rem] self-center"></Icon.Linkedin>
                            <span className="">
                                linkedin.com/in/bilge-kılıç
                            </span>
                        </a>
                    </section>
                </section>
            </header>

            <main className="flex flex-col gap-16">
                <section className="flex flex-col gap-3 text-justify">
                    <p>
                        👋 Hello! I'm <strong>Bilge</strong>, an experienced
                        professional in the tech industry.
                    </p>
                    <p>
                        🚀 I started my journey with internships at Aselsan,
                        Koçsistem, and Çözümevi Consulting during my time as an
                        Electrics and Electronics Engineering student at Bilkent
                        University.
                    </p>
                    <p>
                        💼 After graduating, I served as a Junior Dev at
                        Improva, where I contributed to exciting projects and
                        expanded my technical expertise.
                    </p>
                    <p>
                        🏢 Currently, I'm a Mainframe System Specialist at
                        Türkiye İş Bankası, where I play a crucial role in
                        ensuring the smooth operation of critical systems.
                    </p>
                    <p>
                        🌐 Fluent in Turkish and English, I enjoy bridging
                        cultures and collaborating with diverse teams.
                    </p>
                    <p>
                        🧘 When I'm not immersed in the tech world, I find
                        tranquility through yoga. My aspiration is to become a
                        yoga instructor one day and share the benefits of this
                        practice with others.
                    </p>
                    <p>
                        📩 Let's connect! I'm open to networking and exploring
                        new opportunities in the tech industry and the world of
                        yoga.
                    </p>
                </section>

                <section className="flex justify-center text-[#db5856] text-[1rem] margin-top-[5rem] cursor-pointer">
                    <Icon.Heart onClick={handleClick} />
                </section>
            </main>
        </div>
    );
}

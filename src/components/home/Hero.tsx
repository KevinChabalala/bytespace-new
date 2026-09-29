import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

const avatars = [
    "/images/student-avatar-1.png",
    "/images/student-avatar-2.png",
    "/images/student-avatar-3.png",
    "/images/student-avatar-4.png",
    "/images/student-avatar-5.png",
    "/images/student-avatar-6.png",
];

export default function Hero() {
    return (
        <section className="relative min-h-[1024px] w-full overflow-hidden bg-[#003BE2]">
            <div className="relative mx-auto h-[1024px] w-[1440px]">
                {/* 120px grid */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
            linear-gradient(to right, #ffffff 2px, transparent 2px),
            linear-gradient(to bottom, #ffffff 2px, transparent 2px)
          `,
                        backgroundSize: "120px 120px",
                    }}
                    aria-hidden="true"
                />

                <Navbar />

                {/* Decorative assets */}
                {/* 3D decorative assets */}

                {/* Large lime shape - left */}
                <img
                    src="/images/lime-left-spiral.png"
                    alt=""
                    width={385}
                    height={385}
                    className="pointer-events-none absolute left-[-118px] top-[221px] z-10 h-[385px] w-[385px]"
                    aria-hidden="true"
                />

                {/* Lime shape - top right */}
                <img
                    src="/images/lime-right-cone.png"
                    alt=""
                    width={370}
                    height={370}
                    className="pointer-events-none absolute left-[1231px] top-[221px] z-10 h-[370px] w-[370px]"
                    aria-hidden="true"
                />

                {/* White spring - left/middle */}
                <img
                    src="/images/white-left-spring.png"
                    alt=""
                    width={175}
                    height={175}
                    className="pointer-events-none absolute left-[183px] top-[477px] z-10 h-[175px] w-[175px]"
                    aria-hidden="true"
                />

                {/* White triangle - right/middle */}
                <img
                    src="/images/white-triangle.png"
                    alt=""
                    width={188}
                    height={188}
                    className="pointer-events-none absolute left-[1106px] top-[464px] z-10 h-[188px] w-[188px]"
                    aria-hidden="true"
                />

                {/* Large white ring - bottom left */}
                <img
                    src="/images/white-ring.png"
                    alt=""
                    width={342}
                    height={342}
                    className="pointer-events-none absolute left-[18px] top-[682px] z-10 h-[342px] w-[342px]"
                    aria-hidden="true"
                />

                {/* White spring - bottom right */}
                <img
                    src="/images/white-right-spring.png"
                    alt=""
                    width={330}
                    height={330}
                    className="pointer-events-none absolute left-[1127px] top-[672px] z-10 h-[330px] w-[330px]"
                    aria-hidden="true"
                />

                {/* Large lime circle */}
                <div
                    className="pointer-events-none absolute left-[145px] top-[582px] z-0 h-[1149px] w-[1149px] rounded-full border-[320px] border-[#CBFC01]"
                    aria-hidden="true"
                />

                {/* Hero content */}
                <div className="absolute left-[120px] top-[169px] z-20 flex w-[1200px] flex-col items-center gap-[60px]">
                    <div className="flex w-[935px] flex-col items-center gap-[32px]">
                        <h1
                            className="w-[935px] text-center text-[72px] font-semibold leading-[120%] tracking-[-1%] text-white"
                            style={{
                                fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                            }}
                        >
                            Get Access to Hundreds
                            <br />
                            Courses Available
                        </h1>

                        <p
                            className="w-[819px] text-center text-[18px] font-normal leading-[160%] text-[#E5E6E8]"
                            style={{
                                fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                            }}
                        >
                            Unlock your creativity, gain valuable knowledge, and grow your
                            business with our wide range of courses.
                        </p>
                    </div>

                    {/* Search */}
                    <form className="flex h-[52px] w-[581px] items-center gap-[16px]">
                        <div className="flex h-[52px] w-[461px] items-center gap-[8px] rounded-[24px] bg-white px-[24px] py-[12px]">
                            <Image
                                src="/images/search.svg"
                                alt=""
                                width={24}
                                height={24}
                                className="h-[24px] w-[24px]"
                                aria-hidden="true"
                            />

                            <input
                                type="search"
                                name="search"
                                placeholder="Course, topic, creator"
                                className="h-[29px] min-w-0 flex-1 border-0 bg-transparent p-0 text-[18px] font-normal leading-[160%] text-[#242528] outline-none placeholder:text-[#82868E]"
                                style={{
                                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                                }}
                                aria-label="Search courses"
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex h-[46px] w-[104px] items-center justify-center rounded-[24px] bg-[#D4FB20] px-[24px] py-[12px] text-[18px] font-medium leading-[120%] text-[#242528]"
                            style={{
                                fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                            }}
                        >
                            Search
                        </button>
                    </form>
                </div>

                {/* Student */}
                <Image
                    src="/images/student.png"
                    alt="Student using headphones and a laptop"
                    width={578}
                    height={541}
                    className="absolute left-[431px] top-[512px] z-20 h-[541px] w-[578px] object-contain"
                />

                {/* UI/UX Design card */}
                <div className="absolute left-[404px] top-[639px] z-30 flex h-[70px] w-[208px] flex-col gap-[8px] rounded-[16px] bg-white p-[16px] backdrop-blur-[20px]">
                    <p
                        className="h-[19px] text-[16px] font-medium leading-[120%] text-[#242528]"
                        style={{
                            fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                        }}
                    >
                        UI/UX Design
                    </p>

                    <p
                        className="text-[12px] font-normal leading-[160%] text-[#82868E]"
                        style={{
                            fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                        }}
                    >
                        200 Courses • 1000+ Students
                    </p>
                </div>

                {/* Learning Progress card */}
                {/* Learning Progress card */}
                <div className="absolute left-[842px] top-[651px] z-30 h-[131px] w-[232px] rounded-[16px] bg-white p-[16px] backdrop-blur-[20px]">
                    <p
                        className="h-[17px] text-[14px] font-medium leading-[120%] text-[#242528]"
                        style={{
                            fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                        }}
                    >
                        Learning Progress
                    </p>

                    <p
                        className="mt-[8px] h-[58px] text-[48px] font-semibold leading-[120%] tracking-[-1%] text-[#242528]"
                        style={{
                            fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                        }}
                    >
                        55%
                    </p>

                    <div className="absolute bottom-[16px] left-[16px] h-[8px] w-[200px] overflow-hidden rounded-[24px] bg-[#F6F6F6]">
                        <div className="h-[8px] w-[112px] rounded-[24px] bg-[#D4FB20]" />
                    </div>
                </div>

                {/* Happy Students card */}
                <div className="absolute left-[328px] top-[837px] z-30 flex h-[121px] w-[258px] flex-col gap-[8px] rounded-[16px] bg-white p-[16px] backdrop-blur-[20px]">
                    <p
                        className="h-[19px] text-[16px] font-medium leading-[120%] text-[#242528]"
                        style={{
                            fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                        }}
                    >
                        Happy Students
                    </p>

                    <div className="flex h-[19px] items-center gap-[8px]">
                        <span
                            className="text-[12px] font-normal leading-[160%] text-[#242528]"
                            style={{
                                fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                            }}
                        >
                            4.5 (240)
                        </span>

                        <span
                            className="text-[16px] leading-none text-[#D4FB20]"
                            aria-hidden="true"
                        >
                            ★
                        </span>
                    </div>

                    <div className="flex h-[43px] w-[232px] items-center">
                        {avatars.map((avatar, index) => (
                            <Image
                                key={avatar}
                                src={avatar}
                                alt=""
                                width={43}
                                height={43}
                                className={`h-[43px] w-[43px] rounded-full object-cover ${index > 0 ? "-ml-[7px]" : ""
                                    }`}
                                aria-hidden="true"
                            />
                        ))}

                        <div className="relative ml-[-7px] flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#D4FB20]">
                            <span
                                className="text-[12px] font-bold leading-[150%] text-[#242528]"
                                style={{
                                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                                }}
                            >
                                2K+
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
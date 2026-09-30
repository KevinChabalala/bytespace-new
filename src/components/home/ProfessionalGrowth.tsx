import Image from "next/image";

const benefits = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

export default function ProfessionalGrowth() {
    return (
        <section className="relative h-[1460px] w-full overflow-hidden bg-[#FAFAFA]">
            {/* Figma background effects */}
            <div
                className="pointer-events-none absolute left-[811px] top-[-458px] h-[1137px] w-[1137px]"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.0184) 53%, rgba(0, 59, 226, 0.0048) 75%, rgba(0, 59, 226, 0) 100%)",
                    backdropFilter: "blur(40px)",
                }}
                aria-hidden="true"
            />

            <div
                className="pointer-events-none absolute left-[-508px] top-[183px] h-[1137px] w-[1137px]"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.0368) 53%, rgba(0, 59, 226, 0.0096) 75%, rgba(0, 59, 226, 0) 100%)",
                    backdropFilter: "blur(40px)",
                }}
                aria-hidden="true"
            />

            <div
                className="pointer-events-none absolute left-[-152px] top-[-466px] h-[1137px] w-[1137px]"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
                    backdropFilter: "blur(40px)",
                }}
                aria-hidden="true"
            />

            <div
                className="pointer-events-none absolute left-[722px] top-[788px] h-[1137px] w-[1137px]"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)",
                    backdropFilter: "blur(40px)",
                }}
                aria-hidden="true"
            />

            <div
                className="pointer-events-none absolute left-[-287px] top-[946px] h-[672px] w-[672px]"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)",
                    backdropFilter: "blur(40px)",
                }}
                aria-hidden="true"
            />

            {/* Figma Frame 16: 1258 × 1220, left 121, top 120 */}
            <div className="relative mx-auto mt-[120px] h-[1220px] w-[1258px]">

                {/* =========================================================
            FRAME 11 — 621 × 552
        ========================================================= */}

                <div className="absolute left-0 top-0 flex h-[552px] w-[1258px] gap-[72px]">

                    {/* Text */}
                    <div className="relative h-[404px] w-[574px]">

                        <div className="absolute left-0 top-0 flex h-[404px] w-[574px] flex-col gap-[40px]">

                            <h2
                                className="h-[106px] w-[577px] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]"
                                style={{
                                    fontFamily:
                                        "Poppins, Arial, Helvetica, sans-serif",
                                }}
                            >
                                Your Path to Professional Growth Starts Here!
                            </h2>

                            <p
                                className="h-[145px] w-[477px] text-[18px] font-normal leading-[160%] text-[#4B4C53]"
                                style={{
                                    fontFamily:
                                        "Satoshi, Arial, Helvetica, sans-serif",
                                }}
                            >
                                Explore our curated selection of courses tailored to
                                enhance your capabilities and accelerate your career
                                journey. Whether you are looking to sharpen specific
                                skills, gain industry expertise, or embark on a new
                                career path entirely, we have the resources you need.
                            </p>

                            <div className="flex h-[73px] w-[314px] gap-[56px]">

                                <div className="flex h-[73px] w-[69px] flex-col">
                                    <span
                                        className="h-[44px] w-[53px] text-[36px] font-medium leading-[44px] tracking-[-0.01em] text-[#003BE2]"
                                        style={{
                                            fontFamily:
                                                "Poppins, Arial, Helvetica, sans-serif",
                                        }}
                                    >
                                        12K
                                    </span>

                                    <span
                                        className="h-[29px] w-[69px] text-[18px] font-normal leading-[160%] text-[#4B4C53]"
                                        style={{
                                            fontFamily:
                                                "Satoshi, Arial, Helvetica, sans-serif",
                                        }}
                                    >
                                        STudents
                                    </span>
                                </div>

                                <div className="flex h-[73px] w-[65px] flex-col">
                                    <span
                                        className="h-[44px] w-[61px] text-[36px] font-medium leading-[44px] tracking-[-0.01em] text-[#003BE2]"
                                        style={{
                                            fontFamily:
                                                "Poppins, Arial, Helvetica, sans-serif",
                                        }}
                                    >
                                        70+
                                    </span>

                                    <span
                                        className="h-[29px] w-[65px] text-[18px] font-normal leading-[160%] text-[#4B4C53]"
                                        style={{
                                            fontFamily:
                                                "Satoshi, Arial, Helvetica, sans-serif",
                                        }}
                                    >
                                        Courses
                                    </span>
                                </div>

                                <div className="flex h-[73px] w-[68px] flex-col">
                                    <span
                                        className="h-[44px] w-[34px] text-[36px] font-medium leading-[44px] tracking-[-0.01em] text-[#003BE2]"
                                        style={{
                                            fontFamily:
                                                "Poppins, Arial, Helvetica, sans-serif",
                                        }}
                                    >
                                        16
                                    </span>

                                    <span
                                        className="h-[29px] w-[68px] text-[18px] font-normal leading-[160%] text-[#4B4C53]"
                                        style={{
                                            fontFamily:
                                                "Satoshi, Arial, Helvetica, sans-serif",
                                        }}
                                    >
                                        Creators
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Frame 11 visual */}
                    <div className="relative h-[552px] w-[621px]">

                        <Image
                            src="/images/Professional-growth-image-1.png"
                            alt=""
                            width={577}
                            height={540}
                            priority
                            className="absolute left-[44px] top-[12px] h-[540px] w-[577px] object-contain"
                        />

                        {/* Learning Progress */}
                        {/* Learning Progress */}
                        <div className="absolute left-[345px] top-[213px] z-20 h-[138px] w-[232px] rounded-[16px] bg-white p-[16px] shadow-[0_18px_35px_rgba(0,0,0,0.08)] backdrop-blur-[20px]">

                            <span
                                className="absolute left-[16px] top-[16px] h-[24px] w-[115px] text-[14px] font-medium leading-[24px] text-[#242528]"
                                style={{
                                    fontFamily:
                                        "Satoshi, Arial, Helvetica, sans-serif",
                                }}
                            >
                                Learning Progress
                            </span>

                            <span
                                className="absolute left-[16px] top-[48px] h-[58px] w-[96px] text-[48px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]"
                                style={{
                                    fontFamily:
                                        "Poppins, Arial, Helvetica, sans-serif",
                                }}
                            >
                                55%
                            </span>

                            {/* 55% progress graph */}
                            <div className="absolute left-[16px] top-[114px] h-[8px] w-[200px] overflow-hidden rounded-[24px] bg-[#F6F6F6]">
                                <div className="h-[8px] w-[112px] rounded-[24px] bg-[#D4FB20]" />
                            </div>


                        </div>
                    </div>
                </div>

                {/* =========================================================
            FRAME 12 — 541 × 596
            552 + 72 = 624
        ========================================================= */}

                <div className="absolute left-0 top-[624px] flex h-[596px] w-[1258px] gap-[72px]">

                    {/* Frame 12 visual
              The exported image already contains:
              - Woman
              - Total Revenue
              - Year to Date
              - Happy Students
              - Lime decoration
              
              Do NOT duplicate those elements.
          */}
                    <div className="relative h-[596px] w-[541px]">

                        <Image
                            src="/images/Professional-growth-image-2.png"
                            alt=""
                            width={435}
                            height={596}
                            className="absolute left-[28px] top-0 h-[596px] w-[435px] object-contain"
                        />
                    </div>

                    {/* Creator text */}
                    <div className="flex h-[388px] w-[580px] flex-col gap-[40px]">

                        <h2
                            className="h-[106px] w-[391px] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]"
                            style={{
                                fontFamily:
                                    "Poppins, Arial, Helvetica, sans-serif",
                            }}
                        >
                            Create &amp; Manage Courses Easily.
                        </h2>

                        <p
                            className="h-[58px] w-[574px] text-[18px] font-normal leading-[28px] text-[#242528]"
                            style={{
                                fontFamily:
                                    "Satoshi, Arial, Helvetica, sans-serif",
                            }}
                        >
                            ByteSpace supports individuals or entities in the creation,
                            publication, and administration of educational courses.
                        </p>

                        {/* Four benefits */}
                        <div className="flex w-[199px] flex-col gap-[8px]">

                            {benefits.map((benefit) => (
                                <div
                                    key={benefit}
                                    className="flex h-[24px] w-[199px] items-center gap-[8px]"
                                >
                                    {/* Blue filled check icon */}
                                    <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#003BE2]">
                                        <span
                                            className="text-[14px] font-bold leading-none text-white"
                                            aria-hidden="true"
                                        >
                                            ✓
                                        </span>
                                    </div>

                                    <span
                                        className="h-[22px] whitespace-nowrap text-[18px] font-medium leading-[120%] text-[#242528]"
                                        style={{
                                            fontFamily:
                                                "Satoshi, Arial, Helvetica, sans-serif",
                                        }}
                                    >
                                        {benefit}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
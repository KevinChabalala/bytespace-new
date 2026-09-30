import Image from "next/image";

type CourseCardProps = {
    title: string;
    image: string;
};

const avatars = [
    "/images/courses/course1-ellipse1.png",
    "/images/courses/course1-ellipse2.png",
    "/images/courses/course1-ellipse3.png",
    "/images/courses/course1-ellipse4.png",
];

export default function CourseCard({
    title,
    image,
}: CourseCardProps) {
    return (
        <article className="relative h-[384px] w-[373px] overflow-hidden rounded-[24px] border border-[#CED0D3] bg-white">
            {/* Course image */}
            <div className="absolute left-[16px] top-[16px] h-[195px] w-[341px] overflow-hidden rounded-[12px]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="341px"
                    className="object-cover"
                />

                {/* Image information pills */}
                <div className="absolute left-[13px] top-[150px] flex h-[26px] w-[315px] items-center gap-[12px]">
                    <div className="flex h-[26px] w-[81px] items-center justify-center rounded-[24px] bg-[#F6F6F699] px-[12px] py-[6px] backdrop-blur-[8px]">
                        <span
                            className="whitespace-nowrap text-[12px] font-medium leading-[120%] text-[#4F4F4F]"
                            style={{
                                fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                            }}
                        >
                            17 Lessons
                        </span>
                    </div>

                    <div className="flex h-[26px] w-[109px] items-center justify-center rounded-[24px] bg-[#F6F6F699] px-[12px] py-[6px] backdrop-blur-[8px]">
                        <span
                            className="whitespace-nowrap text-[12px] font-medium leading-[120%] text-[#4F4F4F]"
                            style={{
                                fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                            }}
                        >
                            2 hours 16 mins
                        </span>
                    </div>

                    <div className="flex h-[26px] w-[101px] items-center justify-center rounded-[24px] bg-[#F6F6F699] px-[12px] py-[6px] backdrop-blur-[8px]">
                        <span
                            className="whitespace-nowrap text-[12px] font-medium leading-[120%] text-[#4F4F4F]"
                            style={{
                                fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                            }}
                        >
                            59 Comments
                        </span>
                    </div>
                </div>
            </div>

            {/* Title + rating */}
            <div className="absolute left-[16px] top-[232px] h-[43px] w-[341px]">
                <h3
                    className="absolute left-0 top-0 w-[237px] truncate text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-black"
                    style={{
                        fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                    }}
                >
                    {title}
                </h3>

                <div className="absolute right-0 top-0 flex h-[29px] w-[50px] items-center">
                    <span
                        className="text-[18px] font-normal leading-[160%] text-[#4F4F4F]"
                        style={{
                            fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                        }}
                    >
                        4.5
                    </span>

                    <Image
                        src="/images/courses/course-star.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="ml-0 h-[24px] w-[24px]"
                    />
                </div>

                <p
                    className="absolute left-0 top-[24px] text-[12px] font-normal leading-[160%] text-[#4F4F4F]"
                    style={{
                        fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                    }}
                >
                    by{" "}
                    <span className="text-[#003BE2]">
                        purepearl studio
                    </span>
                </p>
            </div>

            {/* Level + avatars */}
            <div className="absolute left-[16px] top-[298px] flex h-[32px] w-[237px] items-center gap-[12px]">
                {/* Beginner */}
                <div className="flex h-[32px] w-[97px] items-center gap-[4px] rounded-[24px] bg-[#F5F5F6] px-[12px] py-[6px]">
                    <Image
                        src="/images/courses/course-signal-cellular.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="h-[20px] w-[20px]"
                    />

                    <span
                        className="text-[12px] font-medium leading-[120%] text-[#4B4C53]"
                        style={{
                            fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                        }}
                    >
                        Beginner
                    </span>
                </div>

                {/* Avatars */}
                {/* Avatars */}
                <div className="relative h-[32px] w-[128px]">
                    {avatars.map((avatar, index) => (
                        <Image
                            key={avatar}
                            src={avatar}
                            alt=""
                            width={32}
                            height={32}
                            className={`absolute top-0 h-[32px] w-[32px] shrink-0 rounded-full object-cover ${index === 0
                                    ? "left-0 z-[1]"
                                    : index === 1
                                        ? "left-[28px] z-[2]"
                                        : index === 2
                                            ? "left-[56px] z-[3]"
                                            : "left-[84px] z-[4]"
                                }`}
                        />
                    ))}

                    <div className="absolute left-[108px] top-0 z-[10] flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#D4FB20]">
                        <span
                            className="text-[12px] font-medium leading-[20px] text-[#242528]"
                            style={{
                                fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                            }}
                        >
                            26+
                        </span>
                    </div>
                </div>
            </div>

            {/* Price */}
            <div className="absolute left-[16px] top-[344px] flex h-[24px] items-center">
                <span
                    className="text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#003BE2]"
                    style={{
                        fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                    }}
                >
                    $25
                </span>

                <span
                    className="ml-0 text-[12px] font-normal leading-[160%] text-[#4F4F4F]"
                    style={{
                        fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                    }}
                >
                    /lifetime
                </span>
            </div>
        </article>
    );
}
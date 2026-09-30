import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-[#003BE2]">
            <div className="relative mx-auto h-[1024px] w-[1440px]">
                {/* Background grid */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.12]"
                    aria-hidden="true"
                    style={{
                        backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,1) 0,
                rgba(255,255,255,1) 2px,
                transparent 2px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,1) 0,
                rgba(255,255,255,1) 2px,
                transparent 2px
              )
            `,
                        backgroundSize: "120px 120px",
                    }}
                />

                {/* Logo */}
                <Link
                    href="/"
                    aria-label="ByteSpace home"
                    className="absolute left-[122px] top-[35px] z-10 flex h-[37px] w-[171px] items-start"
                >
                    <Image
                        src="/images/logo.svg"
                        alt=""
                        width={29}
                        height={32}
                        priority
                        className="h-[31.5px] w-auto"
                    />
                </Link>

                {/* Intro */}
                <div className="absolute left-[122px] top-[120px] z-10 flex h-[95px] w-[475px] flex-col gap-[16px]">
                    <h1
                        className="h-[24px] w-[202px] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#F5F5F6]"
                        style={{
                            fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                        }}
                    >
                        Sign in with ease
                    </h1>

                    <p
                        className="h-[58px] w-[475px] text-[18px] font-normal leading-[160%] text-[#F5F5F6]"
                        style={{
                            fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                        }}
                    >
                        Experience a seamless and efficient sign-in process that grants
                        you instant access to a world of knowledge.
                    </p>
                </div>

                {/* Left Figma composition */}
                <Image
                    src="/images/signup/group-7.png"
                    alt=""
                    width={552}
                    height={586}
                    priority
                    className="pointer-events-none absolute left-[122px] top-[305px] z-20 h-[586px] w-[552px] object-contain"
                />

                {/* Sign-in card */}
                <section className="absolute left-[741px] top-[120px] z-30 h-[784px] w-[579px] rounded-[24px] bg-white">
                    <div className="absolute left-[63px] top-[56px] h-[672px] w-[453px]">
                        {/* Heading */}
                        <div className="flex h-[135px] w-[453px] flex-col">
                            <span
                                className="h-[29px] text-[18px] font-normal leading-[160%] text-[#003BE2]"
                                style={{
                                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                                }}
                            >
                                Sign In
                            </span>

                            <h2
                                className="h-[106px] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]"
                                style={{
                                    fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                                }}
                            >
                                Welcome Back
                            </h2>
                        </div>

                        {/* Form */}
                        <form className="absolute left-0 top-[185px] flex w-[453px] flex-col">
                            {/* Email */}
                            <label className="flex h-[77px] w-[453px] flex-col gap-[8px]">
                                <span
                                    className="h-[17px] text-[14px] font-medium leading-[120%] text-[#242528]"
                                    style={{
                                        fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                                    }}
                                >
                                    Email
                                </span>

                                <input
                                    type="email"
                                    placeholder="designer@example.com"
                                    className="h-[52px] w-[453px] rounded-[12px] border border-[#E5E6E8] bg-white px-[24px] text-[18px] font-normal leading-[160%] text-[#82868E] outline-none placeholder:text-[#82868E] focus:border-[#003BE2]"
                                    style={{
                                        fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                                    }}
                                />
                            </label>

                            {/* Password */}
                            <label className="mt-[24px] flex h-[77px] w-[453px] flex-col gap-[8px]">
                                <span
                                    className="h-[17px] text-[14px] font-medium leading-[120%] text-[#242528]"
                                    style={{
                                        fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                                    }}
                                >
                                    Password
                                </span>

                                <input
                                    type="password"
                                    placeholder="********"
                                    className="h-[52px] w-[453px] rounded-[12px] border border-[#E5E6E8] bg-white px-[24px] text-[18px] font-normal leading-[160%] text-[#242528] outline-none placeholder:text-[#82868E] focus:border-[#003BE2]"
                                    style={{
                                        fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                                    }}
                                />
                            </label>

                            {/* Sign In */}
                            <div className="mt-[24px] flex w-full justify-end">
                                <button
                                    type="submit"
                                    className="flex h-[46px] w-[104px] items-center justify-center rounded-[24px] bg-[#D4FB20] px-[24px] py-[12px] text-[18px] font-medium leading-[120%] text-[#242528] transition-opacity hover:opacity-90"
                                    style={{
                                        fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                                    }}
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>

                        {/* Social divider */}
                        <div className="absolute left-0 top-[514px] flex h-[20px] w-[453px] items-center">
                            <div className="h-px w-[200px] bg-[#CED0D3]" />

                            <span
                                className="mx-[10px] text-[16px] font-normal leading-[24px] text-[#82868E]"
                                style={{
                                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                                }}
                            >
                                or
                            </span>

                            <div className="h-px w-[200px] bg-[#CED0D3]" />
                        </div>
                        {/* Social buttons */}
                        <div className="absolute left-1/2 top-[573px] flex -translate-x-1/2 gap-[16px]">
                            {/* Facebook */}
                            <button
                                type="button"
                                aria-label="Continue with Facebook"
                                className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-[#CED0D3] bg-white"
                            >
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <circle cx="18" cy="18" r="17" fill="#000000" />
                                    <path
                                        d="M20.3 27V19.4H22.8L23.2 16.45H20.3V14.57C20.3 13.72 20.54 13.14 21.78 13.14H23.3V10.5C22.57 10.42 21.84 10.38 21.1 10.39C18.9 10.39 17.4 11.73 17.4 14.19V16.45H14.9V19.4H17.4V27H20.3Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>

                            {/* Google */}
                            <button
                                type="button"
                                aria-label="Continue with Google"
                                className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-[#CED0D3] bg-white"
                            >
                                <span
                                    className="text-[36px] font-semibold leading-none text-black"
                                    style={{
                                        fontFamily: "Arial, Helvetica, sans-serif",
                                    }}
                                >
                                    G
                                </span>
                            </button>
                        </div>

                        {/* New user */}
                        <div className="absolute left-0 top-[666px] flex h-[26px] w-[453px] items-center justify-center">
                            <span
                                className="text-[16px] font-normal leading-[26px] text-[#82868E]"
                                style={{
                                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                                }}
                            >
                                New user?
                            </span>

                            <Link
                                href="/signup"
                                className="ml-[4px] text-[16px] font-normal leading-[26px] text-[#003BE2] hover:underline"
                                style={{
                                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                                }}
                            >
                                Create an account
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
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

        {/* Intro text */}
        <div className="absolute left-[122px] top-[120px] z-10 flex h-[127px] w-[475px] flex-col gap-[16px]">
          <h1
            className="h-[24px] w-[202px] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#F5F5F6]"
            style={{
              fontFamily: "Poppins, Arial, Helvetica, sans-serif",
            }}
          >
            Sign up and come in
          </h1>

          <p
            className="h-[87px] w-[475px] text-[18px] font-normal leading-[160%] text-[#F5F5F6]"
            style={{
              fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
            }}
          >
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no
            cost
          </p>
        </div>

        {/* Complete decorative composition exported from Figma */}
        <Image
          src="/images/signup/group-7.png"
          alt=""
          width={552}
          height={586}
          priority
          className="pointer-events-none absolute left-[122px] top-[305px] z-20 h-[586px] w-[552px] object-contain"
        />

        {/* Register card */}
        <section className="absolute left-[741px] top-[120px] z-30 h-[784px] w-[579px] rounded-[24px] bg-white">
          <div className="absolute left-[63px] top-[56px] flex h-[672px] w-[453px] flex-col">
            {/* Heading */}
            <div className="flex h-[135px] w-[453px] flex-col">
              <span
                className="h-[29px] text-[18px] font-normal leading-[160%] text-[#003BE2]"
                style={{
                  fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                }}
              >
                Create an Account
              </span>

              <h2
                className="h-[106px] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]"
                style={{
                  fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                }}
              >
                Welcome to
                <br />
                ByteSpace
              </h2>
            </div>

            {/* Form */}
            <form className="mt-[40px] flex h-[349px] w-[453px] flex-col gap-[24px]">
              {/* Full Name */}
              <label className="flex h-[77px] w-[453px] flex-col gap-[8px]">
                <span
                  className="h-[17px] text-[14px] font-medium leading-[120%] text-[#242528]"
                  style={{
                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                  }}
                >
                  Full Name
                </span>

                <input
                  type="text"
                  placeholder="Jamie Davis"
                  className="h-[52px] w-[453px] rounded-[12px] border border-[#E5E6E8] bg-white px-[24px] text-[18px] font-normal leading-[160%] text-[#242528] outline-none placeholder:text-[#82868E] focus:border-[#003BE2]"
                  style={{
                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                  }}
                />
              </label>

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
              <label className="flex h-[77px] w-[453px] flex-col gap-[8px]">
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

              {/* Continue */}
              <div className="flex w-full justify-end">
                <button
                  type="submit"
                  className="flex h-[46px] w-[123px] items-center justify-center rounded-[24px] bg-[#D4FB20] px-[24px] py-[12px] text-[18px] font-medium leading-[120%] text-[#242528] transition-opacity hover:opacity-90"
                  style={{
                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                  }}
                >
                  Continue
                </button>
              </div>
            </form>

            {/* Login */}
            <div className="absolute bottom-0 left-1/2 flex h-[26px] w-[224px] -translate-x-1/2 items-center gap-[4px]">
              <span
                className="whitespace-nowrap text-[16px] font-normal leading-[160%] text-[#4B4C53]"
                style={{
                  fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                }}
              >
                Already have an account?
              </span>

              <Link
                href="/login"
                className="text-[16px] font-normal leading-[160%] text-[#003BE2] hover:underline"
                style={{
                  fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                }}
              >
                Login
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
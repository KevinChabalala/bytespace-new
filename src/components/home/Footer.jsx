import Image from "next/image";
import Link from "next/link";

const browseLinks = [
  "Featured Courses",
  "Featured Categories",
  "Business",
  "IT",
  "Design",
];

const categoryLinks = [
  "Development",
  "Marketing",
  "Photography",
  "Finance",
  "Sport",
];

const platformLinks = [
  "Become a Creator",
  "Affiliate Program",
  "Contact",
  "Help",
  "About",
];

export default function Footer() {
  return (
    <footer className="relative h-[525px] w-full border-t border-[#CED0D3] bg-white">
      <div className="relative mx-auto h-[525px] w-[1440px]">
        {/* Main footer content */}
        <div className="absolute left-[120px] top-[71px] flex h-[406px] w-[1200px] flex-col gap-[130px]">
          {/* Top content */}
          <div className="flex h-[234px] w-[1200px] gap-[92px]">
            {/* Newsletter */}
            <div className="flex h-[234px] w-[528px] flex-col gap-[45px]">
              {/* Logo + description */}
              <div className="flex h-[75px] w-[528px] flex-col gap-[16px]">
                <Link
                  href="/"
                  aria-label="ByteSpace home"
                  className="flex h-[37px] w-[171px] items-start"
                >
                  <Image
                    src="/images/logo.svg"
                    alt=""
                    width={29}
                    height={32}
                    className="h-[31.5px] w-auto"
                  />

                  <span
                    className="ml-[8px] mt-[7px] h-[30px] w-[134px] text-[24px] font-bold leading-[100%] text-[#242528]"
                    style={{
                      fontFamily:
                        "Clash Display, Arial, Helvetica, sans-serif",
                    }}
                  >
                    ByteSpace
                  </span>
                </Link>

                <p
                  className="h-[22px] w-[528px] text-[14px] font-normal leading-[160%] text-[#242528]"
                  style={{
                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                  }}
                >
                  Stay Up to date with our latest features and releases by
                  joining our newsletter.
                </p>
              </div>

              {/* Newsletter form */}
              <div className="flex h-[114px] w-[504px] flex-col gap-[24px]">
                <form className="flex h-[52px] w-[504px] items-center gap-[24px]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className="h-[52px] w-[376px] rounded-[100px] border border-[#CED0D3] bg-white px-[24px] text-[16px] font-normal leading-[160%] text-[#242528] outline-none placeholder:text-[#242528]"
                    style={{
                      fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                    }}
                  />

                  <button
                    type="submit"
                    className="flex h-[46px] w-[104px] shrink-0 items-center justify-center rounded-[24px] bg-[#D4FB20] px-[24px] py-[12px] text-[18px] font-medium leading-[120%] text-[#242528] transition-opacity hover:opacity-90"
                    style={{
                      fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                    }}
                  >
                    Search
                  </button>
                </form>

                <p
                  className="h-[38px] w-[504px] text-[12px] font-normal leading-[160%] text-[#242528]"
                  style={{
                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                  }}
                >
                  By subscribing, you agree to our Privacy Policy and consent
                  to receive updates from our company.
                </p>
              </div>
            </div>

            {/* Footer navigation */}
            <div className="flex h-[174px] w-[580px] gap-[40px]">
           {/* First column */}
<div className="flex w-[124px] shrink-0 flex-col gap-[16px]">
  {browseLinks.map((link) => (
    <Link
      key={link}
      href="#"
      className="whitespace-nowrap text-[14px] font-normal leading-[160%] text-[#242528] transition-opacity hover:opacity-60"
      style={{
        fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
      }}
    >
      {link}
    </Link>
  ))}
</div>

              {/* Second column */}
              <div className="flex w-[82px] flex-col gap-[16px]">
                {categoryLinks.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="whitespace-nowrap text-[14px] font-normal leading-[160%] text-[#242528] transition-opacity hover:opacity-60"
                    style={{
                      fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </div>

              {/* Third column */}
              <div className="flex w-[112px] flex-col gap-[16px]">
                {platformLinks.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="whitespace-nowrap text-[14px] font-normal leading-[160%] text-[#242528] transition-opacity hover:opacity-60"
                    style={{
                      fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="h-[42px] w-[1200px]">
            <div className="h-px w-[1200px] bg-[#CED0D3]" />

            <div className="mt-[20px] flex h-[19px] w-[1200px] items-center justify-between">
              <span
                className="text-[12px] font-normal leading-[160%] text-[#242528]"
                style={{
                  fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                }}
              >
                @ 2023 ByteSpace. All rights reserved.
              </span>

              <div className="flex h-[19px] gap-[24px]">
                <Link
                  href="#"
                  className="text-[12px] font-normal leading-[160%] text-[#242528] transition-opacity hover:opacity-60"
                  style={{
                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                  }}
                >
                  Privacy Policy
                </Link>

                <Link
                  href="#"
                  className="text-[12px] font-normal leading-[160%] text-[#242528] transition-opacity hover:opacity-60"
                  style={{
                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                  }}
                >
                  Terms of Service
                </Link>

                <Link
                  href="#"
                  className="text-[12px] font-normal leading-[160%] text-[#242528] transition-opacity hover:opacity-60"
                  style={{
                    fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                  }}
                >
                  Cookies Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
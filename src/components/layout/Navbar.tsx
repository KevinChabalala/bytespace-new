import Image from "next/image";
import Link from "next/link";

const mainNavigation = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
];

export default function Navbar() {
    return (
        <header className="relative z-50 h-[120px] w-full">
            <nav className="relative mx-auto h-full max-w-[1440px]">
                {/* Logo */}
                <Link
                    href="/"
                    className="absolute left-[122px] top-[35px] flex h-[37px] w-[171px] items-start"
                    aria-label="ByteSpace home"
                >
                    <Image
                        src="/images/logo.svg"
                        alt=""
                        width={29}
                        height={32}
                        priority
                        className="h-[31.5px] w-auto"
                    />

                    <span
                        className="ml-[8px] mt-[7px] h-[30px] w-[134px] text-[24px] font-bold leading-[100%] text-[#F5F5F6]"
                        style={{
                            fontFamily: "Clash Display, Arial, Helvetica, sans-serif",
                        }}
                    >
                        ByteSpace
                    </span>
                </Link>

                {/* Main navigation */}
                <div className="absolute left-1/2 top-[47px] flex h-[26px] w-[210px] -translate-x-1/2 items-start gap-[24px]">
                    {mainNavigation.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="whitespace-nowrap text-[16px] font-normal leading-[24px] transition-opacity hover:opacity-70"
                            style={{
                                color: "#F5F5F6",
                                fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Right navigation */}
                <div className="absolute right-[120px] top-[48px] flex h-[24px] w-[174px] items-start gap-[24px]">
                    <Link
                        href="/login"
                        className="whitespace-nowrap text-[16px] font-normal leading-[24px] transition-opacity hover:opacity-70"
                        style={{
                            color: "#F5F5F6",
                            fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                        }}
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/signup"
                        className="whitespace-nowrap text-[16px] font-normal leading-[24px] transition-opacity hover:opacity-70"
                        style={{
                            color: "#F5F5F6",
                            fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                        }}
                    >
                        Join Us
                    </Link>

                    <button
                        type="button"
                        aria-label="Shopping bag"
                        className="flex h-[24px] w-[24px] shrink-0 items-center justify-center"
                    >
                        <Image
                            src="/images/shopping-bag.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="h-[24px] w-[24px]"
                        />
                    </button>
                </div>
            </nav>
        </header>
    );
}
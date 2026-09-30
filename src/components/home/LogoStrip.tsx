import Image from "next/image";

const partnerLogos = [
  {
    src: "/images/partner-logo-1.svg",
    width: 167,
  },
  {
    src: "/images/partner-logo-2.svg",
    width: 168,
  },
  {
    src: "/images/partner-logo-3.svg",
    width: 170,
  },
  {
    src: "/images/partner-logo-4.svg",
    width: 170,
  },
  {
    src: "/images/partner-logo-5.svg",
    width: 169,
  },
];

export default function LogoStrip() {
  return (
    <section className="h-[202px] w-full bg-[#F5F5F6]">
      <div className="mx-auto h-full w-[1440px]">
        <div className="flex h-[42px] w-[1132px] translate-x-[154px] translate-y-[80px] gap-[72px]">
          {partnerLogos.map((logo, index) => (
            <div
              key={logo.src}
              className="relative h-[42px] shrink-0"
              style={{ width: `${logo.width}px` }}
            >
              <Image
                src={logo.src}
                alt={`Partner logo ${index + 1}`}
                fill
                sizes={`${logo.width}px`}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
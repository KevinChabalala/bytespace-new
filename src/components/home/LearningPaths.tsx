const learningPaths = [
  {
    name: "Design",
    image: "/images/learning-paths/design.svg",
  },
  {
    name: "Development",
    image: "/images/learning-paths/development.svg",
  },
  {
    name: "IT & Software",
    image: "/images/learning-paths/it-software.svg",
  },
  {
    name: "Business",
    image: "/images/learning-paths/business.svg",
  },
  {
    name: "Marketing",
    image: "/images/learning-paths/marketing.svg",
  },
  {
    name: "Photography",
    image: "/images/learning-paths/photography.svg",
  },
];

export default function LearningPaths() {
  return (
    <section className="relative h-[527px] w-full bg-white">
      <div className="relative mx-auto h-full w-[1440px]">
        {/* Section heading */}
        <div className="absolute left-[261px] top-[72px] flex h-[117px] w-[917px] flex-col items-center gap-[16px]">
          <h2
            className="h-[43px] w-[792px] text-center text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#040819]"
            style={{
              fontFamily: "Poppins, Arial, Helvetica, sans-serif",
            }}
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p
            className="h-[58px] w-[917px] text-center text-[18px] font-normal leading-[160%] text-[#82868E]"
            style={{
              fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
            }}
          >
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Learning path cards */}
        <div className="absolute left-[119px] top-[257px] flex h-[167px] w-[1202px] gap-[40px]">
          {learningPaths.map((path) => (
            <article
              key={path.name}
              className="flex h-[167px] w-[167px] shrink-0 flex-col items-center justify-center gap-[8px] rounded-[24px] border border-[#CED0D3]"
            >
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#D4FB20] p-[12px]">
                <img
                  src={path.image}
                  alt=""
                  width={36}
                  height={36}
                  className="h-[36px] w-[36px]"
                />
              </div>

              <span
                className="text-center text-[20px] font-medium leading-[120%] text-[#242528]"
                style={{
                  fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                }}
              >
                {path.name}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
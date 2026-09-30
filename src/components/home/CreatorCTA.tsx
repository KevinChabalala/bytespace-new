export default function CreatorCTA() {
    return (
        <section className="relative h-[488px] w-full overflow-hidden bg-[#003BE2]">
            {/* =========================================================
          FIGMA CTA FRAME — 1440 × 488
      ========================================================= */}

            <div className="relative mx-auto h-[488px] w-[1440px]">
                {/* =======================================================
            GRID — 120px spacing
        ======================================================= */}

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

                {/* =======================================================
            DECORATIONS
        ======================================================= */}

                {/* Top-left lime spring */}
                <img
                    src="/images/creator-cta/lime-left-spring.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[-35px] top-[-5px] h-[225px] w-[267px] object-contain"
                />

                {/* White spring
            175 × 175
            left 178
            top 5
        */}
                <div
                    className="pointer-events-none absolute left-[178px] top-[5px] h-[175px] w-[175px]"
                    aria-hidden="true"
                >
                    <img
                        src="/images/creator-cta/white-left-spring.png"
                        alt=""
                        className="absolute left-0 top-0 h-[176px] w-[177px] rotate-180 object-contain"
                    />
                </div>

                {/* Top-right lime triangle
            370 × 370
            left 1226
            top 6
        */}
                <div
                    className="pointer-events-none absolute left-[1226px] top-[6px] h-[370px] w-[370px]"
                    aria-hidden="true"
                >
                    <img
                        src="/images/creator-cta/lime-right-triangle.png"
                        alt=""
                        className="absolute left-0 top-0 h-[189px] w-[190px] object-contain"
                    />
                </div>

                {/* Top-right white cone
            372 × 372
        */}
                <div
                    className="pointer-events-none absolute left-[1226px] top-0 h-[372px] w-[372px]"
                    aria-hidden="true"
                >
                    <img
                        src="/images/creator-cta/white-right-cone.png"
                        alt=""
                        className="absolute left-[115px] top-[-6px] h-[372px] w-[218px] object-contain"
                    />
                </div>

                {/* Left white triangle
            188 × 188
            left -48
            top 225
        */}
                <div
                    className="pointer-events-none absolute left-[-48px] top-[225px] h-[188px] w-[188px]"
                    aria-hidden="true"
                >
                    <img
                        src="/images/creator-cta/white-left-triangle.png"
                        alt=""
                        className="absolute left-0 top-0 h-[189px] w-[140px] object-contain"
                    />
                </div>

                {/* Bottom-left lime ring
            342 × 342
            left 20
            top 299
        */}
                <div
                    className="pointer-events-none absolute left-[20px] top-[299px] h-[342px] w-[342px]"
                    aria-hidden="true"
                >
                    <img
                        src="/images/creator-cta/lime-bottom-ring.png"
                        alt=""
                        className="absolute left-0 top-0 h-[190px] w-[346px] object-contain"
                    />
                </div>

                {/* Bottom-right lime spring
            330 × 330
            left 1110
            top 289
        */}
                <div
                    className="pointer-events-none absolute left-[1110px] top-[289px] h-[330px] w-[330px]"
                    aria-hidden="true"
                >
                    <img
                        src="/images/creator-cta/lime-right-spring.png"
                        alt=""
                        className="absolute left-0 top-0 h-[199px] w-[334px] object-contain"
                    />
                </div>

                {/* =======================================================
            CONTENT
            Figma: left 238 / top 85 / 964 × 319
        ======================================================= */}

                <div className="absolute left-[238px] top-[85px] flex h-[319px] w-[964px] flex-col items-center gap-[40px]">
                    <h2
                        className="h-[106px] w-[710px] text-center text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#F5F5F6]"
                        style={{
                            fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                        }}
                    >
                        Unlock Your Potential as a Creator with ByteSpace
                    </h2>

                    <p
                        className="h-[87px] w-[964px] text-center text-[18px] font-normal leading-[160%] text-[#F5F5F6]"
                        style={{
                            fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                        }}
                    >
                        Experience the collaboration of numerous creators and an
                        expanding selection of courses. Register now and become a
                        part of a community comprising over 10,000 local and
                        international creators. Utilize our Course Editor, and
                        showcase your expertise by publishing your finest course
                        on the ByteSpace Course Library.
                    </p>

                    <button
                        type="button"
                        className="flex h-[46px] w-[172px] items-center justify-center gap-[8px] rounded-[24px] bg-[#D4FB20] px-[24px] py-[12px] text-[#242528] transition-opacity hover:opacity-90"
                        style={{
                            fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                        }}
                    >
                        <span className="h-[22px] w-[124px] text-center text-[18px] font-medium leading-[120%]">
                            Join as Creator
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
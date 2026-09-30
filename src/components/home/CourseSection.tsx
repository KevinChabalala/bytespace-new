import CourseCard from "@/components/home/CourseCard";

const categories = [
    {
        label: "Featured",
        width: 96,
        active: true,
    },
    {
        label: "Music",
        width: 75,
    },
    {
        label: "Drawing & Painting",
        width: 170,
    },
    {
        label: "Marketing",
        width: 105,
    },
    {
        label: "Learning",
        width: 105,
    },
    {
        label: "Animation",
        width: 124,
    },
    {
        label: "Social Media",
        width: 124,
    },
    {
        label: "UI/UX Design",
        width: 130,
    },
    {
        label: "Creative Marketing",
        width: 169,
    },
];

const categoriesRowTwo = [
    {
        label: "Digital Illustration",
        width: 157,
    },
    {
        label: "Film & Video",
        width: 123,
    },
    {
        label: "Crafts",
        width: 76,
    },
    {
        label: "Freelance & Entrepreneurship",
        width: 246,
    },
    {
        label: "Graphic Design",
        width: 144,
    },
    {
        label: "Photography",
        width: 126,
    },
];

const categoriesRowThree = [
    {
        label: "Productivity",
        width: 118,
    },
    {
        label: "Web Development",
        width: 166,
    },
    {
        label: "Data Science",
        width: 127,
    },
    {
        label: "Cooking",
        width: 94,
    },
    {
        label: "+ More",
        width: 94,
        more: true,
    },
];

const courses = [
    {
        title: "Learn Figma from Basic",
        image: "/images/courses/course1-image.png",
    },
    {
        title: "Build Digital Asset",
        image: "/images/courses/course2-image.png",
    },
    {
        title: "the Power of Big Data",
        image: "/images/courses/course3-image.png",
    },
    {
        title: "Balancing Productivity and Self Care",
        image: "/images/courses/course4-image.png",
    },
    {
        title: "Mastering Money Management",
        image: "/images/courses/course5-image.png",
    },
    {
        title: "From Idea to Startup Success",
        image: "/images/courses/course6-image.png",
    },
];

type Category = {
    label: string;
    width: number;
    active?: boolean;
    more?: boolean;
};

function CategoryRow({
    categories,
}: {
    categories: Category[];
}) {
    return (
        <div className="flex h-[43px] items-center gap-[16px]">
            {categories.map((category) => (
                <button
                    key={category.label}
                    type="button"
                    className="flex h-[43px] shrink-0 items-center justify-center rounded-[24px] px-[16px] py-[12px]"
                    style={{
                        width: `${category.width}px`,
                        backgroundColor: category.active ? "#D4FB20" : "#F5F5F6",
                        color: category.active
                            ? "#242528"
                            : category.more
                                ? "#003BE2"
                                : "#4B4C53",
                    }}
                >
                    <span
                        className="whitespace-nowrap text-[16px] font-medium leading-[120%]"
                        style={{
                            fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                        }}
                    >
                        {category.label}
                    </span>
                </button>
            ))}
        </div>
    );
}

export default function CourseSection() {
    return (
        <section className="relative h-[1350px] w-full overflow-hidden bg-white">
            <div className="relative mx-auto h-[1350px] w-[1440px]">
                {/* Section heading */}
                <div className="absolute left-[261px] top-[72px] flex h-[180px] w-[917px] flex-col items-center gap-[16px]">
                    <h2
                        className="h-[106px] w-[588px] text-center text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#040819]"
                        style={{
                            fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                        }}
                    >
                        Discover Your Passion,
                        <br />
                        Build Your Skills
                    </h2>

                    <p
                        className="h-[58px] w-[917px] text-center text-[18px] font-normal leading-[160%] text-[#82868E]"
                        style={{
                            fontFamily: "Satoshi, Arial, Helvetica, sans-serif",
                        }}
                    >
                        At Bytespace Courses, we bring you closer to life-changing
                        knowledge. Explore a variety of courses across different fields,
                        from technology to the arts, and make a difference in your career
                        and life.
                    </p>
                </div>

                {/* Category filters */}
                <div className="absolute left-[175px] top-[294px] w-[1086px]">
                    <CategoryRow categories={categories} />
                </div>

                <div className="absolute left-[243px] top-[358px] w-[952px]">
                    <CategoryRow categories={categoriesRowTwo} />
                </div>

                <div className="absolute left-[407.5px] top-[422px] w-[622px]">
                    <CategoryRow categories={categoriesRowThree} />
                </div>

                {/* Course grid */}
                <div className="absolute left-[120px] top-[542px] grid w-[1199px] grid-cols-3 gap-[40px]">
                    {courses.map((course) => (
                        <CourseCard
                            key={course.title}
                            title={course.title}
                            image={course.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
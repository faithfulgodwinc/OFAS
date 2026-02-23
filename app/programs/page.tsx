import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const programs = [
    {
        title: "Asthma Education Workshops",
        description: "Interactive sessions for families to learn about triggers, medications, and action plans.",
    },
    {
        title: "School Asthma Management",
        description: "Training for teachers and school nurses to create asthma-friendly school environments.",
    },
    {
        title: "Community Support Groups",
        description: "Regular meetings for patients and caregivers to share experiences and advice.",
    },
    {
        title: "Emergency Preparedness Training",
        description: "Teaching families how to handle asthma attacks and when to seek emergency care.",
    }
];

export default function ProgramsPage() {
    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <Container>
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-heading">
                        Our Programs & Impact
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Empowering communities through education and direct support services.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2">
                    {programs.map((program) => (
                        <div key={program.title} className="bg-white dark:bg-gray-900 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 border border-gray-100/50 dark:border-gray-800 hover:shadow-[0_8px_30px_rgb(8,8,178,0.12)] transition-all duration-500 hover:-translate-y-1.5 group">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">{program.title}</h3>
                            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                                {program.description}
                            </p>
                            <div className="mt-8">
                                <Button variant="outline" className="text-brand dark:text-white border-brand dark:border-transparent hover:bg-brand/10 dark:hover:bg-white dark:hover:text-black shadow-none group-hover:shadow-md transition-all duration-300">Learn More</Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-brand rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,8,178,0.3)] lg:grid lg:grid-cols-2 lg:gap-4 border border-white/10 relative">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 z-10">
                        <div className="lg:self-center">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-heading tracking-tight">
                                <span className="block drop-shadow-sm">Bring a program to your community.</span>
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-blue-100 max-w-lg">
                                Interested in hosting a workshop or starting a support group? Become a Campus Rep or Community Leader today.
                            </p>
                            <Link
                                href="/volunteer"
                                className="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-lg font-bold transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 bg-white text-brand shadow-[0_4px_14px_0_rgb(0,0,0,0.15)] hover:bg-gray-50 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] h-14 px-10"
                            >
                                Become a Rep
                            </Link>
                        </div>
                    </div>
                    <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 relative flex items-end justify-center lg:justify-end pr-8">
                        <div className="relative h-full w-full max-w-sm lg:translate-y-8">
                            <Image
                                src="/campus_rep_student_transparent.png"
                                alt="Happy college student volunteer"
                                fill
                                className="object-contain object-bottom"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

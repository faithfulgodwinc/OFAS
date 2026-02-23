import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroInhaler3D } from "./hero-inhaler-3d";

export function HeroSection() {
    return (
        <div className="relative overflow-hidden lg:min-h-[800px] flex flex-col lg:flex-row items-center">
            <Container className="w-full">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-16 sm:pt-20 lg:pt-0 flex flex-col justify-center min-h-full">
                    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-5xl tracking-tighter font-extrabold text-gray-900 dark:text-white sm:text-6xl md:text-7xl font-heading leading-tight md:leading-[1.1]">
                                <span className="block xl:inline drop-shadow-sm">Breathing Easier,</span>{" "}
                                <span className="block text-brand xl:inline drop-shadow-md">Together.</span>
                            </h1>
                            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 sm:text-xl sm:max-w-xl sm:mx-auto lg:mx-0 leading-relaxed font-medium">
                                Supporting asthma awareness, education, and care for every family.
                                Join our community to make a difference in the lives of those
                                affected by asthma.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                                <div className="rounded-md shadow">
                                    <Link href="/donate">
                                        <Button size="lg" className="w-full md:w-auto font-bold text-lg py-6 px-8">
                                            Donate Now
                                        </Button>
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0">
                                    <Link href="/volunteer">
                                        <Button variant="outline" size="lg" className="w-full md:w-auto font-bold text-brand dark:text-white border-brand dark:border-transparent hover:bg-brand/10 dark:hover:bg-white dark:hover:text-black text-lg py-6 px-8">
                                            Join a Chapter
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </Container>

            <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-[30rem] sm:h-96 md:h-[40rem] lg:h-full w-full flex items-center justify-center p-8 lg:p-16">
                <HeroInhaler3D />
            </div>
        </div>
    );
}

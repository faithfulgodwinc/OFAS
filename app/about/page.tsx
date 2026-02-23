import { Container } from "@/components/ui/container";

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-gray-950 py-16 sm:py-24">
            <Container>
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-heading">
                        About OFAS
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                        One Family Asthma Support Group: A community dedicated to breathing easier.
                    </p>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-heading">Our Mission</h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 italic">
                        [Content to be added...]
                    </p>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-heading">Our History</h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 italic">
                        [Content to be added...]
                    </p>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-heading">Our Team</h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 italic">
                        [Content to be added...]
                    </p>
                    {/* Placeholder for Team Grid */}
                    <div className="mt-8 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-12 text-center shadow-sm">
                        <p className="text-xl text-gray-500 dark:text-gray-400 italic">
                            Team member profiles coming soon.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

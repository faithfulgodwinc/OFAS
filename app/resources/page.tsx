import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FileText, Video, ExternalLink } from "lucide-react";

export default function ResourcesPage() {
    return (
        <div className="bg-white py-16 sm:py-24">
            <Container>
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-heading">
                        Asthma Resources
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Guides, tips, and tools to help you manage asthma with confidence.
                    </p>
                </div>

                {/* Filter Bar (Placeholder) */}
                <div className="mt-10 max-w-xl mx-auto">
                    <div className="flex justify-center flex-wrap gap-2">
                        <Button variant="secondary" size="sm" className="rounded-full">All</Button>
                        <Button variant="ghost" size="sm" className="rounded-full">Triggers</Button>
                        <Button variant="ghost" size="sm" className="rounded-full">Management</Button>
                        <Button variant="ghost" size="sm" className="rounded-full">Emergency</Button>
                        <Button variant="ghost" size="sm" className="rounded-full">For Schools</Button>
                    </div>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Resource Card 1 */}
                    <div className="border border-gray-100/50 bg-white dark:bg-gray-900 rounded-3xl p-8 hover:shadow-[0_8px_30px_rgb(8,8,178,0.12)] hover:border-brand/30 transition-all duration-500 hover:-translate-y-1 group">
                        <div className="h-12 w-12 bg-blue-50 dark:bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <FileText className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand transition-colors">Asthma Action Plan Template</h3>
                        <p className="mt-3 text-gray-500 dark:text-gray-400">A downloadable PDF to help you outline your daily treatment and emergency steps.</p>
                        <Button variant="link" className="mt-6 p-0 h-auto text-brand font-semibold group-hover:gap-2 transition-all">Download PDF <span aria-hidden="true" className="ml-1">&rarr;</span></Button>
                    </div>

                    {/* Resource Card 2 */}
                    <div className="border border-gray-100/50 bg-white dark:bg-gray-900 rounded-3xl p-8 hover:shadow-[0_8px_30px_rgb(8,8,178,0.12)] hover:border-brand/30 transition-all duration-500 hover:-translate-y-1 group">
                        <div className="h-12 w-12 bg-blue-50 dark:bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Video className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand transition-colors">How to Use an Inhaler</h3>
                        <p className="mt-3 text-gray-500 dark:text-gray-400">Step-by-step video guide on proper inhaler technique for maximum effectiveness.</p>
                        <Button variant="link" className="mt-6 p-0 h-auto text-brand font-semibold group-hover:gap-2 transition-all">Watch Video <span aria-hidden="true" className="ml-1">&rarr;</span></Button>
                    </div>

                    {/* Resource Card 3 */}
                    <div className="border border-gray-100/50 bg-white dark:bg-gray-900 rounded-3xl p-8 hover:shadow-[0_8px_30px_rgb(8,8,178,0.12)] hover:border-brand/30 transition-all duration-500 hover:-translate-y-1 group">
                        <div className="h-12 w-12 bg-blue-50 dark:bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <ExternalLink className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand transition-colors">Asthma & Allergy Foundation</h3>
                        <p className="mt-3 text-gray-500 dark:text-gray-400">Link to external comprehensive guide on asthma triggers in the home.</p>
                        <Button variant="link" className="mt-6 p-0 h-auto text-brand font-semibold group-hover:gap-2 transition-all">Visit Site <span aria-hidden="true" className="ml-1">&rarr;</span></Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

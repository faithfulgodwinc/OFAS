import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const chapters = [
    { university: "New York University", location: "New York, NY", contact: "nyu@ofas.org" },
    { university: "University of California, Los Angeles", location: "Los Angeles, CA", contact: "ucla@ofas.org" },
    { university: "University of Michigan", location: "Ann Arbor, MI", contact: "umich@ofas.org" },
    { university: "University of Texas at Austin", location: "Austin, TX", contact: "utexas@ofas.org" },
];

export default function CampusBasesPage() {
    return (
        <div className="bg-white py-16 sm:py-24">
            <Container>
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-heading">
                        Campus Bases
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Our student-led chapters are making a difference on campuses across the country.
                    </p>
                </div>

                <div className="mt-16 bg-gray-50 border border-gray-100 rounded-lg p-12 text-center max-w-3xl mx-auto">
                    <p className="text-xl text-gray-500 italic">
                        Campus chapter directory coming soon. We are currently organizing our inaugural branches!
                    </p>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Don't see your campus?</h2>
                    <p className="mt-2 text-gray-500">Start a chapter at your university today.</p>
                    <div className="mt-6">
                        <Link href="/campus-bases/apply">
                            <Button size="lg">Apply to Start a Chapter</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

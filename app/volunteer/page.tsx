import { Container } from "@/components/ui/container";
import { VolunteerForm } from "@/components/forms/volunteer-form";

export default function VolunteerPage() {
    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <Container>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-heading">
                        Volunteer with OFAS
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Join our mission to support families affected by asthma.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <VolunteerForm />
                </div>
            </Container>
        </div>
    );
}

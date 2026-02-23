import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";

export default function ContactPage() {
    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <Container>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-black dark:text-white sm:text-5xl font-heading">
                        Contact Us
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-black dark:text-gray-400">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <ContactForm />
                </div>
            </Container>
        </div>
    );
}

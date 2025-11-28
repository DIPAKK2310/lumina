import { faqs } from "@/components/config/FAQ";

export default function PricingFAQ() {
return (
    <section className="py-20 px-6 max-w-4xl mx-auto border-1 border-dotted rounded-xl mt-20
    ">
        <h2 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
            Frequently Asked Questions
        </h2>
        <div className="space-y-4">
        {faqs.map((faq, index) => (
        <details
        key={index}
        className="rounded-xl border border-gray-200 p-4 bg-black shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
        <summary className="font-semibold text-lg text-shadow-gray-800">
        {faq.question}
        </summary>
        <p className="mt-2 text-white leading-relaxed">{faq.answer}</p>
        </details>
        ))}
        </div>
    </section>
);
}
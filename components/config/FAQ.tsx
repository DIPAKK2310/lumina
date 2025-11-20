interface FAQItem {
question: string;
answer: string;
}

// FAQ Data
export const faqs: FAQItem[] = [
{
question: "What is Lumina AI?",
answer:
"Lumina AI is a media optimization platform that uses AI to compress, enhance, and process images and videos instantly.",
},
{
question: "Does Lumina support fast uploads?",
answer:
"Yes. Lumina integrates with Cloudinary's CDN for instant uploads, auto-optimization, and global delivery.",
},
{
question: "Is Lumina free to use?",
answer:
"Lumina offers a free tier with limited monthly uploads. Paid plans unlock faster processing and premium features.",
},
{
question: "Can I use Lumina for commercial projects?",
answer:
"Absolutely. Lumina is designed for creators, developers, and teams who need scalable media pipelines.",
},
{
question: "Do you provide caption or CC generation?",
answer:
"Yes. Lumina uses Microsoft LLM models to automatically generate captions, transcripts, and CC files.",
},
{
question: "Does Lumina integrate with other apps?",
answer:
"You can connect Lumina with your workflow via APIs, SDKs, and automation tools like Zapier and n8n.",
},
];
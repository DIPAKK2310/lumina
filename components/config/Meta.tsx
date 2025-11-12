import { heroConfig } from "./HeroConfig";
import { about } from "./About";

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image' ;

}


// Base site config
export const siteConfig = {
  title: "Lumina Ai",
  description: "Lumina is Ai powered Image and Video Generation Platform",
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ogImage:"/meta/opengraph-image.png",
    author: {
    name: 'Dipak Khare',
    twitter: '@dipakkhare_23',
    github: 'DIPAKK2310',
    linkedin: 'Dipakkhare',
    email: 'dipakkhare217@gmail.com',
  },
  keywords:[
    'lumina ai',
    'lumina',
    'AI image generation',
    'AI video generation',
    'Text to image',
    'Text to video',
    'AI art',
    'Generative AI',
    'Machine learning',
  ]

}
export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  '/': {
    title: `${heroConfig.name} - ${heroConfig.title}`,
    description: `${about.description} Explore my projects, experience, and technical expertise.`,
    keywords: [
      'portfolio',
      'developer',
      'full-stack',
      'web development',
      'projects',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Contact page
  '/contact': {
    title: 'Contact - Get in Touch',
    description:
      "Get in touch with me for collaborations, projects, or opportunities. I'd love to hear from you!",
    keywords: ['contact', 'hire', 'collaboration', 'freelance', 'developer'],
    ogImage: '/assets/logo.png',
    twitterCard: 'summary',
  },

  // Work Experience page
  '/features': {  title: 'Powerful AI Features – Lumina AI',
  description:
    'Explore Lumina AI’s powerful suite of tools to upload, transform, and optimize your images and videos using next-generation AI. Boost performance, automate editing, and deliver stunning visuals instantly.',
  keywords: [
    'AI image optimization',
    'AI video tools',
    'media transformation',
    'cloud image compression',
    'AI SaaS features',
    'image editing automation',
  ],
    ogImage: '/meta/features.png',
    twitterCard: 'summary_large_image',
  },

  // Pricing page
  '/pricing': {
  title: 'Flexible Pricing Plans – Lumina AI',
  description:
    'Choose a Lumina AI plan that fits your creative workflow. Start for free and upgrade to unlock advanced AI media optimization and automation tools.',
  keywords: [
    'Lumina AI pricing',
    'AI SaaS pricing plans',
    'AI media tool cost',
    'AI subscription plans',
    'AI optimization tiers',
    'cloud image optimization pricing',
  ],
  ogImage: '/meta/pricing.png', // replace with your actual pricing OG image
  twitterCard: 'summary_large_image',
},


  // Blog page
 '/about': {
  title: 'About Lumina AI – Our Mission and Team',
  description:
    'Discover Lumina AI’s mission to simplify AI-powered media optimization for everyone. Learn about our journey, our values, and the team behind the innovation.',
  keywords: [
    'about Lumina AI',
    'AI startup team',
    'AI company mission',
    'Lumina AI story',
    'AI media optimization platform',
  ],
  ogImage: '/meta/about.png', // replace with your actual about OG image
  twitterCard: 'summary_large_image',
},


};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}



// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
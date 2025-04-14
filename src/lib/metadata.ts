
import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata["icons"];
  noIndex?: boolean;
  keywords?: string[];
  author?: string;
  twitterHandle?: string;
  type?: "website" | "article" | "profile";
  locale?: string;
  alternates?: Record<string, string>;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  category?: string;
  section?: string;
}

export const generateMetadata = ({
  title = "Daniel Ekundayo",
  description = "I'm a software engineer and designer.",
  image = "/images/brand-image.png",
  icons = [
    {
      rel: "icon",
      sizes: "32x32",
      url: "/icons/favicon.png",
    },
  ],
  noIndex = false,
  keywords = [],
  author = "Daniel Jesutobi Ekundayo",
  twitterHandle = "dameldesign",
  type = "website",
  locale = "en_US",
  alternates = {},
  publishedTime,
  modifiedTime,
  canonical,
  category,
  section,
}: MetadataProps = {}): Metadata => {
  const metadataBase = new URL("https://dameldesign.com");
  const imageUrl = image
    ? image.startsWith('http')
      ? image
      : new URL(image, metadataBase).toString()
    : null;

  return {
    metadataBase,
    title: {
      template: `%s | Daniel Ekundayo`,
      default: title
    },
    description,
    keywords,
    authors: [{ name: author }],
    creator: author,
    publisher: "Daniel Ekundayo",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons,
    // OpenGraph
    openGraph: {
      type,
      siteName: "Daniel Ekundayo",
      title,
      description,
      ...(imageUrl && {
        images: [{
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }]
      }),
      locale,
      alternateLocale: Object.keys(alternates),
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(category && { category }),
      ...(section && { section }),
    },
    // Twitter
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      site: twitterHandle,
      creator: twitterHandle,
      title,
      description,
      ...(imageUrl && { images: [imageUrl] })
    },
    // Robots
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // Verification
    verification: {
      google: undefined,
      yandex: undefined,
      yahoo: undefined,
    },
    other: {
      'og:image:type': 'image/png',
      'og:image:width': '1200',
      'og:image:height': '630',
      'github': 'https://github.com/dameldesign',
      'linkedin': 'https://linkedin.com/in/daniel-jesutobi-ekundayo-2b058318b',
      'discord': 'damel_design',
    },
    // Add canonical URL
    ...(canonical && {
      alternates: {
        canonical,
        ...alternates
      }
    }),
    applicationName: "Daniel Ekundayo",
    referrer: "origin-when-cross-origin",
  };
};

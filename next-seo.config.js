/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Yehezkiel Gunawan - Frontend Developer",
  titleTemplate: "%s | YehezGun",
  defaultTitle: "YehezGun | Yehezkiel Gunawan - Frontend Developer",
  description: "Welcome to my personal site. Take a look and enjoy!",
  canonical: "https://yehezgun.com",
  openGraph: {
    url: "https://yehezgun.com",
    title: "YehezGun | Frontend Developer",
    description: "Welcome to my personal site, take a look and enjoy.",
    type: "website",
    images: [
      {
        url: "https://yehez-og-image.yehezgun.com/**yehezgun**.com.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1634043457%2Fyehez-avatar_u3q505.png&widths=250&heights=250",
        alt: "yehezgun.com default og image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "yehezgun",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/assets/yehez-avatar.png",
    },
  ],
};

export default defaultSEOConfig;

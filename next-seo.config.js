/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Yehezkiel Gunawan - Frontend Developer",
  titleTemplate: "%s | YehezGun",
  defaultTitle: "YehezGun | Yehezkiel Gunawan - Frontend Developer",
  description: "Yehezkiel Gunawan's Personal Site | YehezGun",
  canonical: "https://yehezgun.com",
  openGraph: {
    url: "https://yehezgun.com",
    title: "YehezGun | Frontend Developer",
    description: "Welcome to my personal site, take a look and enjoy.",
    images: [
      {
        url: "https://yehez-og-image.yehezgun.com/**yehezgun**.com.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1631970666%2Fyehez_avatar_vkv7pc.png&widths=250&heights=250",
        alt: "yehezgun.com og-image",
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
      href: "/assets/yehez_avatar.png",
    },
  ],
};

export default defaultSEOConfig;

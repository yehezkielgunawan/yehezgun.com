import { NextSeo } from "next-seo";

type AppHeaderProps = {
  pageTitle: string;
  pageDesc: string;
  route?: string;
};

const AppHeader = ({ pageTitle, pageDesc, route }: AppHeaderProps) => {
  return (
    <NextSeo
      title={pageTitle}
      description={pageDesc}
      openGraph={{
        url: `https://yehezgun.com/${route ? route : ""}`,
        title: `${pageTitle} | YehezGun`,
        description: `${pageDesc}`,
        type: `website`,
        images: [
          {
            url: `https://yehez-og-image.yehezgun.com/**${encodeURIComponent(
              pageTitle.trim(),
            )}**%20%7C%20YehezGun.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630902976%2FAssassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg`,
            alt: `${pageTitle} | YehezGun`,
            width: 800,
            height: 600,
          },
        ],
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/assets/YG_logo.png",
        },
      ]}
    />
  );
};

export default AppHeader;

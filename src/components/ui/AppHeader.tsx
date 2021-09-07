import Head from "next/head";

type AppHeaderProps = {
  pageTitle: string;
  pageDesc: string;
  route?: string;
};

const AppHeader = ({ pageTitle, pageDesc, route }: AppHeaderProps) => {
  return (
    <Head>
      <link rel="icon" href="/assets/YG_logo.png"></link>
      <title>{pageTitle} | YehezGun</title>

      <meta
        property="og:url"
        content={`https://yehezgun.com/${route ? route : ""}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${pageTitle} | YehezGun`} />
      <meta
        property="og:image"
        content={`https://yehez-og-image.yehezgun.com/**${pageTitle}**%20World.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630902976%2FAssassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg&widths=200`}
      />
      <meta property="og:description" content={pageDesc} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${pageTitle} | YehezGun`} />
      <meta name="twitter:description" content={pageDesc} />
      <meta
        name="twitter:image"
        content={`https://yehez-og-image.yehezgun.com/**${pageTitle}**%20World.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630902976%2FAssassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg&widths=200`}
      />
    </Head>
  );
};

export default AppHeader;

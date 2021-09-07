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
        content={`https://yehez-og-image.yehezgun.com/**${pageTitle}**%20%7C%20YehezGun.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630987481%2FYG_logo_trg6fp.png&widths=200`}
      />
      <meta property="og:description" content={pageDesc} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${pageTitle} | YehezGun`} />
      <meta name="twitter:description" content={pageDesc} />
      <meta
        name="twitter:image"
        content={`https://yehez-og-image.yehezgun.com/**${pageTitle}**%20%7C%20YehezGun.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630987481%2FYG_logo_trg6fp.png&widths=200`}
      />
    </Head>
  );
};

export default AppHeader;

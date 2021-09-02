import Head from "next/head";

type AppHeaderProps = {
  pageTitle: string;
  pageDesc: string;
  route?: string;
};

const AppHeader = ({ pageTitle, pageDesc, route }: AppHeaderProps) => {
  return (
    <Head>
      <link rel="icon" href="/assets/YG.png"></link>
      <title>YehezGun | {pageTitle}</title>

      <meta
        property="og:url"
        content={`https://yehezgun.com/${route ? route : ""}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`YehezGun | ${pageTitle}`} />
      <meta
        property="og:image"
        content="https://yehezgun.com/assets/yehez-profile.png"
      />
      <meta property="og:description" content={pageDesc} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`YehezGun | ${pageTitle}`} />
      <meta name="twitter:description" content={pageDesc} />
      <meta
        name="twitter:image"
        content="https://yehezgun.com/assets/yehez-profile.png"
      />
    </Head>
  );
};

export default AppHeader;

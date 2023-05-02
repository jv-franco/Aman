import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <title>Aman Pets</title>
      </Head>

      <main className="main-container">{children}</main>
    </>
  );
}

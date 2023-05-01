import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico"></link>
        <title>Aman</title>
      </Head>

      <main className="main-container">{children}</main>
    </>
  );
}

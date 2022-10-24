import Head from "next/head";
import Header from "./Header";
import NProgress from "nprogress";
import Router from "next/router";
import "/node_modules/nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Webdev Blog</title>
      <meta name="description" content="My Web blog" />
      <link rel="icon" href="/Blog.svg" />
    </Head>
    <Header />
    {children}
  </>
);

export default Layout;

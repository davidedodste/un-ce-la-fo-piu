import '@styles/globals.css'
import Layout from '@components/Layout';
import NavBar from '@components/NavBar';
function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application

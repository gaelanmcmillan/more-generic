import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.scss'
import "@code-hike/mdx/dist/index.css"

import Container from 'react-bootstrap/Container';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Container fluid className='light-mode'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Container>
  </>);
}

export default MyApp

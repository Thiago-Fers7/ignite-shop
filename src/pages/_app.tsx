import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logo from '../assets/logo.svg'
import Image from 'next/future/image';
import { Container, Header } from '../styles/pages/app';
import { PageLoader } from '../components/PageLoader';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageLoader />
      <Container>
        <Header>
          <Image src={logo} alt="logo" />
        </Header>
        <Component {...pageProps} />
      </Container>
    </>
  )
}
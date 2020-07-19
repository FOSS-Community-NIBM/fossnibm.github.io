import { AppProps } from 'next/app';

// styles
import '../scss/styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;

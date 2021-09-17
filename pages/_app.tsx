import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StateProvider } from '../components/StateProvider';
import Router  from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <StateProvider>
      <div className="lg:bg-gray-50">
        <Component {...pageProps} />
      </div>
    </StateProvider>
    
  );
}
export default MyApp

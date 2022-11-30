import type { AppProps } from 'next/app'
import { store } from "../features/store";
import { Provider } from "react-redux";

import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}
import { useEffect } from "react";
import { store } from "../features/store";
import { Provider } from "react-redux";

import AOS from "aos";


import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import "swiper/css/effect-cards";
import '../styles/globals.scss'
import "aos/dist/aos.css";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <Provider store={store}><Component {...pageProps} /></Provider>
}
import "@/styles/globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full h-full overflow-hidden py-3 px-6">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

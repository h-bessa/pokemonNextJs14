import type {AppProps} from "next/app";
import Layout from "@/components/layout";
import {PokemonProvider} from "@/context/PokemonProvider";


export default function App({Component, pageProps}: AppProps) {
  return (
      <Layout>
        <PokemonProvider>
          <Component {...pageProps} />
        </PokemonProvider>
      </Layout>
  )
}

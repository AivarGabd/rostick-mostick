import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import '../styles/globals.css'
import Layout from '../components/layout';

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      bg: '#f8f4ee',
      primaryLight: '$yellow200',
      primaryLightHover: '$yellow300',
      primaryLightActive: '$yellow400',
      primaryLightContrast: '$yellow600',
      primary: '#4ADE7B',
      primaryBorder: '$yellow500',
      primaryBorderHover: '$yellow600',
      primarySolidHover: '$yellow700',
      primarySolidContrast: '$white',
      primaryShadow: '$yellow500',
    },
    space: {},
    fonts: {}
  }
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </NextUIProvider>
  )
}

export default MyApp

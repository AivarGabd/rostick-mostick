import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import '../styles/globals.css'
import Layout from '../components/layout';

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      bg: '#f8f4ee',
      primaryLight: '$red200',
      primaryLightHover: '$red300',
      primaryLightActive: '$red400',
      primaryLightContrast: '$red600',
      primary: '#FF1C1C',
      primaryBorder: '$red500',
      primaryBorderHover: '$red600',
      primarySolidHover: '$red700',
      primarySolidContrast: '$whitesmoke',
      primaryShadow: '$red500',
    },
    space: {},
    fonts: {}
  }
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </NextUIProvider>
  )
}

export default MyApp

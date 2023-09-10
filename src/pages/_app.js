import { ThemeProvider } from '@/components/ui/theme-provider'
import '@/styles/globals.css'

const App = ({ Component, pageProps }) => (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
    </ThemeProvider>
)

export default App

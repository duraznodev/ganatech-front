import { MyAvatar } from '@/components/ui/my-avatar'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { UserNav } from '@/components/ui/user-nav'
import '@/styles/globals.css'
import { FaHouse } from 'react-icons/fa6'

const App = ({ Component, pageProps }) => (
    // <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <div className="relative flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border border-b bg-background/95">
            <div className="container flex justify-between h-14 items-center">
                <div className="font-bold">Ganatech</div>
                <UserNav displayName="RR" />
            </div>
        </header>
        <div className="flex-1">
            <Component {...pageProps} />
        </div>
        <footer className="sticky top-0 z-50 w-full border border-t bg-background/95">
            <nav className=" justify-between flex h-16">
                <div className="flex-1 h-full flex justify-center flex-col items-center gap-y-0.5 text-primary">
                    <FaHouse />
                    <span className="text-xs">Home</span>
                </div>
                <div className="flex-1 h-full flex justify-center flex-col items-center gap-y-0.5 text-muted-foreground">
                    <FaHouse />
                    <span className="text-xs">Home</span>
                </div>
                <div className="flex-1 h-full flex justify-center flex-col items-center gap-y-0.5 text-muted-foreground">
                    <FaHouse />
                    <span className="text-xs">Home</span>
                </div>
                <div className="flex-1 h-full flex justify-center flex-col items-center gap-y-0.5 text-muted-foreground">
                    <FaHouse />
                    <span className="text-xs">Home</span>
                </div>
                <div className="flex-1 h-full flex justify-center flex-col items-center gap-y-0.5 text-muted-foreground">
                    <FaHouse />
                    <span className="text-xs">Home</span>
                </div>
            </nav>
        </footer>
    </div>
    // </ThemeProvider>
)

export default App

import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { FaPlus } from 'react-icons/fa6'
import { GiCow } from 'react-icons/gi'

export default function Dashboard() {
    return (
        <div className="container py-8 flex flex-col gap-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-semibold tracking-tight text-xl">
                        Control Ganadero
                    </CardTitle>
                    <CardDescription>
                        Bienvenido
                        <span className="font-medium"> Roman Rizo</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-2.5 grid-cols-2 lg:grid-cols-4">
                        {[...Array(4)].map((_, i) => (
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pt-4 pb-1">
                                    <CardTitle className="text-sm font-medium">
                                        Vacas
                                    </CardTitle>
                                    <GiCow className="text-2xl" />
                                </CardHeader>
                                <CardContent className="pb-4">
                                    <div className="text-xl font-bold">34</div>
                                    <p className="text-xs text-muted-foreground">
                                        +20.1%
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

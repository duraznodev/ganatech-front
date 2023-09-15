import { useAuth } from '@/hooks/auth'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
    FaArrowDown,
    FaArrowUp,
    FaFilter,
    FaMars,
    FaPlus,
    FaVenus,
    FaCircleDot,
    FaCircle,
    FaHeart,
} from 'react-icons/fa6'
import { GiCow } from 'react-icons/gi'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return <></>
}

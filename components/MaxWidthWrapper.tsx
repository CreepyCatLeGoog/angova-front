import { cn } from "@/lib/utils"

const MaxWidthWrapper = ({
    className,
    children
}: {
    className?: string,
    children: React.ReactNode
}) => {
    return (
            <div className={cn('mx-auto w-full max-w-screen-xl md:px-20 bg-[#F8F7F7]', className)}>{children}</div>
    )
}

export default MaxWidthWrapper
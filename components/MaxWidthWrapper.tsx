import { cn } from "@/lib/utils"

const MaxWidthWrapper = ({
  className,
  children
}: {
  className?: string,
  children: React.ReactNode
}) => {
  return (
    <div className={cn('mx-auto max-w-screen-xl w-screen sm:pl-60', className)}>{children}</div>
  )
}

export default MaxWidthWrapper
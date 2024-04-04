import { cn } from "@/lib/utils"

const ProfileWrapper = ({
  className,
  children
}: {
  className?: string,
  children: React.ReactNode
}) => {
  return (
    <div className={cn('mx-auto min-h-screen max-w-screen-xl w-screen sm:pl-60 bg-gray-100 sm:bg-gray-100', className)}>{children}</div>
  )
}

export default ProfileWrapper
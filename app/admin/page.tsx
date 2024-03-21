import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { UserModal } from '@/components/new-user'
import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'
import { LogOut, UserPlus } from 'lucide-react'

const AdminDashboard = () => {
    return (
        <>
            <MaxWidthWrapper>
                <nav className="relative h-16 z-20 flex-col flex-grow md:pb-0 md:flex md:justify-center md:items-center md:flex-row bg-[#F49E4C]">
                    <div className="flex justify-center items-center w-full">
                        Administrateur
                    </div>
                </nav>
                <div className='flex justify-around mt-6'>

                <Button variant='new'>
                    Nouvel utilisateur
                    <UserPlus className='w-6 h-6 ml-2' />
                </Button>
                    <UserModal />
                    <Button variant='inverseNew'>
                        <LogOut className='w-6 h-6 ml-2' />
                    </Button>
                </div>
                <div>
                    Admins
                </div>
                <div>
                    Managers
                </div>
                <div>
                    Utilisateurs
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default AdminDashboard
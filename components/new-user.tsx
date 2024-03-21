import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus } from "lucide-react"

export const UserModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='new'>
                    Nouvel utilisateur
                    <UserPlus className='w-6 h-6 ml-2' />
                    </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Enregistrement</DialogTitle>
                    <DialogDescription>
                        Modifiez ici les informations de l'utilisateur.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Nom
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Nom de l'utilisateur"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="email"
                            defaultValue="Email"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Role
                        </Label>
                        <Input
                            id="role"
                            defaultValue="Role"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Auto-école
                        </Label>
                        <Input
                            id="school"
                            defaultValue="Auto-école"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Mot de passe
                        </Label>
                        <Input
                            id="password"
                            defaultValue="Mot de passe"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Confirmation du mot de passe
                        </Label>
                        <Input
                            id="confirm-password"
                            defaultValue="Confirmation du mot de passe"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant='inverseNew' type="submit">Sauvegarder</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
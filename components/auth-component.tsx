import { signOut } from "@/auth";
import { Button } from "./ui/button";
import Link from "next/link";

export function SignIn(
  props: Omit<React.ComponentPropsWithRef<typeof Link>, "href">
) {
  return (
    <Link {...props} href="api/auth/signin">
      <Button>Sign In</Button>
    </Link>
  );
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <form onSubmit={handleSignOut} className="w-full">
      <Button variant="ghost" className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  );
}


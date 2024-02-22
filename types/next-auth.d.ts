
// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      // Add any additional fields you want on the user object
      id: string;
      name: string;
      email: string;
      image: string;
    };
  }
}

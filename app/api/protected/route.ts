import { auth } from "@/auth";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await auth(req, res)
  if (session) {
    // Do something with the session
    console.log("protected: " + JSON.stringify(session));
    return res.json("This is protected content.")
  }
  res.status(401).json("You must be signed in.")
}

// import { UserRole } from "@prisma/client";
// import { NextResponse } from "next/server";

// import { currentRole } from "@/lib/auth";

// export async function GET() {
//   const role = await currentRole();

//   if (role === UserRole.ADMIN) {
//     return new NextResponse(null, { status: 200 });
//   }

//   return new NextResponse(null, { status: 403 });
// }
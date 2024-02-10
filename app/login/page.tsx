// export default LoginPage;
"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { LoginUserInput, loginUserSchema } from "@/lib/user-schema";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import AnimatedEarth from "@/components/animatedEarth";

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [shouldAnimateFailed, setShouldAnimateFailed] = useState(false);
  const formAnimationControls = useAnimation();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/";
  const methods = useForm<LoginUserInput>({
    resolver: zodResolver(loginUserSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<LoginUserInput> = async (values) => {
    try {
      setSubmitting(true);

      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        redirectTo: callbackUrl,
      });

      setSubmitting(false);

      if (!res?.error) {
        if (res?.ok) {
          animateForm();

          setTimeout(() => {
            router.push(callbackUrl);
            toast({
              title: "Success",
              description: "You have successfully logged in",
              style: {
                backgroundColor: "green",
                color: "white",
              },
            });
          }, 5000);
        }
      } else {
        reset({ password: "" });
        const message = "invalid email or password";
        toast({
          title: "Error",
          description: message,
          style: {
            backgroundColor: "red",
            color: "white",
          },
        });
        animateFailedForm();
        setError(message);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        style: {
          backgroundColor: "orange",
          color: "white",
        },
      });
      setError(error.message);
      animateFailedForm();
    } finally {
      setSubmitting(false);
    }
  };

  async function animateFailedForm() {
    setShouldAnimateFailed(true);
  }

  async function animateForm() {
    await formAnimationControls.start({ opacity: 0, y: 100 });
    // Reset animation controls to their initial state after the animation is complete
    formAnimationControls.start({});
    // Reset shouldAnimateFailed after a successful form submission
    setShouldAnimateFailed(false);
    setShouldAnimate(true);
  }

  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <>
      <div className="h-[10vh]"></div>
      <LoginHeader shouldAnimate={shouldAnimate} />
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        style={{
          opacity: shouldAnimate ? 0 : 1,
        }}
      >
        {error && (
          <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
        )}
        <div className="mb-6">
          <input
            type="email"
            {...register("email")}
            placeholder="Email address"
            className={`${input_style}`}
          />
          {errors["email"] && (
            <span className="text-red-500 text-xs pt-1 block">
              {errors["email"]?.message as string}
            </span>
          )}
        </div>
        <div className="mb-6">
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className={`${input_style}`}
          />
          {errors["password"] && (
            <span className="text-red-500 text-xs pt-1 block">
              {errors["password"]?.message as string}
            </span>
          )}
        </div>
        <button
          type="submit"
          style={{ backgroundColor: `${submitting ? "#ccc" : "#3446eb"}` }}
          className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          disabled={submitting}
        >
          {submitting ? "loading..." : "Sign In"}
        </button>

        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0">OR</p>
        </div>

        {/* <a
        className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
        style={{ backgroundColor: "#55acee" }}
        onClick={() => signIn("github", { callbackUrl })}
        role="button"
      >
        <Image
          className="pr-2"
          src="/images/github.svg"
          alt=""
          width={40}
          height={40}
        />
        Continue with GitHub
      </a> */}
      </form>

      <form
        style={{
          opacity: shouldAnimate ? 0 : 1,
        }}
        action={async () => {
          await signIn("google", { callbackUrl });
        }}
      >
        <Button
          className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
          variant="orange"
          onClick={() => signIn("google", { callbackUrl })}
          role="button"
        >
          <Image
            className="pr-2"
            src="assets/google.svg"
            alt=""
            style={{ height: "2rem" }}
            width={35}
            height={35}
          />
          Continue with Google
        </Button>
      </form>
      <div className="fixed bottom-0 left-0 right-0 mb-5 pb-20">
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            overflow: "hidden",
          }}
          initial="hidden"
          animate={shouldAnimate ? "center" : "hidden"}
          variants={{
            center: { y: -700, height: 500, scale: 0.5 },
            hidden: { y: -130, height: 200, scale: 1.1, overflow: "hidden" },
          }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
        >
          <AnimatedEarth
            shouldAnimateFailed={shouldAnimateFailed}
            shouldAnimate={shouldAnimate}
          />
        </motion.div>
      </div>
    </>
  );
};

// async function animateFailedForm() {
//   setShouldAnimateFailed(true);
// }

// return (
//   <>
//     <div className="relative">
//       <div className="w-1/2 lg:w-1/3 flex-col mx-auto flex justify-center items-center h-[90vh]">
//         <LoginHeader shouldAnimate={shouldAnimate} />
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={shouldAnimate ? { opacity: 1 } : {}}
//           transition={{ duration: 1, ease: "easeInOut" }}
//         >
//           <p
//             className={cn(
//               "",
//               `${
//                 shouldAnimate
//                   ? "text-center text-2xl font-bold block"
//                   : "none"
//               }`
//             )}
//           >
//             Welcome to angova
//           </p>
//           <div
//             className={(cn(""), `${shouldAnimate ? "block my-40" : "none"}`)}
//           ></div>
//         </motion.div>
//         <Form {...form}>
//           <motion.form
//             onSubmit={handleSubmit}
//             initial={{ opacity: 1, y: 0 }}
//             animate={shouldAnimateFailed ? formAnimationControls : {}}
//             transition={{ duration: 1, ease: "easeInOut" }}
//           >
//             <FormField
//               name="email"
//               render={({ field }) => (
//                 <motion.div
//                   initial={{ opacity: 1, scale: 1 }}
//                   animate={shouldAnimate ? { opacity: 0, scale: 0 } : {}}
//                   transition={{ duration: 1, ease: "easeInOut" }}
//                 >
//                   <FormItem>
//                     <FormControl>
//                       <Input placeholder="Email" {...field} />
//                     </FormControl>
//                     <FormDescription></FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 </motion.div>
//               )}
//             />
//             <div className="flex justify-center">
//               <div className="my-2"></div>
//             </div>

//             <FormField
//               name="password"
//               render={({ field }) => (
//                 <motion.div
//                   initial={{ opacity: 1, scale: 1 }}
//                   animate={shouldAnimate ? { opacity: 0, scale: 0 } : {}}
//                   transition={{ duration: 1, ease: "easeInOut" }}
//                 >
//                   <FormItem>
//                     <FormControl>
//                       <Input
//                         type="password"
//                         placeholder="Password"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormDescription>
//                       <a
//                         href="#"
//                         className="underline underline-offset-4 font-style-italic text-xs"
//                       >
//                         Forgot your password ?
//                       </a>
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 </motion.div>
//               )}
//             />
//             <div className="flex justify-center">
//               <div className="my-5"></div>
//             </div>

//             <Button
//               type="submit"
//               variant="orange"
//               className="w-full"
//               style={{
//                 opacity: shouldAnimate ? 0 : 1,
//               }}
//             >
//               Connexion
//             </Button>
//             {/* /// button google  */}
//             {/* <Button
//               onClick={async () => {
//                 const res = await signIn("google");

//                 if (res?.error) {
//                   setError("Invalid email or password");
//                   await animateFailedForm();
//                 } else if (res?.ok) {
//                   await animateForm();
//                 } else {
//                   setError("An error occurred");
//                   await animateFailedForm();
//                 }
//               }}
//               className="w-full bg-white text-black border border-black rounded-md p-2 my-2"
//             >
//               Sign in with Google
//             </Button> */}
//           </motion.form>
//         </Form>
//         <form
//           action={async () => {
//             await signIn("google");
//           }}
//         >
//           <button>Sign in with google</button>
//           <br />
//         </form>
//         <div className="h-[20vh]"></div>
//       </div>

//       <motion.div
//         style={{
//           position: "absolute",
//           // bottom: "50px",
//           width: "100%",
//           overflow: "hidden",
//         }}
//         initial="hidden"
//         animate={shouldAnimate ? "center" : "hidden"}
//         variants={{
//           center: { y: -700, height: 500, scale: 0.5 },
//           hidden: { y: -130, height: 200, scale: 1.1, overflow: "hidden" },
//         }}
//         transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
//       >
//         <AnimatedEarth
//           shouldAnimateFailed={shouldAnimateFailed}
//           shouldAnimate={shouldAnimate}
//         />
//       </motion.div>
//     </div>
//   </>

const LoginHeader = ({ shouldAnimate }: { shouldAnimate: boolean }) => {
  const headerAnimationControls = useAnimation();

  // Run animation when shouldAnimate changes
  React.useEffect(() => {
    if (shouldAnimate) {
      headerAnimationControls.start({ opacity: 0, y: -50 });
    }
  }, [shouldAnimate, headerAnimationControls]);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={headerAnimationControls}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="w-full">
        <p className="font-bold text-2xl text-center my-5">Login</p>
        <p className="text-center">
          To continue on <span className="text-orange-400">An’gova</span>
        </p>
        <div className="flex justify-center">
          <Separator
            orientation="horizontal"
            className="w-1/2 my-5 bg-orange-400"
          />
          <div className="mx-5"></div>
          <Separator
            orientation="horizontal"
            className="w-1/2 my-5 bg-orange-400"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoginForm;

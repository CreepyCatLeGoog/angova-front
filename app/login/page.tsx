// export default LoginPage;
"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
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

  const onSubmitHandler: SubmitHandler<LoginUserInput> = async (
    values,
    event
  ) => {
    if (!event) return;
    event.preventDefault();

    try {
      setSubmitting(true);

      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.status == 201 || res.status == 200) {
        toast({
          title: "Success",
          description: "You have successfully logged in",
          style: {
            backgroundColor: "green",
            color: "white",
          },
        });
        if (data.tokens.accessToken) {
          localStorage.setItem("accessToken", data.tokens.accessToken);
        }
        animateForm();
        setShouldAnimateFailed(true);
        setTimeout(() => {
          router.push(callbackUrl);
        }, 1500);
      } else {
        toast({
          title: "Something went wrong ..",
          description: data.error,
          style: {
            backgroundColor: "red",
            color: "white",
          },
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        style: {
          backgroundColor: "orange",
          color: "white",
        },
        duration: 2000,
      });
      setError(error.message);
      setShouldAnimateFailed(true);
    } finally {
      setSubmitting(false);
    }
  };

  function animateForm() {
    formAnimationControls
      .start({ opacity: 0, y: 100 })
      .then(() => {
        // Reset animation controls to their initial state after the animation is complete
        formAnimationControls.start({});
      })
      .then(() => {
        // Reset shouldAnimateFailed after a successful form submission
        setShouldAnimateFailed(false);
        setShouldAnimate(true);
      });
  }

  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-72 sm:w-72 md:w-72 lg:w-96 xl:w-96">
        <div className="h-[5vh]"></div>
        <LoginHeader shouldAnimate={shouldAnimate} />
        <LoginThirdParty
          shouldAnimate={shouldAnimate}
          callbackUrl={callbackUrl}
        />
        <div
          className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          style={{
            opacity: shouldAnimate ? 0 : 1,
          }}
        >
          <p className="text-center font-semibold mx-4 mb-0">OR</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          style={{
            opacity: shouldAnimate ? 0 : 1,
          }}
        >
          {error && (
            <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
          )}
          <div className="mb-2">
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
          <div className="mb-2">
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
            style={{ backgroundColor: `${submitting ? "#ccc" : "#F49E4C"}` }}
            className="inline-block px-7 py-4 bg-orange-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            disabled={submitting}
            id="login-btn"
          >
            {submitting ? "loading..." : "Sign In"}
          </button>
        </form>

        <div className="h-[5vh]"></div>
        <div
          className="flex justify-center"
          style={{
            opacity: shouldAnimate ? 0 : 1,
          }}
        >
          <p className="text-sm italic text-slate-500 text-center">
            En vous connectant à{" "}
            <span className="text-orange-400">An’gova</span>, <br />
            vous acceptez nos{" "}
            <a className="text-orange-400" href="/cgu">
              {" "}
              Conditions d’utilisation{" "}
            </a>{" "}
            et notre
            <a className="text-orange-400" href="/privacy-policy">
              {" "}
              Politique de confidentialité.
            </a>
          </p>
        </div>
        <div className="fixed bottom-0 left-0 right-0 mb-5 pb-20">
          <motion.div
            style={{
              position: "absolute",
              width: "100%",
              overflow: "hidden",
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
            }}
            initial="hidden"
            animate={shouldAnimate ? "center" : "hidden"}
            variants={{
              center: { y: -700, scale: 0.5 },
              hidden: { y: -130, scale: 1.1, overflow: "hidden" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
          >
            <AnimatedEarth
              shouldAnimateFailed={shouldAnimateFailed}
              shouldAnimate={shouldAnimate}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const LoginThirdParty = ({
  shouldAnimate,
  callbackUrl,
}: {
  shouldAnimate: boolean;
  callbackUrl: string;
}) => {
  return (
    <div
      className="flex flex-row gap-5 mx-2 transition duration-150 ease-in-out w-full justify-center items-center mb-3"
      style={{
        opacity: shouldAnimate ? 0 : 1,
      }}
    >
      <Button
        className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        variant="outline"
        onClick={() => signIn("apple", { callbackUrl })}
        role="button"
      >
        <Image
          className="p-1"
          src="assets/apple.svg"
          alt="Apple login logo"
          style={{ height: "2rem" }}
          width={30}
          height={30}
        />
      </Button>

      <Button
        className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        variant="outline"
        onClick={() => signIn("facebook", { callbackUrl })}
        role="button"
      >
        <Image
          className="p-1"
          src="assets/facebook.svg"
          alt="Facebook login logo"
          style={{ height: "2rem" }}
          width={30}
          height={30}
        />
      </Button>

      <Button
        className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        variant="outline"
        onClick={() => signIn("google", { callbackUrl })}
        role="button"
      >
        <Image
          className="p-1"
          src="assets/google.svg"
          alt="Google login logo"
          style={{ height: "2rem" }}
          width={30}
          height={30}
        />
      </Button>
    </div>
  );
};
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

"use client";
// LoginPage.tsx

import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import AnimatedEarth from "@/components/animatedEarth";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z
    .string()
    .min(5, {
      message: "Enter a valid email",
    })
    .max(50, {
      message: "Enter a valid email",
    })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(5, {
      message: "Invalid password",
    })
    .max(50, {
      message: "Invalid password",
    }),
});

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

const LoginPage = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [shouldAnimateFailed, setShouldAnimateFailed] = useState(false);
  const formAnimationControls = useAnimation();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Validate the data
      formSchema.parse(values);

      // If the data is valid, submit the form
      console.log("Form is valid");
      console.log(values);
      await animateForm();
    } catch (error) {
      // If the data is invalid, display an error message
      console.log("Form is invalid");
      console.log(error);
      await animateFailedForm();
    }
  }

  async function animateForm() {
    await formAnimationControls.start({ opacity: 0, y: 100 });
    // Reset animation controls to their initial state after the animation is complete
    formAnimationControls.start({});
    // Reset shouldAnimateFailed after a successful form submission
    setShouldAnimateFailed(false);
    setShouldAnimate(true);
  }

  async function animateFailedForm() {
    setShouldAnimateFailed(true);
  }

  return (
    <>
      <div className="relative">
        <div className="w-1/2 lg:w-1/3 flex-col mx-auto flex justify-center items-center h-[90vh]">
          <LoginHeader shouldAnimate={shouldAnimate} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p
              className={cn(
                "",
                `${
                  shouldAnimate
                    ? "text-center text-2xl font-bold block"
                    : "none"
                }`
              )}
            >
              Welcome to angova
            </p>
            <div
              className={(cn(""), `${shouldAnimate ? "block my-40" : "none"}`)}
            ></div>
          </motion.div>
          <Form {...form}>
            <motion.form
              onSubmit={form.handleSubmit(onSubmit)}
              initial={{ opacity: 1, y: 0 }}
              animate={shouldAnimateFailed ? formAnimationControls : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <FormField
                name="email"
                render={({ field }) => (
                  <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={shouldAnimate ? { opacity: 0, scale: 0 } : {}}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  </motion.div>
                )}
              />
              <div className="flex justify-center">
                <div className="my-2"></div>
              </div>

              <FormField
                name="password"
                render={({ field }) => (
                  <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={shouldAnimate ? { opacity: 0, scale: 0 } : {}}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        <a
                          href="#"
                          className="underline underline-offset-4 font-style-italic"
                        >
                          Forgot your password ?
                        </a>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  </motion.div>
                )}
              />
              <div className="flex justify-center">
                <div className="my-5"></div>
              </div>

              <Button
                type="submit"
                variant="orange"
                className="w-full"
                style={{
                  opacity: shouldAnimate ? 0 : 1,
                }}
              >
                Connexion
              </Button>
            </motion.form>
          </Form>
          <div className="h-[20vh]"></div>
        </div>

        <motion.div
          style={{
            position: "absolute",
            // bottom: "50px",
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

export default LoginPage;

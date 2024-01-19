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
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import AnimatedEarth from "@/components/animatedEarth";
import { motion, useAnimation } from "framer-motion";

const formSchema = z.object({
  email: z
    .string()
    .min(5, {
      message: "Enter a valid email",
    })
    .max(50, {
      message: "Enter a valid email",
    }),
  password: z
    .string()
    .min(8, {
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
      headerAnimationControls.start({ opacity: 0, y: -50 }); // Fade off the header
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
  const formAnimationControls = useAnimation();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setShouldAnimate(true); // Trigger the Earth animation
    await formAnimationControls.start({ opacity: 0, y: 100 }); // Fade off the form
  }

  return (
    <>
      <div className="relative">
        <div className="w-1/2 lg:w-1/3 flex-col mx-auto flex justify-center space-y-8 h-screen">
          <LoginHeader shouldAnimate={shouldAnimate} />
          <Form {...form}>
            <motion.form
              onSubmit={form.handleSubmit(onSubmit)}
              initial={{ opacity: 1, y: 0 }}
              animate={formAnimationControls}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant="orange" className="w-full">
                Connexion
              </Button>
            </motion.form>
          </Form>
        </div>
      </div>

      {/* <motion.div
        initial="hidden"
        animate={shouldAnimate ? "center" : "hidden"}
        variants={{
          center: { y: -250, height: 400 },
          hidden: { y: 0, height: 150 },
        }} // Adjust the y value based on your layout
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <AnimatedEarth shouldAnimate={shouldAnimate} />
      </motion.div>
       */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "0",
          margin: "-2vw",
          width: "100%",
          overflow: "hidden",
        }}
        initial="hidden"
        animate={shouldAnimate ? "center" : "hidden"}
        variants={{
          center: { y: -250, height: 400, scale: 0.3 },
          hidden: { y: 0, height: 150, scale: 1 },
        }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      >
        <AnimatedEarth shouldAnimate={shouldAnimate} />
      </motion.div>
    </>
  );
};

export default LoginPage;

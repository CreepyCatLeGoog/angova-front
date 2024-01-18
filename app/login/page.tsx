"use client";
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

const formSchema = z.object({
  email: z
    .string()
    .min(5, {
      message: "Entrez un email valide",
    })
    .max(50, {
      message: "Entrez un email valide",
    }),
  password: z
    .string()
    .min(8, {
      message: "Mot de passe invalide",
    })
    .max(50, {
      message: "Mot de passe invalide",
    }),
});

const LoginPage = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="relative">
        <div className="w-1/2 lg:w-1/3 flex-col mx-auto flex justify-center space-y-8 h-screen">
          <div className="w-full">
            <p className="font-bold text-2xl text-center my-5">Se connecter</p>
            <p className="text-center">
              Pour continuer sur{" "}
              <span className="text-orange-400">An’gova</span>
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
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
                    <FormLabel>Mot de passe</FormLabel>
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
            </form>
          </Form>
          <div
            className="absolute bottom-0 left-0 w-full"
            style={{
              position: "absolute",
              bottom: "0",
              height: "120px",
              overflow: "hidden",
            }}
          >
            <AnimatedEarth />
          </div>
        </div>
        {/* make sticky bottom */}
      </div>
    </>
  );
};

export default LoginPage;

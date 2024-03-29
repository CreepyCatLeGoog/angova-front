"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { auth } from "@/auth";
import { SignOut } from "@/components/auth-component";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ContactFormInput, contactFormSchema } from "@/lib/user-schema";

export default function ContactForm() {
    const methods = useForm<ContactFormInput>({
        resolver: zodResolver(contactFormSchema),
      });

      const {
        reset,
        handleSubmit,
        register,
        formState: { errors },
      } = methods;

      const onSubmitHandler: SubmitHandler<ContactFormInput> = async (
        values,
        event
      ) => {
        if (!event) return;
        event.preventDefault();

      };

    return (

        <Form {...methods}>
            <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4 w-[70%] md:w-[50%]  mt-[20px] flex flex-col justify-center  items-center" >
                <FormField

                name="username"

                render={({ field }) => (
                    <FormItem  className = "w-[100%]">
                    <FormControl>
                        <Input className="min-h-[30px] md:min-h-[40px] text-[10px] md:text-[13px]" placeholder="Nom" {...field} style={{ borderRadius: '8px'}} />
                    </FormControl>
                    <FormMessage style={{fontSize: "10px"}} />
                    </FormItem>
                )}
                />
                <FormField

                name="mail"

                render={({ field }) => (
                    <FormItem  className = "w-[100%]">

                    <FormControl>
                        <Input className="min-h-[30px] md:min-h-[40px] text-[10px] md:text-[13px]"  placeholder="Mail" {...field} style={{ borderRadius: '8px' }} />
                    </FormControl>

                    <FormMessage style={{fontSize: "10px"}} />
                    </FormItem>
                )}
                />
                <FormField

                name="message"

                render={({ field }) => (
                    <FormItem  className = "w-[100%]">
                    <FormControl>
                        <Textarea  className="min-h-[90px] md:min-h-[150px] lg:min-h-[190px] text-[10px] md:text-[13px]" placeholder="Message" {...field} style={{ borderRadius: '8px'}} />
                    </FormControl>
                    <FormMessage style={{fontSize: "10px"}} />
                    </FormItem>
                )}
                />
                <Button type="submit" className="bg-[#F49E4C] font-medium md:font-semibold text-[10px] md:text-[13px] w-[50%] md:w-[30%] h-[25px] md:h-[30px]" style={{ borderRadius: '6px' }} >Envoyer</Button>
            </form>
        </Form>
        
    );



}
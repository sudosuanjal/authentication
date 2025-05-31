import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useStore } from "@/store/auth.store";
import { useToast } from "@/hooks/use-toast";
import Loader from "@/components/Loader";
import { useState } from "react";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function ForgotPassword() {
  const { forgotPassword, isLoading } = useStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data) {
    try {
      console.log("btn clicked");

      const response = await forgotPassword(data.email);
      setIsSubmitted(true);
    } catch (error) {
      console.error("forgot password error:", error.response?.data?.message);
      toast({
        title: "Forgot Password Failed",
        description:
          error.response?.data?.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md ">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            {isSubmitted ? (
              <>A Link Is Sent To Your Email</>
            ) : (
              <>Forgot Your Password?</>
            )}
          </CardTitle>
          <CardDescription className="text-center text-sm">
            {isSubmitted ? (
              <>go check your mail to reset the password</>
            ) : (
              <> enter your email address to reset the password.</>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        type="email"
                        disabled={isSubmitted || isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {isSubmitted ? (
                <Button asChild className="w-full">
                  <a href="https://mail.google.com">Open Gmail</a>
                </Button>
              ) : (
                <Button type="submit" className="w-full" variant="outline">
                  {isLoading ? <Loader /> : <>Submit</>}
                </Button>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

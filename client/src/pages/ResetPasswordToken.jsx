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
import { Link, useNavigate } from "react-router";
import { useStore } from "@/store/auth.store";
import { useToast } from "@/hooks/use-toast";
import Loader from "@/components/Loader";

const FormSchema = z
  .object({
    pass: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPass: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.pass === data.confirmPass, {
    message: "Passwords must match.",
    path: ["confirmPass"],
  });

const ResetPasswordToken = () => {
  const { signup, isLoading } = useStore();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pass: "",
      confirmPass: "",
    },
  });

  async function onSubmit(data) {}

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md ">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Reset Password
          </CardTitle>
          <CardDescription className="text-center text-sm">
            enter you new password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="pass"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="confirmPass"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant="destructive" className="w-full">
                {isLoading ? (
                  <>
                    <Loader />
                  </>
                ) : (
                  <> Submit</>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordToken;

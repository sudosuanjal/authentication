import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useStore } from "@/store/auth.store";
import React, { useState } from "react";

const ResetPassword = () => {
  const { forgotPassword, isLoading, user } = useStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const onSubmit = async () => {
    try {
      await forgotPassword(user.email);
      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: "Signup Failed",
        description:
          error.response?.data?.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Reset your password?
          </CardTitle>
          <CardDescription className="text-center text-sm">
            Click below to receive a password reset link to your email.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          {isSubmitted ? (
            <Button variant="outline" asChild className="w-[240px]">
              <a
                href="https://mail.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Gmail
              </a>
            </Button>
          ) : (
            <Button
              onClick={onSubmit}
              className="w-[240px]"
              disabled={isLoading}
            >
              {isLoading ? <Loader /> : <>Send Reset Link</>}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;

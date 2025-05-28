import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/auth.store";
import { toast } from "@/hooks/use-toast";

const VerifyEmail = () => {
  const [value, setValue] = useState("");
  const { verify } = useStore();
  const navigate = useNavigate();

  async function onSubmit(value) {
    try {
      console.log("value: " + value);

      const response = await verify(value);
      navigate("/");
    } catch (error) {
      console.error("verification error:", error.response?.data?.message);
      toast({
        title: "verification failed",
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
            Verify Your Email
          </CardTitle>
          <CardDescription className="text-center text-sm">
            <div className="text-center text-sm">
              {value === "" ? (
                <>Enter your one-time password.</>
              ) : (
                <>You entered: {value}</>
              )}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
              >
                <InputOTPGroup className="">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <Button
                variant="destructive"
                onClick={() => onSubmit(value)}
                className="w-[240px]"
              >
                {" "}
                Verify Email
              </Button>
            </div>
          </div>
          <p className="text-sm text-center pt-2">
            {" "}
            <Link to={"/login"} className="text-blue-500">
              resend the mail?
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyEmail;

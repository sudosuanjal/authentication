import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const LogOut = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md ">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-sm">
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-center pt-2">
            don't have an account? signup
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogOut;

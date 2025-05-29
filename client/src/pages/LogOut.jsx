import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useStore } from "@/store/auth.store";
import React from "react";

const LogOut = () => {
  const { logout, isLoading } = useStore();

  const onSubmit = () => {
    logout();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md ">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Are You Sure?
          </CardTitle>
          <CardDescription className="text-center text-sm">
            Enter the logout button to exit the app.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <Button
            variant="destructive"
            onClick={() => onSubmit()}
            className="w-[240px]"
          >
            {isLoading ? (
              <>
                <Loader />
              </>
            ) : (
              <>LogOut</>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogOut;

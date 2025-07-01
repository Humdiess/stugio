"use client";
import React, { useEffect, useState } from "react";

import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { signout } from "@/lib/auth-actions";
import { LogOut } from "lucide-react";

const LoginButton = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);
  if (user) {
    return (
      <Button
        variant="ghost"
        className="text-gray-600 hover:text-pink-600 hover:bg-pink-50"
        onClick={() => {
          signout();
          setUser(null);
        }}
      >
        <LogOut className="w-4 h-4 mr-2" />
        <span className="hidden sm:inline">Logout</span>
      </Button>
    );
  }
  return (
    <Button
      variant="ghost"
      onClick={() => {
        router.push("/login");
      }}
    >
      Login
    </Button>
    
  );
};

export default LoginButton;

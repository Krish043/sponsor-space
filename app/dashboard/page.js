// "use client";
// import React from "react";

// import { useSession, signIn, signOut } from "next-auth/react"
// import { useRouter } from "next/navigation";

// const Dashboard = () => {
//   const { data: session } = useSession();
//   if (!session) {
//     const router = useRouter();
//     router.push("/login");
//   }
//   return <div>dashboard</div>;
// };

// export default Dashboard;


"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  if (!session) {
    return null; // or you can return a loading spinner or placeholder
  }

  return <div>dashboard</div>;
};

export default Dashboard;

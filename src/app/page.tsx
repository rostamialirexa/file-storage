"use client"
import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const createFile = useMutation(api.files.createFile);
  const files = useQuery(api.files.getFiles)
  console.log(files);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <SignOutButton>
          <Button>Sing Out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sing In</Button>
        </SignInButton>
      </SignedOut>
      {files?.map((file) => (
        <div className="" key={file._id}>{file._id}</div>
      ))}
      <Button onClick={() => createFile({ name: 'hello' })}>Click me</Button>
    </main>
  );
}

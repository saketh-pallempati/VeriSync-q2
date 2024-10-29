'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { get_pass_hash } from '../../lib/zk-wasm'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/hooks/use-toast"

export default function RegisterPage() {
  const { toast } = useToast()

  const [username, setUsername] = useState<number | ''>('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  // State to control AlertDialog visibility
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const hashedPassword = await get_pass_hash(password);

    // Store in localStorage (simulating backend)
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username]) {
      setIsAlertOpen(true) // Open the AlertDialog
      return;
    }

    users[username] = {
      hashedPassword
    };

    localStorage.setItem('users', JSON.stringify(users));

    toast({
      title: "Registration Successfull",
      description: "You will be redirected to the login page",
    });
    router.push('/login');
  }

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="number"
                placeholder="Username (Number)"
                value={username}
                onChange={(e) => setUsername(e.target.value ? parseInt(e.target.value) : '')}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Register</Button>
          </form>


          {/* AlertDialog for Username Already Exists */}
          <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
            <AlertDialogTrigger asChild>
              <button className="hidden">Open Alert</button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Username Already Exists</AlertDialogTitle>
                <AlertDialogDescription>
                  The username you have entered is already taken. Please choose a different username.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setIsAlertOpen(false)}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => setIsAlertOpen(false)}>OK</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <Link href="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            Back to Home
          </Link>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
              Login
            </Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  )
}
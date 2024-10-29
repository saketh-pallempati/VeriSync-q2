'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { get_pass_hash } from '../../lib/zk-wasm'

export default function RegisterPage() {
  const [username, setUsername] = useState<number | ''>('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const hashedPassword = await get_pass_hash(password);

    // Store in localStorage (simulating backend)
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username]) {
      alert('Username already exists');
      return;
    }

    users[username] = {
      hashedPassword
    };

    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');
    router.push('/login');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
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
        </CardContent>
        <CardFooter className="justify-center">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            Back to Home
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
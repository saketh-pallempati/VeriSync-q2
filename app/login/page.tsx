'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { generate_proof, verify_proof } from '../../lib/zk-wasm'

export default function LoginPage() {
  const [username, setUsername] = useState<number | ''>('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (typeof username !== 'number') {
      setError('Username must be a number')
      return
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}')
    const userData = users[username]

    if (!userData) {
      setError('User not found')
      return
    }

    const proof = await generate_proof(username, password)

    const isValid = await verify_proof(proof, userData.hashedPassword, username)

    if (isValid) {
      setSuccess('Login successful!')
      setUsername('')
      setPassword('')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="number"
                placeholder="Username"
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
            <Button type="submit" className="w-full">Login</Button>
          </form>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          {success && <div className="text-green-500 mt-2">{success}</div>}
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
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { generate_proof, verify_proof } from '../../lib/zk-wasm'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ExclamationTriangleIcon, RocketIcon } from '@radix-ui/react-icons'

export default function LoginPage() {
  const [username, setUsername] = useState<number | ''>('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    try {
      if (typeof username !== 'number') {
        throw new Error('Username must be a number')
      }

      const users = JSON.parse(localStorage.getItem('users') || '{}')
      const userData = users[username]

      if (!userData) {
        throw new Error('User not found')
      }

      const proof = await generate_proof(username, password)
      const isValid = await verify_proof(proof, userData.hashedPassword, username)

      if (isValid) {
        setSuccess('Login successful!')
        setUsername('')
        setPassword('')
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (err) {
      if (err instanceof Error) {
        setError("Error from wasm File: " + err.message)
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 mb-4">
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
          {error && <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error : Check Credentials</AlertTitle>
            <AlertDescription>
              {error}
            </AlertDescription>
          </Alert>}
          {success && <Alert>
            <RocketIcon className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              {success}
            </AlertDescription>
          </Alert>}
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <Link href="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            Back to Home
          </Link>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-blue-600 dark:text-blue-400 hover:underline">
              Register
            </Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  )
}
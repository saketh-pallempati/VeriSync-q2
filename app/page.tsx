import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to ZK Auth</h1>
          <p className="text-xl text-gray-600">Secure Authentication with Zero-Knowledge Proofs</p>
        </header>

        <div className="flex justify-center space-x-4 mb-16">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>What are Zero-Knowledge Proofs?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Zero-Knowledge Proofs (ZKPs) are cryptographic methods that allow one party to prove to another that a statement is true, without revealing any information beyond the validity of the statement itself.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Benefits of ZK Auth</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Enhanced privacy: Your password never leaves your device</li>
                <li>Improved security: No password storage on servers</li>
                <li>Resistance to phishing attacks</li>
                <li>Potential for decentralized identity management</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>You enter your username and password</li>
                <li>A zero-knowledge proof is generated on your device</li>
                <li>The proof is sent to the server for verification</li>
                <li>The server verifies the proof without seeing your password</li>
                <li>You&apos;re authenticated if the proof is valid</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Choose ZK Auth?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>ZK Auth combines the convenience of traditional authentication with the security and privacy benefits of zero-knowledge proofs. It&apos;s the future of secure, privacy-preserving authentication.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

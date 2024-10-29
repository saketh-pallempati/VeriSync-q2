import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen light:bg-gradient-to-b from-blue-100 to-white dark:bg-black dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Welcome to ZK Auth</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Secure Authentication with Zero-Knowledge Proofs</p>
        </header>

        <div className="flex justify-center space-x-4 mb-16">
          <Button asChild variant="outline" className="dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="dark:bg-white dark:text-black dark:hover:bg-gray-200">
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-950 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">What are Zero-Knowledge Proofs?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="dark:text-gray-400">Zero-Knowledge Proofs (ZKPs) are cryptographic methods that allow one party to prove to another that a statement is true, without revealing any information beyond the validity of the statement itself.</p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-950 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Benefits of ZK Auth</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 dark:text-gray-400">
                <li>Enhanced privacy: Your password never leaves your device</li>
                <li>Improved security: No password storage on servers</li>
                <li>Resistance to phishing attacks</li>
                <li>Potential for decentralized identity management</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-950 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 dark:text-gray-400">
                <li>You enter your username and password</li>
                <li>A zero-knowledge proof is generated on your device</li>
                <li>The proof is sent to the server for verification</li>
                <li>The server verifies the proof without seeing your password</li>
                <li>You`&apos;re authenticated if the proof is valid</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-950 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Why Choose ZK Auth?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="dark:text-gray-400">ZK Auth combines the convenience of traditional authentication with the security and privacy benefits of zero-knowledge proofs. It`&apos;s the future of secure, privacy-preserving authentication.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
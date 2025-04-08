import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useState} from "react";
import axios from "axios"

export function SignUpForm({className, ...props}) {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleCreateAccount = async () => {
        if (!firstName || !lastName) {
            alert("First name and last name are required.");
            return;
        }
        if (!email) {
            alert("Email is required.");
            return;
        }
        if (!password) {
            alert("Password is required.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            // Clear password fields
            setPassword("");
            setConfirmPassword("");
            return;
        }

        let params = {
            data: {
                user_first_name: firstName,
                user_last_name: lastName,
                user_email: email,
                user_password: password,
            }
        }

        try {
            const res = await axios.post("http://localhost:8000/api/user/create", params, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.status === 200) {
                alert("Account created successfully!");
                // Redirect to login or dashboard
                window.location.href = "/";
            } else {
                alert(res.data.message || "Failed to create account.");
            }
        } catch (error) {
            console.error("An unexpected error occurred:", error);
            /**
             * Handle unexpected errors, e.g. network issues
             */
            alert("An unexpected error occurred. Please try again later.");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className={cn("flex flex-col gap-6 w-full max-w-sm", className)} {...props}>
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Create an account</CardTitle>
                        <CardDescription>
                            Sign up with your Facebook or Google account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid gap-6">
                                <div className="flex flex-col gap-4">
                                    <Button variant="outline" className="w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                                            <path
                                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                                fill="currentColor"/>
                                        </svg>
                                        Sign up with Facebook
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        Sign up with Google
                                    </Button>
                                </div>
                                <div
                                    className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                                        Or continue with
                                    </span>
                                </div>
                                <div className="grid gap-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input
                                                id="firstName"
                                                type="text"
                                                placeholder="John"
                                                required
                                                value={firstName}
                                                onChange={(e) => {
                                                    setfirstName(e.target.value)
                                                }}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input
                                                id="lastName"
                                                type="text"
                                                placeholder="Doe"
                                                required
                                                value={lastName}
                                                onChange={(e) => {
                                                    setlastName(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"
                                            required
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="••••••••"
                                            required
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="••••••••"
                                            required
                                            value={confirmPassword}
                                            onChange={(e) => {
                                                setConfirmPassword(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <Button onClick={handleCreateAccount} type="button" className="w-full">
                                        Create Account
                                    </Button>
                                </div>
                                <div className="text-center text-sm">
                                    Already have an account?{" "}
                                    <a href="/" className="underline underline-offset-4">
                                        Login
                                    </a>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
                <div className="text-balance text-center text-xs text-muted-foreground">
                    By clicking continue, you agree to our{" "}
                    <a href="#" className="underline underline-offset-4 hover:text-primary">Terms of Service</a>{" "}
                    and{" "}
                    <a href="#" className="underline underline-offset-4 hover:text-primary">Privacy Policy</a>.
                </div>
            </div>
        </div>
    )
}
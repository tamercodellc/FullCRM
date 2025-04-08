import {cn} from "@/lib/utils"
import {
    Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator} from "@/components/ui/input-otp"
import { useSignals } from '@preact/signals-react/runtime';
import LoginController from "./loginController.js";
import {useToast} from "@/components/ui/use-toast.jsx";
import {useEffect} from "react";

export function AuthVerification({className, ...props}) {
    useSignals()
    const {toast} = useToast();

    useEffect(() => {
        if (!LoginController.toast) {
            LoginController.toast = toast;
        }
    }, []);

    return (<div className="min-h-screen flex items-center justify-center p-4">
            <div className={cn("flex flex-col gap-6 w-full max-w-sm", className)} {...props}>
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Verify your email</CardTitle>
                        <CardDescription>
                            We've sent a verification code to your email address
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={LoginController.handleVerificationCodeSubmit}>
                            <div className="grid gap-6">
                                <div className="flex flex-col items-center gap-4">
                                    <InputOTP maxLength={6} value={LoginController.otp} onChange={(value) => {LoginController.otp = value}}>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0}/>
                                            <InputOTPSlot index={1}/>
                                            <InputOTPSlot index={2}/>
                                        </InputOTPGroup>
                                        <InputOTPSeparator/>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={3}/>
                                            <InputOTPSlot index={4}/>
                                            <InputOTPSlot index={5}/>
                                        </InputOTPGroup>
                                    </InputOTP>
                                    <p className="text-sm text-muted-foreground">
                                        Please enter the 6-digit code sent to your email
                                    </p>
                                </div>
                                <Button type="submit" className="w-full">
                                    Verify Email
                                </Button>
                                <div className="text-center text-sm">
                                    Didn't receive the code?{" "}
                                    <Button variant="link" className="p-0 h-auto font-normal">
                                        Resend
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
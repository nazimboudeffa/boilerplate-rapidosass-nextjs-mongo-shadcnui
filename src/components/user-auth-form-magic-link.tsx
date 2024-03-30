"use client"

import * as React from "react"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader2 } from "lucide-react"
import { singUpSchema } from "@/lib/validators"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useRouter } from 'next/navigation'
import { signIn } from "next-auth/react";

type FormData = z.infer<typeof singUpSchema>

export function UserAuthFormMagicLink() {

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(singUpSchema),
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function onSubmit(cred : FormData) {
        setIsLoading(true)

        try {
            const res = await signIn("email", {
                email: cred.email,
            });
            
            if (res?.error) {
                throw new Error(res.error)
            }

            setIsLoading(false)

        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }

    return (
        <div className="grid gap-6 max-w-[400px] md:max-w-[500px] mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="username@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            {...register("email")}
                        />
                        {errors?.email && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <button
                        className={cn(buttonVariants())}
                        disabled={isLoading}
                        type="submit"
                    >
                        {isLoading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Send magic link
                    </button>
                </div>
            </form>
        </div>
    )
}
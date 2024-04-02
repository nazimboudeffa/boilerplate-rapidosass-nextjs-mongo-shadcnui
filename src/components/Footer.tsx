"use client"
import { ModeToggle } from "@/components/theme-toggle"

function Footer () {
    return (
        <footer>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                <div className="flex text-gray-500">
                    <p>Crafted with <span className="text-red-500">❤</span> on <a href="https://github.com/nazimboudeffa/boilerplate-magiclink-nextjs-mongo"><u>GitHub</u></a></p> 
                </div>
                
                <div className="flex text-gray-500">
                    <p>&copy; 2024 ACME</p>
                </div>

                <div className="flex">
                    <ModeToggle />
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer
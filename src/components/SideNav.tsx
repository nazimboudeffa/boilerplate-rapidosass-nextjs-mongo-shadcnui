import Link from "next/link"

export default function SideNav() {
    return (
        <div className="hidden border-r bg-zinc-100/40 md:block dark:bg-zinc-800/40">
                    <div className="flex flex-col gap-2">
                    <div className="flex h-[60px] items-center px-6">
                        <h1 className="text-xl">Dashboard</h1>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-4 text-sm font-medium">
                        <Link
                            className="flex items-center gap-3 rounded-lg bg-zinc-100 px-3 py-2 text-zinc-900 transition-all hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-50"
                            href="/dashboard"
                        >
                            <svg
                            className=" h-4 w-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <rect height="18" rx="2" width="18" x="3" y="3" />
                            <path d="M9 14v1" />
                            <path d="M9 19v2" />
                            <path d="M9 3v2" />
                            <path d="M9 9v1" />
                            </svg>
                            General
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                            href="/dashboard"
                        >
                            <svg
                            className=" h-4 w-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                            </svg>
                            Messages
                        </Link>
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                            >
                            <svg
                            className=" h-4 w-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>

                    
                            <span className="text-sm font-medium"> Profile </span>
                        </Link>
                        </nav>
                    </div>
                    </div>
                </div>
    )
}
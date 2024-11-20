"use client"
import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import UserIcon from '@/components/UserIcon';
import { Bell, Divide, Search } from 'lucide-react';

export default function Navbar() {
    const { data: session, status } = useSession();

    console.log(session, status);

    return (
        <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center justify-between px-4 py-2">
                {status === "authenticated" ? (
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="text-red-600 font-bold text-3xl">
                            NETFLIX
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden md:flex space-x-4 text-sm text-gray-300">
                            <Link href="/" className="hover:text-white">Inicio</Link>
                            <Link href="/series" className="hover:text-white">Series</Link>
                            <Link href="/peliculas" className="hover:text-white">Películas</Link>
                            <Link href="/novedades" className="hover:text-white">Novedades populares</Link>
                            <Link href="/mi-lista" className="hover:text-white">Mi lista</Link>
                            <Link href="/idiomas" className="hover:text-white">Explora por idiomas</Link>
                        </div>
                    </div>
                ) : (
                    <React.Fragment>
                        <div className="text-red-600 font-bold text-3xl">
                            NETFLIX
                        </div>
                    </React.Fragment>
                )}
                {status === "authenticated" && (
                    <div className="flex items-center space-x-4 text-white">
                        <UserIcon />
                        <Search className="w-5 h-5 cursor-pointer" />
                        <Bell className="w-5 h-5 cursor-pointer" />
                    </div>
                )}
            </div>
        </nav>
    );
}
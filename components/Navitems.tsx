'use client';
import React from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const Navitems = () => {
    const pathname = usePathname()
    return (
        <nav className="flex items-center gap-4">
            {[{label: 'Home', href: '/'}, {label: 'Companions', href: '/companions'}, {label: 'Profile', href: '/my-journey'}].map(({label, href}) => (
                <Link className={cn(pathname === href && 'text-primary font-semibold')} key={label} href={href}>{label}</Link>
            ))}
        </nav>
    );
};

export default Navitems;
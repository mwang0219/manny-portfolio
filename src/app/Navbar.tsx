'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function NavBar() {
    const TitleLogo = () => {
        return (
            <h1>Manny's Portfolio</h1>
        )
    }

    const ContactIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
        )
    }

    const NavbarLink = ({link, name}: {link:string, name: string}) => {
        return( 
            <Link className="font-sans italic font-bold text-xl" href={link}>{name}</Link>
        )
    }
    

    return (
        <div className="flex justify-center h-16 bg-cyan-400 border-b-4 ">
            <div className="flex w-full mx-4 justify-between items-center md:hidden">
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                </div>
                <div className="">
                    <TitleLogo />
                </div>
                <div className="">
                    <ContactIcon/>
                </div>
            </div>
            <div className="flex w-full mx-4 justify-between items-center max-md:hidden">
            
                <TitleLogo/>
                
            
                <div className="flex w-full mx-4 justify-start gap-4 items-center">
                    <NavbarLink link="/project" name="Projects"/>
                    <NavbarLink link="/education" name="Education History"/>
                    <NavbarLink link="/career" name="Career History"/>

                </div>
        
                <div className="">
                    <ContactIcon/>
                </div>
            
            </div>
        </div>

    )
}
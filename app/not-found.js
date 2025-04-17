'use client'

import "./global.css"
import Image from "next/image";
import {useEffect} from "react";

export default function Error({error, reset}) {
    return (
        <div className="bg-indigo-900 relative overflow-hidden h-screen">
            <Image className='absolute h-full w-full object-cover'
                   src="https://images.ctfassets.net/x9wbez5bxfw8/37RS7vcXUQrz3Qm8Z1sLgV/ae80fa3e2f476756a3d26da3eee6eb66/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg"
                   alt="Error page background"
                   width={960}
                   height={540}
                   async
                   priority />
            <div className="inset-0 bg-black opacity-25 absolute">
            </div>
            <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div className="w-full font-mono flex flex-col items-center relative z-10">
                    <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                        Something went wrong!
                    </h1>
                </div>
            </div>
        </div>
    );
}
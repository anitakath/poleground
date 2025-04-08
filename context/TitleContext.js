"use client"
import React, { createContext, useContext, useState, useEffect} from 'react';
import { usePathname, useSearchParams } from 'next/navigation'
const TitleContext = createContext();

export const TitleProvider = ({ children }) => {
    const [title, setTitle] = useState("POLEGROUND");


    const pathname = usePathname();


    useEffect(() => {
        if (pathname === "/") {
            //setTitle("ARTISTIC MOVEMENTS");
            setTitle("POLEGROUND");
        } else if (pathname.startsWith("/poledance")) { 
            setTitle("POLEGROUND");
        } else {
            //setTitle("FIGURE SKATING CLUB");
        }
    }, [pathname]);

    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            {children}
        </TitleContext.Provider>
    );
};

export const useTitle = () => {
    return useContext(TitleContext);
};
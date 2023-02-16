import { Desktopnavbar } from "./desktop";
import { Mobilenavbar } from "./mobile";
import { useEffect, useState } from "react";

export default function NavBar() {

    const [device, setDevice] = useState('desktop');

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setDevice('mobile');
        } else {
            setDevice('desktop');
        }
        addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                setDevice('mobile');
            } else {
                setDevice('desktop');
            }
        });
    }, []);

    if (device === 'desktop') {
        return (
            <Desktopnavbar />
        );
    } else if (device === 'mobile') {
        return (
            <Mobilenavbar />
        );
    }

}
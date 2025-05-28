import Link from 'next/link';
import React from 'react';

const Social = () => {
    return (
        <>
            <ul>
                <li><Link href="https://web.facebook.com/profile.php?id=61563587830934" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="https://x.com/Kevin_A2ta2l" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link></li>
                <li><Link href="https://www.linkedin.com/in/kevin-jean" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                <li><Link href="https://www.tiktok.com/@kevin_attallah" target="_blank"><i className="fa-brands fa-tiktok"></i></Link></li>
                <li><Link href="https://www.youtube.com/@kevin-A2ta2l" target="_blank"><i className="fab fa-youtube-square"></i></Link></li>
                <li><Link href="https://www.instagram.com/kevin_a2ta2l" target="_blank"><i className="fa-brands fa-instagram"></i></Link></li>
            </ul>            
        </>
    );
};

export default Social;
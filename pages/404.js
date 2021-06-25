import React, {useEffect} from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        const redirectHomepage = () => {
            setTimeout(() => {
                router.push('/');
            }, 3000);
        };

        redirectHomepage();

        return () => {
            clearTimeout(redirectHomepage);
        };

    }, []);

    return (
        <div className='not-found'>
            <h1>404</h1>
            <h2>Oooops! That page cannot be found :(</h2>
            <p>Redirecting to <Link href='/'><a>Homepage</a></Link> for more marmite goodness..</p>

            <style jsx>{`
                .not-found {
                background: #fff;
                padding: 30px;
                box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                transform: rotateZ(-1deg);
                }
                h1 {
                font-size: 3em;
                }
            `}</style>
        </div>
    )
}

export default NotFound

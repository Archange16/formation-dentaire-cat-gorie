"use client";
import SEO from '@/components/data/seo';
import Error from './error';
const ErrorPage = () => {
    return (
        <>
            <SEO pageTitle='Not Found' />
            <Error />
        </>
    );
};

export default ErrorPage;
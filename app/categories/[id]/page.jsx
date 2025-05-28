"use client"
import { useParams, useRouter } from "next/navigation";
import portfolioData from '@/components/data/categoriesPrincipale';
import CategorieSingle from "@/components/pages/service-single";


const ServiceDetails = () => {
    const params = useParams();
    const singleData = portfolioData?.find((portfolio) => portfolio.categorie === params.id);
    const router = useRouter();
    if (!singleData) {
        return router.push("/404-error");
    }

    return (
        <>
            <CategorieSingle singleData={singleData}/>
        </>
    );
};

export default ServiceDetails;
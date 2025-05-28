"use client"
import { useParams, useRouter } from "next/navigation";
import formationsData  from '@/components/data/formationsPrincipales';
import PortfolioDetails from "@/components/pages/portfolio/portfolio-details";


const ServiceDetails = () => {
   const params = useParams();
    const router = useRouter();
    const id = params.id; 
    if (!id ) {
      return <div>Chargement...</div>;
    }
  // Trouve le groupe de formations avec l'ID de formation spécifié
  const selectedFormation = formationsData.find(
    (formation) => formation.id === id
  );

  console.log(selectedFormation);
  
    if (!selectedFormation) {
        return router.push("/404-error");
    }
    return (
        <>
            <PortfolioDetails singleData={selectedFormation}/>
        </>
    );
};

export default ServiceDetails;
"use client"
import FormArea from "./form";
import FormAreaacc from "./formacc";

const ContactAc = () => {
    return (
        <>
            <div className="contact__acc section-padding">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-6">
                            <div className="contact__acc-content">
                                <div className="contact__acc-title">
                                    <span className="subtitle-one">Contactez-nous</span>
                                    <h2>Planifier un Entretien </h2>
                                </div>
                                <div className="contact__acc-form">
                                    <FormAreaacc />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
        </>
    );
};

export default ContactAc;
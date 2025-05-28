
import Link from "next/link";

const Pricing = () => {
    return (
        <>
        <div className="pricing-plan__one section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-7 col-md-8">
                        <div className="pricing-plan__one-title">
                            <span className="subtitle-one">Flexible Plans</span>
                            <h2 className="mb-40">Inscription et Prise de Contact</h2>
                            <ul className="nav nav-pills mb-65 justify-content-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link active" id="monthly-pricing-tab" data-bs-toggle="pill" data-bs-target="#monthly-pricing" type="button" role="tab" aria-controls="monthly-pricing" aria-selected="true">Inscription Directe</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="yearly-pricing-tab" data-bs-toggle="pill" data-bs-target="#yearly-pricing" type="button" role="tab" aria-controls="yearly-pricing" aria-selected="false">Prise de Rendez-vous</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pricing-plans tab-content">
                    <div className="row justify-content-center gy-4 tab-pane fade show active " id="monthly-pricing" role="tabpanel" aria-labelledby="monthly-pricing-tab">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Basic</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">$29
                                        <span>/monthly</span>
                                    </h2>
                                    <p>Essential Security Suite Perfect for startups and small teams</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i>Mistakes To Avoid</span>
                                        <span><i className="fas fa-angle-double-right"></i>Your Startup</span>
                                        <span><i className="fas fa-angle-double-right"></i>Knew About Fonts</span>
                                    </div>
                                    <Link href="/request-quote" className="btn-one">Get Started<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan active">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Premium</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">$69
                                        <span>/monthly</span>
                                    </h2>
                                    <p>Data Analytics Tools Ideal for growing businesses requiring</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i>Mistakes To Avoid</span>
                                        <span><i className="fas fa-angle-double-right"></i>Your Startup</span>
                                        <span><i className="fas fa-angle-double-right"></i>Knew About Fonts</span>
                                    </div>
                                    <Link href="/request-quote" className="btn-two">Get Started<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row justify-content-center gy-4 tab-pane fade" id="yearly-pricing" role="tabpanel" aria-labelledby="yearly-pricing-tab">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Basic</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">$82
                                        <span>/yearly</span>
                                    </h2>
                                    <p>Essential Security Suite Perfect for startups and small teams</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i>Mistakes To Avoid</span>
                                        <span><i className="fas fa-angle-double-right"></i>Your Startup</span>
                                        <span><i className="fas fa-angle-double-right"></i>Knew About Fonts</span>
                                    </div>
                                    <Link href="/request-quote" className="btn-one">Get Started<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan active">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Premium</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">$113
                                        <span>/yearly</span>
                                    </h2>
                                    <p>Data Analytics Tools Ideal for growing businesses requiring</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i>Mistakes To Avoid</span>
                                        <span><i className="fas fa-angle-double-right"></i>Your Startup</span>
                                        <span><i className="fas fa-angle-double-right"></i>Knew About Fonts</span>
                                    </div>
                                    <Link href="/request-quote" className="btn-two">Get Started<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>      
    );
};

export default Pricing;
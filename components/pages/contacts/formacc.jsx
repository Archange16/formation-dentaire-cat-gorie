const FormAreaacc = () => {
    return (
        <>
            <form action="#">
                <div className="row">
                    {/* Prénom */}
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="firstName" placeholder="Prénom*" required="required" />
                        </div>
                    </div>

                    {/* Nom */}
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="lastName" placeholder="Nom*" required="required" />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="email" name="email" placeholder="Email*" required="required" />
                        </div>
                    </div>

                    {/* Téléphone */}
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="tel" name="phone" placeholder="Téléphone*" required="required" />
                        </div>
                    </div>

                    {/* Entreprise */}
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="company" placeholder="Entreprise*" required="required" />
                        </div>
                    </div>

                    {/* Fonction */}
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="role" placeholder="Fonction*" required="required" />
                        </div>
                    </div>

                    {/* Budget (sélection déroulante) */}
                    <div className="col-md-6 mb-30">
                        <div className="contactacc__form-area-item custom-select">
                            <select name="budget" required="required">
                                <option value="">Votre budget*</option>
                                <option value="3000-5000">Entre 3000 et 5000</option>
                                <option value="5000-10000">Entre 5000 et 10000</option>
                                <option value="10000+">10000+</option>
                            </select>
                            <i className="fas fa-angle-down"></i>
                        </div>
                    </div>

                    {/* LinkedIn URL */}
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="url" name="linkedin" placeholder="URL de votre profil LinkedIn*" required="required" />
                        </div>
                    </div>

                    {/* Type de coaching (sélection déroulante) */}
                    <div className="col-md-6 mb-30">
                        <div className="contactacc__form-area-item custom-select">
                            <select name="coachingType" required="required">
                                <option value="">Type de coaching*</option>
                                <option value="solo">Me faire coacher solo</option>
                                <option value="team">Venir coacher mon équipe en entreprise</option>
                            </select>
                            <i className="fas fa-angle-down"></i>
                        </div>
                    </div>

                    {/* Sujet */}
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="subject" placeholder="Sujet" />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                    </div>

                    {/* Bouton Submit */}
                    <div className="col-md-12">
                        <div className="contactacc__two-right-form-item">
                            <button className="btn-one btn-one" type="submit">Envoyez</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default FormAreaacc;

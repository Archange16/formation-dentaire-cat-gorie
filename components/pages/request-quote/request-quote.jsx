"use client"

const RequestQuoteMain = () => {
    return (
        <div className="request-quote__area section-padding">
            <div className="container">
                <form action="#">
                    <div className="request-quote__area-inputs">
                        <div className="request-quote__area-input-field">
                            <label for="first-name">Prénom *</label>
                            <input type="text" id="first-name" placeholder="Prénom" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label for="last-name">Nom *</label>
                            <input type="text" id="last-name" placeholder="Nom" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label for="email">Adresse email *</label>
                            <input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label for="number">Téléphone *</label>
                            <input type="text" id="number" placeholder="+ 00 123 4567" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label for="company">Personnel/Organisme *</label>
                            <input type="text" id="company" placeholder="Nom..." />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label for="website">Website *</label>
                            <input type="text" id="website" placeholder="http://jak_formation.com" />
                        </div>
                    </div>
                    <label for="message" className="mb-2">Message *</label>
                    <textarea id="message" placeholder="Type Here"></textarea>
                    <input type="submit" value="Envoyer" className="btn-one mt-4" />
                </form>
            </div>
        </div>
    );
};

export default RequestQuoteMain;
import React, {useState} from 'react';
import ValidateData from "../services/ValidateData";

const FormContact = () => {
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        surname: '',
        name: '',
        email: '',
        message: ''
    });
    const [emptyFields, setEmptyFields] = useState({
        surname: null,
        name: null,
        email: null,
        message: null,
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const getInputClass = (fieldName) => {
        const isValid = emptyFields[fieldName];
        if (isValid === null) {
            return "";
        }
        return isValid ? "is-valid" : "is-invalid";
    };

    const handleSubmitContact = (e) => {
        const { id, value } = e.target;
        setFormData(prevValues => ({
            ...prevValues,
            [id]: value,
        }));

        // Validate the field
        let isValid = true;
        if (ValidateData.checkIfEmpty(value)) {
            isValid = false;
            setErrorMessage(`Le champ ${id} est obligatoire.`);
        } else if ((id === "name" || id === "surname" || id === "message") && ValidateData.checkCharacter(value)) {
            isValid = false;
            setErrorMessage(`Le champ ${id} contient un caractère non autorisé.`);
        } else if (id === "email" && !ValidateData.checkEmail(value)) {
            isValid = false;
            setErrorMessage(`Le champ ${id} contient un caractère non autorisé.`);
        } else {
            setErrorMessage("");
        }

        // Update the emptyFields state
        setEmptyFields(prevFields => ({
            ...prevFields,
            [id]: isValid,
        }));

        // Recalculate isFormValid
        const updatedEmptyFields = { ...emptyFields, [id]: isValid };
        setIsFormValid(Object.values(updatedEmptyFields).every(isValidField => isValidField));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //CALL THE API HERE
        try {
            // API Call: You've correctly used the fetch API to make the POST request.
            // Ensure that the URL 'http://your-api-url/api/sendEmail.php' is replaced with the actual URL of your API endpoint.
            const response = await fetch('http://your-api-url/api/sendEmail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.sent) {
                // Handle success
                setFeedbackMessage('Email envoyé avec succès');
                console.log('Email sent successfully');
            } else {
                // Handle error
                setFeedbackMessage('Échec de l\'envoi de l\'email');
                console.log('Failed to send email');
            }
        } catch (error) {
            setFeedbackMessage('Une erreur s\'est produite. Veuillez réessayer.');
            console.error('Error:', error);
        }
    };

    return (
        <>
            {/*--------------- Section "FormContact de contact" ---------------*/}
            <form className="card p-3 bg-light mt-2" onSubmit={handleSubmit}>
                <div className="card p-2">
                    <h3 className="card-header d-flex justify-content-center align-items-center mt-2">
                        Ecrivez nous
                    </h3>
                    <label htmlFor="surname">Nom</label>
                    <input
                        type="text"
                        className={`form-control ${getInputClass("surname")}`}
                        id="surname"
                        placeholder="Entrer le nom"
                        value={formData.surname}
                        onChange={handleSubmitContact}
                    />

                    <label htmlFor="name">Prénom</label>
                    <input
                        type="text"
                        className={`form-control ${getInputClass("name")}`}
                        id="name"
                        placeholder="Entrer le nom"
                        value={formData.name}
                        onChange={handleSubmitContact}
                    />

                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        className={`form-control ${getInputClass("email")}`}
                        id="email"
                        placeholder="Entrer votre email"
                        value={formData.email}
                        onChange={handleSubmitContact}
                    />
                    <label htmlFor="message">Ecrivez nous</label>
                    <textarea
                        className={`form-control ${getInputClass("message")}`}
                        id="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleSubmitContact}
                    ></textarea>
                </div>
                <div>
                    {/* Error message */}
                    {errorMessage && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {errorMessage}
                        </div>
                    )}
                </div>
                <div>
                    {/* Feedback message */}
                    {feedbackMessage && (
                        <div className="alert alert-info mt-3" role="alert">
                            {feedbackMessage}
                        </div>
                    )}
                </div>
                <div className="d-flex justify-content-end m-2">
                    <button type="submit" className="btn btn-primary " disabled={!isFormValid}>
                        Envoyer
                    </button>
                </div>
            </form>
        </>);
};

export default FormContact;

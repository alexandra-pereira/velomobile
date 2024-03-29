import vmrural from "../assets/carousel/vmrural.jpeg";
import ValidateData from "../services/ValidateData";
import {useState} from "react";
import RemoteData from "../services/RemoteData";
import Modal from "./Modal";
import LegalMentionsPage from '../Pages/LegalMentionsPage';


const FormSubscribe = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [subscribers, setSubscribers] = useState([]);
    const [isFormValid, setIsFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [creationSuccess, setCreationSuccess] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [emptyFields, setEmptyFields] = useState({
        surname: null, // Use null to indicate that the field has not been validated yet
        name: null,
        email: null,
    });
    const [formValues, setFormValues] = useState({
        surname: '',
        name: '',
        email: '',
    });


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const getInputClass = (fieldName) => {
        // Check if the field's validity has been determined
        const isValid = emptyFields[fieldName];
        if (isValid === null) {
            // If the field's validity has not been determined, return an empty string
            return "";
        }
        return isValid ? "is-valid" : "is-invalid";
    };

    const handleInputSubscribe = (event) => {
        const {name, value} = event.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
        let isValid = true;

        // Clear previous validation state
        event.target.classList.remove("is-invalid", "is-valid");

        if (ValidateData.checkIfEmpty(value)) {
            isValid = false;
            setErrorMessage(`Le champ ${name} est obligatoire.`);
            event.target.classList.add("is-invalid");
        } else if ((name === "name" && ValidateData.checkCharacter(value)) || (name === "surname" && ValidateData.checkCharacter(value))) {
            isValid = false;
            setErrorMessage(`Le champ ${name} contient un caractère non autorisé..`);
            event.target.classList.add("is-invalid");
        } else if (name === "email" && !ValidateData.checkEmail(value)) {
            isValid = false;
            setErrorMessage(`Le champ ${name} contient un caractère non autorisé..`);
            event.target.classList.add("is-invalid");
        } else {
            isValid = true;
            event.target.classList.add("is-valid");
            // Reset the error message when the input is valid
            setErrorMessage("");
        }

        // Calculate isFormValid based on the current emptyFields state and the new validation result
        let isFormValid = true;
        const updatedEmptyFields = {...emptyFields, [name]: isValid};
        Object.values(updatedEmptyFields).forEach((isValidField) => {
            if (isValidField === null || !isValidField) {
                isFormValid = false;
                return false; // This will break out of the forEach loop.
            }
        });

        // Update the emptyFields state based on the validation result
        setEmptyFields(updatedEmptyFields);

        // Update the isFormValid state
        setIsFormValid(isFormValid);

        if (isFormValid) {
            const inputs = document.querySelectorAll('.form-control');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].classList.remove("input-error")
            }
        }
    };


    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        setIsChecked(isChecked);

        // If the checkbox is checked, clear the error message
        if (isChecked) {
            setErrorMessage(""); // Clear the error message
        }
    };

    const handleSubmitFormSubscribe = (event) => {
        event.preventDefault();
        console.log(`Formulaire d'abonnement soumis`);

        // Check if the checkbox is checked
        if (!isChecked) {
            setErrorMessage("Veuillez accepter les Conditions Générales d'Utilisation pour vous inscrire.");
            return; // Stop the function if the checkbox is not checked
        }

        // Construct the newSubscriber object from the formValues state
        const newSubscriber = {
            surname: formValues.surname,
            name: formValues.name,
            email: formValues.email,
        };

        console.log(newSubscriber);

        // Recalculate isFormValid based on the latest emptyFields state
        let isFormValid = true;
        Object.values(emptyFields).forEach((isValidField) => {
            if (isValidField === null || !isValidField) {
                isFormValid = false;
                return false; // This will break out of the forEach loop.
            }
        });

        if (!isFormValid) {
            // If the form is not valid, show an error message and stop the submission
            setErrorMessage("Veuillez corriger les erreurs dans le formulaire avant de soumettre.");
            return;
        }

        // Attempt to submit the newSubscriber data to the server
        RemoteData.postSubscriber(newSubscriber)
            .then((data) => {
                console.log(`data dans products page `);
                // Assuming 'data' contains the new Subscriber with its ID
                setSubscribers((currentSubscribers) => [...currentSubscribers, data]);
                setCreationSuccess("Vous-étes bien abonné");
                setTimeout(() => {
                    setCreationSuccess(""); // Clear the success message after 3 seconds
                }, 3000); // Adjusted from 4000 to 3000 milliseconds
                // Reset the formValues state to its initial state
                setFormValues({
                    surname: '',
                    name: '',
                    email: '',
                });
                // Reset the error message and validation states
                setErrorMessage("");
                setIsFormValid(false);
                setEmptyFields({
                    surname: null, // Reset to null to indicate that the field has not been validated yet
                    name: null,
                    email: null,
                });
                // Reset the checkbox
                setIsChecked(false); // This will uncheck the checkbox
            })
            .catch((error) => {
                console.error(error);
                setErrorMessage("Une erreur s'est produite lors de votre abonnement");
                setTimeout(() => {
                    setErrorMessage("");
                }, 5000);
            });

    };


    return (
        <>
            {/*---------- "S'inscrire sur la liste d'attente" ---------------- */}
            <form
                className="card col-md-11 bg-light d-flex p-1 m-2"
                onSubmit={handleSubmitFormSubscribe}
                action=""
                id="form"
            >
                <h3 className="card-header text-center">
                    <p>Rejoignez la liste d'attente!</p>
                </h3>
                <div className="card-body d-flex justify-content-center">
                    <img src={vmrural} alt="" style={{width: "9rem"}}/>
                </div>
                {/* Success message display */}
                {creationSuccess && (
                    <div className="alert alert-success" role="alert">
                        {creationSuccess}
                    </div>
                )}
                <label htmlFor="name">Nom</label>
                <input
                    type="text"
                    name="surname"
                    value={formValues.surname}
                    onChange={handleInputSubscribe}
                    className={`form-control ${getInputClass("surname")}`}
                    required
                    placeholder="Entrez votre Nom"
                />

                <label htmlFor="firstName">Prénom</label>
                <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputSubscribe}
                    className={`form-control ${getInputClass("name")}`}
                    required
                    placeholder="Entrez votre Prénom"
                />

                <label htmlFor="email">E-mail</label>
                <input
                    type="text"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputSubscribe}
                    className={`form-control ${getInputClass("email")}`}
                    required
                    placeholder="Entrez votre email"
                />

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="conditions"
                        checked={isChecked} // Bind the checked attribute to the isChecked state
                        onChange={handleCheckboxChange}
                    />
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); // Prevent the default action
                            openModal(); // Call your function to open the modal
                        }}
                        style={{
                            color: 'blue',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}
                    >
                        J'ai lu et j'accepte les Conditions Générales d'Utilisation.
                    </a>
                    {/* Legal Mentions Modal */}
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <LegalMentionsPage/>
                    </Modal>
                </div>
                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
                <button type="submit" className="btn btn-danger" disabled={!isFormValid}>
                    Je me joins!
                </button>
            </form>
        </>
    );
};

export default FormSubscribe;
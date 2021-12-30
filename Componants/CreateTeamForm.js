const CreateTeamForm = () => {
    return ( 
        <fieldset>
            <legend>Nouvelle équipe : </legend>
            <form>
                <div className="create-team-form-line">
                    <label htmlFor="id">ID : </label>
                    <input type="text" />
                </div>
                <div className="create-team-form-line">
                    <label htmlFor="name">Nom : </label>
                    <input type="text" />
                </div>
                <div className="create-team-form-line">
                    <label htmlFor="league">Ligue : </label>
                    <input type="text" />
                </div>
                <div className="create-team-form-line">
                    <label htmlFor="logo">URL Logo : </label>
                    <input type="text" />
                </div>
                <button>Enregistrer</button>
            </form>
        </fieldset>
    );
}
 
export default CreateTeamForm;
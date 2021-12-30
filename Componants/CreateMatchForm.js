const CreateMatchForm = () => {
    return ( 
        <fieldset>
            <legend>Nouveau match : </legend>
            <form>
                <div className="create-match-form-line">
                    <label htmlFor="id">ID : </label>
                    <input type="text" />
                </div>
                <div className="create-match-form-line">
                    <label htmlFor="league">Ligue : </label>
                    <select name="league" id="league">
                        <option value="">...</option>
                    </select>
                </div>
                <div className="create-match-form-line">
                    <label htmlFor="team-dom">Equipe Dom. : </label>
                    <input type="text" />
                </div>
                <div className="create-match-form-line">
                    <label htmlFor="team-ext">Equipe Ext. : </label>
                    <input type="text" />
                </div>
                <div className="create-match-form-line">
                    <label htmlFor="date">Date : </label>
                    <input type="date" />
                </div>
                <div className="create-match-form-line">
                    <label htmlFor="hour">Heure : </label>
                    <input type="time" />
                </div>
                
                <button>Enregistrer</button>
            </form>
        </fieldset>
    );
}
 
export default CreateMatchForm;
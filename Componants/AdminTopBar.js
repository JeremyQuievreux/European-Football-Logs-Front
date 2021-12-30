const AdminTopBar = ({showFrom, setShowForm}) => {

    function goCreateTeamForm() {
       setShowForm("team") 
    }
    function goCreateMatchForm() {
       setShowForm("match") 
    }

    return (
        <div className="admin-top-bar">
            <div className="admin-top-bar-create-team-btn" onClick={goCreateTeamForm}>
            <p>Créer Equipe</p>
            </div>
            <div className="admin-top-bar-create-match-btn" onClick={goCreateMatchForm}>
            <p>Créer Match</p>
            </div>
      </div>
    );
}
 
export default AdminTopBar;
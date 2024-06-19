import { useEffect, useState } from "react";
import { createRider, getAllTeams } from "../services/apiFacade";
import { Rider, Team } from "../services/entityFacade";

const EMPTY_RIDER = {
    id: null,
    name: "",
    birthDate: "",
    mountainPoints: 0,
    sprintPoints: 0,
    totalTime: 0,
    teamId: 0,
};
interface props {
    riderToEdit: Rider | null;
}

export default function Form({ riderToEdit }: props) {
    const [formData, setFormData] = useState<Rider>(EMPTY_RIDER);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getAllTeams().then((data) => setTeams(data));
        if (riderToEdit) {
            setFormData(riderToEdit);
        }
    }, [riderToEdit]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("form submitted");
        console.log(formData);
        createRider(formData);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        let updatedValue: string | number = value;
        if (["mountainPoints", "sprintPoints", "totalTime"].includes(name)) {
            updatedValue = parseInt(value);
        }
        setFormData({ ...formData, [name]: updatedValue });
    }

    function handleTeamChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const teamId = parseInt(e.target.value);
        setFormData({ ...formData, teamId: teamId });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <label>Birthdate</label>
            <input type="text" name="birthDate" value={formData.birthDate} onChange={handleChange} />
            <label>Mountain Points</label>
            <input type="number" name="mountainPoints" value={formData.mountainPoints} onChange={handleChange} />
            <label>Sprint Points</label>
            <input type="number" name="sprintPoints" value={formData.sprintPoints} onChange={handleChange} />
            <label>Total Time</label>
            <input type="number" name="totalTime" value={formData.totalTime} onChange={handleChange} />
            <label>Team</label>
            <select name="team" value={formData.teamId} onChange={handleTeamChange}>
                <option disabled>select a team</option>
                {teams.map((team: Team) => (
                    <option key={team.id} value={team.id}>
                        {team.name}
                    </option>
                ))}
            </select>
            <button type="submit">Submit</button>
        </form>
    );
}

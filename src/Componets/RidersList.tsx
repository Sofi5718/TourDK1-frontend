//her henter vi liste af ryttere fra backend

import { useEffect, useState } from "react";
import { Rider } from "../services/entityFacade";
import { getAllRiders } from "../services/apiFacade";
import Form from "./Form";

export default function RidersList() {
    const [riders, setRiders] = useState<Rider[]>([]);
    const [selectedRider, setSelectedRider] = useState<Rider | null>(null);

    useEffect(() => {
        getAllRiders().then((data) => setRiders(data));
    }, []);

    return (
        <div>
            <h1>Riders List</h1>
            <table className="text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Mountain Points</th>
                        <th>Sprint Points</th>
                        <th>Total Time</th>
                        <th>Team</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {riders.map((rider) => (
                        <tr key={rider.id}>
                            <td>{rider.name}</td>
                            <td>{rider.birthDate}</td>
                            <td>{rider.mountainPoints}</td>
                            <td>{rider.sprintPoints}</td>
                            <td>{rider.totalTime}</td>
                            <td>{rider.teamId}</td>
                            <td>
                                <button onClick={() => setSelectedRider(rider)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Form riderToEdit={selectedRider} />
        </div>
    );
}

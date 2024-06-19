interface Rider {
    id: number | null;
    name: string;
    birthDate: string;
    mountainPoints: number;
    sprintPoints: number;
    totalTime: number;
    teamId: number;
}

interface Team {
    id: number;
    name: string;
    riders: Rider[];
}

export type { Rider, Team };

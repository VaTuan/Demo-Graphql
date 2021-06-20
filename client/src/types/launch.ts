import { type } from "os";

export type Launch = {
    flight_number: number,
    mission_name: string,
    launch_year: string,
    launch_date_local: string,
    launch_success: boolean
}
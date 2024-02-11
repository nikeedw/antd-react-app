import axios from "axios";
import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";

export const EventActionCreators = {
	setGuests: (payload: IUser[]): SetGuestsAction => ({
		type: EventActionEnum.SET_GUESTS,
		payload
	}),
	setEvents: (payload: IEvent[]): SetEventsAction => ({
		type: EventActionEnum.SET_EVENTS,
		payload
	}),
	fetchGuests: () => async (dispatch: AppDispatch) => {
		try {
			const guests = await axios.get<IUser[]>('./users.json')
		} catch(e) {
			console.log(e);
		}
	}
}
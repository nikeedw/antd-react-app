import { IUser } from "../../../models/IUser";

export interface AuthState {
	isAuth: boolean;
	user: IUser;
	isLoading: boolean;
	error: string;
}

export enum AuthActionEnum {
	SET_AUTH = "SET_AUTH",
	SET_ERROR = "SET_ERROR",
	SET_USER = "SET_USER",
	SET_IS_LOADING = "SET_IS_LOADING"
}

interface SetAuthAction {
	type: AuthActionEnum.SET_AUTH;
	payload: boolean;
}

interface SetErrorAction {
	type: AuthActionEnum.SET_ERROR;
	payload: string;
}

interface SetUserAction {
	type: AuthActionEnum.SET_USER;
	payload: IUser;
}

interface SetIsLoadingAction {
	type: AuthActionEnum.SET_IS_LOADING;
	payload: boolean;
}

export type AuthAction = 
							SetAuthAction |
							SetErrorAction |
							SetUserAction |
							SetIsLoadingAction;
import { SetUserAction, AuthActionEnum, SetAuthAction, SetIsLoadingAction, SetErrorAction} from "./types"
import { IUser } from "../../../models/IUser"
import { AppDispatch } from "../.."
import UserService from "../../../api/UserService"

export const AuthActionCreators = {
	setUser: (user: IUser): SetUserAction => ({
		type: AuthActionEnum.SET_USER,
		payload: user
	}),
	setIsAuth: (auth: boolean): SetAuthAction => ({
		type: AuthActionEnum.SET_AUTH,
		payload: auth
	}),
	setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
		type: AuthActionEnum.SET_IS_LOADING,
		payload: isLoading
	}),
	setError: (error: string): SetErrorAction => ({
		type: AuthActionEnum.SET_ERROR,
		payload: error
	}),
	login: (username: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setIsLoading(true))
			setTimeout(async () => {
				const response = await UserService.getUsers();
				const mockUser = response.data.find(user =>
					user.username === username && user.password === password
				)
				if(mockUser) {
					localStorage.setItem('auth', 'true')
					localStorage.setItem('username', mockUser.username)
					dispatch(AuthActionCreators.setIsAuth(true))
					dispatch(AuthActionCreators.setUser(mockUser))
				} else {
					dispatch(AuthActionCreators.setError("Incorrect login or password"))
				}
				dispatch(AuthActionCreators.setIsLoading(false));
			}, 1000);
		} catch(e) {
			dispatch(AuthActionCreators.setError("Login error"))
		}
	},
	logout: () => async (dispatch: AppDispatch) => {
		localStorage.removeItem('auth');
		localStorage.removeItem('username');
		dispatch(AuthActionCreators.setUser({} as IUser))
		dispatch(AuthActionCreators.setIsAuth(false));
	}
}
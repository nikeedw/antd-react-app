import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
	path: string;
	component: React.ComponentType;
	exact: boolean;
}

// Перечисление названий путей
export enum RouteNames {
	LOGIN = "/login",
	EVENT = "/"
}

export const publicRoutes: IRoute[] = [
	{path: RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes: IRoute[] = [
	{path: RouteNames.EVENT, exact: true, component: Event}
]
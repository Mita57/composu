import Register from "./pages/Register";
import Auth from "./pages/Auth";
import Musicians from "./pages/Musicians";
import Projects from "./pages/Projects";

export const authRoutes = [

];

export const publicRoutes = [
    {
        path: '/register',
        Component: Register
    },
    {
        path: '/login',
        Component: Auth
    },
    {
        path: '/musicians',
        Component: Musicians
    },
    {
        path:'/projects',
        Component: Projects
    }

]
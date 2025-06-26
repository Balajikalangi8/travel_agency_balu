<<<<<<< HEAD
import {type RouteConfig, route, layout} from "@react-router/dev/routes";

export default [
    route('sign-in','./routes/root/sign-in.tsx'),
    layout('routes/admin/admin-layout.tsx',[
        route('dashboard','./routes/admin/dashboard.tsx'),
        route('all-users','routes/admin/all-users.tsx')
    ])

] satisfies RouteConfig;
=======
import { type RouteConfig, index } from "@react-router/dev/routes";

export default [index("routes/home.tsx")] satisfies RouteConfig;
>>>>>>> 491c3671c00bcd21d58a8131a3e77a4e9e9918f2

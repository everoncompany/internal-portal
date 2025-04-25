import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import ArticleIcon from "@mui/icons-material/Article";
import { Home } from "./pages/home";
import UserList from "./pages/users/users-list";
import UserShow from "./pages/users/user-show";

export const App = () => <Admin layout={Layout} dashboard={Home} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} show={UserShow}/>
</Admin>;

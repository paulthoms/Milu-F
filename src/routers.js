import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import PostID from './pages/PostID/PostID';
import Music from './pages/Music/Music';
import Sports from './pages/Sports/Sports';

const routers = [
    {
        name: "Home",
        link: "/home",
        component: Home,
        isNav: "yes"
    },
    {
        name: "Posts",
        link: "/posts",
        component: Posts,
        isNav: "yes"
    },
    {
        name: "Music",
        link: "/music",
        component: Music,
        isNav: "yes"
    },
    {
        name: "Sports",
        link: "/sports",
        component: Sports,
        isNav: "yes"
    },
    {
        name: "News",
        link: "/news",
        component: Home,
        isNav: "yes"
    },
    {
        name: "Contact",
        link: "/contact",
        component: Home,
        isNav: "yes"
    },
    {
        link: "/post/:stub/:id",
        component: PostID,
        isNav: "no"
    },
    {
        link: "/music-page/:country/:stub/:id",
        component: PostID,
        isNav: "no"
    },
    {
        link: "/sport-page/:sport/:stub/:id",
        component: PostID,
        isNav: "no"
    }
]


export {
    routers as routers
}
import Login from './components/common/login.vue';
import Main from './components/common/main.vue';
/*首页*/
import Index from './components/index/index.vue';
/*管理员*/
import Lists from './components/admin/lists.vue';
import Permission from './components/admin/permissions.vue';
import Permission_detail from './components/index/index.vue';
import Permission_create from './components/index/index.vue';
export default [{
    path: '/login',
    component: Login,
    name: '登录',
    hidden: true
}, {
    path: '/',
    component: Main,
    hidden: true
},  {
    path: '/index',
    component: Main,
    name: '首页',
    iconCls: 'fa fa-television', //图标样式class
    noDropdown: true,
    children: [{
        path: 'index',
        component: Index,
        name: '首页',
        iconCls: 'el-icon-edit'
    }]
}, {
    path: '/admin',
    component: Main,
    name: '管理员管理',
    iconCls: 'fa fa-user-circle', //图标样式class
    children: [{
        path: 'lists',
        component: Lists,
        name: '管理员列表'
    }, {
        path: 'permission',
        component: Permission,
        name: '管理员权限'
    }, {
        path: 'permission/detail/:id',
        component: Permission_detail,
        name: '权限详情',
        hidden: true
    }, {
        path: 'permission/create',
        component: Permission_create,
        name: '新增权限',
        hidden: true
    }]
}]
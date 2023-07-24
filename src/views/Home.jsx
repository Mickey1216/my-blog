import "./Home.less";
import React, { useState } from "react";
import { useNavigate, Routes, Route, Outlet, NavLink } from 'react-router-dom';
import { Layout, Menu, Input } from "antd";
import { SearchOutlined, GithubOutlined } from "@ant-design/icons";
const { Header, Content, Sider } = Layout;

const items = [
  {
    key: '1',
    // NavLink相当于vue-router中的router-link，实现跳转功能
    label: <NavLink to="/home/javascript">JavaScript</NavLink>,
    children: [
      {
        key: '1-1',
        label: <NavLink to="/home/javascript/data-type">数据类型</NavLink>
      },
      {
        key: '1-2',
        label: <NavLink to="/home/javascript/prototype">原型</NavLink>
      },
    ]
  },
  {
    key: '2',
    // NavLink相当于vue-router中的router-link，实现跳转功能
    label: <NavLink to="/home/typescript">TypeScript</NavLink>,
    children: [
      {
        key: '2-1',
        label: <NavLink to="/home/typescript/interface">接口</NavLink>
      },
      {
        key: '2-2',
        label: <NavLink to="/home/typescript/class">类</NavLink>
      },
    ]
  },
  {
    key: '3',
    // NavLink相当于vue-router中的router-link，实现跳转功能
    label: <NavLink to="/home/react">React</NavLink>
  }
];


const Home = () => {
  const rootSubmenuKeys = ['1', '2', '3'];
  const [openKeys, setOpenKeys] = useState(['/home/javascript']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Layout>
      <Header>
        <div className="header">
          <div className="logo">Mickey</div>
          <div className="search">
            <Input className="search-input" placeholder="搜索" prefix={<SearchOutlined />} />
          </div>
          <div className="github-icon"><GithubOutlined /></div>
        </div>
      </Header>
      <Layout>
        <Sider>
          {/* <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} items={items} onClick={handleMenuClick}/> */}
          <Menu mode="inline" openKeys={openKeys} items={items} onOpenChange={onOpenChange}/>
        </Sider>
        <Layout>
          <Content>
            <div className="content">
              <Outlet></Outlet>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;


// const Home = () => {
//   return <div>home</div>
// }
// export default Home;


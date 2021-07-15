import { useState, useEffect } from 'react';
import {Menu} from 'antd';
import Link from 'next/link'
import {AppstoreOutlined, LoginOutlined, UserAddOutlined} from '@ant-design/icons'
import styles from '../styles/Home.module.css';

const {Item} = Menu;

const TopNav = () => {
    const [current, setCurrent] = useState("")
    
    useEffect(() => {
        process.browser && setCurrent(window.location.pathname)
    }, [process.browser && window.location.pathname])

    return (
        <Menu mode="horizontal" selectedKeys={[current]}>
            <Item icon={<AppstoreOutlined />} key="/" onClick={(e) => setCurrent(e.key)}>
                <Link href="/">
                    <a>App</a>
                </Link>
            </Item>
            <Item icon={<LoginOutlined />} key="/login" onClick={(e) => setCurrent(e.key)}>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </Item>
            <Item icon={<UserAddOutlined />} key="/register" onClick={(e) => setCurrent(e.key)}>
                <Link href="/register">
                    <a>Register</a>
                </Link>
            </Item>
        </Menu>
    )
}

export default TopNav

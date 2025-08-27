'use client';

import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { HomeOutlined, UserOutlined, ProjectOutlined, ToolOutlined, BookOutlined, ContactsOutlined, MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

export const HeaderNav: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState(['home']);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'summary', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setSelectedKeys([section]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: 'home', label: 'Home', icon: <HomeOutlined /> },
    { key: 'summary', label: 'About', icon: <UserOutlined /> },
    { key: 'experience', label: 'Experience', icon: <ProjectOutlined /> },
    { key: 'skills', label: 'Skills', icon: <ToolOutlined /> },
    { key: 'education', label: 'Education', icon: <BookOutlined /> },
    { key: 'contact', label: 'Contact', icon: <ContactsOutlined /> },
  ];

  const handleMenuClick = (key: string) => {
    document.getElementById(key)?.scrollIntoView({ behavior: 'smooth' });
    if (isMobile) {
      setDrawerVisible(false);
    }
  };

  const menuProps = {
    theme: "light" as const,
    selectedKeys,
    items: menuItems.map(item => ({
      ...item,
      onClick: () => handleMenuClick(item.key)
    })),
    style: {
      backgroundColor: 'transparent',
      borderBottom: 'none',
      minWidth: 0
    }
  };

  return (
    <>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
          padding: '0 16px',
          height: '64px',
          lineHeight: '64px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1200px',
            margin: '0 auto',
            height: '100%'
          }}
        >
          <div
            style={{
              color: '#1677ff',
              fontWeight: 600,
              fontSize: isMobile ? '16px' : '18px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            Muhammad Awais
          </div>

          {isMobile ? (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{
                border: 'none',
                boxShadow: 'none',
                color: '#1677ff'
              }}
            />
          ) : (
            <Menu
              {...menuProps}
              mode="horizontal"
              style={{
                ...menuProps.style,
                flex: 1,
                justifyContent: 'flex-end',
                marginLeft: '40px'
              }}
            />
          )}
        </div>
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        width={280}
        styles={{
          header: {
            borderBottom: '1px solid #f0f0f0'
          },
          body: {
            padding: 0
          }
        }}
      >
        <Menu
          {...menuProps}
          mode="vertical"
          style={{
            ...menuProps.style,
            height: '100%'
          }}
        />
      </Drawer>
    </>
  );
};
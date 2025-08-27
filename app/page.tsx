'use client';

import React from 'react';
import { Layout, ConfigProvider, FloatButton } from 'antd';
import { HeaderNav } from '@/components/HeaderNav';
import { Hero } from '@/components/Hero';
import { Summary } from '@/components/Summary';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { resume } from '@/data/resume';

const { Content, Footer } = Layout;

export default function Home() {
  const currentYear = new Date().getFullYear();

  const theme = {
    token: {
      colorPrimary: '#1677ff',
      borderRadius: 8,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    components: {
      Card: {
        borderRadius: 12,
      },
      Button: {
        borderRadius: 8,
      },
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ minHeight: '100vh' }}>
        <HeaderNav />
        
        <Content style={{ marginTop: '64px' }}>
          <main>
            <Hero data={resume} />
            <Summary data={resume} />
            <Experience data={resume} />
            <Skills data={resume} />
            <Education data={resume} />
            <Contact data={resume} />
          </main>
        </Content>
        
        <Footer style={{ 
          textAlign: 'center', 
          backgroundColor: '#f5f5f5', 
          padding: '24px 50px',
          marginTop: '40px'
        }}>
          <p style={{ margin: 0, color: '#666' }}>
            © {currentYear} {resume.name}. Built with Next.js & Ant Design.
          </p>
        </Footer>
        
        <FloatButton.BackTop 
          style={{ right: 24, bottom: 24 }}
          tooltip="Back to top"
        />
      </Layout>
    </ConfigProvider>
  );
}
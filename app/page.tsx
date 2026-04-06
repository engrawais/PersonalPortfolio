"use client";

import React from "react";
import { Layout, ConfigProvider, FloatButton } from "antd";
import { HeaderNav } from "@/components/HeaderNav";
import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Highlights } from "@/components/Highlights";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { resume } from "@/data/resume";

const { Content, Footer } = Layout;

export default function Home() {
  const currentYear = new Date().getFullYear();

  const theme = {
    token: {
      colorPrimary: "#2563eb",
      borderRadius: 8,
      boxShadow: "none",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    components: {
      Card: {
        borderRadiusLG: 12,
      },
      Button: {
        borderRadius: 8,
      },
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ minHeight: "100vh", background: "#fff" }}>
        <HeaderNav />

        <Content style={{ marginTop: 64 }}>
          <main>
            <Hero data={resume} />
            <Summary data={resume} />
            <Experience data={resume} />
            <Skills data={resume} />
            <Projects data={resume} />
            <Highlights data={resume} />
            <Education data={resume} />
            <Contact data={resume} />
          </main>
        </Content>

        <Footer
          style={{
            textAlign: "center",
            background: "#fafafa",
            padding: "24px 24px",
            marginTop: 0,
            borderTop: "1px solid #f0f0f0",
          }}
        >
          <p style={{ margin: 0, color: "rgba(0,0,0,0.45)", fontSize: 14 }}>
            © {currentYear} {resume.name}. Built with Next.js & Ant Design.
          </p>
        </Footer>

        <FloatButton.BackTop style={{ right: 24, bottom: 24 }} tooltip="Back to top" />
      </Layout>
    </ConfigProvider>
  );
}

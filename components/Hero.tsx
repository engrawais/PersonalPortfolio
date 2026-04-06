"use client";

import React from "react";
import { Typography, Button, Space } from "antd";
import {
  DownloadOutlined,
  LinkedinOutlined,
  GithubOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Resume } from "@/types/resume";
import { Section } from "./Section";

const { Title, Text } = Typography;

interface HeroProps {
  data: Resume;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const tagline =
    "Senior Backend Engineer with 9+ years of experience building scalable SaaS systems, microservices, and AI-powered backend platforms.";

  return (
    <Section id="home">
      <div style={{ textAlign: "center", paddingTop: 32, maxWidth: 720, margin: "0 auto" }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div>
            <Text
              style={{
                display: "block",
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.45)",
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              Backend engineering · .NET · Distributed systems
            </Text>
            <Title
              level={1}
              style={{
                fontSize: "clamp(2rem, 5vw, 2.75rem)",
                marginBottom: 12,
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              {data.name}
            </Title>
            <Title
              level={4}
              style={{
                color: "#2563eb",
                fontWeight: 500,
                marginBottom: 20,
                marginTop: 0,
              }}
            >
              {data.title}
            </Title>
            <Text
              style={{
                fontSize: 17,
                color: "rgba(0,0,0,0.65)",
                display: "block",
                lineHeight: 1.65,
              }}
            >
              {tagline}
            </Text>
          </div>

          <Space size="middle" wrap style={{ justifyContent: "center" }}>
            <Button
              type="primary"
              size="large"
              icon={<DownloadOutlined />}
              href={data.cta.resumeUrl}
              download
              style={{ borderRadius: 8 }}
            >
              {data.cta.primaryActionText}
            </Button>
            <Button
              size="large"
              icon={<LinkedinOutlined />}
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderRadius: 8 }}
            >
              {data.cta.secondaryActionText}
            </Button>
            <Button
              size="large"
              icon={<GithubOutlined />}
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderRadius: 8 }}
            >
              GitHub
            </Button>
            <Button
              size="large"
              type="default"
              icon={<LinkOutlined />}
              href={data.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderRadius: 8 }}
            >
              Live site
            </Button>
          </Space>
        </Space>
      </div>
    </Section>
  );
};

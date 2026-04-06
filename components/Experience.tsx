"use client";

import React from "react";
import { Card, Tag, Space, Typography } from "antd";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Resume } from "@/types/resume";
import { Section } from "./Section";

const { Title, Text, Paragraph } = Typography;

interface ExperienceProps {
  data: Resume;
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <Section id="experience" title="Experience">
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <Space direction="vertical" size={24} style={{ width: "100%" }}>
          {data.experience.map((exp) => (
            <Card
              key={`${exp.company}-${exp.start}`}
              bordered={false}
              style={{
                borderRadius: 12,
                border: "1px solid #f0f0f0",
                boxShadow: "none",
              }}
              bodyStyle={{ padding: 24 }}
            >
              <div style={{ marginBottom: 16 }}>
                <Title level={4} style={{ marginBottom: 4, marginTop: 0 }}>
                  {exp.role}
                </Title>
                <Text strong style={{ fontSize: 16 }}>
                  {exp.company}
                </Text>
                <div style={{ marginTop: 12 }}>
                  <Space wrap size="middle">
                    <Text type="secondary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <CalendarOutlined />
                      {exp.start} – {exp.end}
                    </Text>
                    <Text type="secondary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <EnvironmentOutlined />
                      {exp.location}
                    </Text>
                  </Space>
                </div>
              </div>

              <Space wrap size={[8, 8]} style={{ marginBottom: 16 }}>
                {exp.stack.map((tech) => (
                  <Tag key={tech} style={{ borderRadius: 6, margin: 0 }}>
                    {tech}
                  </Tag>
                ))}
              </Space>

              <ul
                style={{
                  paddingLeft: 20,
                  margin: 0,
                  listStyleType: "disc",
                }}
              >
                {exp.bullets.map((bullet) => (
                  <li key={bullet} style={{ marginBottom: 10 }}>
                    <Paragraph style={{ margin: 0, color: "rgba(0,0,0,0.75)" }}>
                      {bullet}
                    </Paragraph>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </Space>
      </div>
    </Section>
  );
};

import React from "react";
import { Typography, Tag, Space, Row, Col } from "antd";
import { Resume } from "@/types/resume";
import { Section } from "./Section";

const { Paragraph, Title } = Typography;

interface SummaryProps {
  data: Resume;
}

export const Summary: React.FC<SummaryProps> = ({ data }) => {
  const backendTags = data.skills.find((g) => g.group === "Backend")?.items ?? [];

  return (
    <Section id="summary" title="About">
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <Row gutter={[40, 32]}>
          <Col xs={24}>
            <Paragraph
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "rgba(0,0,0,0.75)",
                marginBottom: 28,
              }}
            >
              {data.summary}
            </Paragraph>

            <Title level={5} style={{ marginBottom: 12, fontWeight: 600 }}>
              Focus areas
            </Title>
            <ul
              style={{
                paddingLeft: 20,
                margin: "0 0 28px 0",
                color: "rgba(0,0,0,0.75)",
                lineHeight: 1.75,
              }}
            >
              {data.focusAreas.map((item) => (
                <li key={item} style={{ marginBottom: 8 }}>
                  {item}
                </li>
              ))}
            </ul>

            <Title level={5} style={{ marginBottom: 12, fontWeight: 600 }}>
              Core backend stack
            </Title>
            <Space wrap size={[8, 8]}>
              {backendTags.map((skill) => (
                <Tag
                  key={skill}
                  style={{
                    fontSize: 13,
                    padding: "4px 12px",
                    borderRadius: 6,
                    border: "1px solid #e5e7eb",
                    background: "#fff",
                    color: "rgba(0,0,0,0.75)",
                  }}
                >
                  {skill}
                </Tag>
              ))}
            </Space>
          </Col>
        </Row>
      </div>
    </Section>
  );
};

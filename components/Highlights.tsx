import React from "react";
import { Col, Row, Typography, List } from "antd";
import { CheckCircleOutlined, AimOutlined } from "@ant-design/icons";
import { Resume } from "@/types/resume";
import { Section } from "./Section";

const { Paragraph, Title } = Typography;

interface HighlightsProps {
  data: Resume;
}

export const Highlights: React.FC<HighlightsProps> = ({ data }) => {
  return (
    <Section id="highlights" title="Achievements & what I'm looking for">
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <div
            style={{
              padding: 24,
              borderRadius: 12,
              border: "1px solid #f0f0f0",
              height: "100%",
              background: "#fafafa",
            }}
          >
            <Title level={5} style={{ marginTop: 0, display: "flex", alignItems: "center", gap: 8 }}>
              <CheckCircleOutlined style={{ color: "#2563eb" }} />
              Achievements
            </Title>
            <List
              size="small"
              dataSource={data.achievements}
              renderItem={(item) => (
                <List.Item style={{ border: "none", padding: "8px 0" }}>
                  <Paragraph style={{ margin: 0, color: "rgba(0,0,0,0.75)" }}>
                    {item}
                  </Paragraph>
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div
            style={{
              padding: 24,
              borderRadius: 12,
              border: "1px solid #e8eef7",
              height: "100%",
              background: "#f8fafc",
            }}
          >
            <Title level={5} style={{ marginTop: 0, display: "flex", alignItems: "center", gap: 8 }}>
              <AimOutlined style={{ color: "#2563eb" }} />
              Open to
            </Title>
            <Paragraph type="secondary" style={{ marginBottom: 16 }}>
              Ideal next roles and environments:
            </Paragraph>
            <List
              size="small"
              dataSource={data.lookingFor}
              renderItem={(item) => (
                <List.Item style={{ border: "none", padding: "8px 0" }}>
                  <Paragraph style={{ margin: 0, color: "rgba(0,0,0,0.75)" }}>
                    {item}
                  </Paragraph>
                </List.Item>
              )}
            />
          </div>
        </Col>
      </Row>
    </Section>
  );
};

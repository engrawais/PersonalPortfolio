import React from "react";
import { Row, Col, Card, Tag, Space, Typography } from "antd";
import {
  CodeOutlined,
  DatabaseOutlined,
  CloudOutlined,
  ApartmentOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Resume } from "@/types/resume";
import { Section } from "./Section";

const { Title } = Typography;

interface SkillsProps {
  data: Resume;
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  const getGroupIcon = (groupName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Backend: <CodeOutlined />,
      Architecture: <ApartmentOutlined />,
      "Cloud & DevOps": <CloudOutlined />,
      Databases: <DatabaseOutlined />,
      "AI Systems": <ThunderboltOutlined />,
    };
    return iconMap[groupName] ?? <CodeOutlined />;
  };

  return (
    <Section id="skills" title="Tech stack">
      <Row gutter={[20, 20]}>
        {data.skills.map((skillGroup) => (
          <Col xs={24} sm={12} lg={8} key={skillGroup.group}>
            <Card
              bordered={false}
              style={{
                height: "100%",
                borderRadius: 12,
                border: "1px solid #f0f0f0",
                boxShadow: "none",
              }}
              bodyStyle={{ padding: 20 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 16,
                  color: "#2563eb",
                }}
              >
                {getGroupIcon(skillGroup.group)}
                <Title level={5} style={{ margin: 0, color: "rgba(0,0,0,0.88)" }}>
                  {skillGroup.group}
                </Title>
              </div>
              <Space wrap size={[8, 8]}>
                {skillGroup.items.map((skill) => (
                  <Tag
                    key={skill}
                    style={{
                      fontSize: 13,
                      padding: "4px 10px",
                      borderRadius: 6,
                      border: "1px solid #e5e7eb",
                      background: "#fff",
                      color: "rgba(0,0,0,0.75)",
                      margin: 0,
                    }}
                  >
                    {skill}
                  </Tag>
                ))}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

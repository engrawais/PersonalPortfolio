import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { ApiOutlined } from "@ant-design/icons";
import { Resume } from "@/types/resume";
import { Section } from "./Section";

const { Paragraph, Title } = Typography;

interface ProjectsProps {
  data: Resume;
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <Section id="projects" title="Key projects">
      <Row gutter={[24, 24]}>
        {data.projects.map((project) => (
          <Col xs={24} md={8} key={project.name}>
            <Card
              bordered={false}
              style={{
                height: "100%",
                borderRadius: 12,
                border: "1px solid #f0f0f0",
                boxShadow: "none",
              }}
              bodyStyle={{ padding: 24 }}
            >
              <ApiOutlined
                style={{
                  fontSize: 22,
                  color: "#2563eb",
                  marginBottom: 12,
                  display: "block",
                }}
              />
              <Title level={5} style={{ marginTop: 0, marginBottom: 12 }}>
                {project.name}
              </Title>
              <Paragraph
                style={{
                  margin: 0,
                  color: "rgba(0,0,0,0.65)",
                  lineHeight: 1.65,
                  fontSize: 15,
                }}
              >
                {project.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

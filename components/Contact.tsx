"use client";

import React from "react";
import { Row, Col, Card, Button, Typography, Space } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Resume } from "@/types/resume";
import { Section } from "./Section";

const { Paragraph, Title } = Typography;

interface ContactProps {
  data: Resume;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <Section id="contact" title="Contact">
      <Row justify="center">
        <Col xs={24} md={16} lg={12}>
          <Card
            bordered={false}
            style={{
              borderRadius: 12,
              border: "1px solid #f0f0f0",
              boxShadow: "none",
            }}
            bodyStyle={{ padding: 32 }}
          >
            <Title level={4} style={{ marginTop: 0, textAlign: "center" }}>
              {"Let's talk"}
            </Title>
            <Paragraph
              style={{
                textAlign: "center",
                color: "rgba(0,0,0,0.65)",
                marginBottom: 28,
                fontSize: 15,
                lineHeight: 1.65,
              }}
            >
              Open to senior backend and platform roles. Reach out for roles involving .NET,
              microservices, cloud, or AI-backed APIs.
            </Paragraph>

            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Button
                type="primary"
                size="large"
                block
                icon={<MailOutlined />}
                href={`mailto:${data.email}`}
                style={{ borderRadius: 8, height: 46 }}
              >
                {data.email}
              </Button>

              <Button
                size="large"
                block
                icon={<PhoneOutlined />}
                href={`tel:${data.phone.replace(/\s/g, "")}`}
                style={{ borderRadius: 8, height: 46 }}
              >
                {data.phone}
              </Button>

              <Button
                size="large"
                block
                icon={<LinkedinOutlined />}
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderRadius: 8, height: 46 }}
              >
                LinkedIn profile
              </Button>

              <Button
                size="large"
                block
                icon={<GithubOutlined />}
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderRadius: 8, height: 46 }}
              >
                GitHub
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </Section>
  );
};

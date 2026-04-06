import React from "react";
import { Card, Typography } from "antd";
import { CalendarOutlined, BookOutlined } from "@ant-design/icons";
import { Resume } from "@/types/resume";
import { Section } from "./Section";

const { Title, Text } = Typography;

interface EducationProps {
  data: Resume;
}

export const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <Section id="education" title="Education">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        {data.education.map((edu, index) => (
          <Card
            key={index}
            bordered={false}
            style={{
              textAlign: "center",
              borderRadius: 12,
              border: "1px solid #f0f0f0",
              boxShadow: "none",
            }}
            bodyStyle={{ padding: 28 }}
          >
            <BookOutlined style={{ fontSize: 36, color: "#2563eb", marginBottom: 12 }} />
            <Title level={4} style={{ marginBottom: 8 }}>
              {edu.degree}
            </Title>
            <Title level={5} type="secondary" style={{ marginBottom: 8, fontWeight: 500 }}>
              {edu.school}
            </Title>
            <Text type="secondary">
              <CalendarOutlined /> {edu.start} – {edu.end}
            </Text>
          </Card>
        ))}
      </div>
    </Section>
  );
};

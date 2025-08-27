'use client';

import React from 'react';
import { Timeline, Card, Tag, Space, Typography, Collapse } from 'antd';
import { CalendarOutlined, EnvironmentOutlined, ProjectOutlined } from '@ant-design/icons';
import { Resume } from '@/types/resume';
import { Section } from './Section';

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

interface ExperienceProps {
  data: Resume;
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const timelineItems = data.experience.map((exp, index) => ({
    dot: <ProjectOutlined style={{ fontSize: '16px', color: '#1677ff' }} />,
    color: '#1677ff',
    children: (
      <Card
        style={{
          marginLeft: '16px',
          marginBottom: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          border: '1px solid #f0f0f0'
        }}
        bodyStyle={{ padding: '20px' }}
      >
        <div style={{ marginBottom: '16px' }}>
          <Title level={4} style={{ marginBottom: '4px', color: '#1677ff' }}>
            {exp.role}
          </Title>
          <Title level={5} style={{ marginBottom: '12px', fontWeight: 500 }}>
            {exp.company}
          </Title>

          <Space style={{ marginBottom: '16px', flexWrap: 'wrap' }} size="middle">
            <Text type="secondary" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CalendarOutlined /> {exp.start} - {exp.end}
            </Text>
            <Text type="secondary" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <EnvironmentOutlined /> {exp.location}
            </Text>
          </Space>

          <div style={{ marginBottom: '16px' }}>
            <Space wrap size="small">
              {exp.stack.map(tech => (
                <Tag key={tech} color="geekblue" style={{ borderRadius: '6px' }}>
                  {tech}
                </Tag>
              ))}
            </Space>
          </div>
        </div>

        <Collapse
          ghost
          expandIconPosition="end"
          style={{
            backgroundColor: 'transparent'
          }}
        >
          <Panel
            header={
              <Text strong style={{ color: '#1677ff' }}>
                View Key Achievements & Responsibilities
              </Text>
            }
            key="1"
            style={{
              border: '1px solid #e8f4ff',
              borderRadius: '8px',
              backgroundColor: '#fafcff',
              marginBottom: 0
            }}
          >
            <div style={{ padding: '16px 0 8px 0' }}>
              <ul style={{
                paddingLeft: '20px',
                margin: 0,
                listStyleType: 'disc'
              }}>
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} style={{
                    marginBottom: '12px',
                    lineHeight: '1.6'
                  }}>
                    <Paragraph style={{ margin: 0, color: '#555' }}>
                      {bullet}
                    </Paragraph>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
        </Collapse>
      </Card>
    )
  }));

  return (
    <Section id="experience" title="Professional Experience">
      <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <Timeline
          mode="left"
          items={timelineItems}
          style={{
            paddingTop: '20px'
          }}
        />
      </div>
    </Section>
  );
};
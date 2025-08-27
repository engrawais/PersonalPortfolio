import React from 'react';
import { Typography, Tag, Space, Avatar, Row, Col, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Resume } from '@/types/resume';
import { Section } from './Section';

const { Paragraph, Title } = Typography;

interface SummaryProps {
  data: Resume;
}

export const Summary: React.FC<SummaryProps> = ({ data }) => {
  const highlightedSkills = ['.NET', 'C#', 'React', 'Node.js', 'TypeScript', 'Agile'];

  return (
    <Section id="summary" title="About Me">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Row gutter={[48, 32]} align="middle" justify="center">
          {/* Profile Image Column */}
          <Col xs={24} md={8} style={{ textAlign: 'center' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}>
              <Avatar
                size={200}
                icon={<UserOutlined />}
                style={{
                  backgroundColor: '#f0f2ff',
                  color: '#1677ff',
                  border: '4px solid #1677ff',
                  fontSize: '60px'
                }}
                src="/me.jpg"
              />
              <Title level={4} style={{
                margin: 0,
                color: '#1677ff',
                fontWeight: 500
              }}>
                {data.name}
              </Title>
              <Tag
                color="geekblue"
                style={{
                  fontSize: '14px',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontWeight: 500
                }}
              >
                {data.title}
              </Tag>
            </div>
          </Col>

          {/* Content Column */}
          <Col xs={24} md={16}>
            <Card
              style={{
                border: 'none',
                boxShadow: '0 2px 16px rgba(22, 119, 255, 0.08)',
                borderRadius: '16px',
                backgroundColor: '#fafcff'
              }}
              bodyStyle={{ padding: '32px' }}
            >
              <Paragraph
                style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  textAlign: 'justify',
                  color: '#555',
                  marginBottom: '24px'
                }}
              >
                {data.summary}
              </Paragraph>

              <div style={{ marginTop: '24px' }}>
                <Title
                  level={5}
                  style={{
                    marginBottom: '16px',
                    color: '#1677ff',
                    fontWeight: 600
                  }}
                >
                  Core Technologies
                </Title>
                <Space wrap size="small">
                  {highlightedSkills.map((skill, index) => (
                    <Tag
                      key={skill}
                      color={index % 2 === 0 ? 'blue' : 'geekblue'}
                      style={{
                        fontSize: '13px',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontWeight: 500,
                        border: 'none'
                      }}
                    >
                      {skill}
                    </Tag>
                  ))}
                </Space>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Section>
  );
};
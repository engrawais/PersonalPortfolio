import React from 'react';
import { Card, Typography } from 'antd';
import { CalendarOutlined, BookOutlined } from '@ant-design/icons';
import { Resume } from '@/types/resume';
import { Section } from './Section';

const { Title, Text } = Typography;

interface EducationProps {
  data: Resume;
}

export const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <Section id="education" title="Education">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {data.education.map((edu, index) => (
          <Card key={index} style={{ textAlign: 'center' }}>
            <BookOutlined style={{ fontSize: '48px', color: '#1677ff', marginBottom: '16px' }} />
            <Title level={4}>{edu.degree}</Title>
            <Title level={5} style={{ color: '#666', marginBottom: '8px' }}>
              {edu.school}
            </Title>
            <Text type="secondary">
              <CalendarOutlined /> {edu.start} - {edu.end}
            </Text>
          </Card>
        ))}
      </div>
    </Section>
  );
};
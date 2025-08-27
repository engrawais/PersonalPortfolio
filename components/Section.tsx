import React from 'react';
import { Typography, Space } from 'antd';

const { Title } = Typography;

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section 
      id={id}
      className={`section ${className}`}
      style={{ 
        scrollMarginTop: '80px',
        paddingBlock: '80px 56px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {title && (
            <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
              {title}
            </Title>
          )}
          {children}
        </Space>
      </div>
    </section>
  );
};
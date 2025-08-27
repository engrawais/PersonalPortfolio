'use client';

import React, { useEffect, useRef } from 'react';
import { Typography, Button, Space } from 'antd';
import { DownloadOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Resume } from '@/types/resume';
import { Section } from './Section';

const { Title, Text } = Typography;

interface HeroProps {
  data: Resume;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstanceRef = useRef<any>(null);
  const summaryFirstSentence = data.summary.split('.')[0] + '.';

  useEffect(() => {
    const loadTyped = async () => {
      try {
        // Prevent multiple instances
        if (typedInstanceRef.current) {
          typedInstanceRef.current.destroy();
          typedInstanceRef.current = null;
        }

        // Import Typed.js dynamically
        const Typed = (await import('typed.js')).default;

        if (typedRef.current && !typedInstanceRef.current) {
          // Clear any existing content
          typedRef.current.innerHTML = '';

          typedInstanceRef.current = new Typed(typedRef.current, {
            strings: [
              'Full Stack Developer',
              'React Specialist',
              'Node.js Expert',
              'Software Engineer'
            ],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true,
          });
        }
      } catch (error) {
        console.error('Failed to load Typed.js:', error);
        // Fallback: show static text if Typed.js fails to load
        if (typedRef.current) {
          typedRef.current.textContent = 'Full Stack Developer';
        }
      }
    };

    loadTyped();

    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
        typedInstanceRef.current = null;
      }
    };
  }, []); // Empty dependency array to run only once

  return (
    <Section id="home">
      <div style={{ textAlign: 'center', paddingTop: '40px' }}>
        <Space direction="vertical" size="large">
          <div>
            <Title level={1} style={{ fontSize: '3.5rem', marginBottom: '16px', fontWeight: 700 }}>
              {data.name}
            </Title>
            <Title
              level={3}
              style={{
                color: '#1677ff',
                fontWeight: 500,
                marginBottom: '24px',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span ref={typedRef}></span>
            </Title>
            <Text style={{ fontSize: '18px', color: '#666', maxWidth: '600px', display: 'block', margin: '0 auto' }}>
              {summaryFirstSentence}
            </Text>
          </div>

          <Space size="large" wrap>
            <Button
              type="primary"
              size="large"
              icon={<DownloadOutlined />}
              href={data.cta.resumeUrl}
              download
            >
              {data.cta.primaryActionText}
            </Button>
            <Button
              size="large"
              icon={<LinkedinOutlined />}
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.cta.secondaryActionText}
            </Button>
          </Space>
        </Space>
      </div>
    </Section>
  );
};
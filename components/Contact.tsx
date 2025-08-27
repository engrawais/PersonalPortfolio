'use client';

import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { MailOutlined, PhoneOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Resume } from '@/types/resume';
import { Section } from './Section';

interface ContactProps {
  data: Resume;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <Section id="contact" title="Get In Touch">
      <Row justify="center" align="middle">
        <Col xs={22} sm={20} md={16} lg={12} xl={10}>
          <Card
            style={{
              textAlign: 'center',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(5, 5, 5, 0.06)',
              padding: '24px 16px'
            }}
            bodyStyle={{ padding: '32px 24px' }}
          >
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  marginBottom: '16px',

                }}
              >
                Let's Connect!
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#666',
                  lineHeight: '1.6',
                  margin: 0,
                  maxWidth: '400px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              >
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and software engineering.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'center',
                maxWidth: '280px',
                margin: '0 auto'
              }}
            >
              <Button
                type="primary"
                size="large"
                icon={<MailOutlined />}
                href={`mailto:${data.email}`}
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 500
                }}
              >
                Email Me
              </Button>

              <Button
                size="large"
                icon={<PhoneOutlined />}
                href={`tel:${data.phone}`}
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 500
                }}
              >
                Call Me
              </Button>

              <Button
                size="large"
                icon={<LinkedinOutlined />}
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 500,
                  backgroundColor: '#0077b5',
                  borderColor: '#0077b5',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#005885';
                  e.currentTarget.style.borderColor = '#005885';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0077b5';
                  e.currentTarget.style.borderColor = '#0077b5';
                }}
              >
                LinkedIn
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Section>
  );
};
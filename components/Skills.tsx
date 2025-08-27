import React from 'react';
import { Row, Col, Card, Tag, Space, Typography, Progress } from 'antd';
import {
  CodeOutlined,
  DatabaseOutlined,
  GlobalOutlined,
  CloudOutlined,
  SecurityScanOutlined,
  SettingOutlined,
  BranchesOutlined,
  ToolOutlined
} from '@ant-design/icons';
import { Resume } from '@/types/resume';
import { Section } from './Section';

const { Title, Text } = Typography;

interface SkillsProps {
  data: Resume;
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  const getTagColor = (groupName: string) => {
    const colorMap: Record<string, string> = {
      'Backend & Platforms': 'blue',
      'Frontend': 'green',
      'Databases': 'orange',
      'Security & Auth': 'red',
      'DevOps & Quality': 'purple',
      'Workflow/Orchestration': 'cyan',
      'Programming Languages': 'magenta',
      'Other': 'geekblue'
    };
    return colorMap[groupName] || 'geekblue';
  };

  const getColorHex = (colorName: string) => {
    const hexMap: Record<string, string> = {
      'blue': '#1677ff',
      'green': '#52c41a',
      'orange': '#fa8c16',
      'red': '#ff4d4f',
      'purple': '#722ed1',
      'cyan': '#13c2c2',
      'magenta': '#eb2f96',
      'geekblue': '#2f54eb'
    };
    return hexMap[colorName] || '#1677ff';
  };

  const getGroupIcon = (groupName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'Backend & Platforms': <CloudOutlined />,
      'Frontend': <GlobalOutlined />,
      'Databases': <DatabaseOutlined />,
      'Security & Auth': <SecurityScanOutlined />,
      'DevOps & Quality': <SettingOutlined />,
      'Workflow/Orchestration': <BranchesOutlined />,
      'Programming Languages': <CodeOutlined />,
      'Other': <ToolOutlined />
    };
    return iconMap[groupName] || <ToolOutlined />;
  };

  const getSkillLevel = (skill: string) => {
    // You can customize this based on your actual skill levels
    const expertSkills = ['C#', '.NET', 'React', 'TypeScript', 'JavaScript'];
    const advancedSkills = ['Node.js', 'SQL Server', 'MongoDB', 'Azure'];

    if (expertSkills.some(expert => skill.toLowerCase().includes(expert.toLowerCase()))) {
      return { level: 90, status: 'success' as const, text: 'Expert' };
    } else if (advancedSkills.some(advanced => skill.toLowerCase().includes(advanced.toLowerCase()))) {
      return { level: 75, status: 'active' as const, text: 'Advanced' };
    } else {
      return { level: 60, status: 'normal' as const, text: 'Proficient' };
    }
  };

  return (
    <Section id="skills" title="Technical Skills">
      <Row gutter={[24, 24]}>
        {data.skills.map((skillGroup, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <Card
              style={{
                height: '100%',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                border: `1px solid ${getTagColor(skillGroup.group) === 'blue' ? '#e6f4ff' : '#f0f0f0'}`,
                transition: 'all 0.3s ease'
              }}
              bodyStyle={{
                padding: '24px',
                height: '100%'
              }}
              hoverable
            >
              <div style={{ marginBottom: '20px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    color: getColorHex(getTagColor(skillGroup.group)),
                    fontSize: '18px'
                  }}>
                    {getGroupIcon(skillGroup.group)}
                  </div>
                  <Title
                    level={5}
                    style={{
                      margin: 0,
                      color: '#1677ff',
                      fontWeight: 600
                    }}
                  >
                    {skillGroup.group}
                  </Title>
                </div>
                <div style={{
                  height: '3px',
                  backgroundColor: getColorHex(getTagColor(skillGroup.group)),
                  borderRadius: '2px',
                  opacity: 0.3,
                  marginBottom: '16px'
                }} />
              </div>

              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                {skillGroup.items.map((skill, skillIndex) => {
                  const skillData = getSkillLevel(skill);
                  return (
                    <div key={skill} style={{ width: '100%' }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '4px'
                      }}>
                        <Tag
                          color={getTagColor(skillGroup.group)}
                          style={{
                            fontSize: '13px',
                            fontWeight: 500,
                            borderRadius: '6px',
                            border: 'none',
                            padding: '4px 10px'
                          }}
                        >
                          {skill}
                        </Tag>
                        <Text
                          type="secondary"
                          style={{
                            fontSize: '12px',
                            fontWeight: 500
                          }}
                        >
                          {skillData.text}
                        </Text>
                      </div>
                      <Progress
                        percent={skillData.level}
                        size="small"
                        status={skillData.status}
                        showInfo={false}
                        strokeColor={getColorHex(getTagColor(skillGroup.group))}
                        style={{ marginBottom: skillIndex === skillGroup.items.length - 1 ? 0 : '8px' }}
                      />
                    </div>
                  );
                })}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Section>
  );
};
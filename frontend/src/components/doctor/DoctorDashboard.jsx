import React, { useState } from 'react';
import { Layout, Menu, Table, Button, Form, Input, TimePicker, message } from 'antd';
import { CalendarOutlined, UserAddOutlined, LogoutOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Header, Sider, Content } = Layout;

const DoctorDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('apply');
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // Approve/Reject doctor handlers
  const handleApprove = (id) => { /* API call, then update state */ };
  const handleReject = (id) => { /* API call, then update state */ };

  // Apply for doctor form submit
  const handleApplyDoctor = async (values) => {
    try {
      // Format timings as array of strings if needed
      const timings = values.timings
        ? values.timings.map(val => val.format("HH:mm"))
        : [];

      const payload = {
        ...values,
        timings,
      };

      // Replace with your actual API endpoint
      const res = await axios.post('http://localhost:8001/api/user/registerdoc', payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });

      if (res.data.success) {
        message.success('Doctor Registration request sent successfully');
      } else {
        message.error(res.data.message || "Something went wrong");
      }
    } catch (error) {
      message.error(error.response?.data?.message || "Something went wrong");
    }
  };

  // Table columns
  const doctorColumns = [
    { title: 'Key', dataIndex: 'key' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Phone', dataIndex: 'phone' },
    {
      title: 'Action',
      render: (_, record) => (
        <>
          <Button type="primary" onClick={() => handleApprove(record.key)} style={{ marginRight: 8 }}>Approve</Button>
          <Button danger onClick={() => handleReject(record.key)}>Reject</Button>
        </>
      )
    }
  ];

  const appointmentColumns = [
    { title: 'Appointment ID', dataIndex: 'id' },
    { title: 'User Name', dataIndex: 'user' },
    { title: 'Doctor Name', dataIndex: 'doctor' },
    { title: 'Date', dataIndex: 'date' },
    { title: 'Status', dataIndex: 'status' }
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#e6efef' }}>
      <Sider width={220} style={{ background: '#444' }}>
        <div style={{ color: '#FFC107', fontWeight: 'bold', fontSize: 28, margin: 32, textAlign: 'center' }}>
          MediCareBook
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[activeMenu]}
          onClick={({ key }) => setActiveMenu(key)}
          items={[
            { key: 'appointments', icon: <CalendarOutlined />, label: 'Appointments' },
            { key: 'apply', icon: <UserAddOutlined />, label: 'Apply doctor' },
            { key: 'logout', icon: <LogoutOutlined />, label: 'Logout', onClick: () => {/* logout logic */} }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 32px', fontWeight: 'bold', fontSize: 20 }}>
          Doctor Dashboard
        </Header>
        <Content style={{ margin: 0, padding: 32, background: '#e6efef' }}>
          {activeMenu === 'apply' && (
            <div style={{ background: '#fff', borderRadius: 8, padding: 24, boxShadow: '0 0 8px #ccc' }}>
              <h2>Apply for Doctor</h2>
              <Form layout="vertical" onFinish={handleApplyDoctor}>
                <h4>Personal Details:</h4>
                <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
                  <Input placeholder="Enter name" />
                </Form.Item>
                <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
                  <Input placeholder="Your phone" />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
                  <Input placeholder="Your email" />
                </Form.Item>
                <Form.Item label="Address" name="address" rules={[{ required: true }]}>
                  <Input placeholder="Your address" />
                </Form.Item>
                <h4>Professional Details:</h4>
                <Form.Item label="Specialization" name="specialization" rules={[{ required: true }]}>
                  <Input placeholder="Your specialization" />
                </Form.Item>
                <Form.Item label="Experience" name="experience" rules={[{ required: true }]}>
                  <Input placeholder="Your experience" />
                </Form.Item>
                <Form.Item label="Fees" name="fees" rules={[{ required: true }]}>
                  <Input placeholder="Your fees" />
                </Form.Item>
                <Form.Item label="Timings" name="timings" rules={[{ required: true }]}>
                  <TimePicker.RangePicker format="HH:mm" />
                </Form.Item>
                <div style={{ textAlign: 'right' }}>
                  <Button type="primary" htmlType="submit">Submit</Button>
                </div>
              </Form>
            </div>
          )}
          {activeMenu === 'appointments' && (
            <div style={{ background: '#fff', borderRadius: 8, padding: 24, boxShadow: '0 0 8px #ccc' }}>
              <h2>All Appointments for Admin Panel</h2>
              <Table columns={appointmentColumns} dataSource={appointments} rowKey="id" />
              <h2 style={{ marginTop: 32 }}>All Doctors</h2>
              <Table columns={doctorColumns} dataSource={doctors} rowKey="key" />
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DoctorDashboard;

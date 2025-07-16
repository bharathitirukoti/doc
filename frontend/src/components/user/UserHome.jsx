import React, { useEffect, useState } from 'react';
import { Badge, Row, Col, Button, Layout, Menu } from 'antd';
import Notification from '../common/Notification';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicationIcon from '@mui/icons-material/Medication';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DoctorList from './DoctorList';

const { Header, Sider, Content } = Layout;

const UserHome = () => {
  const [doctors, setDoctors] = useState([]);
  const [userdata, setUserData] = useState({});
  const [activeMenuItem, setActiveMenuItem] = useState('userappointments');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user) setUserData(user);

    axios.get('http://localhost:8001/api/user/getalldoctorsu', {
      headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    }).then(res => {
      if (res.data.success) setDoctors(res.data.data);
      else setDoctors([]); // fallback if no data
    }).catch(() => setDoctors([]));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    navigate('/');
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#bdcccc' }}>
      <Sider width={220} style={{ background: '#444', color: '#fff', paddingTop: 32 }}>
        <div style={{ color: '#FFC107', fontWeight: 'bold', fontSize: 28, marginBottom: 40, textAlign: 'center' }}>
          MediCareBook
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['userappointments']}
          style={{ background: '#444', fontSize: 18 }}
          items={[
            {
              key: 'userappointments',
              icon: <CalendarMonthIcon />,
              label: 'Appointments',
              onClick: () => navigate('/user-appointments')
            },
            {
              key: 'applyDoctor',
              icon: <MedicationIcon />,
              label: 'Apply doctor',
              onClick: () => navigate('/apply-doctor')
            },
            {
              key: 'logout',
              icon: <LogoutIcon />,
              label: 'Logout',
              onClick: logout
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <Badge count={userdata?.notification?.length || 0} style={{ backgroundColor: '#FFC107' }}>
              <NotificationsIcon style={{ fontSize: 28, color: '#444', cursor: 'pointer' }} />
            </Badge>
          </div>
          <div style={{ fontWeight: 'bold', fontSize: 20 }}>
            {userdata.isdoctor && 'Dr. '} {userdata.fullName}
          </div>
        </Header>
        <Content style={{ margin: 0, padding: 32, background: '#bdcccc' }}>
          {activeMenuItem === 'userappointments' && (
            <>
              <h2 style={{ textAlign: 'center', color: '#444', marginBottom: 32 }}>All Doctors</h2>
              <Row gutter={[24, 24]}>
                {doctors.length === 0 ? (
                  <div style={{ width: '100%', textAlign: 'center', color: '#888' }}>No doctors found.</div>
                ) : (
                  doctors.map((doctor, i) => (
                    <Col key={i} xs={24} sm={12} md={8} lg={6}>
                      <DoctorList doctor={doctor} userdata={userdata} />
                    </Col>
                  ))
                )}
              </Row>
            </>
          )}
          {activeMenuItem === 'applyDoctor' && (
            <div>
              <h2 style={{ textAlign: 'center', color: '#444', marginBottom: 32 }}>Apply for Doctor</h2>
              {/* Place your ApplyDoctor component here */}
              {/* <ApplyDoctor /> */}
              <div style={{ textAlign: 'center', color: '#888' }}>Apply Doctor form goes here.</div>
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserHome;




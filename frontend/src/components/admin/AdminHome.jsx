import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicationIcon from '@mui/icons-material/Medication';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge } from 'antd';
import Notification from '../common/Notification';
import AdminUsers from './AdminUsers';
import AdminDoctors from './AdminDoctors';
import AdminAppointments from './AdminAppointments';

const AdminHome = () => {
   const [userdata, setUserData] = useState({})
   const [activeMenuItem, setActiveMenuItem] = useState('');
   const [showApply, setShowApply] = useState(false);

   const getUserData = async () => {
      try {
         await axios.post('http://localhost:8001/api/user/getuserdata', {}, {
            headers: {
               Authorization: "Bearer " + localStorage.getItem('token')
            },
         });
      } catch (error) {
         console.log(error);
      }
   };
   const getUser = () => {
      const user = JSON.parse(localStorage.getItem('userData'))
      if (user) {
         
         setUserData(user)
      }

   }
   useEffect(() => {
      getUserData();
      getUser()
   }, []);

   const logout = () => {
      localStorage.removeItem("token")
      localStorage.removeItem("userData")
      window.location.href = "/"

   }

   const handleMenuItemClick = (menuItem) => {
      setActiveMenuItem(menuItem);
   };
   return (
      <>

         <div className='main'>
            <div className="layout">
               <div className="sidebar">
                  <div className="logo">
                     <h2>MediCareBook</h2>
                  </div>
                  <div className="menu">
                     <div className={`menu-items ${activeMenuItem === 'adminusers' ? 'active' : ''}`} onClick={() => handleMenuItemClick('adminusers')}>
                        <CalendarMonthIcon className='icon' /><Link>Users</Link>
                     </div>
                     <div className={`menu-items ${activeMenuItem === 'admindoctors' ? 'active' : ''}`} onClick={() => handleMenuItemClick('admindoctors')}>
                        <MedicationIcon className='icon' /><Link>Doctor</Link>
                     </div>
                     <div className="menu-items">
                        <LogoutIcon className='icon' /><Link onClick={logout}>Logout</Link>
                     </div>
                  </div>
               </div>
               <div className="content">
                  <div className="header">
                     <div className="header-content" style={{ cursor: 'pointer' }}>
                        <Badge className={`notify ${activeMenuItem === 'notification' ? 'active' : ''}`} onClick={() => handleMenuItemClick('notification')} count={userdata?.notification ? userdata.notification.length : 0}>
                           <NotificationsIcon className='icon' />
                        </Badge>

                        <h3>Hi..{userdata.fullName}</h3>
                     </div>
                  </div>
                  <div className="body">
                     {activeMenuItem === 'notification' && <Notification />}
                     {activeMenuItem === 'adminusers' && <AdminUsers />}
                     {activeMenuItem === 'admindoctors' && <AdminDoctors />}
                     {activeMenuItem !== 'notification' && activeMenuItem !== 'adminusers' && activeMenuItem !== 'admindoctors' && <AdminAppointments />}
                  </div>
               </div>
            </div>
         </div>
         <div style={{ background: '#bccbcb', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar */}
        <div style={{
          width: 220,
          background: '#d3d3d3',
          padding: '30px 0 0 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h2 style={{ marginBottom: 40 }}>MediCareBook</h2>
          <div style={{ width: '100%' }}>
            <div style={{ padding: '15px 30px', cursor: 'pointer' }}>Users</div>
            <div style={{ padding: '15px 30px', cursor: 'pointer' }}>Doctor</div>
            <div style={{ padding: '15px 30px', cursor: 'pointer' }}>Logout</div>
          </div>
        </div>
        {/* Main Content */}
        <div style={{
          flex: 1,
          background: '#e7ecec',
          margin: 30,
          borderRadius: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '30px 30px 0 0' }}>
              <span style={{ fontWeight: 'bold', fontSize: 22 }}>Hi..Admin</span>
            </div>
            <div style={{ padding: '30px' }}>
              <h3 style={{ textAlign: 'center', marginBottom: 30 }}>All Appointments for Admin Panel</h3>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: '#fff',
                borderRadius: 8,
                overflow: 'hidden'
              }}>
                <thead>
                  <tr style={{ background: '#d3d3d3' }}>
                    <th style={thStyle}>Appointment ID</th>
                    <th style={thStyle}>User Name</th>
                    <th style={thStyle}>Doctor Name</th>
                    <th style={thStyle}>Date</th>
                    <th style={thStyle}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((a, i) => (
                    <tr key={i}>
                      <td style={tdStyle}>{a.id}</td>
                      <td style={tdStyle}>{a.user}</td>
                      <td style={tdStyle}>{a.doctor}</td>
                      <td style={tdStyle}>{a.date}</td>
                      <td style={{ ...tdStyle, color: 'green', fontWeight: 'bold' }}>{a.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ textAlign: 'center', padding: 20, color: '#888' }}>
            © 2023 Copyright: MediCareBook
          </div>
        </div>
      </div>
    </div>
         <div style={{ background: '#bccbcb', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar */}
        <div style={{
          width: 220,
          background: '#d3d3d3',
          padding: '30px 0 0 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h2 style={{ marginBottom: 40 }}>Book A Doctor</h2>
          <div style={{ width: '100%' }}>
            <div style={{ padding: '15px 30px', cursor: 'pointer' }}>Appointments</div>
            <div style={{ padding: '15px 30px', cursor: 'pointer' }} onClick={() => setShowApply(true)}>Apply doctor</div>
            <div style={{ padding: '15px 30px', cursor: 'pointer' }}>Logout</div>
          </div>
        </div>
        {/* Main Content */}
        <div style={{
          flex: 1,
          background: '#e7ecec',
          margin: 30,
          borderRadius: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '30px 30px 0 0' }}>
              <span style={{ fontWeight: 'bold', fontSize: 22 }}>Hi..Doctor</span>
            </div>
            {/* Apply for Doctor Form */}
            {showApply && (
              <div style={{
                background: '#fff',
                borderRadius: 8,
                padding: 30,
                margin: '30px auto',
                maxWidth: 600
              }}>
                <h3 style={{ marginBottom: 20 }}>Apply for Doctor</h3>
                <form>
                  <div style={{ display: 'flex', gap: 20, marginBottom: 15 }}>
                    <input placeholder="Full Name" style={inputStyle} />
                    <input placeholder="Phone" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', gap: 20, marginBottom: 15 }}>
                    <input placeholder="Email" style={inputStyle} />
                    <input placeholder="Address" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', gap: 20, marginBottom: 15 }}>
                    <input placeholder="Specialization" style={inputStyle} />
                    <input placeholder="Experience" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', gap: 20, marginBottom: 15 }}>
                    <input placeholder="Fees" style={inputStyle} />
                    <input placeholder="Timing" style={inputStyle} />
                  </div>
                  <button type="submit" style={buttonStyle}>Submit</button>
                </form>
              </div>
            )}
            {/* All History Table */}
            <div style={{ padding: '30px' }}>
              <h3 style={{ textAlign: 'center', marginBottom: 30 }}>ALL HISTORY :</h3>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: '#fff',
                borderRadius: 8,
                overflow: 'hidden'
              }}>
                <thead>
                  <tr style={{ background: '#d3d3d3' }}>
                    <th style={thStyle}>Appointment ID</th>
                    <th style={thStyle}>User Name</th>
                    <th style={thStyle}>Date</th>
                    <th style={thStyle}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((a, i) => (
                    <tr key={i}>
                      <td style={tdStyle}>{a.id}</td>
                      <td style={tdStyle}>{a.user}</td>
                      <td style={tdStyle}>{a.date}</td>
                      <td style={{ ...tdStyle, color: 'green', fontWeight: 'bold' }}>{a.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ textAlign: 'center', padding: 20, color: '#888' }}>
            © 2023 Copyright: MediCareBook
          </div>
        </div>
      </div>
    </div>
      </>
   );
};

export default AdminHome;
const appointments = [
  {
    id: '6727fa9f4b852b8190cb7b',
    user: 'User',
    doctor: 'Koushik',
    date: '2024-11-09 20:36',
    status: 'approved'
  },
  // ...add more sample data as needed
];

const inputStyle = {
  flex: 1,
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  background: '#f7b500',
  color: '#fff',
  border: 'none',
  padding: '10px 32px',
  borderRadius: '6px',
  fontWeight: 'bold',
  fontSize: '1rem',
  marginTop: '10px',
  cursor: 'pointer'
};

const thStyle = {
  padding: '12px 10px',
  borderBottom: '1px solid #ccc',
  fontWeight: 'bold',
  textAlign: 'left'
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #eee'
};

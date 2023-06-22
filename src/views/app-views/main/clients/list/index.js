import { useState, useEffect } from 'react';
import { Card, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const tableColumns = [
    {
      title: 'Client',
      dataIndex: 'name',
      render: (_, record) => (
        <div className="d-flex">
          <div className="avatar-status d-flex align-items-center">
            <div className="ml-2">
              <div>
                <div
                  onClick={() => setSelectedUser(record)}
                  className="avatar-status-name"
                  style={{ cursor: 'pointer' }}
                >
                  {record.name}
                </div>
              </div>
              <div className="text-muted avatar-status-subtitle">
                {record.email}
              </div>
            </div>
          </div>
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'City',
      dataIndex: 'city',
      render: (_, record) => <span>{record.address.city}</span>,
      sorter: {
        compare: (a, b) => {
          a = a.address.city.toLowerCase();
          b = b.address.city.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      render: (_, record) => <span>{record.phone}</span>,
      sorter: {
        compare: (a, b) => {
          a = a.phone.toLowerCase();
          b = b.phone.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Website',
      dataIndex: 'website',
      render: (_, record) => (
        <a href={'https://' + record.website}>{record.website}</a>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.website.toLowerCase();
          b = b.website.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
  ];

  if (selectedUser) navigate('/app/main/clients/edit', { state: selectedUser });

  return (
    <Card bodyStyle={{ padding: '0px' }}>
      <div className="table-responsive">
        <Table
          columns={tableColumns}
          dataSource={users}
          loading={loading}
          rowKey="id"
        />
      </div>
    </Card>
  );
};

export default UserList;

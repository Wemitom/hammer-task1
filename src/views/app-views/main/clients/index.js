import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserList from './list';
import UserProfile from './edit';

const Clients = () => (
  <Routes>
    <Route path="list" element={<UserList />} />
    <Route path="edit" element={<UserProfile />} />
    <Route path="*" element={<Navigate to="list" replace />} />
  </Routes>
);

export default Clients;

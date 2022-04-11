import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Registration = () => {
  const navigate = useNavigate();
  return (
    <div>
      Page registration
      <Button type="primary" onClick={() => navigate('/login')}>
        Login
      </Button>
    </div>
  );
};

export default Registration;

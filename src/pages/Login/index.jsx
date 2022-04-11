import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      Page
      {/* <Button type="primary">Hover me</Button> */}
      <Button type="primary" onClick={() => navigate('/registration')}>
        Registration
      </Button>
    </div>
  );
};

export default Login;

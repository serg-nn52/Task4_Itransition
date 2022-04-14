import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from './style.module.scss';

const AppForm = (props) => {
  const { formTitle, buttonTitle, onFinish, onFinishFailed, pathRedirect } =
    props;
  const navigate = useNavigate();

  return (
    <Form
      className={style.form}
      layout="vertical"
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h2>{formTitle}</h2>
      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input placeholder="ivanov@gmail.com" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item className={style.buttons}>
        <div className={style.buttons}>
          <Button type="primary" htmlType="submit">
            Send info
          </Button>
          <Button type="primary" onClick={() => navigate(`${pathRedirect}`)}>
            {buttonTitle}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default AppForm;

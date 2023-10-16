import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/images/bg.jpg';
import logo from '../assets/images/logo.png';
import { Navigate,useNavigate } from 'react-router-dom';
import '../assets/css/custom.css';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../slices/auth';
import { clearMessage } from "../slices/message";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
       
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  const containerStyle = {
   
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row justify-content-center p-5">
        <div className="col-md-3 col-sm-4 mt-5">
          <div className="card card-authentication1" style={{ backgroundColor:'GrayText',width: '350px',       // Adjust the width as needed
  height: '350px',right:'57px',}}>
            <div className="card-body">
              <div className="card-content p-2">
                <div className="text-center">
                
                </div>
                <div className="card-title text-center py-3 text-white fs-4">Login</div>
                <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="username"style={{ color: 'white' }}>Username</label>
                <Field
                  name="username"
                  type="text"
                  className={
                    "form-control" +
                    (errors.username && touched.username ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" style={{ color: 'white' }}>Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
              <button
  type="submit"
  className="btn btn-primary btn-block mt-2"
  disabled={loading}
  style={{
    backgroundColor: '#007bff', // Change to your desired background color
    color: '#fff',             // Change to your desired text color
    borderRadius: '5px',
    marginLeft: '105px',  
          // Change to your desired border radius
  }}
>
  {loading && <span className="spinner-border spinner-border-sm"></span>}
  <span>Login</span>
</button>

              </div>
            </Form>
          )}
        </Formik>

              </div>
              {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
            </div>
            <div className="card-footer text-center py-3">
              <p className="text-warning mb-0">
                Do not have an account?{' '}
                <button
                  onClick={() => navigate('/signup')}
                  style={{
                    border: 'none',
                    backgroundColor:'orange',
                    borderRadius: '5px',
                    padding: '4px',
                    marginLeft: '20px',
                    color: 'white',
                  }}
                >
                  click Here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

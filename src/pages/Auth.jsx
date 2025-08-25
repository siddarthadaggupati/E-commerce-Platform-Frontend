import React, { useEffect } from "react";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useNavigate } from "react-router-dom";

Amplify.configure(awsExports);

function Auth() {
  const navigate = useNavigate();
  const { route } = useAuthenticator((context) => [context.route]);
  useEffect(() => {
    if (route === "authenticated") {
      navigate("/home");
    }
  }, [route, navigate]);
  return (
    <Authenticator
      signUpAttributes={['email', 'phone_number', 'address']} // Required attributes
      components={{
        SignUp: {
          FormFields() {
            return (
              <>
                {/* Default fields (username/email/phone) */}
                <Authenticator.SignUp.FormFields />
                
                {/* Address field */}
                <div className="amplify-field">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                    required
                  />
                </div>
              </>
            );
          },
        },
      }}
    >
    </Authenticator>
  );
}

export default Auth;

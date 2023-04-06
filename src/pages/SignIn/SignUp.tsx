import { useDispatch, useSelector } from "react-redux";

import FormInputLabel from "../../components/form/FormInputLabel/FormInputLabel";
import FormSubmitButton from "../../components/form/FormSubmitButton/FormSubmitButton";
import FormTextInput from "../../components/form/FormTextInput/FormTextInput";
import FormTitle from "../../components/form/FormTitle/FormTitle";

import { setGlobalUsername } from "../../redux/username/usernameSlice";
import { SignUpContainer, SignUpMain } from "./styles/signUp.styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "CodeLeap | Sign Up";
  });

  function handleSetUsername() {
    dispatch(setGlobalUsername(username));
    navigate("/posts");
  }

  function handlerUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  return (
    <SignUpMain>
      <SignUpContainer>
        <FormTitle title="Welcome to CodeLeap network!" />
        <FormInputLabel text="Please enter your username" />
        <FormTextInput
          id="username"
          placeholder="John doe"
          onChange={(e) => {
            handlerUsernameChange(e);
          }}
        />
        <FormSubmitButton
          disabled={username.length == 0}
          text="ENTER"
          onClick={handleSetUsername}
        />
      </SignUpContainer>
    </SignUpMain>
  );
}

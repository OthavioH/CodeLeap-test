import { useDispatch, useSelector } from "react-redux";

import FormInputLabel from "../../components/form/FormInputLabel/FormInputLabel";
import FormSubmitButton from "../../components/form/FormSubmitButton/FormSubmitButton";
import FormTextInput from "../../components/form/FormTextInput/FormTextInput";
import FormTitle from "../../components/form/FormTitle/FormTitle";

import { setGlobalUsername } from "../../redux/username/usernameSlice";
import { SignUpContainer, SignUpMain } from "./styles/signUp.styles";
import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState<string>("");

  const dispatch = useDispatch();

  function handleSetUsername() {
    dispatch(setGlobalUsername(username));
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

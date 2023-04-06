import {
  SignUpContainer,
  SignUpEnterButton,
  SignUpInput,
  SignUpLabel,
  SignUpMain,
  SignUpTitle,
} from "./styles/signUp.styles";

export default function SignUp() {
  return (
    <SignUpMain>
      <SignUpContainer>
        <SignUpTitle>Welcome to CodeLeap network!</SignUpTitle>
        <SignUpLabel>Please enter your username</SignUpLabel>
        <SignUpInput
          type="text"
          id="username"
          placeholder="John doe"
        ></SignUpInput>
        <SignUpEnterButton>ENTER</SignUpEnterButton>
      </SignUpContainer>
    </SignUpMain>
  );
}

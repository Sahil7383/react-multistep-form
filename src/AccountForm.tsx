import FormWrapper from "./FormWrapper";

const AccountForm = () => {
  return (
    <FormWrapper title="Account Details">
      <label>Email</label>
      <input autoFocus required type="text" />
      <label>Password</label>
      <input required type="text" />
    </FormWrapper>
  );
};

export default AccountForm;

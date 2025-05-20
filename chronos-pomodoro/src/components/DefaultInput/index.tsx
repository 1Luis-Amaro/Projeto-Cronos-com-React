type DefaultInputProps = {
    id: string;
}
& React.ComponentProps<'input'>

const DefaultInput = ({id, type}:DefaultInputProps) => {
  return (
    <>
      <label htmlFor="input">task</label>
      <input id={id} type={type} />
    </>
  );
};

export default DefaultInput;

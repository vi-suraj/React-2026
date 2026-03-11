export default function Tab({ children, button, ButtonContainer = "menu" }) {
  return (
    <>
      <ButtonContainer>{button}</ButtonContainer>
      {children}
    </>
  );
}

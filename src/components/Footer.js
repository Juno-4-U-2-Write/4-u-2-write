const Footer = ({ darkMode }) => {
  console.log(darkMode);
  return (
    <footer className={!darkMode ? "lightMode footer" : "darkMode footer"}>
      created at juno with unending spite
    </footer>
  );
};
export default Footer;

import useLocalStorage from "use-local-storage";

import "./index.css";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div
      className="bg-[var(--background)] text-[var(--text-primary)] h-screen flex flex-col justify-center font-[.8rem] transition-all duration-500"
      data-theme={theme}
    >
      <div className="login">
        <h1 className="text-center text-4xl font-semibold ">Login</h1>
        <div className="containner flex flex-col justify-center items-center p-6 w-[300px] m-auto shadow-md shadow-[var(--border)] rounded-lg bg-[var(--form-bg)]">
          <div className="top flex justify-between w-full">
            <ion-icon name="logo-google"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-apple"></ion-icon>
          </div>
          <p className="divider w-full text-center border-b-[1px] border-b-[var(--text-primary)] leading-[0.1rem] my-8">
            <span className="px-[10px] bg-[var(--form-bg)]">Or</span>
          </p>
          <form className="w-full flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter your email" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" />
            <div className="remember flex items-center w-full">
              <input type="checkbox" checked="checked" className="m-0 p-0" />
              <p className="pl-2">Remember Me</p>
            </div>
            <button className="bg-[var(--accent)] border-[1px] border-[var(--accent)] text-[#fff] my-4 p-[10px] rounded-[10px] font-semibold cursor-pointer">
              Log In
            </button>
          </form>
          <div className="bottom flex justify-between w-full text-[0.8rem]">
            <p>Forgot your Password?</p>
            <a href="/">Reset Password</a>
          </div>
          <p className="create text-[1rem] mt-4 cursor-pointer">
            Create Account
          </p>
        </div>
        <div className="theme-toggle text-center">
          <h2 className="text-center p-4 font-semibold text-xl">Light Theme</h2>
          <ion-icon onClick={switchTheme} size="large" name="toggle"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default App;

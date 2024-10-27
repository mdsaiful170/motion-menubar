import { Button } from "./button";

export const LoginForm = () => {
  return (
    <>
      <form
        action=""
        className="max-w-md w-full border-darkBg/25 dark:border-darkGreen/25 rounded-lg border py-4 px-2 bg-white/5 dark:bg-darkBg/50 backdrop-blur-2xl "
      >
        <div className="space-y-4">
          <label className="flex items-center h-9 border-darkBg/25 dark:border-darkGreen/25 rounded-lg border">
            <i className="ri-mail-line px-2"></i>
            <input
              type="email"
              placeholder="useremail"
              className="bg-transparent h-full px-1 text-sm font-normal text-darkBg dark:text-white placeholder:text-sm   outline-none w-full "
            />
          </label>
          <label className="flex items-center h-9 border-darkBg/25 dark:border-darkGreen/25 rounded-lg border">
            <i className="ri-key-line px-2"></i>
            <input
              type="password"
              placeholder="password"
              className="bg-transparent h-full px-1 text-sm font-normal text-darkBg dark:text-white placeholder:text-sm   outline-none w-full "
            />
          </label>
        </div>
        <br />
        <Button
          type="button"
          className={
            "bg-darkBg  text-white text-sm tracking-wider block  mx-auto"
          }
        >
          login
        </Button>
      </form>
    </>
  );
};

export const RegisterForm = () => {
  return (
    <>
      <form
        action=""
        className="max-w-md w-full border-darkBg/25 dark:border-darkGreen/25 rounded-lg border py-4 px-2 bg-white/5 dark:bg-darkBg/50 backdrop-blur-2xl "
      >
        <div className="space-y-4">
          <label className="flex items-center h-9 border-darkBg/25 dark:border-darkGreen/25 rounded-lg border">
            <i className="ri-user-line px-2"></i>
            <input
              type="text"
              placeholder="username"
              className="bg-transparent h-full px-1 text-sm font-normal text-darkBg dark:text-white placeholder:text-sm   outline-none w-full "
            />
          </label>
          <label className="flex items-center h-9 border-darkBg/25 dark:border-darkGreen/25 rounded-lg border">
            <i className="ri-mail-line px-2"></i>
            <input
              type="email"
              placeholder="useremail"
              className="bg-transparent h-full px-1 text-sm font-normal text-darkBg dark:text-white placeholder:text-sm   outline-none w-full "
            />
          </label>
          <label className="flex items-center h-9 border-darkBg/25 dark:border-darkGreen/25 rounded-lg border">
            <i className="ri-key-line px-2"></i>
            <input
              type="password"
              placeholder="password"
              className="bg-transparent h-full px-1 text-sm font-normal text-darkBg dark:text-white placeholder:text-sm   outline-none w-full "
            />
          </label>
        </div>
        <br />
        <Button
          type="button"
          className={
            "bg-darkBg  text-white text-sm tracking-wider block  mx-auto"
          }
        >
          Submit
        </Button>
      </form>
    </>
  );
};

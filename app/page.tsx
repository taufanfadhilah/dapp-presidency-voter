import { UserAuthForm } from "./_components/AuthForm";

export default function Home() {
  return (
    <main className="">
      <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-primary p-10 text-white lg:flex dark:border-r">
          <div className="relative z-20 flex items-center text-lg font-medium">
            🇮🇩 Presidency Voter 2024
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                reiciendis cumque beatae neque? Dolorem pariatur deleniti qui
                ullam dolor asperiores nulla, corporis ex alias sunt laborum
                maxime vero? Pariatur, exercitationem?
              </p>
              <footer className="text-sm">
                Made with ❤️ by{" "}
                <a href="https://taufanfadhilah.web.id/">Taufan Fadhilah</a>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
              <p className="text-sm text-muted-foreground">
                Sign in to the application with your Metamask wallet
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </main>
  );
}

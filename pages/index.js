import Head from "next/head";

function Page({ children, title, description }) {
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content={description} />
      </Head>
      <div>{children}</div>
    </>
  );
}

export default function Homepage() {
  return (
    <Page
      {...{
        title: "Find My Resume Website",
        description: "Intereactive UX Portfolio Website Hubert Boguski",
      }}
    >
      <div className="flex items-center min-h-screen justify-center">
        <div className="mt-6 max-w-md space-y-2 text-center font-medium text-5xl">
          <div className = "subpixel-antialiased">
            Find My&nbsp;<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-pink-600">Resume</span>
          </div>
          <div className="text-base font-mono">
            Or click <span className="hover:underline text-gray-200 hover:text-gray-300 active:text-gray-400">here</span> if you're no fun :/
          </div>
        </div>
      </div>
    </Page>
  );
}
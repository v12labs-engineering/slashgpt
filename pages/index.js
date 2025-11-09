export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
        <div className="flex w-full justify-center flex-col items-center rounded-xl border-gray-600 p-4">
          <h2 className="pb-8 text-5xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
            Instant ChatGPT access wherever you want.
          </h2>
          <div className="pb-5 text-lg text-center font-mono">To access, type in below command in any text input</div>
          <div className="w-max mb-1 font-mono mx-auto my-0 text-gray-100">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 pr-5 border-r-white text-3xl text-gray-100 font-bold">
              /gpt <span className="bg-amber-700">your prompt</span> /
            </h1>
          </div>
          <div className="pt-8">
            <a href="https://src200.gumroad.com/l/slashgpt" className="bg-amber-700 text-white cursor-pointer border uppercase border-amber-700 font-bold px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              Get the chrome extension
            </a>
          </div>
        </div>
    </main>
  )
}

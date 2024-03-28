import Footer from "@/components/Footer";
import Title from "@/components/Head";
import Header from "@/components/Header";
import React from "react";

export default function EventLinks() {
  return (
    <>
      <div className="h-fit w-screen bg-black">
        <Title
          title={"Contact - Vyom"}
          description={"Feel free to contact us"}
          route={"/contact"}
        />
        <Header id="Navbar" />
        <main className='pt-[5.5rem] bg-[url("/contact.png")] h-screen flex justify-center items-center sm:w-full'>
          <div className="flex flex-col text-center items-center justify-center h-full gap-2 w-[80%]">
            

            <div className="">
              <table className="w-full table-auto sm:w-full">
                <thead className="bg-gray-200 text-white uppercase text-sm leading-normal w-full flex justify-between px-8 text-3xl items-center">
                  <tr className="text-3xl">
                      Events
                    </tr>
                    
                    <tr className="text-right cursor-pointer">
                      Links
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-0 text-left whitespace-nowrap">
                          <span className="text-2xl text-white">
                            Box Cricket
                          </span>
                    </td>
                    <td className="py-3 px-0 text-left whitespace-nowrap">
                          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYKIjXzgYfKdca0Jj80sFjQfpNqNU2QCsYohYR-A8VrPPG-w/viewform" className="text-2xl text-white cursor-pointer underline">
                            Registration Link
                          </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-0 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <span className="text-2xl text-white">
                            Hackathon - Hack For Impact
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-0 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <a href="https://unstop.com/p/hack-the-impact-vyom24-rungta-educational-foundation-942216" className="text-2xl text-white cursor-pointer underline">
                          Registration Link
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>    
        </main>
        <Footer />
      </div>
    </>
  );
}

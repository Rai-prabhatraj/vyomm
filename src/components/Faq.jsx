import React from "react";

export default function Faq() {

  const questions = [
    {
      question: "When it will be conducted?",
      answer: "Vyom'24 is conducted on 4th, 5th and 6th April, 2024."
    },
    {
      question: "Can non-participants attend Vyom'24?",
      answer: 'Yes. They can enjoy the events and applaud for the participants.'
    },
    {
      question: "How many events are there in Vyom'24?",
      answer: 'More than 30+ events are going to held.'
    },
    {
      question: 'When would the certificates for the events be awarded?',
      answer: "Certificates for the workshops conducted during Vyom'24 are usually issued after the event."
    },
    {
      question: 'Are the Technical Events open to non engineering students?',
      answer: 'Yes. Anyone from Rungta Educational Foundation can participate.'
    },
    {
      question: 'Would there be spot registrations for Events?',
      answer: 'Spot registrations are available but depend on the number of vacant seats for the corresponding event. '
    },
  {
      question: 'Is it necessary to have an event pass for participation in events?',
      answer: 'Yes. There would be separate event passes for all the events.'
    },
    {
      question: 'How much does the event pass cost?',
      answer: 'Its free of cost for Rungta College Stdents,No outsiders are allowed.'
    }
  
  ]
  
  return (
    <div className="px-2 py-4 xl:px-20">
      <div className="flex justify-start w-full font-clash font-bold">
        <span className="text-white/50 text-[5.5rem] xl:text-[7rem]">FAQs</span>
      </div>

      <div className="flex flex-col gap-4 xl:p-2">
        {questions.map((item, index) => {
          return <div key={index} className="font-chakra">
            <div className="border-t-2 border-b-2 border-gray/20">
              <input
                id={`collapsible${index+1}`}
                className="toggle hidden"
                type="checkbox"
              />
              <label
                htmlFor={`collapsible${index+1}`}
                className="lbl-toggle block cursor-pointer font-semibold text-white/40 text-xl md:text-2xl p-7"
              >
                {item.question}
              </label>

              <div className="collapsible-content">
                <div className="content-inner text-white pl-8">
                  <p>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>          
        })}
      </div>
    </div>
  );
}

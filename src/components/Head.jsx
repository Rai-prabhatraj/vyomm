import { NextSeo } from "next-seo";

export default function Title({ route }) {

  const phrases = {
    '/signup': {
      title: 'SignUp - Vyom',
      description: "Sign up with a new account to view your registrations for Vyom '24"
    },
    '/events': {
      title: 'Events - Vyom',
      description: "See what's happening at Vyom '24"
    },
    '/sponsors': {
      title: 'Sponsors - Vyom',
      description: "Sponsors from all over the country make Vyom possible! See who's sponoring us."
    },
    '/teams': {
      title: 'Teams - Vyom',
      description: "Meet the team behind Vyom '24"
    },
    '/soon': {
      title: 'Coming soon - Vyom',
      description: "See what's coming up for Vyom '24"
    }    
  }

  const defaultPhrase = {
    title: "Vyom '24",
    description: "Solve. Create. Thrive. Vyom '24 is the annual intra-college tech fest of Rungta. Come join the fun."
  }

  const welcomePhrase = {
    title: 'An event from Vyom!',
    description: "We are so excited for you to be a part of Vyom '24! Click that register now button and we hope to see you there..."
  }
  
  let phrase = defaultPhrase
  if(route !== undefined) phrase = route.startsWith('/events/') ? welcomePhrase : defaultPhrase

  // Check if the route exists in phrases, if not use the default phrase
  let { title, description } = phrases[route] || phrase;

  return <NextSeo
      title={title}
      description={description}
      canonical="https://www.Vyom.org/"
      openGraph={{
        url: `https://www.Vyom.org${route}`,
        title,
        description,
        images: [
          {
            url: 'https://Vyom.org/logo.png',
            width: 1200,
            height: 630,
            alt: 'Vyom - Solve.Create.Thrive',
            type: 'image/png',
          }
        ],
        siteName: 'Vyom',
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />;
}


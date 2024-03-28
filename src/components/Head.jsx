import { NextSeo } from "next-seo";

export default function Title({ route }) {

  const phrases = {
    '/merchandise': {
      title: 'Merchandise - Vyom',
      description: "Get Ready for Vyom '24 with your cool Merch"
    },
    '/events': {
      title: 'Events - Vyom',
      description: "See what's happening at Vyom '24"
    },
    '/sponsors': {
      title: 'Sponsors - Vyom',
      description: "Sponsors from all over the country make Vyom possible! See who's sponsoring us."
    },
    '/eventlinks': {
      title: 'Events Links - Vyom',
      description: "Get all the amazing events registration links"
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
    description: "An Annual Potpourri of Culture, Technology & Sports. Vyom '24 is the annual intra-college tech fest of Rungta Educational Foundation. Come join the fun."
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
      canonical="https://vyom.rungta.ac.in/"
      openGraph={{
        url: `https://vyom.rungta.ac.in/${route}`,
        title,
        description,
        images: [
          {
            url: 'https://vyom.rungta.ac.in/logo.png',
            width: 1200,
            height: 630,
            alt: 'Vyom - An Annual Potpourri of Culture, Technology & Sports.',
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


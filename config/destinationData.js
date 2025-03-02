const jsonData = [
  {
    city: "Paris",
    country: "France",
    options: ["London", "Berlin", "Paris", "Madrid"],
    clues: ["Known as the City of Light.", "Home to the Eiffel Tower."],
    fun_fact: [
      "The Louvre is the world's largest art museum.",
      "Paris has more than 420 parks.",
    ],
    trivia: [
      "The first modern Olympics were held in Athens in 1896.",
      "Paris has a population of over 2 million people.",
    ],
  },
  {
    city: "Tokyo",
    country: "Japan",
    options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
    clues: ["Famous for its cherry blossoms.", "Home to the Tokyo Tower."],
    fun_fact: [
      "Tokyo is the most populous city in the world.",
      "It has the world's busiest pedestrian crossing.",
    ],
    trivia: [
      "The city was formerly known as Edo.",
      "Tokyo is home to over 200 museums.",
    ],
  },
  {
    city: "New York",
    country: "USA",
    options: ["New York", "Los Angeles", "Chicago", "Miami"],
    clues: ["Known as the Big Apple.", "Home to the Statue of Liberty."],
    fun_fact: [
      "New York City is made up of five boroughs.",
      "It has the highest number of billionaires in the world.",
    ],
    trivia: [
      "Times Square is one of the busiest pedestrian areas globally.",
      "The subway system is one of the largest in the world.",
    ],
  },
  {
    city: "Rome",
    country: "Italy",
    options: ["Venice", "Rome", "Florence", "Milan"],
    clues: ["Home to the Colosseum.", "The Vatican City is located here."],
    fun_fact: [
      "Rome is known as the Eternal City.",
      "It has a history spanning over 2,500 years.",
    ],
    trivia: [
      "The city has over 280 fountains.",
      "Rome is built on seven hills.",
    ],
  },
  {
    city: "Cairo",
    country: "Egypt",
    options: ["Cairo", "Algiers", "Lagos", "Nairobi"],
    clues: ["Home to the Great Pyramids.", "Located near the Nile River."],
    fun_fact: [
      "Cairo is the largest city in the Arab world.",
      "It has been a major center of culture and politics in the Middle East.",
    ],
    trivia: [
      "The city was founded in 969 AD.",
      "Cairo is often called the City of a Thousand Minarets.",
    ],
  },
  {
    city: "Sydney",
    country: "Australia",
    options: ["Melbourne", "Sydney", "Brisbane", "Perth"],
    clues: [
      "Famous for its Opera House.",
      "Home to the Sydney Harbour Bridge.",
    ],
    fun_fact: [
      "Sydney is known for its stunning beaches.",
      "The city hosted the 2000 Summer Olympics.",
    ],
    trivia: [
      "Sydney's population is over 5 million.",
      "The city was founded in 1788.",
    ],
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    options: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador"],
    clues: [
      "Famous for its Carnival festival.",
      "Home to the Christ the Redeemer statue.",
    ],
    fun_fact: [
      "Rio has one of the largest urban forests in the world.",
      "The city is known for its beaches like Copacabana.",
    ],
    trivia: [
      "The city was founded in 1565.",
      "Rio's Sugarloaf Mountain offers stunning views.",
    ],
  },
  {
    city: "Moscow",
    country: "Russia",
    options: ["St. Petersburg", "Moscow", "Kazan", "Novosibirsk"],
    clues: ["Home to the Kremlin.", "Famous for Red Square."],
    fun_fact: [
      "Moscow is one of the largest cities in Europe.",
      "The city has over 40 theaters.",
    ],
    trivia: [
      "The Moscow Metro is one of the busiest in the world.",
      "The city was founded in 1147.",
    ],
  },
  {
    city: "London",
    country: "United Kingdom",
    options: ["London", "Dublin", "Edinburgh", "Cardiff"],
    clues: ["Home to Buckingham Palace.", "Famous for the Thames River."],
    fun_fact: [
      "London is a leading global city in finance and culture.",
      "It has over 170 museums.",
    ],
    trivia: [
      "The London Eye is one of the tallest observation wheels in the world.",
      "The city has a diverse population of over 8 million.",
    ],
  },
  {
    city: "Beijing",
    country: "China",
    options: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
    clues: ["Home to the Great Wall.", "Famous for the Forbidden City."],
    fun_fact: [
      "Beijing has a history of over 3,000 years.",
      "It is one of the most populous cities in the world.",
    ],
    trivia: [
      "The city hosted the 2008 Summer Olympics.",
      "Beijing has more than 200 parks.",
    ],
  },
  {
    city: "Istanbul",
    country: "Turkey",
    options: ["Ankara", "Istanbul", "Izmir", "Bursa"],
    clues: [
      "Straddles two continents: Europe and Asia.",
      "Home to the Hagia Sophia.",
    ],
    fun_fact: [
      "Istanbul was formerly known as Byzantium and Constantinople.",
      "It is famous for its historic sites.",
    ],
    trivia: [
      "The city has a population of over 15 million.",
      "The Grand Bazaar is one of the largest covered markets in the world.",
    ],
  },
  {
    city: "Los Angeles",
    country: "USA",
    options: ["San Francisco", "Los Angeles", "Chicago", "Seattle"],
    clues: ["Known as the City of Angels.", "Famous for Hollywood."],
    fun_fact: [
      "LA is the second-most populous city in the USA.",
      "It has a Mediterranean climate.",
    ],
    trivia: [
      "Los Angeles is home to more than 80 museums.",
      "It was founded in 1781.",
    ],
  },
  {
    city: "Bangkok",
    country: "Thailand",
    options: ["Bangkok", "Hanoi", "Manila", "Kuala Lumpur"],
    clues: [
      "Known for its vibrant street life.",
      "Famous for its ornate temple architecture.",
    ],
    fun_fact: [
      "Bangkok is the most visited city in the world.",
      "It has a rich cultural heritage.",
    ],
    trivia: [
      "The city was formerly known as Krung Thep.",
      "Bangkok has the world's largest solid gold Buddha statue.",
    ],
  },
  {
    city: "Berlin",
    country: "Germany",
    options: ["Munich", "Berlin", "Frankfurt", "Hamburg"],
    clues: ["Known for the Berlin Wall.", "Famous for its art scene."],
    fun_fact: [
      "Berlin is known for its nightlife.",
      "It has over 180 museums.",
    ],
    trivia: [
      "The city was divided during the Cold War.",
      "Berlin is home to the Brandenburg Gate.",
    ],
  },
  {
    city: "Singapore",
    country: "Singapore",
    options: ["Kuala Lumpur", "Singapore", "Bangkok", "Manila"],
    clues: ["A city-state in Southeast Asia.", "Famous for its cleanliness."],
    fun_fact: [
      "Singapore is known as the Garden City.",
      "It has a multicultural population.",
    ],
    trivia: [
      "The city has a tropical rainforest climate.",
      "Marina Bay Sands is an iconic hotel in Singapore.",
    ],
  },
  {
    city: "Lisbon",
    country: "Portugal",
    options: ["Lisbon", "Madrid", "Rome", "Barcelona"],
    clues: ["Known for its hilly landscape.", "Famous for the Belem Tower."],
    fun_fact: [
      "Lisbon is one of the oldest cities in Europe.",
      "The city has a rich maritime history.",
    ],
    trivia: [
      "The city is known for its Fado music.",
      "Lisbon has more than 20 museums.",
    ],
  },
  {
    city: "Madrid",
    country: "Spain",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    clues: ["Home to the Royal Palace.", "Famous for its art museums."],
    fun_fact: [
      "Madrid is the capital and largest city of Spain.",
      "It has a vibrant nightlife.",
    ],
    trivia: [
      "The city hosts the Prado Museum.",
      "Madrid is known for its tapas culture.",
    ],
  },
  {
    city: "Dubai",
    country: "UAE",
    options: ["Dubai", "Abu Dhabi", "Doha", "Muscat"],
    clues: ["Known for luxury shopping.", "Home to the Burj Khalifa."],
    fun_fact: [
      "Dubai is one of the fastest-growing cities in the world.",
      "It has a desert climate.",
    ],
    trivia: [
      "The city hosted the World Expo 2020.",
      "Dubai is famous for its skyscrapers.",
    ],
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    options: ["Santiago", "Buenos Aires", "Lima", "Bogota"],
    clues: [
      "Known for tango music and dance.",
      "Home to the famous Plaza de Mayo.",
    ],
    fun_fact: [
      "Buenos Aires is known for its European-style architecture.",
      "It has a vibrant arts scene.",
    ],
    trivia: [
      "The city has a population of over 3 million.",
      "It's often called the Paris of South America.",
    ],
  },
  {
    city: "Mumbai",
    country: "India",
    options: ["Delhi", "Mumbai", "Bangalore", "Chennai"],
    clues: ["Known as the financial capital of India.", "Home to Bollywood."],
    fun_fact: [
      "Mumbai is the most populous city in India.",
      "It has a rich history and diverse culture.",
    ],
    trivia: [
      "The city was formerly known as Bombay.",
      "Mumbai has the largest slum in Asia.",
    ],
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    options: ["Amsterdam", "Rotterdam", "Utrecht", "The Hague"],
    clues: ["Famous for its canals.", "Home to the Anne Frank House."],
    fun_fact: [
      "Amsterdam has more than 1,500 bridges.",
      "It is known for its cycling culture.",
    ],
    trivia: [
      "The city was founded in the 12th century.",
      "Amsterdam is famous for its tulips.",
    ],
  },
  {
    city: "Hong Kong",
    country: "China",
    options: ["Hong Kong", "Macau", "Shanghai", "Beijing"],
    clues: ["Known for its skyline.", "A major financial hub."],
    fun_fact: [
      "Hong Kong is known for its vibrant culinary scene.",
      "It has the world's longest outdoor escalator.",
    ],
    trivia: [
      "The city was a British colony until 1997.",
      "Hong Kong is home to many skyscrapers.",
    ],
  },
  {
    city: "Seoul",
    country: "South Korea",
    options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    clues: ["Home to Gyeongbokgung Palace.", "Known for its K-pop culture."],
    fun_fact: [
      "Seoul has a high-speed subway system.",
      "It's one of the most technologically advanced cities.",
    ],
    trivia: [
      "The city hosted the 1988 Summer Olympics.",
      "Seoul is one of the most populous cities in the world.",
    ],
  },
  {
    city: "Athens",
    country: "Greece",
    options: ["Athens", "Rome", "Cairo", "Istanbul"],
    clues: [
      "Known as the cradle of Western civilization.",
      "Home to the Acropolis.",
    ],
    fun_fact: [
      "Athens is one of the oldest cities in the world.",
      "It has a rich history in philosophy and arts.",
    ],
    trivia: [
      "The city is named after the goddess Athena.",
      "It was a powerful city-state in ancient Greece.",
    ],
  },
  {
    city: "Toronto",
    country: "Canada",
    options: ["Vancouver", "Montreal", "Toronto", "Calgary"],
    clues: ["Home to the CN Tower.", "Known for its multicultural population."],
    fun_fact: [
      "Toronto is the largest city in Canada.",
      "It has a vibrant arts scene.",
    ],
    trivia: [
      "The city is known for its diverse neighborhoods.",
      "Toronto hosts the Toronto International Film Festival.",
    ],
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    options: ["Kuala Lumpur", "Singapore", "Bangkok", "Hanoi"],
    clues: ["Home to the Petronas Towers.", "Known for its diverse culture."],
    fun_fact: [
      "Kuala Lumpur is the capital of Malaysia.",
      "It has a tropical rainforest climate.",
    ],
    trivia: [
      "The city has a population of over 1.8 million.",
      "Kuala Lumpur is known for its street food.",
    ],
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    options: ["Santiago", "Buenos Aires", "Montevideo", "Lima"],
    clues: ["Famous for its tango music.", "Home to the Obelisk."],
    fun_fact: [
      "Buenos Aires is the capital of Argentina.",
      "It has a vibrant nightlife.",
    ],
    trivia: [
      "The city is known for its coffee culture.",
      "Buenos Aires has the largest Jewish community in Latin America.",
    ],
  },
  {
    city: "Helsinki",
    country: "Finland",
    options: ["Helsinki", "Oslo", "Stockholm", "Tallinn"],
    clues: [
      "Known for its design and architecture.",
      "Home to the Sibelius Monument.",
    ],
    fun_fact: [
      "Helsinki is the capital of Finland.",
      "It has a strong coffee culture.",
    ],
    trivia: [
      "The city was founded in 1550.",
      "Helsinki was named the World Design Capital in 2012.",
    ],
  },
  {
    city: "Oslo",
    country: "Norway",
    options: ["Oslo", "Stockholm", "Copenhagen", "Helsinki"],
    clues: ["Known for its green spaces.", "Home to the Nobel Peace Prize."],
    fun_fact: [
      "Oslo is the capital of Norway.",
      "It has a rich Viking history.",
    ],
    trivia: [
      "The city is known for its museums and art galleries.",
      "Oslo has a population of over 1 million.",
    ],
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    options: ["Copenhagen", "Oslo", "Helsinki", "Reykjavik"],
    clues: [
      "Home to the Little Mermaid statue.",
      "Known for its cycling culture.",
    ],
    fun_fact: [
      "Copenhagen is known for its historic architecture.",
      "It has a vibrant food scene.",
    ],
    trivia: [
      "The city has a population of over 600,000.",
      "Copenhagen was named the most bike-friendly city in the world.",
    ],
  },
  {
    city: "Nairobi",
    country: "Kenya",
    options: ["Nairobi", "Lagos", "Accra", "Addis Ababa"],
    clues: [
      "Home to Nairobi National Park.",
      "Known as the Green City in the Sun.",
    ],
    fun_fact: [
      "Nairobi is the capital of Kenya.",
      "It has a rich wildlife heritage.",
    ],
    trivia: [
      "The city is home to the Giraffe Centre.",
      "Nairobi is one of the fastest-growing cities in Africa.",
    ],
  },
  {
    city: "Lima",
    country: "Peru",
    options: ["Lima", "Santiago", "Bogota", "Quito"],
    clues: ["Known for its culinary scene.", "Home to the historic center."],
    fun_fact: [
      "Lima is the capital of Peru.",
      "It has a mix of colonial and modern architecture.",
    ],
    trivia: [
      "The city has a population of over 9 million.",
      "Lima is known for its gastronomy and seafood.",
    ],
  },
  {
    city: "Hanoi",
    country: "Vietnam",
    options: ["Hanoi", "Ho Chi Minh City", "Bangkok", "Manila"],
    clues: [
      "Famous for its centuries-old architecture.",
      "Known for its vibrant street food scene.",
    ],
    fun_fact: [
      "Hanoi is the capital of Vietnam.",
      "It has a rich cultural heritage.",
    ],
    trivia: [
      "The city has a population of over 8 million.",
      "Hanoi is home to the Hoan Kiem Lake.",
    ],
  },
  {
    city: "Helsinki",
    country: "Finland",
    options: ["Helsinki", "Oslo", "Stockholm", "Tallinn"],
    clues: [
      "Known for its design and architecture.",
      "Home to the Sibelius Monument.",
    ],
    fun_fact: [
      "Helsinki is the capital of Finland.",
      "It has a strong coffee culture.",
    ],
    trivia: [
      "The city was founded in 1550.",
      "Helsinki was named the World Design Capital in 2012.",
    ],
  },
  {
    city: "Reykjavik",
    country: "Iceland",
    options: ["Oslo", "Stockholm", "Reykjavik", "Helsinki"],
    clues: [
      "Known for its geothermal activity.",
      "Home to the Hallgrimskirkja church.",
    ],
    fun_fact: [
      "Reykjavik is the northernmost capital in the world.",
      "It has a vibrant music scene.",
    ],
    trivia: [
      "The city was founded in 1786.",
      "Reykjavik is known for its whale watching tours.",
    ],
  },
  {
    city: "Quito",
    country: "Ecuador",
    options: ["Quito", "Lima", "Bogota", "Caracas"],
    clues: [
      "Located near the equator.",
      "Known for its well-preserved colonial center.",
    ],
    fun_fact: [
      "Quito is the capital of Ecuador.",
      "It has a rich indigenous history.",
    ],
    trivia: [
      "The city is surrounded by volcanic mountains.",
      "Quito was the first city to be declared a UNESCO World Heritage Site.",
    ],
  },
  {
    city: "Casablanca",
    country: "Morocco",
    options: ["Casablanca", "Marrakech", "Rabat", "Tangier"],
    clues: [
      "Famous for its modern architecture.",
      "Home to the Hassan II Mosque.",
    ],
    fun_fact: [
      "Casablanca is the largest city in Morocco.",
      "It has a rich cultural history.",
    ],
    trivia: [
      "The city was named after the white houses of its old town.",
      "Casablanca is known for its vibrant markets.",
    ],
  },
  {
    city: "Stockholm",
    country: "Sweden",
    options: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
    clues: ["Built on 14 islands.", "Known for its historical sites."],
    fun_fact: [
      "Stockholm is the capital of Sweden.",
      "It has a rich maritime history.",
    ],
    trivia: [
      "The city hosted the 1912 Summer Olympics.",
      "Stockholm is known for its archipelago.",
    ],
  },
  {
    city: "Sofia",
    country: "Bulgaria",
    options: ["Sofia", "Bucharest", "Belgrade", "Prague"],
    clues: [
      "Known for its history and culture.",
      "Home to Alexander Nevsky Cathedral.",
    ],
    fun_fact: [
      "Sofia is the capital of Bulgaria.",
      "It has a rich history dating back to antiquity.",
    ],
    trivia: [
      "The city is known for its mineral springs.",
      "Sofia has a diverse architectural heritage.",
    ],
  },
  {
    city: "Budapest",
    country: "Hungary",
    options: ["Prague", "Budapest", "Vienna", "Bratislava"],
    clues: ["Known for its thermal baths.", "Home to the Parliament building."],
    fun_fact: [
      "Budapest is the capital of Hungary.",
      "It has a rich history and vibrant culture.",
    ],
    trivia: [
      "The city is famous for its ruin bars.",
      "Budapest has the largest synagogue in Europe.",
    ],
  },
  {
    city: "Prague",
    country: "Czech Republic",
    options: ["Budapest", "Prague", "Warsaw", "Vienna"],
    clues: [
      "Known as the City of a Hundred Spires.",
      "Home to the Charles Bridge.",
    ],
    fun_fact: [
      "Prague is the capital of the Czech Republic.",
      "It has a rich history and beautiful architecture.",
    ],
    trivia: [
      "The city is famous for its beer culture.",
      "Prague has a population of over 1.3 million.",
    ],
  },
  {
    city: "Vienna",
    country: "Austria",
    options: ["Vienna", "Berlin", "Zurich", "Budapest"],
    clues: [
      "Known for its classical music heritage.",
      "Home to the Vienna State Opera.",
    ],
    fun_fact: [
      "Vienna is the capital of Austria.",
      "It has a rich history in the arts.",
    ],
    trivia: [
      "The city has more than 100 museums.",
      "Vienna is known for its coffee-house culture.",
    ],
  },
  {
    city: "Zurich",
    country: "Switzerland",
    options: ["Zurich", "Geneva", "Bern", "Basel"],
    clues: [
      "Known as a financial hub.",
      "Home to many banks and institutions.",
    ],
    fun_fact: [
      "Zurich is the largest city in Switzerland.",
      "It has a vibrant arts scene.",
    ],
    trivia: [
      "The city is known for its quality of life.",
      "Zurich has a population of over 400,000.",
    ],
  },
  {
    city: "Athens",
    country: "Greece",
    options: ["Rome", "Athens", "Cairo", "Istanbul"],
    clues: ["Known for its ancient history.", "Home to the Parthenon."],
    fun_fact: [
      "Athens is the capital of Greece.",
      "It has a rich cultural heritage.",
    ],
    trivia: [
      "The city was a powerful city-state in ancient Greece.",
      "Athens is known for its philosophy and arts.",
    ],
  },
  {
    city: "Bangkok",
    country: "Thailand",
    options: ["Bangkok", "Hanoi", "Kuala Lumpur", "Manila"],
    clues: ["Famous for its vibrant street life.", "Home to the Grand Palace."],
    fun_fact: [
      "Bangkok is the capital of Thailand.",
      "It has a rich cultural heritage.",
    ],
    trivia: [
      "The city has a population of over 8 million.",
      "Bangkok is known for its floating markets.",
    ],
  },
  {
    city: "Brussels",
    country: "Belgium",
    options: ["Brussels", "Amsterdam", "Paris", "Geneva"],
    clues: [
      "Known for its chocolate and waffles.",
      "Home to the European Union headquarters.",
    ],
    fun_fact: [
      "Brussels is the capital of Belgium.",
      "It has a rich history and culture.",
    ],
    trivia: [
      "The city is known for its Art Nouveau architecture.",
      "Brussels has a population of over 1 million.",
    ],
  },
  {
    city: "Oslo",
    country: "Norway",
    options: ["Oslo", "Copenhagen", "Helsinki", "Stockholm"],
    clues: ["Known for its green spaces.", "Home to the Nobel Peace Prize."],
    fun_fact: [
      "Oslo is the capital of Norway.",
      "It has a rich Viking history.",
    ],
    trivia: [
      "The city is known for its museums and art galleries.",
      "Oslo has a population of over 1 million.",
    ],
  },
  {
    city: "Osaka",
    country: "Japan",
    options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
    clues: ["Known for its modern architecture.", "Home to Castle."],
    fun_fact: [
      "Osaka is known for its food culture.",
      "It has a rich history and vibrant nightlife.",
    ],
    trivia: [
      "The city hosted the 1970 World Expo.",
      "Osaka is Japan's second-largest metropolitan area.",
    ],
  },
  {
    city: "Paris",
    country: "France",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    clues: ["Known as the City of Light.", "Home to the Eiffel Tower."],
    fun_fact: [
      "The Louvre is the world's largest art museum.",
      "Paris has over 400 parks.",
    ],
    trivia: [
      "The city is divided into 20 districts called arrondissements.",
      "Paris was originally a Roman city called Lutetia.",
    ],
  },
  {
    city: "Tokyo",
    country: "Japan",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    clues: ["Famous for its cherry blossoms.", "The capital of Japan."],
    fun_fact: [
      "Tokyo has the world's busiest railway station.",
      "It has more Michelin-starred restaurants than any other city.",
    ],
    trivia: [
      "Tokyo was originally a small fishing village called Edo.",
      "It is known for its mix of traditional and modern architecture.",
    ],
  },
  {
    city: "New York City",
    country: "United States",
    options: ["New York", "Los Angeles", "Chicago", "Miami"],
    clues: ["Known as the Big Apple.", "Home to Times Square."],
    fun_fact: [
      "The Statue of Liberty was a gift from France.",
      "Central Park is larger than the country of Monaco.",
    ],
    trivia: [
      "New York City has five boroughs.",
      "It is the most linguistically diverse city in the world.",
    ],
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    options: ["Buenos Aires", "Santiago", "Rio de Janeiro", "Lima"],
    clues: [
      "Famous for its Carnival festival.",
      "Home to the Christ the Redeemer statue.",
    ],
    fun_fact: [
      "The city is known for its stunning beaches like Copacabana.",
      "Rio hosted the 2016 Summer Olympics.",
    ],
    trivia: [
      "Rio was the capital of Brazil until 1960.",
      "The city's name means 'River of January'.",
    ],
  },
  {
    city: "Cairo",
    country: "Egypt",
    options: ["Cairo", "Tunis", "Algiers", "Tripoli"],
    clues: [
      "Home to the Great Pyramids.",
      "Known as the city of a thousand minarets.",
    ],
    fun_fact: [
      "Cairo is the largest city in the Arab world.",
      "The Egyptian Museum houses over 120,000 artifacts.",
    ],
    trivia: [
      "Cairo was founded in 969 AD.",
      "It is located near the Nile River.",
    ],
  },
  {
    city: "Sydney",
    country: "Australia",
    options: ["Melbourne", "Sydney", "Brisbane", "Perth"],
    clues: [
      "Famous for its Opera House.",
      "Located on the east coast of Australia.",
    ],
    fun_fact: [
      "The Sydney Harbour Bridge is known as the 'Coathanger.'",
      "Bondi Beach is one of the most famous beaches in the world.",
    ],
    trivia: [
      "Sydney was the site of the first European settlement in Australia.",
      "It has a population of over 5 million people.",
    ],
  },
  {
    city: "Moscow",
    country: "Russia",
    options: ["Saint Petersburg", "Moscow", "Kazan", "Novosibirsk"],
    clues: ["Home to the Kremlin.", "Famous for its Red Square."],
    fun_fact: [
      "Moscow is the largest city in Europe by population.",
      "The Moscow Metro is known for its ornate stations.",
    ],
    trivia: [
      "Moscow has more billionaires than any other city.",
      "It is located on the Moskva River.",
    ],
  },
  {
    city: "London",
    country: "United Kingdom",
    options: ["Dublin", "London", "Edinburgh", "Cardiff"],
    clues: [
      "Home to the British monarchy.",
      "Famous for the Big Ben clock tower.",
    ],
    fun_fact: [
      "London is the largest city in the UK.",
      "The city has over 170 museums.",
    ],
    trivia: [
      "The River Thames flows through London.",
      "London's Underground is the oldest subway system in the world.",
    ],
  },
  {
    city: "Barcelona",
    country: "Spain",
    options: ["Madrid", "Barcelona", "Seville", "Valencia"],
    clues: [
      "Famous for its unique architecture by Antoni Gaudí.",
      "Located on the northeastern coast of Spain.",
    ],
    fun_fact: [
      "The Sagrada Família has been under construction since 1882.",
      "Barcelona has more than 4 kilometers of beaches.",
    ],
    trivia: [
      "The city was founded as a Roman city called Barcino.",
      "It is known for its vibrant art scene.",
    ],
  },
  {
    city: "Beijing",
    country: "China",
    options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"],
    clues: ["Home to the Forbidden City.", "The capital of China."],
    fun_fact: [
      "The Great Wall of China is visible from space.",
      "Beijing has a history of over 3,000 years.",
    ],
    trivia: [
      "The city was formerly known as Peking.",
      "It hosted the Summer Olympics in 2008.",
    ],
  },
  {
    city: "Istanbul",
    country: "Turkey",
    options: ["Ankara", "Istanbul", "Bursa", "Izmir"],
    clues: [
      "The only city in the world that straddles two continents.",
      "Famous for its Hagia Sophia.",
    ],
    fun_fact: [
      "Istanbul was historically known as Byzantium and Constantinople.",
      "It has a rich history as a center of trade.",
    ],
    trivia: [
      "The Grand Bazaar in Istanbul is one of the largest and oldest covered markets in the world.",
      "The city has over 15 million residents.",
    ],
  },
  {
    city: "Los Angeles",
    country: "United States",
    options: ["New York", "Los Angeles", "Houston", "San Francisco"],
    clues: [
      "Known as the Entertainment Capital of the World.",
      "Home to Hollywood.",
    ],
    fun_fact: [
      "Los Angeles is famous for its Mediterranean climate.",
      "The city has over 70 miles of coastline.",
    ],
    trivia: [
      "LA is the second most populous city in the U.S.",
      "It was founded in 1781 as El Pueblo de Nuestra Señora la Reina de los Ángeles.",
    ],
  },
  {
    city: "Singapore",
    country: "Singapore",
    options: ["Hong Kong", "Singapore", "Kuala Lumpur", "Jakarta"],
    clues: [
      "Known for its cleanliness and strict laws.",
      "A city-state in Southeast Asia.",
    ],
    fun_fact: [
      "Singapore is home to the world's first night zoo.",
      "It has a tropical rainforest climate.",
    ],
    trivia: [
      "The Merlion is a symbol of Singapore.",
      "Singapore has one of the busiest ports in the world.",
    ],
  },
  {
    city: "Mumbai",
    country: "India",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    clues: ["Known as the financial capital of India.", "Home to Bollywood."],
    fun_fact: [
      "Mumbai is the most populous city in India.",
      "The Gateway of India is a famous landmark.",
    ],
    trivia: [
      "The city was formerly known as Bombay.",
      "Mumbai has the largest slum in Asia.",
    ],
  },
  {
    city: "Toronto",
    country: "Canada",
    options: ["Vancouver", "Montreal", "Toronto", "Calgary"],
    clues: ["Home to the CN Tower.", "The largest city in Canada."],
    fun_fact: [
      "Toronto has over 200 ethnic origins represented.",
      "It is known for its multicultural population.",
    ],
    trivia: [
      "The city is located on the shores of Lake Ontario.",
      "Toronto has a thriving arts scene with numerous festivals.",
    ],
  },
  {
    city: "Bangkok",
    country: "Thailand",
    options: ["Bangkok", "Hanoi", "Kuala Lumpur", "Manila"],
    clues: [
      "Known for its vibrant street life.",
      "Famous for its ornate temples.",
    ],
    fun_fact: [
      "Bangkok is the most visited city in the world.",
      "The city's full name is the longest in the world.",
    ],
    trivia: [
      "The city is known as Krung Thep in Thai.",
      "It has a tropical savanna climate.",
    ],
  },
  {
    city: "Berlin",
    country: "Germany",
    options: ["Munich", "Berlin", "Frankfurt", "Hamburg"],
    clues: [
      "Home to the Brandenburg Gate.",
      "Known for its rich history and culture.",
    ],
    fun_fact: [
      "Berlin has more bridges than Venice.",
      "It is famous for its nightlife and arts scene.",
    ],
    trivia: [
      "The Berlin Wall divided the city until 1989.",
      "It is home to over 180 museums.",
    ],
  },
  {
    city: "Madrid",
    country: "Spain",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    clues: ["The capital of Spain.", "Famous for its art museums."],
    fun_fact: [
      "The city is home to the Royal Palace of Madrid.",
      "Madrid has the largest bullring in Spain.",
    ],
    trivia: [
      "The city has a vibrant nightlife.",
      "Madrid is known for its tapas and culinary scene.",
    ],
  },
  {
    city: "Lima",
    country: "Peru",
    options: ["Santiago", "Lima", "Quito", "Bogotá"],
    clues: [
      "The capital of Peru.",
      "Known for its rich history and gastronomy.",
    ],
    fun_fact: [
      "Lima was founded by Spanish conquistador Francisco Pizarro in 1535.",
      "The city has a UNESCO World Heritage site.",
    ],
    trivia: [
      "Lima is located on the coast of the Pacific Ocean.",
      "It is known for its vibrant colonial architecture.",
    ],
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    options: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"],
    clues: [
      "Famous for its canals and bicycles.",
      "Home to the Anne Frank House.",
    ],
    fun_fact: [
      "Amsterdam has more than 1,500 bridges.",
      "The city is known for its tulips.",
    ],
    trivia: [
      "It is the capital of the Netherlands.",
      "Amsterdam's Red Light District is famous worldwide.",
    ],
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    options: ["Kuala Lumpur", "Bangkok", "Jakarta", "Manila"],
    clues: [
      "Home to the Petronas Twin Towers.",
      "The capital city of Malaysia.",
    ],
    fun_fact: [
      "Kuala Lumpur has one of the world's largest shopping malls.",
      "It is a melting pot of cultures.",
    ],
    trivia: [
      "The city was founded in 1857.",
      "It has a tropical rainforest climate.",
    ],
  },
  {
    city: "Vienna",
    country: "Austria",
    options: ["Vienna", "Budapest", "Prague", "Zurich"],
    clues: [
      "The capital of Austria.",
      "Known for its classical music heritage.",
    ],
    fun_fact: [
      "Vienna has over 27 palaces.",
      "It is famous for its coffee culture.",
    ],
    trivia: [
      "The city is known for its historic architecture.",
      "Vienna hosts the annual Vienna Philharmonic Ball.",
    ],
  },
  {
    city: "Nairobi",
    country: "Kenya",
    options: ["Nairobi", "Accra", "Lagos", "Dar es Salaam"],
    clues: ["Home to the Nairobi National Park.", "The capital city of Kenya."],
    fun_fact: [
      "Nairobi is one of the few cities in the world with a national park within its borders.",
      "The city is known for its wildlife conservation efforts.",
    ],
    trivia: [
      "Nairobi was founded in 1899 as a rail depot.",
      "It has a vibrant multicultural scene.",
    ],
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    options: ["Santiago", "Lima", "Buenos Aires", "Montevideo"],
    clues: ["Known for its tango dance.", "The capital of Argentina."],
    fun_fact: [
      "Buenos Aires is famous for its European-style architecture.",
      "The city has numerous cultural festivals throughout the year.",
    ],
    trivia: [
      "It is the largest city in Argentina.",
      "The Obelisco is a famous landmark in the city.",
    ],
  },
  {
    city: "Hanoi",
    country: "Vietnam",
    options: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hue"],
    clues: [
      "The capital of Vietnam.",
      "Known for its centuries-old architecture.",
    ],
    fun_fact: [
      "Hanoi is famous for its street food culture.",
      "The city has a large number of lakes.",
    ],
    trivia: [
      "Hanoi was influenced by Chinese and French colonial architecture.",
      "It is known as the 'Paris of the East.'",
    ],
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    options: ["Oslo", "Copenhagen", "Helsinki", "Stockholm"],
    clues: ["Home to the Little Mermaid statue.", "The capital of Denmark."],
    fun_fact: [
      "Copenhagen is known for its bike-friendly streets.",
      "It has a rich maritime history.",
    ],
    trivia: [
      "The city is known for its high quality of life.",
      "Tivoli Gardens is one of the oldest amusement parks in the world.",
    ],
  },
  {
    city: "Stockholm",
    country: "Sweden",
    options: ["Copenhagen", "Stockholm", "Oslo", "Helsinki"],
    clues: ["The capital city of Sweden.", "Spread across 14 islands."],
    fun_fact: [
      "Stockholm is known for its beautiful archipelago.",
      "The city has a rich history dating back to the 13th century.",
    ],
    trivia: [
      "It is famous for its design and innovation.",
      "The Nobel Prize ceremonies are held in Stockholm.",
    ],
  },
  {
    city: "Athens",
    country: "Greece",
    options: ["Athens", "Rome", "Cairo", "Istanbul"],
    clues: [
      "The capital of Greece.",
      "Home to ancient ruins like the Acropolis.",
    ],
    fun_fact: [
      "Athens is considered the cradle of Western civilization.",
      "The city has a rich history of philosophy and democracy.",
    ],
    trivia: [
      "The Parthenon is one of its most famous landmarks.",
      "Athens hosted the first modern Olympic Games in 1896.",
    ],
  },
  {
    city: "Lagos",
    country: "Nigeria",
    options: ["Accra", "Lagos", "Nairobi", "Johannesburg"],
    clues: [
      "The most populous city in Africa.",
      "Located on the Atlantic coast.",
    ],
    fun_fact: [
      "Lagos is known for its music and entertainment scene.",
      "The city is a major financial center in Africa.",
    ],
    trivia: [
      "It was originally a Portuguese settlement.",
      "Lagos has a vibrant cultural heritage with numerous festivals.",
    ],
  },
  {
    city: "Marrakech",
    country: "Morocco",
    options: ["Casablanca", "Marrakech", "Fez", "Agadir"],
    clues: ["Famous for its souks and palaces.", "Known as the Red City."],
    fun_fact: [
      "Marrakech is home to the historic Djemaa el-Fna square.",
      "The city has a rich Berber history.",
    ],
    trivia: [
      "It was founded in 1070.",
      "Marrakech is a UNESCO World Heritage site.",
    ],
  },
  {
    city: "Helsinki",
    country: "Finland",
    options: ["Helsinki", "Oslo", "Stockholm", "Tallinn"],
    clues: [
      "The capital of Finland.",
      "Known for its design and architecture.",
    ],
    fun_fact: [
      "Helsinki is known for its beautiful coastal scenery.",
      "It has a vibrant arts scene.",
    ],
    trivia: [
      "The city was founded in 1550.",
      "Helsinki is often referred to as the 'Daughter of the Baltic.'",
    ],
  },
  {
    city: "Oslo",
    country: "Norway",
    options: ["Oslo", "Copenhagen", "Stockholm", "Helsinki"],
    clues: [
      "The capital of Norway.",
      "Known for its green spaces and museums.",
    ],
    fun_fact: [
      "Oslo is home to the Nobel Peace Center.",
      "The city has a rich maritime history.",
    ],
    trivia: [
      "Oslo is one of the fastest-growing cities in Europe.",
      "It was founded around 1040 AD.",
    ],
  },
  {
    city: "Budapest",
    country: "Hungary",
    options: ["Prague", "Vienna", "Budapest", "Bratislava"],
    clues: ["Known for its thermal baths.", "The capital city of Hungary."],
    fun_fact: [
      "Budapest is divided by the Danube River into Buda and Pest.",
      "The city has a rich history and stunning architecture.",
    ],
    trivia: [
      "It is known as the 'Pearl of the Danube.'",
      "Budapest has the largest synagogue in Europe.",
    ],
  },
  {
    city: "Seoul",
    country: "South Korea",
    options: ["Tokyo", "Beijing", "Seoul", "Taipei"],
    clues: [
      "The capital of South Korea.",
      "Known for its pop culture and technology.",
    ],
    fun_fact: [
      "Seoul has a rich history of over 2,000 years.",
      "The city is famous for its street food.",
    ],
    trivia: [
      "It hosted the 1988 Summer Olympics.",
      "Seoul's subway system is one of the largest in the world.",
    ],
  },
  {
    city: "Santiago",
    country: "Chile",
    options: ["Lima", "Buenos Aires", "Santiago", "Montevideo"],
    clues: [
      "The capital of Chile.",
      "Known for its proximity to the Andes Mountains.",
    ],
    fun_fact: [
      "Santiago has a rich history and vibrant culture.",
      "The city is known for its parks and outdoor activities.",
    ],
    trivia: [
      "Santiago is one of the largest cities in South America.",
      "It hosted the 1962 FIFA World Cup.",
    ],
  },
  {
    city: "Quito",
    country: "Ecuador",
    options: ["Lima", "Quito", "Bogotá", "Caracas"],
    clues: [
      "The capital of Ecuador.",
      "Known for its well-preserved colonial center.",
    ],
    fun_fact: [
      "Quito is the closest capital city to the equator.",
      "It is a UNESCO World Heritage site.",
    ],
    trivia: [
      "The city sits at an elevation of 2,850 meters (9,350 feet).",
      "Quito has a rich indigenous history.",
    ],
  },
  {
    city: "Havana",
    country: "Cuba",
    options: ["Havana", "Santo Domingo", "San Juan", "Port-au-Prince"],
    clues: ["The capital of Cuba.", "Known for its colorful architecture."],
    fun_fact: [
      "Havana is famous for its classic cars and cigars.",
      "The city has a vibrant music and arts scene.",
    ],
    trivia: [
      "It was founded in 1519.",
      "Havana is a UNESCO World Heritage site.",
    ],
  },
  {
    city: "Zurich",
    country: "Switzerland",
    options: ["Bern", "Zurich", "Geneva", "Lucerne"],
    clues: [
      "The largest city in Switzerland.",
      "Known for its banking and finance sector.",
    ],
    fun_fact: [
      "Zurich has numerous museums and galleries.",
      "The city is known for its high quality of life.",
    ],
    trivia: [
      "It has a vibrant cultural scene with many festivals.",
      "Zurich is located on the shores of Lake Zurich.",
    ],
  },
  {
    city: "Brussels",
    country: "Belgium",
    options: ["Brussels", "Amsterdam", "Luxembourg City", "Paris"],
    clues: [
      "The capital of Belgium.",
      "Home to the European Union headquarters.",
    ],
    fun_fact: [
      "Brussels is famous for its chocolates and waffles.",
      "The city has a rich history of art and architecture.",
    ],
    trivia: [
      "The Atomium is a famous landmark in Brussels.",
      "The city has a vibrant comic strip culture.",
    ],
  },
  {
    city: "Oslo",
    country: "Norway",
    options: ["Copenhagen", "Oslo", "Stockholm", "Helsinki"],
    clues: [
      "The capital of Norway.",
      "Known for its green spaces and museums.",
    ],
    fun_fact: [
      "Oslo is home to the Nobel Peace Center.",
      "The city has a rich maritime history.",
    ],
    trivia: [
      "Oslo is one of the fastest-growing cities in Europe.",
      "It was founded around 1040 AD.",
    ],
  },
  {
    city: "Cairo",
    country: "Egypt",
    options: ["Cairo", "Doha", "Riyadh", "Dubai"],
    clues: ["The capital of Egypt.", "Known for its ancient history."],
    fun_fact: [
      "Cairo is home to the Great Pyramids of Giza.",
      "The city has a vibrant culture and history.",
    ],
    trivia: [
      "It is one of the largest cities in Africa.",
      "Cairo's name means 'The Victorious.'",
    ],
  },
  {
    city: "Lagos",
    country: "Nigeria",
    options: ["Accra", "Nairobi", "Lagos", "Abuja"],
    clues: ["The largest city in Nigeria.", "Known for its vibrant economy."],
    fun_fact: [
      "Lagos is one of the fastest-growing cities in the world.",
      "The city has a rich cultural heritage.",
    ],
    trivia: [
      "It was originally a Portuguese settlement.",
      "Lagos is known for its music and film industry.",
    ],
  },
  {
    city: "San Francisco",
    country: "United States",
    options: ["Los Angeles", "San Francisco", "Seattle", "Chicago"],
    clues: [
      "Home to the Golden Gate Bridge.",
      "Known for its hilly landscape.",
    ],
    fun_fact: [
      "San Francisco is famous for its cable cars.",
      "The city has a rich history of immigration.",
    ],
    trivia: [
      "It was founded in 1776.",
      "The city has a vibrant arts and culture scene.",
    ],
  },
  {
    city: "Philadelphia",
    country: "United States",
    options: ["Philadelphia", "Boston", "Chicago", "New York"],
    clues: ["Known for the Liberty Bell.", "Home to Independence Hall."],
    fun_fact: [
      "Philadelphia is known as the birthplace of the United States.",
      "The city has a rich history of arts.",
    ],
    trivia: [
      "It was the capital of the United States from 1790 to 1800.",
      "Philadelphia is famous for its cheesesteaks.",
    ],
  },
  {
    city: "Helsinki",
    country: "Finland",
    options: ["Helsinki", "Oslo", "Stockholm", "Tallinn"],
    clues: [
      "The capital of Finland.",
      "Known for its design and architecture.",
    ],
    fun_fact: [
      "Helsinki is known for its beautiful coastal scenery.",
      "It has a vibrant arts scene.",
    ],
    trivia: [
      "The city was founded in 1550.",
      "Helsinki is often referred to as the 'Daughter of the Baltic.'",
    ],
  },
  {
    city: "Nairobi",
    country: "Kenya",
    options: ["Nairobi", "Addis Ababa", "Accra", "Lagos"],
    clues: ["The capital of Kenya.", "Known for its national park."],
    fun_fact: [
      "Nairobi National Park is home to diverse wildlife.",
      "The city has a vibrant culture and history.",
    ],
    trivia: [
      "It was founded in 1899 as a railway depot.",
      "Nairobi has a rich history of trade and culture.",
    ],
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    options: ["Copenhagen", "Oslo", "Stockholm", "Helsinki"],
    clues: ["The capital of Denmark.", "Known for its historic landmarks."],
    fun_fact: [
      "Copenhagen is famous for its sustainable living initiatives.",
      "The city has a rich maritime history.",
    ],
    trivia: [
      "The Little Mermaid statue is a famous symbol of the city.",
      "Copenhagen has a vibrant arts scene.",
    ],
  },
  {
    city: "Tallinn",
    country: "Estonia",
    options: ["Tallinn", "Riga", "Vilnius", "Helsinki"],
    clues: ["The capital of Estonia.", "Known for its medieval old town."],
    fun_fact: [
      "Tallinn has one of the best-preserved medieval cities in Europe.",
      "The city is known for its digital innovation.",
    ],
    trivia: [
      "It was founded in the 13th century.",
      "Tallinn is a UNESCO World Heritage site.",
    ],
  },
  {
    city: "Paris",
    country: "France",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    clues: [
      "This city is known as the City of Light.",
      "It is home to the famous Eiffel Tower.",
    ],
    fun_fact: [
      "Paris has over 300 parks and gardens.",
      "The Louvre is the world's largest art museum.",
    ],
    trivia: [
      "Paris was originally a Roman city called Lutetia.",
      "It has a population of over 2 million people.",
    ],
  },
  {
    city: "Tokyo",
    country: "Japan",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    clues: [
      "This city is known for its bustling Shibuya Crossing.",
      "It is a major center for technology and fashion.",
    ],
    fun_fact: [
      "Tokyo is the most populous metropolitan area in the world.",
      "There are more than 200 museums in Tokyo.",
    ],
    trivia: [
      "Tokyo was previously known as Edo.",
      "It hosted the Summer Olympics in 1964 and 2021.",
    ],
  },
  {
    city: "Cairo",
    country: "Egypt",
    options: ["Cairo", "Nairobi", "Algiers", "Riyadh"],
    clues: [
      "This city is home to the Great Pyramids.",
      "It is the capital of Egypt.",
    ],
    fun_fact: [
      "Cairo is known as the 'City of a Thousand Minarets.'",
      "The Egyptian Museum in Cairo houses over 120,000 artifacts.",
    ],
    trivia: [
      "Cairo has a population of over 9 million people.",
      "It is one of the oldest continuously inhabited cities in the world.",
    ],
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    options: ["Sao Paulo", "Buenos Aires", "Rio de Janeiro", "Lima"],
    clues: [
      "This city is famous for its Carnival festival.",
      "It is known for the iconic Christ the Redeemer statue.",
    ],
    fun_fact: [
      "Rio de Janeiro was the capital of Brazil until 1960.",
      "The city has over 70 kilometers of beaches.",
    ],
    trivia: [
      "Rio's Sugarloaf Mountain offers stunning views of the city.",
      "It hosted the Summer Olympics in 2016.",
    ],
  },
];
module.exports = {
  jsonData,
};

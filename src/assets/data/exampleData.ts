// Contains example fetch requests

// Delays to emulate the delay
function emulateDelay(ms:number){
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Fetches data given a determined delay
// Good for testing skeleton loadouts when possible
export async function fetchNews(delay: number){
    await emulateDelay(delay)
    return newsSample
}

export async function fetchWeather(delay: number) {
    await emulateDelay(delay)
    return weatherSample
}

export async function fetchTVSamples(delay: number){
    await emulateDelay(delay)
    return tvSample
}

const tvSample = {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/4fvHPyILjx9oPApaskoXbkeIlzF.jpg",
            "id": 156902,
            "name": "Kaleidoscope",
            "original_language": "en",
            "original_name": "Kaleidoscope",
            "overview": "A master thief and his crew attempt an epic and elaborate heist worth $7 billion dollars — but betrayal, greed and other threats undermine their plans.",
            "poster_path": "/2nXJoSB5Y6R9ne7pjqL7Cs3zqY1.jpg",
            "media_type": "tv",
            "genre_ids": [
                80,
                18
            ],
            "popularity": 154.287,
            "first_air_date": "2023-01-01",
            "vote_average": 7.426,
            "vote_count": 34,
            "origin_country": [
                "US"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
            "id": 119051,
            "name": "Wednesday",
            "original_language": "en",
            "original_name": "Wednesday",
            "overview": "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.",
            "poster_path": "/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
            "media_type": "tv",
            "genre_ids": [
                10765,
                9648,
                35
            ],
            "popularity": 3806.85,
            "first_air_date": "2022-11-23",
            "vote_average": 8.712,
            "vote_count": 4608,
            "origin_country": [
                "US"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/hoVuI69nygLQBJ4FqgRKnukDeKt.jpg",
            "id": 106541,
            "name": "The Witcher: Blood Origin",
            "original_language": "en",
            "original_name": "The Witcher: Blood Origin",
            "overview": "More than a thousand years before the world of The Witcher, seven outcasts in the elven world unite in a blood quest against an unstoppable power.",
            "poster_path": "/vpfJK9F0UJNcAIIeC42oJyKMnZQ.jpg",
            "media_type": "tv",
            "genre_ids": [
                10759,
                10765
            ],
            "popularity": 1241.652,
            "first_air_date": "2022-12-25",
            "vote_average": 6.604,
            "vote_count": 206,
            "origin_country": [
                "US"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/bKxiLRPVWe2nZXCzt6JPr5HNWYm.jpg",
            "id": 110316,
            "name": "Alice in Borderland",
            "original_language": "ja",
            "original_name": "今際の国のアリス",
            "overview": "With his two friends, a video-game-obsessed young man finds himself in a strange version of Tokyo where they must compete in dangerous games to win.",
            "poster_path": "/uFXEoVPENgKJrkxFWlOhNMDwlEk.jpg",
            "media_type": "tv",
            "genre_ids": [
                18,
                9648,
                10759,
                10765
            ],
            "popularity": 689.682,
            "first_air_date": "2020-12-10",
            "vote_average": 8.206,
            "vote_count": 1146,
            "origin_country": [
                "JP"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/3Z4OC6UQa8GZ949kh08Zgq3mM1F.jpg",
            "id": 136283,
            "name": "The Glory",
            "original_language": "ko",
            "original_name": "더 글로리",
            "overview": "After a childhood marked by pain and violence, a woman puts a carefully planned revenge scheme in motion.",
            "poster_path": "/6jOpyXVzQyYL4QB12VRpHUxdwg1.jpg",
            "media_type": "tv",
            "genre_ids": [
                18
            ],
            "popularity": 201.422,
            "first_air_date": "2022-12-30",
            "vote_average": 8.5,
            "vote_count": 30,
            "origin_country": [
                "KR"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/98bqsUBVjXpbUt1fRkjn7hJQXrq.jpg",
            "id": 157080,
            "name": "Treason",
            "original_language": "en",
            "original_name": "Treason",
            "overview": "An MI6 deputy's bright future takes a sharp turn after a reunion with a Russian spy forces him to question his entire life.",
            "poster_path": "/qOitarv5B5ydsScN3dkJPipYPg3.jpg",
            "media_type": "tv",
            "genre_ids": [
                18,
                10759
            ],
            "popularity": 73.088,
            "first_air_date": "2022-12-26",
            "vote_average": 7.3,
            "vote_count": 54,
            "origin_country": [
                "GB"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/93SxdkiR3gBcbG5FxIt0DCBttul.jpg",
            "id": 111837,
            "name": "Willow",
            "original_language": "en",
            "original_name": "Willow",
            "overview": "Many years after the events of the original film, legendary sorcerer Willow leads a group of misfit heroes on a dangerous rescue mission through a world beyond their wildest imaginations.",
            "poster_path": "/jhdSPDlhswjN1r6O0pGP3ZvQgU8.jpg",
            "media_type": "tv",
            "genre_ids": [
                10765,
                10759,
                18
            ],
            "popularity": 765.348,
            "first_air_date": "2022-11-30",
            "vote_average": 7.004,
            "vote_count": 134,
            "origin_country": [
                "US"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/qtfMr08KQsWXnCHY0a96N8NpQ2l.jpg",
            "id": 30984,
            "name": "Bleach",
            "original_language": "ja",
            "original_name": "ブリーチ",
            "overview": "For as long as he can remember, Ichigo Kurosaki has been able to see ghosts. But when he meets Rukia, a Soul Reaper who battles evil spirits known as Hollows, he finds his life is changed forever. Now, with a newfound wealth of spiritual energy, Ichigo discovers his true calling: to protect the living and the dead from evil.",
            "poster_path": "/2EewmxXe72ogD0EaWM8gqa0ccIw.jpg",
            "media_type": "tv",
            "genre_ids": [
                10759,
                16,
                10765
            ],
            "popularity": 188.605,
            "first_air_date": "2004-10-05",
            "vote_average": 8.4,
            "vote_count": 1421,
            "origin_country": [
                "JP"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/6ovk8nrrSmN1ieT14zBAxcHbMU7.jpg",
            "id": 73375,
            "name": "Tom Clancy's Jack Ryan",
            "original_language": "en",
            "original_name": "Tom Clancy's Jack Ryan",
            "overview": "When CIA analyst Jack Ryan stumbles upon a suspicious series of bank transfers his search for answers pulls him from the safety of his desk job and catapults him into a deadly game of cat and mouse throughout Europe and the Middle East, with a rising terrorist figurehead preparing for a massive attack against the US and her allies.",
            "poster_path": "/z8yXhmNmc54TsMK2Ig4V4SHdkOX.jpg",
            "media_type": "tv",
            "genre_ids": [
                10759,
                18,
                10768
            ],
            "popularity": 194.188,
            "first_air_date": "2018-08-30",
            "vote_average": 7.688,
            "vote_count": 999,
            "origin_country": [
                "US"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/5DUMPBSnHOZsbBv81GFXZXvDpo6.jpg",
            "id": 114410,
            "name": "Chainsaw Man",
            "original_language": "ja",
            "original_name": "チェンソーマン",
            "overview": "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.",
            "poster_path": "/npdB6eFzizki0WaZ1OvKcJrWe97.jpg",
            "media_type": "tv",
            "genre_ids": [
                16,
                10759,
                10765,
                35
            ],
            "popularity": 1116.114,
            "first_air_date": "2022-10-12",
            "vote_average": 8.656,
            "vote_count": 591,
            "origin_country": [
                "JP"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/dGOhplPZTL0SKyb0ocTFBHIuKUC.jpg",
            "id": 68507,
            "name": "His Dark Materials",
            "original_language": "en",
            "original_name": "His Dark Materials",
            "overview": "Lyra is an orphan who lives in a parallel universe in which science, theology, and magic are intertwined. Her search for a kidnapped friend uncovers a sinister plot involving stolen children and turns into a quest to understand a mysterious phenomenon called Dust. She is later joined on her journey by Will, a boy who possesses a knife that can cut windows between worlds. As she learns the truth about her parents and her prophesied destiny, the two young people are caught up in a war against celestial powers that ranges across many worlds.",
            "poster_path": "/1ljcoM9hFNiXpcoevZQwwc7oCYT.jpg",
            "media_type": "tv",
            "genre_ids": [
                10765,
                18
            ],
            "popularity": 262.433,
            "first_air_date": "2019-11-03",
            "vote_average": 7.991,
            "vote_count": 1283,
            "origin_country": [
                "GB"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/rAZj3toS3GErvpRgoK4R4fFaGFq.jpg",
            "id": 137437,
            "name": "National Treasure: Edge of History",
            "original_language": "en",
            "original_name": "National Treasure: Edge of History",
            "overview": "While searching for history's greatest treasure, Jess Valenzuela unburies her family's secret past.",
            "poster_path": "/noRVimjdx6PwPBCVikhExYqogsX.jpg",
            "media_type": "tv",
            "genre_ids": [
                10759
            ],
            "popularity": 160.132,
            "first_air_date": "2022-12-14",
            "vote_average": 7.529,
            "vote_count": 51,
            "origin_country": [
                "US"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/ux6jlAQJOXqxnJnvWpelEXBCcVJ.jpg",
            "id": 135814,
            "name": "Lady Voyeur",
            "original_language": "pt",
            "original_name": "Olhar Indiscreto",
            "overview": "A talented, voyeuristic hacker finds herself thrust into a dangerous investigation after her sex worker neighbor leaves for a weekend trip.",
            "poster_path": "/y85e9oCVtgXSt1HfP9ZLZvr6AWs.jpg",
            "media_type": "tv",
            "genre_ids": [
                18,
                9648
            ],
            "popularity": 183.448,
            "first_air_date": "2023-01-01",
            "vote_average": 7.083,
            "vote_count": 12,
            "origin_country": [
                "BR"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/hFFAYkK8XkvIlQss9GYxo8TOhFi.jpg",
            "id": 73586,
            "name": "Yellowstone",
            "original_language": "en",
            "original_name": "Yellowstone",
            "overview": "Follow the violent world of the Dutton family, who controls the largest contiguous ranch in the United States. Led by their patriarch John Dutton, the family defends their property against constant attack by land developers, an Indian reservation, and America’s first National Park.",
            "poster_path": "/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg",
            "media_type": "tv",
            "genre_ids": [
                37,
                18
            ],
            "popularity": 1435.203,
            "first_air_date": "2018-06-20",
            "vote_average": 8.105,
            "vote_count": 1371,
            "origin_country": [
                "US"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/mNHRGO1gFpR2CYZdANe72kcKq7G.jpg",
            "id": 153312,
            "name": "Tulsa King",
            "original_language": "en",
            "original_name": "Tulsa King",
            "overview": "Just after he is released from prison after 25 years, New York mafia capo Dwight “The General” Manfredi is unceremoniously exiled by his boss to set up shop in Tulsa, Okla. Realizing that his mob family may not have his best interests in mind, Dwight slowly builds a “crew” from a group of unlikely characters, to help him establish a new criminal empire in a place that to him might as well be another planet.",
            "poster_path": "/fwTv3RPRAIy0maOMns5eYRRwnDk.jpg",
            "media_type": "tv",
            "genre_ids": [
                80,
                18
            ],
            "popularity": 793.196,
            "first_air_date": "2022-11-13",
            "vote_average": 8.699,
            "vote_count": 171,
            "origin_country": [
                "US"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/sjxtIUCWR74yPPcZFfTsToepfWm.jpg",
            "id": 105971,
            "name": "Star Wars: The Bad Batch",
            "original_language": "en",
            "original_name": "Star Wars: The Bad Batch",
            "overview": "The 'Bad Batch' of elite and experimental clones make their way through an ever-changing galaxy in the immediate aftermath of the Clone Wars.",
            "poster_path": "/49otrKpUVzMz8O2Wd02urwakYLY.jpg",
            "media_type": "tv",
            "genre_ids": [
                16,
                10759,
                10765
            ],
            "popularity": 134.607,
            "first_air_date": "2021-05-04",
            "vote_average": 8.4,
            "vote_count": 682,
            "origin_country": [
                "US"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/9I6LgZ5110ycg4pyobJxGTFWFCF.jpg",
            "id": 157744,
            "name": "1923",
            "original_language": "en",
            "original_name": "1923",
            "overview": "Follow a new generation of the Dutton family during the early twentieth century when pandemics, historic drought, the end of Prohibition and the Great Depression all plague the mountain west, and the Duttons who call it home.",
            "poster_path": "/zgZRJZvZn5cpsWAB0zMUdad3iZd.jpg",
            "media_type": "tv",
            "genre_ids": [
                18,
                37
            ],
            "popularity": 103.126,
            "first_air_date": "2022-12-18",
            "vote_average": 8.7,
            "vote_count": 24,
            "origin_country": [
                "US"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/Aa9TLpNpBMyRkD8sPJ7ACKLjt0l.jpg",
            "id": 94997,
            "name": "House of the Dragon",
            "original_language": "en",
            "original_name": "House of the Dragon",
            "overview": "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
            "poster_path": "/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
            "media_type": "tv",
            "genre_ids": [
                10765,
                18,
                10759
            ],
            "popularity": 608.528,
            "first_air_date": "2022-08-21",
            "vote_average": 8.5,
            "vote_count": 2740,
            "origin_country": [
                "US"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/yreuPT1RYFvWkQ3gjnjRP8vAq3o.jpg",
            "id": 120089,
            "name": "SPY x FAMILY",
            "original_language": "ja",
            "original_name": "SPY×FAMILY",
            "overview": "World peace is at stake and secret agent Twilight must undergo his most difficult mission yet—pretend to be a family man. Posing as a loving husband and father, he’ll infiltrate an elite school to get close to a high-profile politician. He has the perfect cover, except his wife’s a deadly assassin and neither knows each other’s identity. But someone does, his adopted daughter who’s a telepath!",
            "poster_path": "/nShEY0JnMOsvdhEnmYvL9mowIKz.jpg",
            "media_type": "tv",
            "genre_ids": [
                16,
                35,
                10759
            ],
            "popularity": 531.471,
            "first_air_date": "2022-04-09",
            "vote_average": 8.671,
            "vote_count": 1068,
            "origin_country": [
                "JP"
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/mBxsapX4DNhH1XkOlLp15He5sxL.jpg",
            "id": 37854,
            "name": "One Piece",
            "original_language": "ja",
            "original_name": "ワンピース",
            "overview": "Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous \"One Piece\" behind. Whoever claims the \"One Piece\" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a \"Devil Fruit,\" decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he's surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!",
            "poster_path": "/e3NBGiAifW9Xt8xD5tpARskjccO.jpg",
            "media_type": "tv",
            "genre_ids": [
                10759,
                35,
                16
            ],
            "popularity": 107.457,
            "first_air_date": "1999-10-20",
            "vote_average": 8.711,
            "vote_count": 3481,
            "origin_country": [
                "JP"
            ]
        }
    ],
    "total_pages": 1000,
    "total_results": 20000
}

const newsSample = {
    "status": "ok",
    "totalResults": 69,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "Investor's Business Daily"
            },
            "author": "Investor's Business Daily",
            "title": "Dow Jones Futures Await Fed's Favorite Inflation Report; Tesla Rises On Elon Musk Pledge | Investor's Business Daily - Investor's Business Daily",
            "description": "The S&P 500 closed off lows, but fell back below its 50-day line.",
            "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-fed-favorite-inflation-report-tesla-rises-late-on-elon-musk-pledge/",
            "urlToImage": "https://www.investors.com/wp-content/uploads/2022/05/Stock-elonmusk-grumpy-01-shutt.jpg",
            "publishedAt": "2022-12-23T12:08:00Z",
            "content": "Dow Jones futures rose slightly Friday morning, along with S&amp;P 500 futures and Nasdaq futures. The Federal Reserve's favorite inflation gauge is on tap before the open, while Tesla stock rose on … [+8315 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Facebook parent Meta to settle Cambridge Analytica case for $725 million - Reuters",
            "description": "Facebook owner Meta Platforms Inc <a href=\"https://www.reuters.com/companies/META.O\" target=\"_blank\">(META.O)</a> has agreed to pay $725 million to resolve a class-action lawsuit accusing the social media giant of allowing third parties, including Cambridge A…",
            "url": "https://www.reuters.com/legal/facebook-parent-meta-pay-725-mln-settle-lawsuit-relating-cambridge-analytica-2022-12-23/",
            "urlToImage": "https://www.reuters.com/resizer/1RYKNdy9-NCuh4eBfNFpr9EyhYU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IRPQ3IJTQBIO3I5R7KRBCM2P5U.jpg",
            "publishedAt": "2022-12-23T10:20:00Z",
            "content": "Dec 23 (Reuters) - Facebook owner Meta Platforms Inc (META.O) has agreed to pay $725 million to resolve a class-action lawsuit accusing the social media giant of allowing third parties, including Cam… [+2943 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Lee Ying Shan",
            "title": "Asia markets fall as Japan's core inflation marks highest in over 40 years - CNBC",
            "description": "Asia-Pacific shares traded lower, following Wall Street's losses as investors looked ahead to some economic data in the region.",
            "url": "https://www.cnbc.com/2022/12/23/japan-inflation-marks-40-year-high.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/103385748-GettyImages-560347813-2.jpg?v=1671753931&w=1920&h=1080",
            "publishedAt": "2022-12-23T07:56:00Z",
            "content": "China is planning to scrap quarantine requirements for overseas travelers next month, Bloomberg reported, citing sources familiar with the matter.\r\nInternational arrivals into mainland China will onl… [+362 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Airport strikes: Travellers warned to expect disruption - BBC",
            "description": "Border Force staff are walking out in a row over pay while rail passengers face industrial action.",
            "url": "https://www.bbc.com/news/business-64060584",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11E4A/production/_128109237_passportgetty.png",
            "publishedAt": "2022-12-23T07:34:11Z",
            "content": "Hundreds of thousands of travellers arriving in the UK have been told to expect disruption as passport control workers begin strikes.\r\nBorder Force staff are the latest UK workers to take industrial … [+5180 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Elliot Smith",
            "title": "Bond yields to climb 'for the wrong reasons' next year — and it will affect stocks, strategist says - CNBC",
            "description": "\"Something is interesting in the bond market ... and I think we have to be wary of it next year,\" said Peter Toogood, chief investment officer at Embark Group.",
            "url": "https://www.cnbc.com/2022/12/23/bond-yields-to-climb-for-the-wrong-reasons-next-year-strategist-says.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/103588820-GettyImages-94899709.jpg?v=1671777219&w=1920&h=1080",
            "publishedAt": "2022-12-23T06:33:39Z",
            "content": "LONDON Government bond yields are likely to rise in 2023 \"for the wrong reasons,\" according to Peter Toogood, chief investment officer at Embark Group, as central banks step up efforts to reduce thei… [+3447 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Internet"
            },
            "author": "https://www.facebook.com/thehackernews",
            "title": "LastPass Admits to Severe Data Breach, Encrypted Password Vaults Compromised - The Hacker News",
            "description": "August 2022 security breach at popular password management service LastPass was worse than originally reported.",
            "url": "https://thehackernews.com/2022/12/lastpass-admits-to-severe-data-breach.html",
            "urlToImage": "https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEiCTdxbQKamrLeVc8hOKLC92sJOQ58eChoyDPWiw2hlEPTuoWmCxQ34r8VEIAQ_2djIHM4_TUUWcuV46iloiI94oT2Zi6KYfs9SWDRzZjvw6708AY3Jh8S_Bx1UFHAZ08As4A3KCe4j-mGRRRx9iwnAOwMZWF_aRI0FmMaqgFdmTYG6WFoDI0qjxaCQ/s728-rj-e3650/lastpass.png",
            "publishedAt": "2022-12-23T04:07:00Z",
            "content": "The August 2022 security breach of LastPass may have been more severe than previously disclosed by the company.\r\nThe popular password management service on Thursday revealed that malicious actors obt… [+3132 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HuffPost"
            },
            "author": "Ben Blanchet",
            "title": "Twitter Adds View Counts Under Tweets, And Users Aren't Feeling It - HuffPost",
            "description": "\"You can’t even flop in peace,\" one Twitter user wrote.",
            "url": "https://www.huffpost.com/entry/twitter-adds-view-counts-tweets_n_63a5154ae4b0cbfd55da7e99",
            "urlToImage": "https://img.huffingtonpost.com/asset/63a51c2d220000580089e5db.jpeg?cache=FoLnYEazDG&ops=1200_630",
            "publishedAt": "2022-12-23T03:58:28Z",
            "content": "Twitter CEO Elon Musk announced the social media platform has started rolling out view counts under tweets, and many users think the change doesnt allow posts to flop in peace.\r\nMusk, who announced t… [+1949 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Brenda Goodman",
            "title": "Target recalls Pillowfort weighted blankets for kids after two deaths - CNN",
            "description": "Target stores are recalling more than 200,000 weighted blankets for children that have been sold by the retailer from December 2018 through September 2022. The Pillowfort brand blankets can trap children inside if they unzip them and enter the blanket.",
            "url": "https://www.cnn.com/2022/12/22/health/weighted-blankets-kids-recall-target/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221222204806-target-weighted-blankets-recall.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-12-23T03:56:00Z",
            "content": "Target stores are recalling more than 200,000 weighted blankets for children that have been sold by the retailer from December 2018 through September 2022. \r\nThe Pillowfort brand blankets can trap ch… [+991 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Netflix Password Sharing To End In 2023 - Screen Rant",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiRmh0dHBzOi8vc2NyZWVucmFudC5jb20vbmV0ZmxpeC1wYXNzd29yZC1zaGFyaW5nLXN0b3AtdGltZWxpbmUtZGV0YWlscy_SAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-12-23T03:22:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Robert Wall",
            "title": "Elon Musk Says He Will Pause Selling Tesla Shares - The Wall Street Journal",
            "description": "The Tesla CEO says a share buyback would depend on the severity of any recession",
            "url": "https://www.wsj.com/articles/elon-musk-says-tesla-share-buyback-could-depend-on-severity-of-any-recession-11671751191",
            "urlToImage": "https://images.wsj.net/im-691507/social",
            "publishedAt": "2022-12-23T02:35:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Richard Lawler",
            "title": "FTX co-founder Sam Bankman-Fried is back in the US, released on $250 million bail - The Verge",
            "description": "Sam Bankman-Fried was released from federal custody to live with his parents while awaiting trial on fraud and money laundering charges relating to his failed crypto exchange FTX.",
            "url": "https://www.theverge.com/2022/12/22/23523149/sam-bankman-fried-250m-bail-ftx-crypto-fraud",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/hKTsJ4kH95ULYiT6T8TXIYcteWE=/221x79:4775x2900/1200x628/filters:focal(2505x1214:2506x1215)/cdn.vox-cdn.com/uploads/chorus_asset/file/24312564/1245786421.jpg",
            "publishedAt": "2022-12-23T02:17:00Z",
            "content": "FTX co-founder Sam Bankman-Fried is back in the US, released on $250 million bail\r\nFTX co-founder Sam Bankman-Fried is back in the US, released on $250 million bail\r\n / Former executives from SBFs cr… [+4226 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Charley Grant, James R. Hagerty",
            "title": "Scott Minerd, Guggenheim Partners' Investment Chief, Dies at Age 63 - The Wall Street Journal",
            "description": "An early member of the firm, he helped shape its growth from a startup to the manager of more than $218 billion in assets",
            "url": "https://www.wsj.com/articles/scott-minerd-guggenheim-partners-investment-chief-dies-at-age-63-11671747856",
            "urlToImage": "https://images.wsj.net/im-691412/social",
            "publishedAt": "2022-12-23T02:08:00Z",
            "content": "Scott Minerd, an outspoken and influential fund manager who was chief investment officer of Guggenheim Partners, died Wednesday of a heart attack.\r\nMr. Minerd, 63 years old and a committed weightlift… [+90 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Benzinga"
            },
            "author": "Shivdeep Dhaliwal",
            "title": "Bitcoin, Ethereum Muted, Dogecoin Spikes: No Signs Of 'Santa Claus' Rally As Analyst Says Tech Rout Behin - Benzinga",
            "description": "Bitcoin and Ethereum were trading nearly flat on Thursday evening, ahead of the holiday weekend, as the global cryptocurrency market cap rose 0.2% to $811.2 billion at 7:16 p.m. EST.",
            "url": "https://www.benzinga.com/markets/cryptocurrency/22/12/30182429/bitcoin-ethereum-muted-dogecoin-spikes-no-signs-of-santa-claus-rally-as-analyst-says-tech-",
            "urlToImage": "https://cdn.benzinga.com/files/images/story/2022/12/22/shutterstock_1968480388.jpg?width=1200&height=800&fit=crop",
            "publishedAt": "2022-12-23T01:06:15Z",
            "content": "Bitcoin and Ethereum were trading nearly flat on Thursday evening, ahead of the holiday weekend, as the global cryptocurrency market cap rose 0.2% to $811.2 billion at 7:16 p.m. EST.\r\n<table>Price Pe… [+2978 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Clare Duffy",
            "title": "Twitter layoffs continue under Elon Musk - CNN",
            "description": "Additional Twitter employees were terminated Thursday as part of ongoing, rolling layoffs under new owner Elon Musk, including from the public policy and media and entertainment teams, according to tweets from affected employees.",
            "url": "https://www.cnn.com/2022/12/22/tech/twitter-layoffs-continue/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221222165409-twitter-building-1219.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-12-23T00:57:00Z",
            "content": "Additional Twitter employees were terminated Thursday as part of ongoing, rolling layoffs under new owner Elon Musk, including from the public policy and media and entertainment teams, according to t… [+2643 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Jim Cramer says the 'worst of 3 worlds' helped lead stocks lower on Thursday - CNBC Television",
            "description": "Cramer offered his take on what weighed stocks down during Thursday's trading session.",
            "url": "https://www.youtube.com/watch?v=1jmtdh0RWak",
            "urlToImage": "https://i.ytimg.com/vi/1jmtdh0RWak/maxresdefault.jpg",
            "publishedAt": "2022-12-23T00:36:49Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Tesla Launches $300 AirPower-Like Wireless Charger That Can Power Three Qi Devices at Once - MacRumors",
            "description": "Tesla today announced the launch of the Tesla Wireless Charging Platform, a $300 wireless charger that is able to charge up to three Qi devices...",
            "url": "https://www.macrumors.com/2022/12/22/tesla-airpower-like-woreless-charger/",
            "urlToImage": "https://images.macrumors.com/t/t72nscoqLzW6ODPy9i0DVdrQIh0=/2000x/article-new/2022/12/tesla-wireless-charger.jpg",
            "publishedAt": "2022-12-23T00:23:27Z",
            "content": "Tesla today announced the launch of the Tesla Wireless Charging Platform, a $300 wireless charger that is able to charge up to three Qi devices at one time.\r\nThe concept is somewhat similar to the Ai… [+1989 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KARE11.com"
            },
            "author": "Heidi Wigdahl",
            "title": "Energy companies urge conservation to avoid higher bills - KARE11.com",
            "description": "Both CenterPoint Energy and Xcel Energy are urging customers to make some changes in order to avoid higher heating bills.",
            "url": "https://www.kare11.com/article/money/tips-for-saving-money-on-your-heating-bill/89-fc9fe45d-20a7-4277-bf86-815cac827703",
            "urlToImage": "https://media.kare11.com/assets/KARE/images/eed26b7e-89cd-49a2-b5f1-380dd09117e1/eed26b7e-89cd-49a2-b5f1-380dd09117e1_1140x641.jpg",
            "publishedAt": "2022-12-23T00:07:10Z",
            "content": "MINNEAPOLIS, Minnesota With record-cold temperatures settling in across the country, energy companies are urging customers to be proactive. \r\nXcel Energy said an increase in wholesale natural gas pri… [+3332 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Samantha Delouya",
            "title": "Elon Musk says we're 'overdue' for a recession, won't sell any more Tesla stock for 18-24 months: 'I need to sell some stock to make sure there was powder dry to account for a worst-case scenario' - Yahoo News",
            "description": "In a Twitter Spaces chat, Elon Musk said he wouldn't sell Tesla stock until 2025. Tesla shares have plummeted since he took over as CEO of Twitter.",
            "url": "https://www.businessinsider.com/elon-musk-wont-sell-tesla-stock-next-year-recession-overdue-2022-12",
            "urlToImage": "https://media.zenfs.com/en/business_insider_articles_888/6483a521ff236f9b1ddda9cd042b26f9",
            "publishedAt": "2022-12-23T00:01:00Z",
            "content": "Elon Musk in front of a TeslaGetty\r\n<ul><li>Elon Musk said in a Twitter Spaces chat that he would not sell more Tesla stock for the next 18-24 months.\r\n</li><li>Musk told listeners on the chat that h… [+1870 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CoinDesk"
            },
            "author": "Nick Baker",
            "title": "FTX Asks Judge for Help in Fight Over Robinhood Shares Worth About $450M - CoinDesk",
            "description": "Three parties, including ex-FTX CEO Sam Bankman-Fried, have tried to get control over the 56 million shares.",
            "url": "https://www.coindesk.com/business/2022/12/22/ftx-ask-judge-for-help-in-fight-over-robinhood-shares-worth-about-450m/",
            "urlToImage": "https://www.coindesk.com/resizer/OsqG0e28jlgFembgPrOJal7CBRU=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/WHGCA65X5JHKNDO3L37XQLZZFM.jpg",
            "publishedAt": "2022-12-22T23:18:00Z",
            "content": "FTX sought a U.S. bankruptcy court's help amid a battle over ownership of about $450 million worth of stock in Robinhood Markets (HOOD), according to a filing Thursday.\r\nAt issue are about 56 million… [+1497 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "TOM KRISHER AP Auto Writer",
            "title": "Tesla offers rare year-end discounts on 2 top-selling models - ABC News",
            "description": "Tesla is offering rare discounts through year’s end on its two top-selling models, an indication that demand is slowing for its electric vehicles",
            "url": "https://abcnews.go.com/Technology/wireStory/tesla-offers-rare-year-end-discounts-2-top-95730141",
            "urlToImage": "https://s.abcnews.com/images/Business/WireAP_461bdcf7bb8740bd8259c0009218b1fd_16x9_992.jpg",
            "publishedAt": "2022-12-22T23:14:48Z",
            "content": "DETROIT -- Tesla Inc. is offering rare discounts through year's end on its two top-selling models, an indication that demand is slowing for its electric vehicles.\r\nThe Austin, Texas, company started … [+3144 chars]"
        }
    ]
}

const weatherSample = {
    "location": {
        "name": "Dubai",
        "region": "Dubai",
        "country": "United Arab Emirates",
        "lat": 25.25,
        "lon": 55.28,
        "tz_id": "Asia/Dubai",
        "localtime_epoch": 1671996364,
        "localtime": "2022-12-25 23:26"
    },
    "current": {
        "last_updated_epoch": 1671995700,
        "last_updated": "2022-12-25 23:15",
        "temp_c": 24,
        "temp_f": 75.2,
        "is_day": 0,
        "condition": {
            "text": "Clear",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
            "code": 1000
        },
        "wind_mph": 9.4,
        "wind_kph": 15.1,
        "wind_degree": 300,
        "wind_dir": "WNW",
        "pressure_mb": 1015,
        "pressure_in": 29.97,
        "precip_mm": 0,
        "precip_in": 0,
        "humidity": 57,
        "cloud": 0,
        "feelslike_c": 25.5,
        "feelslike_f": 77.9,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 1,
        "gust_mph": 15.2,
        "gust_kph": 24.5
    },
    "forecast": {
        "forecastday": [
            {
                "date": "2022-12-25",
                "date_epoch": 1671926400,
                "day": {
                    "maxtemp_c": 25.4,
                    "mintemp_c": 21.8,
                    "avgtemp_c": 23.2,
                    "maxwind_mph": 17,
                    "maxwind_kph": 27.4,
                    "totalprecip_mm": 1,
                    "totalprecip_in": 0.04,
                    "totalsnow_cm": 0,
                    "daily_will_it_rain": 1,
                    "daily_chance_of_rain": 89,
                    "daily_will_it_snow": 0,
                    "daily_chance_of_snow": 0,
                    "condition": {
                        "text": "Patchy rain possible",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                        "code": 1063
                    },
                    "uv": 5
                },
                "astro": {},
                "hour": [
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    }
                ]
            },
            {
                "date": "2022-12-26",
                "date_epoch": 1672012800,
                "day": {
                    "maxtemp_c": 23.1,
                    "mintemp_c": 17.3,
                    "avgtemp_c": 20.7,
                    "maxwind_mph": 17,
                    "maxwind_kph": 27.4,
                    "totalprecip_mm": 8.6,
                    "totalprecip_in": 0.34,
                    "totalsnow_cm": 0,
                    "daily_will_it_rain": 1,
                    "daily_chance_of_rain": 89,
                    "daily_will_it_snow": 0,
                    "daily_chance_of_snow": 0,
                    "condition": {
                        "text": "Moderate rain",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png",
                        "code": 1189
                    },
                    "uv": 5
                },
                "astro": {},
                "hour": [
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    }
                ]
            },
            {
                "date": "2022-12-27",
                "date_epoch": 1672099200,
                "day": {
                    "maxtemp_c": 18.9,
                    "mintemp_c": 16.9,
                    "avgtemp_c": 18.1,
                    "maxwind_mph": 11,
                    "maxwind_kph": 17.6,
                    "totalprecip_mm": 44,
                    "totalprecip_in": 1.73,
                    "totalsnow_cm": 0,
                    "daily_will_it_rain": 1,
                    "daily_chance_of_rain": 87,
                    "daily_will_it_snow": 0,
                    "daily_chance_of_snow": 0,
                    "condition": {
                        "text": "Heavy rain",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/308.png",
                        "code": 1195
                    },
                    "uv": 4
                },
                "astro": {},
                "hour": [
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    },
                    {
                        "condition": {}
                    }
                ]
            }
        ]
    },
    "alerts": {
        "alert": []
    }
}
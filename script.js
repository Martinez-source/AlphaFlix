const movieSections = {
    "top-picks-container": [{
        type: "movie",
        title: "Ballerina",
        genre: "Action, Thriller, Movie",
        rating: "8.5", 
        status: "", 
        description: "A ballerina assassin seeks revenge for her family's murder within the John Wick universe.",
        image: "images/Ballerina.jpg",
        bannerImage: "images/ballerina banner.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/85gNxsNa",
        sceneUrl: "videos/ballerina trailer.mp4",
    }, {
        type: "movie",
        title: "How to Train your Dragon",
        genre: "Fantasy, Movie",
        rating: "9.9",
        status: "", 
        description: "A Viking boy found a dragon and trained it, learning that dragons are not that bad.",
        image: "images/How to Train Your Dragon.jpg",
        bannerImage: "images/image copy.png",
        actualMovieUrl: "https://pixeldrain.com/api/file/QzgsPt3U",
        sceneUrl: "videos/how to train ur dragon trailer.mp4",
    }, {
        title: "Straw",
        type: "movie",
        genre: "Movie",
        rating: "6.6",
        status: "", 
        description: "A single mother's life spirals into chaos, leading to a bank standoff with a shocking twist.",
        image: "images/Straw.jpg",
        bannerImage: "images/straw banner.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/57EXZ1aB",
        sceneUrl: "videos/straw trailer.mp4",
    }, {
        type: "movie",
        title: "Mission Impossible: Final Reckoning",
        genre: "Action, Thriller, Movie",
        rating: "7.1",
        status: "", 
        description: "Ethan Hunt's final stand. Old enemies return. One last impossible mission begins now.",
        image: "images/Mission_ Impossible - The Final Reckoning.jpg",
        bannerImage: "images/mission impossible banner.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/RpbPvNF9",
        sceneUrl: "videos/mission trailer.mp4",
    },
    {
        type: "movie",
        title: "The Old Guard",
        genre: "Action, Thriller, Movie",
        rating: "6.6",
        status: "", 
        description: "Immortals roaming about the world",
        image: "images/the old guard.jpg",
        bannerImage: "images/the old guard banner.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/KVpkynEJ",
        sceneUrl: "videos/the old guard trailer.mp4",
    },
     {
        type: "tv series",
        title: "Ironheart",
        genre: "Action, TV Series",
        rating: "7.2",
        status: "", 
        description: "New iron girl is found.",
        image: "images/Ironheart.jpg",
        bannerImage: "images/image copy 5.png",
        sceneUrl: "videos/ironheart trailer.mp4",
        seasons: [{
            season: 1,
            episodes: [
                { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/BojhH6cV" },
                { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/JrsqLn2D" },
                { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/ujAJv3Jp" },
            ]
        }
        ]
    }, {
        type: "movie",
        title: "Thunderbolts",
        genre: "Action, Thriller, Movie",
        rating: "8.5",
        status: "", 
        description: "New avengers unleashed.",
        image: "images/Thunderbolt.jpg",
        bannerImage: "images/image copy 7.png",
        actualMovieUrl: "https://pixeldrain.com/api/file/46z94pV9",
        sceneUrl: "videos/thunderbolt trailer.mp4",
    }, {
        type: "movie",
        title: "Final Destination: Bloodline",
        genre: "Horror, Movie",
        rating: "9.5",
        status: "", 
        description: "A family is hunted by Death after their grandmother cheated fate decades ago—nobody escapes.",
        image: "images/final destination bloodlines.jpg",
        bannerImage: "images/image copy 2.png",
        actualMovieUrl: "https://pixeldrain.com/api/file/HgvbKXDG",
        sceneUrl: "videos/final destination trailer.mp4",
    }, {
        type: "movie",
        title: "Captain America: Brave New World",
        genre: "Action, Thriller, Movie",
        rating: "6.0",
        status: "", 
        description: "New element adamatium is discovered, President became a vilian...",
        image: "images/cap america.png",
        bannerImage: "images/captain america banner.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/oyjx925S",
        sceneUrl: "videos/captain america trailer.mp4",
    }, ],
    "trending-now-container": [{
        type: "tv series",
        title: "Squid Game",
        genre: "Action, TV Series",
        rating: "8.1",
        status: "THE FINAL SC. 23.3", 
        description: "",
        image: "images/squid game.jpg",
        seasons: [{
            season: 1,
            episodes: [
                { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/cuDma5zv" },
                { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/kJajT5tR" },
                { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/4FNrzGnU" },
                { title: "Episode 4", duration: "", url: "https://pixeldrain.com/api/file/m8VzY8RL" },
                { title: "Episode 5", duration: "", url: "https://pixeldrain.com/api/file/qsv97d7n" },
                { title: "Episode 6", duration: "", url: "https://pixeldrain.com/api/file/mqhswK7S" },
                { title: "Episode 7", duration: "", url: "https://pixeldrain.com/api/file/hdw5gb2B" },
                { title: "Episode 8", duration: "", url: "https://pixeldrain.com/api/file/je5BkYo6" },
                { title: "Episode 9", duration: "", url: "https://pixeldrain.com/api/file/vSFr5UDr" },
            ]
        }, {
            season: 2,
            episodes: [
                { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/ihmk9dhP" },
                { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/uACCYVrr" },
                { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/CwTFrVYu" },
                { title: "Episode 4", duration: "", url: "https://pixeldrain.com/api/file/5ij5riNR" },
                { title: "Episode 5", duration: "", url: "https://pixeldrain.com/api/file/NHK8fLve" },
                { title: "Episode 6", duration: "", url: "https://pixeldrain.com/api/file/5UWduuBf" },
                { title: "Episode 7", duration: "", url: "https://pixeldrain.com/api/file/nBo27xcN" },
            ]
        }, {
            season: 3,
            episodes: [
                { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/Pbnr1MxM" },
                { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/NytwzYWk" },
                { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/iExWzp2z" },
                { title: "Episode 4", duration: "", url: "https://pixeldrain.com/api/file/1voAajvu" },
                { title: "Episode 5", duration: "", url: "https://pixeldrain.com/api/file/ufwuCVdU" },
                { title: "Episode 6", duration: "", url: "https://pixeldrain.com/api/file/fP2VNbbQ" },
            ]
        }, ]
    }, {
        type: "movie",
        title: "Ballerina",
        genre: "Action, Thriller, Movie",
        rating: "8.5",
        status: "", 
        description: "A ballerina assassin seeks revenge for her family's murder within the John Wick universe.",
        image: "images/Ballerina.jpg",
        bannerImage: "images/ballerina big poster.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/85gNxsNa",
        sceneUrl: "https://pixeldrain.com/api/file/85gNxsNa",
    }, {
        type: "movie",
        title: "How to Train your Dragon",
        genre: "Fantasy, Movie",
        rating: "9.9",
        status: "", 
        description: "A Viking boy found a dragon and trained it, learning that dragons are not that bad.",
        image: "images/How to Train Your Dragon.jpg",
        bannerImage: "images/image copy.png",
        actualMovieUrl: "https://pixeldrain.com/api/file/QzgsPt3U",
        sceneUrl: "https://pixeldrain.com/api/file/wZ6b2qXC",
    }, {
        type: "movie",
        title: "Straw",
        genre: "Movie",
        rating: "6.6",
        status: "", 
        description: "A single mother's life spirals into chaos, leading to a bank standoff with a shocking twist.",
        image: "images/Straw.jpg",
        bannerImage: "images/image copy.png",
        actualMovieUrl: "https://pixeldrain.com/api/file/57EXZ1aB",
        sceneUrl: "",
    }, {
        type: "movie",
        title: "Thunderbolts",
        genre: "Action, Thriller, Movie",
        rating: "8.5",
        status: "", 
        description: "New avengers unleashed.",
        image: "images/Thunderbolt.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/46z94pV9",
        sceneUrl: "",
    }, {
        type: "movie",
        title: "Mission Impossible: Final Reckoning",
        genre: "Action, Thriller, Movie",
        rating: "7.1",
        status: "", 
        description: "Ethan Hunt's final stand. Old enemies return. One last impossible mission begins now.",
        image: "images/Mission_ Impossible - The Final Reckoning.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/RpbPvNF9",
        sceneUrl: "",
    },
    {
        title: "Shadow Force",
        type: "movie",
        genre: "Action",
        rating: 6.1, 
        description: "An estranged couple, former elite black ops leaders, must go on the run with their son when their old unit hunts them.",
        image: "images/shadow force.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/9r547bQx",
    },
    {
        title: "Sinners",
        type: "movie",
        genre: "Movie",
        rating: 6.9, 
        description: "Twin brothers return home, confronting a malevolent, musical vampire evil in 1930s Mississippi.",
        image: "images/sinners.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/iA4otwNz",
    },
     {
        type: "movie",
        title: "The Accountant 2",
        genre: "Movie",
        rating: "7.6",
        status: "", 
        description: "Christian Wolff returns, teaming up with his brother to expose a deadly global financial conspiracy.",
        image: "images/accountant 2.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/tCj5r4n9",
        sceneUrl: "",
    },
    {
        type: "movie",
        title: "The Old Guard",
        genre: "Action, Thriller, Movie",
        rating: "6.6",
        status: "", 
        description: "Immortals roaming about the world",
        image: "images/the old guard.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/KVpkynEJ",
        sceneUrl: "",
    },
    {
        type: "movie",
        title: "The Old Guard 2",
        genre: "Action, Thriller, Movie",
        rating: "6.1",
        status: "", 
        description: "Immortals roaming about the world",
        image: "images/the old guard 2.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/F6rey7Ci",
        sceneUrl: "",
    },
 ],
    "science-fiction-container": [{
        type: "movie",
        title: "The Avengers",
        genre: "Sci-Fi",
        rating: "9.1",
        status: "",
        description: "Loki the brother to thor and the god of mischief was found wanting to destroy the world and the avengers were formed to stop him.",
        image: "images/the avengers.png",
        actualMovieUrl: "https://pixeldrain.com/api/file/5Pid5uj7",
    }, {
        type: "tv series",
        title: "Ironheart",
        genre: "Action, TV Series",
        rating: "7.2",
        status: "", 
        description: "New iron girl is found.",
        image: "images/Ironheart.jpg",
        bannerImage: "images/image copy 5.png",
        sceneUrl: "",
        seasons: [{
            season: 1,
            episodes: [
                { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/BojhH6cV" },
                { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/JrsqLn2D" },
                { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/ujAJv3Jp" },
            ]
        }
        ]
    },
    {
        type: "tv series",
        title: "Hawkeye",
        genre: "Action, TV Series",
        rating: "8.0",
        status: "", 
        description: "Yelena came to avenge her sister Natasha Romanoff's death, but Hawkeye was not the one that killed her.",
        image: "images/hawkeye.jpg",
        sceneUrl: "",
        seasons: [{
            season: 1,
            episodes: [
                { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/uraC4K7h" },
                { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/yE5hotLv" },
                { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/7YtHApfh" },
                { title: "Episode 4", duration: "", url: "https://pixeldrain.com/api/file/shegvEP5" },
                { title: "Episode 5", duration: "", url: "https://pixeldrain.com/api/file/nNZX2tFV" },
                { title: "Episode 6", duration: "", url: "https://pixeldrain.com/api/file/rdSimgVr" },
            ]
        }
        ]
    },
    {
        title: "LOKI",
        type: "tv series",
        genre:  "Action, TV Series", 
        rating: 9.2, 
        description: "Loki the brother to thor and the god of mischief was trapped in the TVA and finding his way out",
        image: "images/Loki.jpg",
        seasons: [
            {
                season: 1,
                episodes: [
                    { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/hryPkNEX" },
                    { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/p8nb99Ng" },
                    { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/bxvNACNA" },
                    { title: "Episode 4", duration: "", url: "https://pixeldrain.com/api/file/Bhp4pYoK" },
                    { title: "Episode 5", duration: "", url: "https://pixeldrain.com/api/file/MWJa6pct" },
                    { title: "Episode 6", duration: "", url: "https://pixeldrain.com/api/file/mw5potDV" },
                ]
            },
            {
                season: 2,
                episodes: [
                    { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/eegHUHh2" },
                    { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/KuYU93bL" },
                    { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/znfcb36q" },
                    { title: "Episode 4", duration: "", url: "https://pixeldrain.com/api/file/CvNW3B88" },
                    { title: "Episode 5", duration: "", url: "https://pixeldrain.com/api/file/HqJqWgd4" },
                    { title: "Episode 6", duration: "", url: "https://pixeldrain.com/api/file/X8RBGprn" },
                ]
            }
        ]
    },
     {
        type: "movie",
        title: "Iron Man",
        genre: "Action, Movie",
        rating: "8.5",
        status: "",
        description: "Billionaire builds suit in a cave. Birth of MCU. Charisma, tech, and redemption collide hard.",
        image: "images/iron man.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/t6M6vFHa",
        sceneUrl: "",
    }, {
        type: "movie",
        title: "Iron Man 2",
        genre: "Action, Movie",
        rating: "6.9",
        status: "",
        description: "Tony's health fades, rivals rise. Cool fights, new War Machine, but messy and overloaded plot.",
        image: "images/iron man 2.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/bwe7SGKP+",
        sceneUrl: "",
    }, {
        type: "movie",
        title: "Iron Man 3",
        genre: "Action, Movie",
        rating: "7.1",
        status: "",
        description: "Post-Avengers trauma, fake Mandarin twist. Iron suits galore. Divisive but deeper than expected emotionally.",
        image: "images/iron man 3.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/MDC7bUYi",
        sceneUrl: "",
    }, {
        type: "movie",
        title: "Avengers: Infinity War",
        genre: "Action, Sci-Fi",
        rating: "9.0",
        status: "",
        description: "Thanos snaps. Heroes scatter. Emotions fly. Easily Marvel's darkest and most insane crossover event ever.",
        image: "images/Avengers infinity war.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/ygSH8SfU",
    }, {
        type: "movie",
        title: "Avengers: Endgame",
        genre: "Action, Sci-Fi",
        rating: "8.8",
        status: "",
        description: "Time travel heist, portals, epic goodbye to legends. The emotional climax MCU fans deserved.",
        image: "images/Avengers end game.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/QZgUsk8y",
    },
    {
        type: "movie",
        title: "Black Panther: Wakander Forever",
        genre: "African, Action",
        rating: "7.5",
        status: "",
        description: "King T'Chala is dead who will be the next Black Panther",
        image: "images/wakander forever.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/o8L2t6So",
    }, 
    {
        type: "movie",
        title: "Black Panther",
        genre: "African, Action",
        rating: "8.5",
        status: "",
        description: "T'Chala became king, old brother returns, chaos in wakanda...",
        image: "images/black panther.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/hety5CEe",
    },
 ],
    "action-container": [{
        type: "movie",
        title: "Avengers: Age of Ultron",
        genre: "Action",
        rating: "7.5",
        status: "",
        description: "Tony plays god, creates killer AI, and things go boom. Darker, messier, still fun.",
        image: "images/Avengers age of ultron.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/3TCDbbfQ",
    }, {
        type: "movie",
        title: "Spiderman: Homecoming",
        genre: "Action",
        rating: "9.2",
        status: "",
        description: "Peter Parker becoming the super hero as a teenager...",
        image: "images/spiderman home.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/WnWgZoJM",
    }, {
        type: "movie",
        title: "Spiderman: Far from Home",
        genre: "Action",
        rating: "9.0",
        status: "",
        description: "A kid already a super hero, the spiderman ...",
        image: "images/Spider-Man_Far_From_Home_poster.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/15dJ1ARU",
    }, {
        type: "movie",
        title: "Spiderman: No Way Home",
        genre: "Action, Sci-Fi",
        rating: "9.3",
        status: "",
        description: "Peter loses is Aunty, the three Spiderman united to defeat enemies.",
        image: "images/Spider-Man_No_Way_Home_poster.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/GB3LPrvj",
    },
    {
        type: "tv series",
        title: "Hawkeye",
        genre: "Action, TV Series",
        rating: "8.0",
        status: "", 
        description: "Yelena came to avenge her sister Natasha Romanoff's death, but Hawkeye was not the one that killed her.",
        image: "images/hawkeye.jpg",
        sceneUrl: "",
        seasons: [{
            season: 1,
            episodes: [
                { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/uraC4K7h" },
                { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/yE5hotLv" },
                { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/7YtHApfh" },
                { title: "Episode 4", duration: "", url: "https://pixeldrain.com/api/file/shegvEP5" },
                { title: "Episode 5", duration: "", url: "https://pixeldrain.com/api/file/nNZX2tFV" },
                { title: "Episode 6", duration: "", url: "https://pixeldrain.com/api/file/rdSimgVr" },
            ]
        }
        ]
    },
    {
        type: "tv series",
        title: "The Falcon and the Winter Soldier",
        genre: "Action, TV Series",
        rating: "7.6",
        status: "", 
        description: "Sam Wilson and Bucky Barnes team up to face new threats after Captain America's legacy.",
        image: "images/the falcon and the winter soldier.jpg",
        sceneUrl: "",
        seasons: [{
            season: 1,
            episodes: [
                { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/59sQh4pt" },
                { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/TpPqYxBH" },
                { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/WRTjCMHJ" },
                { title: "Episode 4", duration: "", url: "https://pixeldrain.com/api/file/c9tWZRzW" },
                { title: "Episode 5", duration: "", url: "https://pixeldrain.com/api/file/W93ncjL3" },
                { title: "Episode 6", duration: "", url: "https://pixeldrain.com/api/file/j3fEab3u" },
            ]
        }
        ]
    },
     {
        type: "movie",
        title: "Wonder Woman",
        genre: "Action",
        rating: "7.5",
        status: "",
        description: "A warrior princess leaves her island to stop a war and discover her destiny.",
        image: "images/wonder woman.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/ToUbqgT5",
    }, {
        type: "movie",
        title: "Justice League",
        genre: "Action",
        rating: "7.2",
        status: "",
        description: "Batman unites heroes to battle a powerful enemy threatening Earth's very existence.",
        image: "images/justice league.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/otPftgBB",
    },{
        type: "movie",
        title: "The Amazing Spiderman",
        genre: "Action,",
        rating: "7.2",
        status: "",
        description: "Peter Parker was living with his Uncle, saving lives as a teenager and later fought with one of the person he loves.",
        image: "images/image.png",
        actualMovieUrl: "https://pixeldrain.com/api/file/6hmVphLL",
    },{
        type: "movie",
        title: "Thor: Ragnarok",
        genre: "Fantasy, Movie",
        rating: "9.3",
        status: "",
        description: "Thor the god of thunder has to fight without his hammer, Asgard is destroyed, lost sister returns, chaos...",
        image: "images/thor ragnarok.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/6MRbpqFG",
        sceneUrl: "",
    },{
        type: "movie",
        title: "Thor: Love and Thunder",
        genre: "Fantasy, Movie",
        rating: "6.3",
        status: "",
        description: "People that are worthy to carry the hammer are discovered",
        image: "images/thor love and thunder.png",
        actualMovieUrl: "https://pixeldrain.com/api/file/RDf7sf2N",
        sceneUrl: "",
    }, ],
    "fantasy-container": [{
        type: "movie",
        title: "How to Train your Dragon",
        genre: "Fantasy, Movie",
        rating: "9.9",
        status: "", 
        description: "A Viking boy found a dragon and trained it, learning that dragons are not that bad.",
        image: "images/How to Train Your Dragon.jpg",
        bannerImage: "images/image copy.png",
        actualMovieUrl: "https://pixeldrain.com/api/file/QzgsPt3U",
        sceneUrl: "https://pixeldrain.com/api/file/wZ6b2qXC",
    }, {
        type: "movie",
        title: "Fountain of Youth",
        genre: "Fantasy, Movie",
        rating: "5.9",
        status: "",
        description: "A mythical spring granting eternal youth, sought by explorers like Ponce de León.",
        image: "images/fountain of youth.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/rW4jsNqr",
        sceneUrl: "",
    }, {
        type: "tv series",
        title: "Wednesday",
        genre: "Fantasy",
        rating: "7.2",
        status: "",
        description: "A dark comedy series following Wednesday Addams as she navigates life at Nevermore Academy.",
        image: "images/Wedbesday.jpg",
        sceneUrl: "",
        seasons: [{
            season: 1,
            episodes: [
                { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/Ma58qEsu" },
                { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/QdHmoKXJ" },
                { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/4sAaUZYf" },
                { title: "Episode 4", duration: "", url: "https://pixeldrain.com/api/file/q69Hekhk" },
                { title: "Episode 5", duration: "", url: "https://pixeldrain.com/api/file/FPE4hSMh" },
                { title: "Episode 6", duration: "", url: "https://pixeldrain.com/api/file/5yk7sY9h" },
                { title: "Episode 7", duration: "", url: "https://pixeldrain.com/api/file/7NaPwHtQ" },
                { title: "Episode 8", duration: "", url: "https://pixeldrain.com/api/file/n1ifYypP" },
            ]
        }, ]
    }, {
        type: "movie",
        title: "The Lion King",
        genre: "Fantasy, Movie",
        rating: "8.5",
        status: "",
        description: "A lion cub runs from guilt and returns to reclaim destiny. A classic reborn.",
        image: "images/Lion king.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/12JDFnM1",
        sceneUrl: "",
    }, {
        type: "movie",
        title: "Mulan",
        genre: "Fantasy, Movie",
        rating: "8.0",
        status: "",
        description: "A girl disguises as boy to save her father and her country from the Huns.",
        image: "images/Mulan.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/VocWnNhW",
        sceneUrl: "",
    }, {
        type: "movie",
        title: "Doctor Strange",
        genre: "Fantasy, Movie",
        rating: "7.3",
        status: "",
        description: "Neurosurgeon turns mystic warrior. Trippy visuals, wild dimensions, and a magical watch repair job.",
        image: "images/Doctor strange.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/SivPEFvd",
        sceneUrl: "",
    }, {
        type: "movie",
        title: "Doctor Strange: In the Multiverse of Madness",
        genre: "Fantasy, Movie",
        rating: "6.7",
        status: "",
        description: "Scarlet Witch goes dark. Strange goes weird. Multiverse chaos with horror vibes and missed potential.",
        image: "images/Multiverse of madness.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/b9akHQH5",
        sceneUrl: "",
    },{
        type: "movie",
        title: "Thor",
        genre: "Fantasy, Movie",
        rating: "7.7",
        status: "",
        description: "Thor the God of thunder earned his place as the heir to Asgard..",
        image: "images/thor.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/Lt1LqzQW",
        sceneUrl: "",
    },{
        type: "movie",
        title: "Thor: The Dark World",
        genre: "Fantasy, Movie",
        rating: "6.7",
        status: "",
        description: "Thor the god of thunder fights agianst the dark world..",
        image: "images/Thor dark world.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/p81Q8KAF",
        sceneUrl: "",
    },
    {
        type: "movie",
        title: "Gladiator 2",
        genre: "Fantasy, Movie",
        rating: "7.5",
        status: "",
        description: "A gladiator's son seeks revenge in ancient Rome, facing betrayal and a quest for justice.",
        image: "images/gladiator 2.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/TpmWSKMr",
        sceneUrl: "",
    },
    {
        type: "movie",
        title: "Gladiator",
        genre: "Fantasy, Movie",
        rating: "8.5",
        status: "",
        description: "A betrayed general becomes a gladiator, seeking vengeance against a corrupt emperor in ancient Rome.",
        image: "images/gladiator.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/qWSBHfc6",
        sceneUrl: "",
    },
 ],
    "emotional-container": [{
        type: "movie",
        title: "Straw",
        genre: "Movie",
        rating: "6.6",
        status: "", 
        description: "A single mother's life spirals into chaos, leading to a bank standoff with a shocking twist.",
        image: "images/Straw.jpg",
        bannerImage: "images/straw banner.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/57EXZ1aB",
        sceneUrl: "",
    }, {
        type: "movie",
        title: "Spiderman: No Way Home",
        genre: "Action, Sci-Fi",
        rating: "9.3",
        status: "",
        description: "Peter loses is Aunty, the three Spiderman united to defeat enemies.",
        image: "images/Spider-Man_No_Way_Home_poster.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/GB3LPrvj",
    }, {
        type: "movie",
        title: "Amazing Spiderman 2",
        genre: "Action,",
        rating: "6.6",
        status: "",
        description: "Peter Parker always saving the day but lost his girlfriend along the way.",
        image: "images/Amazing spiderman 2.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/NZkKjEnH",
    }, {
        type: "movie",
        title: "Black Widow",
        genre: "Action",
        rating: "7.4",
        status: "",
        description: "Family reunites, secrets spill, and spies go rogue. Cool stunts, late release hurt impact.",
        image: "images/black widow.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/wUED4yFZ",
    }, {
        type: "movie",
        title: "Eternals",
        genre: "Action,",
        rating: "6.5",
        status: "",
        description: "Immortal aliens protect Earth for centuries. Deep lore, beautiful shots, but pacing is rough.",
        image: "images/Eternals.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/CMFAXfCM",
    }, {
        type: "movie",
        title: "Spiderman",
        genre: "Action",
        rating: "9.0",
        status: "",
        description: "A kid got bitten by a spider he got over it and he became an incredible super hero..",
        image: "images/spiderman 1.webp",
        actualMovieUrl: "https://pixeldrain.com/api/file/r679NznA",
    }, {
        type: "movie",
        title: "Spiderman 2",
        genre: "Action",
        rating: "9.3",
        status: "",
        description: "A kid Peter Parker was always the friendly neighbourhood spiderman...",
        image: "images/Spiderman 2.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/QT8jsqv4",
    }, {
        type: "movie",
        title: "Spiderman 3",
        genre: "Action",
        rating: "6.3",
        status: "",
        description: "Peter Parker aka Spiderman faught against Venom...",
        image: "images/Spiderman 3.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/BcW8W84c",
    }, ],
    "african-base-container": [{
        type: "tv series",
        title: "King of Jo'burg",
        genre: "African",
        rating: "8.7",
        status: "",
        description: "One heir. One kingdom. One fight.",
        image: "images/King of jo'burg.jpg",
        actualMovieUrl: "",
    },
    {
        type: "movie",
        title: "Black Panther: Wakander Forever",
        genre: "African, Action",
        rating: "7.5",
        status: "",
        description: "King T'Chala is dead who will be the next Black Panther",
        image: "images/wakander forever.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/o8L2t6So",
    }, 
    {
        type: "movie",
        title: "Black Panther",
        genre: "African, Action",
        rating: "8.5",
        status: "",
        description: "T'Chala became king, old brother returns, chaos in wakanda...",
        image: "images/black panther.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/hety5CEe",
    },],
    "others": [{
        type: "movie",
        title: "Antman and the Wasp",
        genre: "Action",
        rating: "8.7",
        status: "",
        description: "Antman and the wasp...",
        image: "images/Antman and the wasp.jpeg",
        actualMovieUrl: "https://pixeldrain.com/api/file/NpWVyxeh",
    },
    {
        type: "movie",
        title: "Antman and the Wasp Quantumania",
        genre: "Action",
        rating: "6.9",
        status: "",
        description: "Antman and the wasp...",
        image: "images/antman quantumania.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/faKGHVN3",
    },
    {
        type: "movie",
        title: "Antman",
        genre: "Action",
        rating: "8.3",
        status: "",
        description: "Antman the hero who can shrink himself to the size of an ant...",
        image: "images/image copy 3.png",
        actualMovieUrl: "https://pixeldrain.com/api/file/4JCwFq8g",
    },
    {
        type: "movie",
        title: "Mission: Impossible- Dead Reckoning Part One",
        genre: "Action",
        rating: "9.8",
        status: "",
        description: "Ethan Hunt and his IMF team embark on their most dangerous mission yet: to track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands.",
        image: "images/Mission_ Impossible - Dead Reckoning Part One.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/DQj5oqT8c",
    },
    {
        type: "movie",
        title: "Mission: Impossible",
        genre: "Action",
        rating: "6.5",
        status: "",
        description: "Framed for betrayal, Ethan Hunt must uncover a mole and clear his name.",
        image: "images/Mission impossible.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/9pKUNQ7G",
    },
    {
        type: "movie",
        title: "Mission: Impossible 2",
        genre: "Action",
        rating: "5.6",
        status: "",
        description: "A deadly virus. A rogue agent. Ethan races to stop global biological chaos.",
        image: "images/Mission impossible 2.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/8UNtG3pK",
    },
    {
        type: "movie",
        title: "Mission: Impossible 3",
        genre: "Action",
        rating: "7.7",
        status: "",
        description: "An arms dealer targets Ethan's fiancée, pulling him into a high-stakes rescue mission.",
        image: "images/Mission impossible 3.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/8UNtG3pK",
    },
    {
        type: "movie",
        title: "Mission: Impossible- Fallout",
        genre: "Action",
        rating: "9.8",
        status: "",
        description: "After a failed mission, Ethan faces nuclear threats and broken trust within the IMF",
        image: "images/Mission_ Impossible - Fallout.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/Mvn3z2Jk",
    },
    {
        type: "movie",
        title: "Mission: Impossible- Ghost Protocol",
        genre: "Action",
        rating: "9.4",
        status: "",
        description: "The IMF is disavowed. Ethan must stop nuclear war with no backup, no rules.",
        image: "images/Mission impossible ghost protocol.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/5Bz7uLeT",
    },
    {
        title: "Deadpool & Wolverine",
        type: "movie",
        genre: "Action", 
        rating: "8.1",
        description: "Deadpool joins the MCU. Wolverine returns. Chaos, blood, and fourth-wall breaks ensue. Brutally.",
        image: "images/Deadpool & Wolverine.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/Vz9EyckZ",
    },
    {
        title: "Interview with the Vampire",
        type: "movie",
        genre: "horror",
        rating: 6.3, 
        description: "A grieving man becomes a vampire and spirals into a world of passion, death, and eternity.",
        image: "images/interview with the vamp.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/yA5nSrtA",
    },
    {
        title: "Shadow Force",
        type: "movie",
        genre: "Action",
        rating: 6.1, 
        description: "An estranged couple, former elite black ops leaders, must go on the run with their son when their old unit hunts them.",
        image: "images/shadow force.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/9r547bQx",
    },
    {
        title: "Sinners",
        type: "movie",
        genre: "Movie",
        rating: 6.9, 
        description: "Twin brothers return home, confronting a malevolent, musical vampire evil in 1930s Mississippi.",
        image: "images/sinners.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/iA4otwNz",
    },
    {
        title: "The Amateur",
        type: "movie",
        genre: "movie",
        rating: 6.6, 
        description: "A CIA cryptographer blackmails his agency to train him as a field operative to avenge his wife's murder.",
        image: "images/the amateur.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/ovZ1c1Lp",
    },
    {
        title: "The Accountant",
        type: "movie",
        genre:  "Movie",
        rating: 6.2, 
        description: "A mathematical savant and forensic accountant secretly uncooks books for dangerous criminal organizations, while pursued by the Treasury Department.",
        image: "images/the accountant.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/2aJzmF9d",
    },
    {
        title: "Until Dawn",
        type: "movie",
        genre: "Movie",
        rating: 6.1, 
        description: "Friends trapped in a time loop must survive brutal deaths until dawn to escape.",
        image: "images/until dawn.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/NxTxGLmF",
    },
    {
        title: "K.O",
        type: "movie",
        genre:  "Movie",
        rating: 6.1,
        description: "K.O. (2025): A guilt‑ridden ex‑MMA fighter hunts a missing boy through Marseille’s brutal criminal underworld",
        image: "images/KO.jpeg",
        actualMovieUrl: "https://pixeldrain.com/api/file/yioJAKVA",
    },
    {
        title: "Diablo",
        type: "movie",
        genre:  "Movie",
        rating: 7.1, 
        description: "Ex-con kidnaps gangster’s daughter to honor a promise—faces merciless hitman, cartel fury, brutal redemption.",
        image: "images/diablo.jpg",
        actualMovieUrl: "https://pixeldrain.com/api/file/a33SiTZE",
    },
    {
        title: "All of us are Dead",
        type: "tv series",
        genre: "TV Series",
        rating: 8.9, 
        description: "Student fights against Zombie...",
        image: "images/All of us are dead.jpeg",
        seasons: [
            {
                season: 1,
                episodes: [
                   { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/N3hPfVyG" },
                    { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/aJv9HBbR" },
                    { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/K8EjXdvK" },
                    { title: "Episode 4", duration: "", url: "https://pixeldrain.com/api/file/BHJHMc85" },
                    { title: "Episode 5", duration: "", url: "https://pixeldrain.com/api/file/hg9qwmaB" },
                    { title: "Episode 6", duration: "", url: "https://pixeldrain.com/api/file/Ana7DTpX" },
                    { title: "Episode 7", duration: "", url: "https://pixeldrain.com/api/file/ULLMzF7P" },
                    { title: "Episode 8", duration: "", url: "https://pixeldrain.com/api/file/efrGpM2S" },
                    { title: "Episode 9", duration: "", url: "https://pixeldrain.com/api/file/CkK6MAQr" },
                    { title: "Episode 10", duration: "", url: "https://pixeldrain.com/api/file/M3GvGASX" },
                    { title: "Episode 11", duration: "", url: "https://pixeldrain.com/api/file/RHnNhjrV" },
                    { title: "Episode 12", duration: "", url: "https://pixeldrain.com/api/file/M2Fns8Tu" },
                ]
            }
        ]
    },
    {
        title: "The Order",
        type: "tv series",
        genre: "Action",
        rating: 7.3, 
        description: "Werewolves and witches",
        image: "images/The order.jpg",
        seasons: [
            {
                season: 1,
                episodes: [
                    { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/fPWZiVAv" },
                    { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/xaCzyZ66" },
                    { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/by16LQ2k" },
                    { title: "Episode 4", duration: "", url: "https://pixeldrain.com/api/file/pxxBSzMi" },
                    { title: "Episode 5", duration: "", url: "https://pixeldrain.com/api/file/i9Bn58eY" },
                    { title: "Episode 6", duration: "", url: "https://pixeldrain.com/api/file/koXq7YTy" },
                    { title: "Episode 7", duration: "", url: "https://pixeldrain.com/api/file/5EcaEDxY" },
                    { title: "Episode 8", duration: "", url: "https://pixeldrain.com/api/file/iAbBFTGh" },
                    { title: "Episode 9", duration: "", url: "https://pixeldrain.com/api/file/szGejJY9" },
                    { title: "Episode 10", duration: "", url: "https://pixeldrain.com/api/file/CsvhWyjh" },
                ]
            },
            {
                season: 2,
                episodes: [
                    { title: "Episode 1", duration: "", url: "https://pixeldrain.com/api/file/MWxExF8C" },
                    { title: "Episode 2", duration: "", url: "https://pixeldrain.com/api/file/KuYU93bL" },
                    { title: "Episode 3", duration: "", url: "https://pixeldrain.com/api/file/e2Xux4ob" },
                    { title: "Episode 4", duration: "", url: "https://pixeldrain.com/api/file/rnNMXDUF" },
                    { title: "Episode 5", duration: "", url: "https://pixeldrain.com/api/file/BwX7KdUJ" },
                    { title: "Episode 6", duration: "", url: "https://pixeldrain.com/api/file/nn78c81G" },
                    { title: "Episode 7", duration: "", url: "https://pixeldrain.com/api/file/KC2SEc1U" },
                    { title: "Episode 8", duration: "", url: "https://pixeldrain.com/api/file/R9FpqiRr" },
                    { title: "Episode 9", duration: "", url: "https://pixeldrain.com/api/file/M7ikTBef" },
                    { title: "Episode 10", duration: "", url: "https://pixeldrain.com/api/file/wTZTwEjq" },
                ]
            }
        ]
    },
    {
    title: "Green Lantern",
    type: "movie",
    genre: "Action, Thriller, Movie", 
    rating: "6.0", 
    description: "A pilot gets cosmic powers and fumbles hard. Lantern ring deserved better storytelling. Mid.",
    image: "images/Green lantern.jpg",
    actualMovieUrl: "https://pixeldrain.com/api/file/jm2zdGcB",
},
{
    title: "The Marvels",
    type: "movie",
    genre: "Action, Thriller, Movie",
    rating: "6.0", 
    description: "Body-swapping, cosmic chaos, and cats. Weird pacing but kinda fun if expectations are low.",
    image: "images/the marvel.jpg",
    actualMovieUrl: "https://pixeldrain.com/api/file/wqfEUChU",
},
{
    title: "Captain Marvel",
    type: "movie",
    genre: "Action, Thriller, Movie",
    rating: "6.9", 
    description: "An origin story with super-charged energy blasts and 90s vibes. Some parts felt rushed.",
    image: "images/captain marvel.jpg",
    actualMovieUrl: "https://pixeldrain.com/api/file/Vd9zhKQh",
},
{
    title: "Batman",
    type: "movie",
    genre: "Action, Thriller, Movie",
    rating: "7.8",
    description: "A masked vigilante battles crime in Gotham while facing his own inner demons.",
    image: "images/Batman.jpg",
    actualMovieUrl: "https://pixeldrain.com/api/file/PnAczp5H",
},
{
    title: "Batman vs Superman: Dawn of Justice",
    type: "movie",
    genre: "Action, Thriller, Movie",
    rating: "7.2",
    description: "Two legendary heroes clash, manipulated by a rising threat that could destroy humanity.",
    image: "images/batman vs superman.jpg",
    actualMovieUrl: "https://pixeldrain.com/api/file/k3X9urat",
},
{
    title: "Aquaman",
    type: "movie",
    genre: "Action, Thriller, Movie",
    rating: "7.2",
    description: "The rightful heir to Atlantis must rise to unite land and sea kingdoms.",
    image: "images/aquaman.jpg",
    actualMovieUrl: "https://pixeldrain.com/api/file/aivZZzkD",
},
{
    title: "The Shining",
    type: "movie",
    genre: "Thriller, horror",
    rating: 8.4,
    description: "A family’s winter retreat turns deadly as the father descends into madness.",
    image: "images/the shinning.jpg",
    actualMovieUrl: "https://pixeldrain.com/u/YGuD6WrS",
},
{
    title: "Hereditary",
    type: "movie",
    genre: "Thriller, horror",
    rating: 7.3,
    description: "A grieving family uncovers horrifying secrets passed down through generations after a tragic loss.",
    image: "images/Hereditary.jpg",
    actualMovieUrl: "https://pixeldrain.com/api/file/CYHv9et5",
},
{
    title: "The Exorcist",
    type: "movie",
    genre: "Thriller, horror",
    rating: 8.1,
    description: "A young girl is possessed, forcing a priest into a terrifying spiritual battle for her soul.",
    image: "images/the exorcist.jpg",
    actualMovieUrl: "https://pixeldrain.com/u/NuTAWENK",
},
{
    title: "Blue Beetle",
    type: "movie",
    genre: "Action, Movie, Sci-Fi",
    rating: 6.1,
    description: "Teen Jaime Reyes finds alien scarab, gains powerful armor, becomes a reluctant superhero.",
    image: "images/blue beetle.jpg",
    actualMovieUrl: "https://pixeldrain.com/api/file/bqSAQBfr",
},
 ],
};

// --- GLOBAL SELECTORS ---
const mainContent = document.getElementById('main');
const header = document.querySelector('header');
const movieDetailSection = document.getElementById('movie-detail');
const bannerSection = document.getElementById('banner-section');
const backButton = document.getElementById('back-to-home');

// --- BANNER CAROUSEL ELEMENTS ---
let selectedType = null;
let selectedGenre = null;

const bannerCarousel = document.getElementById('banner-carousel');
const bannerWrapper = document.getElementById("banner-wrapper");
let bannerSlides;
const leftArrow = document.getElementById('banner-prev');
const rightArrow = document.getElementById('banner-next');
let currentBannerIndex = 0;
let bannerInterval;


// --- HELPER FUNCTIONS ---

function applyFilters() {
    Object.entries(movieSections).forEach(([sectionId, movies]) => {
        const filtered = movies.filter((movie) => {
            const matchesType = selectedType ? movie.type?.toLowerCase() === selectedType.toLowerCase() : true;
            // Ensure genre exists before calling toLowerCase and includes
            const matchesGenre = selectedGenre ? movie.genre?.toLowerCase().includes(selectedGenre.toLowerCase()) : true;
            return matchesType && matchesGenre;
        });

        renderSection(sectionId, filtered);
    });

    // Make sure main content is visible and banner/header are managed
    mainContent.style.display = 'block';
    bannerSection.classList.add('hidden');
    header.classList.remove('hide-header');
    header.style.display = 'flex'; // Ensure header is displayed
    window.scrollTo(0, 0);
}


function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    const intervals = [{
        label: "y",
        seconds: 31536000
    }, {
        label: "mo",
        seconds: 2592000
    }, {
        label: "d",
        seconds: 86400
    }, {
        label: "h",
        seconds: 3600
    }, {
        label: "m",
        seconds: 60
    }, {
        label: "s",
        seconds: 1
    }];
    for (let i = 0; i < intervals.length; i++) {
        const int = intervals[i];
        const count = Math.floor(seconds / int.seconds);
        if (count > 0) return `${count}${int.label} ago`;
    }
    return "just now";
}


function getRandomMovies(array, count) {
    const shuffled = array.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function showBannerSlide(index) {
    bannerSlides = document.querySelectorAll('.banner-slide');
    if (bannerSlides.length === 0) return;

    bannerSlides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
        const video = slide.querySelector('video');
        if (video) {
            if (i === index) {
                // Do NOT automatically play here. Play will be handled by hover.
                // Ensure it's paused and reset when a new slide comes into view
                // before any hover might occur.
                video.pause();
                video.currentTime = 0;
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }
    });
}

function nextBannerSlide() {
    bannerSlides = document.querySelectorAll('.banner-slide');
    if (bannerSlides.length === 0) return;
    currentBannerIndex = (currentBannerIndex + 1) % bannerSlides.length;
    showBannerSlide(currentBannerIndex);
}

function prevBannerSlide() {
    bannerSlides = document.querySelectorAll('.banner-slide');
    if (bannerSlides.length === 0) return;
    currentBannerIndex = (currentBannerIndex - 1 + bannerSlides.length) % bannerSlides.length;
    showBannerSlide(currentBannerIndex);
}

function startBannerAutoSlide() {
    if (bannerInterval) {
        clearInterval(bannerInterval);
    }
    // Set the interval to the desired duration for each banner slide.
    // Since your videos are trailers, they might have varying lengths.
    // If you want each slide (image or video) to show for 10 seconds,
    // this is correct. If you want the video to play its full length,
    // you'd need to get the video's duration and set the interval dynamically.
    // For now, keeping it at 10 seconds as per your initial setup.
    bannerInterval = setInterval(nextBannerSlide, 10000);
}

function renderBannerCarousel() {
    bannerWrapper.innerHTML = "";

    const bannerMovies = getRandomMovies(movieSections["top-picks-container"], 6);

    bannerMovies.forEach((movie) => {
        const slide = document.createElement("div");
        slide.className = "banner-slide";

        slide.dataset.movieData = JSON.stringify(movie);

        // ALWAYS set the background image first
        const bgImage = movie.bannerImage || movie.image;
        slide.style.backgroundImage = `url('${bgImage}')`;
        slide.style.backgroundSize = "cover";
        slide.style.backgroundPosition = "center";
        slide.style.backgroundRepeat = "no-repeat"; // Ensure image doesn't repeat

        let videoHtml = '';
        if (movie.sceneUrl) {
            // Render the video, but it will be initially hidden by CSS
            videoHtml = `<video src="${movie.sceneUrl}" muted playsinline class="banner-video"></video>`;
        }

        slide.innerHTML = `
            ${videoHtml}
            <div class="banner-overlay">
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
                <div class="banner-controls">
                    <button class="banner-watch-btn">Watch Now</button>
                    <button class="mute-toggle-btn">
                        <i class="fas fa-volume-mute"></i>
                    </button>
                </div>
            </div>
        `;

        bannerWrapper.appendChild(slide);

        // Event Listeners for hover (desktop behavior)
        const video = slide.querySelector('.banner-video');
        const muteToggleButton = slide.querySelector('.mute-toggle-btn');

        if (video) {
            slide.addEventListener("mouseenter", () => {
                video.style.opacity = '1'; // Make video visible
                video.play();
                clearInterval(bannerInterval); // Pause auto-slide
            });

            slide.addEventListener("mouseleave", () => {
                video.pause();
                video.currentTime = 0; // Reset video
                video.style.opacity = '0'; // Hide video
                startBannerAutoSlide(); // Resume auto-slide
            });

            // Mute/Unmute logic for the video
            if (muteToggleButton) {
                muteToggleButton.innerHTML = '<i class="fas fa-volume-mute"></i>'; // Initial icon state
                muteToggleButton.addEventListener('click', () => {
                    if (video.muted) {
                        video.muted = false;
                        muteToggleButton.innerHTML = '<i class="fas fa-volume-up"></i>';
                    } else {
                        video.muted = true;
                        muteToggleButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
                    }
                });
            }
        } else {
            // If there's no video, ensure auto-slide continues and handle watch button
            // The existing `banner-content` logic for non-video slides will apply
            const watchBtn = slide.querySelector('.banner-watch-btn');
            if (watchBtn) {
                watchBtn.addEventListener('click', () => {
                    showMovieDetail(movie);
                });
            }
            // Hide mute button if no video
            if (muteToggleButton) {
                muteToggleButton.style.display = 'none';
            }
        }

        const watchBtn = slide.querySelector('.banner-watch-btn');
        if (watchBtn) {
            watchBtn.addEventListener('click', () => {
                showMovieDetail(movie);
            });
        }
    });

    currentBannerIndex = 0;
    showBannerSlide(currentBannerIndex);
    startBannerAutoSlide();

    if (!leftArrow._hasClickListener) {
        leftArrow.addEventListener("click", () => {
            prevBannerSlide();
            startBannerAutoSlide();
        });
        leftArrow._hasClickListener = true;
    }
    if (!rightArrow._hasClickListener) {
        rightArrow.addEventListener("click", () => {
            nextBannerSlide();
            startBannerAutoSlide();
        });
        rightArrow._hasClickListener = true;
    }
}


function renderSection(sectionId, movies) {
    const container = document.getElementById(sectionId);
    if (!container) return;
    container.innerHTML = "";

    if (movies.length === 0) {
        return; // Don't render anything if no movies
    }

    movies.forEach((movie) => {
        const card = document.createElement("div");
        card.className = "movie-card";

        const ratingHtml = movie.rating ? `<div class="rating">${movie.rating}</div>` : '';
        const statusHtml = movie.status ? `<div class="movie-status">${movie.status}</div>` : '';

        card.innerHTML = `
            ${ratingHtml}
            ${statusHtml}
            <img src="${movie.image}" alt="${movie.title}" />
            <div class="movie-card-title">${movie.title}</div>
        `;
        card.addEventListener("click", () => showMovieDetail(movie));
        container.appendChild(card);
    });
}

function renderAllSections() {
    Object.entries(movieSections).forEach(([sectionId, movies]) => {
        renderSection(sectionId, movies);
    });
    mainContent.style.display = 'block';
    bannerSection.classList.remove("hidden"); 
    header.classList.remove("hide-header");   
    header.style.display = 'flex';            
}

function hideAllMainContent() {
    mainContent.style.display = 'none';
    header.classList.add('hide-header');    
    header.style.display = 'none';          
    bannerSection.classList.add('hidden');  
}

function showMovieDetail(movieData) {
    const detailSection = document.getElementById('movie-detail');
    const titleEl = document.getElementById('detail-title');
    const descEl = document.getElementById('detail-description');
    const seasonContainer = document.getElementById('season-container');
    const videoPlayer = document.getElementById('movie-video-player');
    const commentsList = document.getElementById('comments-list');
    const commentInput = document.getElementById('comment-input');
    const commentNameInput = document.getElementById('comment-name');
    const submitCommentBtn = document.getElementById('submit-comment');

    // Clear previous content
    seasonContainer.innerHTML = '';
    videoPlayer.src = '';
    titleEl.textContent = '';
    descEl.textContent = '';
    commentsList.innerHTML = '';
    commentInput.value = '';
    commentNameInput.value = '';

    titleEl.textContent = movieData.title || 'Untitled Movie';
    descEl.textContent = movieData.description || 'No description provided.';

    let firstVideoUrl = movieData.actualMovieUrl || '';

    if (movieData.seasons && movieData.seasons.length > 0) {
        seasonContainer.style.display = 'block';

        // --- Create Season Buttons Wrapper ---
        const seasonButtonsWrapper = document.createElement('div');
        seasonButtonsWrapper.classList.add('season-buttons-wrapper');
        seasonContainer.appendChild(seasonButtonsWrapper);

        // --- Create Episode Buttons Wrapper (to hold all episode grids) ---
        const episodeButtonsWrapper = document.createElement('div');
        episodeButtonsWrapper.classList.add('episode-buttons-overall-wrapper');
        seasonContainer.appendChild(episodeButtonsWrapper);

        let activeSeasonElement = null; // To keep track of the currently active season button
        let activeEpisodeElement = null; // To keep track of the currently active episode button

        movieData.seasons.forEach((season, seasonIndex) => {
            const seasonBtn = document.createElement('button');
            seasonBtn.classList.add('season-btn');
            // Format as S01, S02
            seasonBtn.textContent = `S${String(season.season).padStart(2, '0')}`;
            seasonButtonsWrapper.appendChild(seasonBtn);

            // Create a grid container for current season's episodes
            const currentEpisodeGrid = document.createElement('div');
            currentEpisodeGrid.classList.add('episode-grid');
            currentEpisodeGrid.dataset.season = season.season; // Store season number for identification
            currentEpisodeGrid.style.display = 'none'; // Initially hidden
            episodeButtonsWrapper.appendChild(currentEpisodeGrid);

            season.episodes?.forEach((episode, episodeIndex) => {
                const epBtn = document.createElement('button');
                epBtn.classList.add('episode-box-btn');
                // Display episode number as 01, 02,
                epBtn.textContent = String(episodeIndex + 1).padStart(2, '0');

                // If it's the very first episode of the very first season
                // This will be the initially played video
                if (seasonIndex === 0 && episodeIndex === 0) {
                    firstVideoUrl = episode.url || '';
                }

                epBtn.addEventListener('click', () => {
                    // Remove 'active' class from previously active episode button
                    if (activeEpisodeElement) {
                        activeEpisodeElement.classList.remove('active');
                    }
                    epBtn.classList.add('active'); // Add 'active' class to the clicked episode button
                    activeEpisodeElement = epBtn; // Update the active episode element

                    videoPlayer.src = episode.url || '';
                });
                currentEpisodeGrid.appendChild(epBtn);
            });

            // Season button click handler
            seasonBtn.addEventListener('click', () => {
                // Remove 'active' from previous season button
                if (activeSeasonElement) {
                    activeSeasonElement.classList.remove('active');
                }
                seasonBtn.classList.add('active'); // Add 'active' to current season button
                activeSeasonElement = seasonBtn; // Update active season element

                // Hide all episode grids
                document.querySelectorAll('.episode-grid').forEach(grid => {
                    grid.style.display = 'none';
                });
                // Show the episode grid for the selected season
                currentEpisodeGrid.style.display = 'grid';
                // Automatically click the first episode of the selected season
                const firstEpisodeOfSeason = currentEpisodeGrid.querySelector('.episode-box-btn');
                if (firstEpisodeOfSeason) {
                    // Use setTimeout to ensure the DOM is updated before clicking
                    // This can prevent issues on very fast clicks or complex layouts
                    setTimeout(() => {
                        firstEpisodeOfSeason.click();
                    }, 0);
                } else {
                    // If no episodes in season, clear video and active episode
                    videoPlayer.src = '';
                    if (activeEpisodeElement) {
                        activeEpisodeElement.classList.remove('active');
                        activeEpisodeElement = null;
                    }
                }
            });
            // Automatically click the first season button to initially display its episodes
            if (seasonIndex === 0) {
                // before its click handler is invoked.
                setTimeout(() => {
                    seasonBtn.click();
                }, 0);
            }
        });

    } else {
        seasonContainer.style.display = 'none';
    }

    // Set initial video source for movies without seasons or the first episode of first season
    videoPlayer.src = firstVideoUrl;

    // --- Comments Section Logic ---
    // Ensure firebase and db are initialized before this section
    const commentsRef = db.ref(`comments/${movieData.title.replace(/\s/g, '_')}`);
    commentsRef.on('value', (snapshot) => {
        commentsList.innerHTML = '';
        const comments = snapshot.val();
        if (comments) {
            const commentArray = Object.values(comments);
            commentArray.reverse().forEach(comment => {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');

                const author = document.createElement('p');
                author.classList.add('comment-author');
                author.textContent = comment.author || 'Anonymous';

                const text = document.createElement('p');
                text.classList.add('comment-text');
                text.textContent = comment.text;

                const time = document.createElement('p');
                time.classList.add('comment-time');
                time.textContent = timeSince(new Date(comment.timestamp));

                commentDiv.appendChild(author);
                commentDiv.appendChild(text);
                commentDiv.appendChild(time);
                commentsList.appendChild(commentDiv);
            });
        }
    });

    submitCommentBtn.onclick = () => {
        const newCommentText = commentInput.value.trim();
        const newCommentAuthor = commentNameInput.value.trim();

        if (newCommentText === '') return;

        const commentData = {
            author: newCommentAuthor || 'Anonymous',
            text: newCommentText,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        };

        commentsRef.push(commentData)
            .then(() => {
                commentInput.value = '';
                commentNameInput.value = '';
            })
            .catch(error => {
                console.error("Error posting comment: ", error);
                alert("Failed to post comment. Please try again.");
            });
    };

    hideAllMainContent(); // Hide main content (including header/banner)
    detailSection.classList.remove('hidden'); // Show movie detail section
    window.scrollTo(0, 0);
}

document.getElementById("back-to-home").addEventListener("click", () => {
    movieDetailSection.classList.add("hidden");
    renderAllSections(); // Re-render all sections to show home page
    document.getElementById("movie-video-player").src = ""; // Stop video playback
    window.scrollTo(0, 0);
});

document.getElementById("home").addEventListener("click", () => {
    selectedType = null;
    selectedGenre = null;
    movieDetailSection.classList.add("hidden");
    renderAllSections();
    window.scrollTo(0, 0);
});

document.getElementById("home-link").addEventListener("click", () => {
    selectedType = null;
    selectedGenre = null;
    movieDetailSection.classList.add("hidden");
    renderAllSections();
    window.scrollTo(0, 0);
});


document.getElementById("movies-link").addEventListener("click", () => {
    selectedType = "movie";
    applyFilters();
});

document.getElementById("tvseries-link").addEventListener("click", () => {
    selectedType = "tv series";
    applyFilters();
});


document.getElementById("search-input").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    movieDetailSection.classList.add("hidden"); // Always hide movie detail when typing in search

    // --- START CHANGED/IMPROVED SEARCH LOGIC ---
    if (query === '') {
        // If the search query is empty, show the regular home page with all sections and banner
        renderAllSections();
    } else {
        // If there's a search query, prepare the view for search results
        bannerSection.classList.add('hidden'); 
        mainContent.style.display = 'block'; 
        header.classList.remove('hide-header'); 
        header.style.display = 'flex'; 

        // Filter and render movies for each section based on the query
        Object.entries(movieSections).forEach(([id, movies]) => {
            const filtered = movies.filter(
                (movie) =>
                movie.title.toLowerCase().includes(query) ||
                (movie.description && movie.description.toLowerCase().includes(query)) ||
                // Added a check for movie.genre existence before calling methods on it
                (movie.genre && movie.genre.toLowerCase().includes(query))
            );
            renderSection(id, filtered);
        });
    }
    window.scrollTo(0, 0);
});

// --- Initial Render Calls and Menu Toggle ---
document.addEventListener('DOMContentLoaded', () => {
    renderBannerCarousel(); // Renders banner and starts auto-slide
    renderAllSections(); // Renders all movie sections

    // Expose toggleMenu to global scope if called from inline HTML (e.g., onclick="toggleMenu()")
    window.toggleMenu = function() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('mobile-active');
    };
 });

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
   // alert(""); // Consider replacing with a more user-friendly message or removing
});
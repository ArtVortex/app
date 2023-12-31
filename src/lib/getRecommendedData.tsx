export default function getRecommendedData(): Post[] {
    return [
        {
            id: 1,
            name: "Fantasy of Kitten",
            description: "AI generated image",
            author: "Vincent",
            abbrName: "VC",
            thumbnail: "recommend_1.png",
            nft: false,
        },
        {
            id: 2,
            name: "The new era",
            description:" AI generated image",
            author: "Lachlan",
            abbrName: "LL",
            profileImageUrl: "/_601.jpeg",
            thumbnail: "recommend_2.png",
            nft: true,
            artwork_price: 0.25,
            artwork_unit: "ETH",
            prompt_price: 0.0015,
            prompt_unit: "ETH",
        },
        {
            id: 3,
            name: "Young girl",
            description:" AI generated Gundam suit",
            author: "Hanna",
            abbrName: "HA",
            profileImageUrl: "/_602.jpeg",
            thumbnail: "recommend_3.png",
            nft: true,
            artwork_price: 0.15,
            artwork_unit: "ETH",
        },
        {
            id: 4,
            name: "On the way",
            description:" AI generated image",
            author: "James",
            abbrName: "JM",
            profileImageUrl: "/logo.svg",
            thumbnail: "recommend_4.png",
            nft: false,
        },
        {
            id: 5,
            name: "The new era",
            description:" AI generated image",
            author: "James",
            abbrName: "JM",
            profileImageUrl: "/logo.svg",
            thumbnail: "image_7.png",
            nft: false,
        },
    ];
}
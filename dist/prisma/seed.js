"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
function getCategory() {
    return [
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
            category: 'cycling',
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
            category: 'sightseeing',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
            category: 'hike',
        },
        {
            id: 'ad105551-0f0d-4a9f-bc41-c559c8a17258',
            category: 'weekend',
        },
    ];
}
function getTag() {
    return [
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17010',
            tag: 'cycling',
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889000',
            tag: 'sightseeing',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17000',
            tag: 'hike',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17011',
            tag: 'mountians',
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889001',
            tag: 'sea',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17001',
            tag: 'for family',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17102',
            tag: 'romantic',
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889002',
            tag: '16+ age',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17002',
            tag: 'weekend',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17103',
            tag: 'recommended',
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889003',
            tag: 'on budget',
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17003',
            tag: 'adventure',
        },
    ];
}
function getTours() {
    return [
        {
            id: 'bf23fc2e-b7a4-42b9-863a-ae6be3056003',
            title: 'Peru On a Bike',
            price: 4200,
            url: 'peru-on-bike',
            mainCountry: 'Peru',
            imageMain: 'peru-bike',
            imagesGallery: '',
            shortDescription: 'This guide will let you swim like a baby dolphin!',
            longDescription: 'Imagine a journey where ancient history meets adrenaline-pumping adventure, where majestic landscapes stretch as far as the eye can see, and where every pedal stroke brings you closer to the heart of one of the most diverse countries on Earth. Welcome to the Peru by Bike tour - a thrilling two-week odyssey through the land of the Incas. The expedition starts in the cosmopolitan city of Lima, a blend of colonial charm and modern vibrancy. After a day of acclimatization and exploration, riders head south to Paracas, cruising alongside the sun-kissed Pacific coast, feeling the refreshing sea breeze amidst the backdrop of the sprawling desert. From sea level, the journey takes a challenging turn upwards. Cyclists wind their way to the Sacred Valley, passing through traditional villages where Quechua is still the dominant tongue and where time seems to have stood still. The rhythm of life here is dictated by the cycles of the land, and as riders, we become part of that rhythm.',
            tourDurationDays: 14,
            categoryId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
        },
        {
            id: 'bf23fc2e-b7a4-42b9-863a-ae6be3056002',
            title: 'Italian Alpine Adventure',
            price: 4500,
            url: 'italian-alpine-adventure',
            mainCountry: 'Italy',
            imageMain: 'italian-alpine',
            imagesGallery: '',
            shortDescription: 'Experience the grandeur of the Italian Alps!',
            longDescription: "Set out on a thrilling journey through Italy's most breathtaking mountain ranges. Starting from Milan, this adventure takes you deep into the heart of the Alps. Hike through verdant valleys, dine in picturesque mountain villages, and challenge yourself with some alpine cycling. Witness the splendor of Lake Como and the majesty of Mont Blanc. This tour blends physical challenges with unparalleled natural beauty.",
            tourDurationDays: 14,
            categoryId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
        },
        {
            id: 'bf23fc2e-b7a4-42b9-863a-ae6be3056001',
            title: 'Tales of Ancient Greece',
            price: 3800,
            url: 'ancient-greece',
            mainCountry: 'Greece',
            imageMain: 'ancient-greece',
            imagesGallery: '',
            shortDescription: 'Step back in time to the land of gods and heroes!',
            longDescription: "Travel to Greece and explore the iconic ruins of Athens, the ancient theaters of Epidaurus, and the sun-kissed islands of the Aegean. Walk in the footsteps of Socrates, Homer, and Hercules as you explore ancient temples, vibrant marketplaces, and stunning beaches. From the Oracle of Delphi to the legendary city of Troy, this tour is a history buff's dream come true.",
            tourDurationDays: 13,
            categoryId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
        },
        {
            id: 'bf23fc2e-b7a4-42b9-863a-ae6be3056000',
            title: 'Cherry Blossom Fest',
            price: 5000,
            url: 'japanese-cherry-blossom-fest',
            mainCountry: 'Japan',
            imageMain: 'japanese-cherry',
            imagesGallery: '',
            shortDescription: 'Embrace the serenity of cherry blossoms in Kyoto!',
            longDescription: "Japan's cherry blossom season is a once-in-a-lifetime experience. From Tokyo's urban splendor to Kyoto's historic temples, immerse yourself in the Sakura season. Participate in traditional tea ceremonies, enjoy boat rides beneath canopies of blossoms, and experience the time-honored Hanami (flower viewing) tradition. This tour perfectly captures the beauty and culture of Japan during its most enchanting season.",
            tourDurationDays: 10,
            categoryId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
        },
        {
            id: 'bf23fc2e-b7a4-42b9-863a-ae6be3056111',
            title: 'Mongolian Horseback Odyssey',
            price: 4300,
            url: 'mongolian-horseback-odyssey',
            mainCountry: 'Mongolia',
            imageMain: 'mongolia-horseback',
            imagesGallery: '',
            shortDescription: 'Gallop through the vast Mongolian steppes!',
            longDescription: 'Embark on a timeless journey across Mongolia’s vast grasslands. Experience nomadic culture firsthand as you traverse these ancient lands on horseback. Your adventure will take you through breathtaking landscapes and allow you to participate in traditional Mongolian activities. A blend of cultural immersion and outdoor adventure awaits.',
            tourDurationDays: 12,
            categoryId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
        },
        {
            id: 'bf23fc2e-b7a4-42b9-863a-ae6be3056112',
            title: 'Patagonian Kayak Expedition',
            price: 4800,
            url: 'patagonian-kayak-expedition',
            mainCountry: 'Argentina',
            imageMain: 'patagonia-kayak',
            imagesGallery: '',
            shortDescription: 'Navigate the waters of Patagonia!',
            longDescription: 'Discover the remote beauty of Patagonia through a kayaking expedition. Paddle along pristine rivers, explore untouched fjords, and camp under the stars. This adventure combines physical challenge with the tranquil beauty of Patagonian landscapes. Prepare for an unforgettable journey through one of the most spectacular regions in the world.',
            tourDurationDays: 14,
            categoryId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
        },
        {
            id: 'bf23fc2e-b7a4-42b9-863a-ae6be3056113',
            title: 'Arctic Ice Climbing Adventure',
            price: 5000,
            url: 'arctic-ice-climbing',
            mainCountry: 'Greenland',
            imageMain: 'arctic-ice-climbing',
            imagesGallery: '',
            shortDescription: 'Ascend the icy peaks of the Arctic!',
            longDescription: 'Embark on an extraordinary ice climbing adventure in the Arctic. Tackle some of the world’s most awe-inspiring ice formations in Greenland. This journey is not just about climbing; it’s an exploration of the Arctic’s unique environment and wildlife. A truly thrilling and unique experience for those seeking an extreme adventure in a frozen wonderland.',
            tourDurationDays: 11,
            categoryId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
        },
        {
            id: 'bf23fc2e-b7a4-42b9-863a-ae6be3056114',
            title: 'Namib Desert Safari',
            price: 4200,
            url: 'namib-desert-safari',
            mainCountry: 'Namibia',
            imageMain: 'namib-desert',
            imagesGallery: '',
            shortDescription: 'Conquer the dunes of the Namib Desert!',
            longDescription: 'Experience the thrill of a 4x4 safari across the Namib Desert, one of the oldest deserts in the world. Navigate towering dunes, discover ancient rock art, and encounter unique desert wildlife. This tour combines adventure driving with moments of serene beauty as you witness some of the most stunning sunsets over the desert landscape.',
            tourDurationDays: 10,
            categoryId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
        },
        {
            id: 'bf23fc2e-b7a4-42b9-863a-ae6be3056115',
            title: 'Rocky Mountain Rafting',
            price: 3900,
            url: 'rocky-mountain-rafting',
            mainCountry: 'Canada',
            imageMain: 'rocky-rafting',
            imagesGallery: '',
            shortDescription: 'Ride the rapids of the Canadian Rockies!',
            longDescription: 'Embark on an exhilarating white-water rafting adventure through the Canadian Rockies. Tackle the roaring rapids, surrounded by stunning mountain scenery and diverse wildlife. This tour is perfect for thrill-seekers looking to combine adventure with the awe-inspiring beauty of Canada’s natural landscapes.',
            tourDurationDays: 9,
            categoryId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
        },
        {
            id: 'bf23fc2e-b7a4-42b9-863a-ae6be3056116',
            title: 'Nordic Ski Expedition',
            price: 4600,
            url: 'nordic-ski-expedition',
            mainCountry: 'Norway',
            imageMain: 'nordic-ski',
            imagesGallery: '',
            shortDescription: 'Cross-country skiing across Norway!',
            longDescription: 'Experience the thrill of cross-country skiing in Norway, the heartland of Nordic skiing. Traverse frozen landscapes, discover remote villages, and witness the breathtaking Northern Lights. This tour combines physical endurance with the serene beauty of Scandinavian winter wonderlands.',
            tourDurationDays: 12,
            categoryId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
        },
        {
            id: 'bf23fc2e-b7a4-42b9-863a-ae6be3056117',
            title: 'Outback Survival Challenge',
            price: 4300,
            url: 'outback-survival',
            mainCountry: 'Australia',
            imageMain: 'outback-survival',
            imagesGallery: '',
            shortDescription: 'Master survival skills in the Australian Outback!',
            longDescription: 'Dive into an authentic Australian adventure with the Outback Survival Challenge. Learn survival techniques, navigate through rugged landscapes, and encounter unique wildlife. This tour is a blend of adventure and education, perfect for those who seek a deeper connection with nature and themselves.',
            tourDurationDays: 10,
            categoryId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
        },
        {
            id: 'bf23fc2e-b7a4-42b9-863a-ae6be3056118',
            title: 'Saharan Camel Trek',
            price: 3500,
            url: 'saharan-camel-trek',
            mainCountry: 'Morocco',
            imageMain: 'saharan-camel',
            imagesGallery: '',
            shortDescription: 'Explore the mysteries of the Sahara!',
            longDescription: 'Embark on a timeless journey across the Sahara Desert on camelback. Experience the rhythm of desert life, gaze at endless starry skies, and visit ancient nomadic tribes. This tour is a blend of cultural immersion and adventure, offering a unique perspective of one of the world’s most fascinating deserts.',
            tourDurationDays: 11,
            categoryId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
        },
    ];
}
async function seed() {
    await db.orderItem.deleteMany({});
    await db.tour.deleteMany({});
    await db.tag.deleteMany({});
    await db.category.deleteMany({});
    await db.order.deleteMany({});
    await Promise.all(getCategory().map((category) => {
        return db.category.create({ data: category });
    }));
    await Promise.all(getTag().map((tag) => {
        return db.tag.create({ data: tag });
    }));
    await Promise.all(getTours().map(({ categoryId, ...otherData }) => {
        return db.tour.create({
            data: {
                ...otherData,
                category: {
                    connect: { id: categoryId },
                },
            },
        });
    }));
}
seed();
//# sourceMappingURL=seed.js.map
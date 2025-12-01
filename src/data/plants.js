import plant1 from '../Assets/plantImg/plant1.png';
import plant2 from '../Assets/plantImg/plant2.png';
import plant3 from '../Assets/plantImg/plant3.png';

import plant4 from '../Assets/plantImg/plant4.png';
import plant5 from '../Assets/plantImg/plant5.png';
import plant6 from '../Assets/plantImg/plant6.png';
import plant7 from '../Assets/plantImg/plant7.png';

// 3D Models
// Note: We are importing the components directly. 
// If these are not default exports in their files, this might need adjustment, 

// but based on PlantList.jsx usage (import PlantModel1 from ...), this seems correct.
import PlantModel1 from '../components/Plants3DModel/Plant1';
import PlantModel2 from '../components/Plants3DModel/Plant2';
import PlantModel3 from '../components/Plants3DModel/Plant3';

export const plants = [
    {
        id: 1,
        title: 'Ashwagandha',
        botanicalName: "Withania somnifera",
        description: 'Ashwagandha is a powerful adaptogen known as "Indian Ginseng". It helps the body manage stress, boosts energy levels, and improves concentration. In Ayurveda, it is Rasayana (rejuvenating) and balances Vata and Kapha doshas.',
        uses: ["Stress relief", "Immunity", "Energy"],
        region: "India",
        type: "Medicinal",
        dosha: ["Vata", "Kapha"],
        img: plant4,
        model: <PlantModel1 />,
        hasModel: true,
        diseasesCured: [
            { name: "Stress and Anxiety", description: "Reduces cortisol levels and promotes relaxation." },
            { name: "Insomnia", description: "Improves sleep quality and helps with sleep disorders." },
            { name: "Arthritis", description: "Anti-inflammatory properties help reduce joint pain and swelling." },
            { name: "Fatigue", description: "Boosts energy and vitality, combating chronic fatigue." }
        ],
        cultivation: [
            { name: "Climate", description: "Thrives in dry, sub-tropical regions." },
            { name: "Soil", description: "Sandy loam or light red soil with good drainage (pH 7.5-8.0)." },
            { name: "Propagation", description: "Grown from seeds sown in nursery beds." },
            { name: "Watering", description: "Requires minimal watering; drought-tolerant." }
        ],
        harvesting: [
            { name: "Roots", description: "Harvested 150-180 days after sowing when leaves dry up and berries turn red." },
            { name: "Method", description: "The entire plant is uprooted, and roots are separated and dried." }
        ],
        whereToFind: [
            { name: "Regions", description: "Native to India, Middle East, and parts of Africa." },
            { name: "Habitat", description: "Found in dry stony soil and waste lands." }
        ]
    },
    {
        id: 2,
        title: 'Tulsi',
        botanicalName: "Ocimum sanctum",
        description: 'Tulsi, or Holy Basil, is considered the "Queen of Herbs". It is revered for its medicinal properties, supporting respiratory health, strengthening immunity, and promoting mental clarity. It balances Vata and Kapha doshas.',
        uses: ["Respiratory health", "Immunity", "Stress"],
        region: "India",
        type: "Medicinal",
        dosha: ["Vata", "Kapha"],
        img: plant1,
        model: <PlantModel3 />,
        hasModel: true,
        diseasesCured: [
            { name: "Cough and Cold", description: "Effective in treating respiratory infections and congestion." },
            { name: "Fever", description: "Used as a febrifuge to lower body temperature." },
            { name: "Skin Infections", description: "Antibacterial properties help treat acne and ringworm." },
            { name: "Stress", description: "Acts as an adaptogen to help the body cope with stress." }
        ],
        cultivation: [
            { name: "Climate", description: "Tropical and subtropical climates; loves sunlight." },
            { name: "Soil", description: "Rich, well-drained loamy soil." },
            { name: "Propagation", description: "Easily grown from seeds or stem cuttings." },
            { name: "Watering", description: "Regular watering, keeping soil moist but not waterlogged." }
        ],
        harvesting: [
            { name: "Leaves", description: "Harvested as needed for fresh use or dried for storage." },
            { name: "Timing", description: "Best harvested in the morning after dew has dried." }
        ],
        whereToFind: [
            { name: "Common", description: "Found in almost every Indian household garden and temples." },
            { name: "Wild", description: "Grows wild in tropical regions of Asia." }
        ]
    },
    {
        id: 3,
        title: 'Aloe Vera',
        botanicalName: "Aloe barbadensis miller",
        description: 'Aloe Vera is a succulent plant known as "Ghritkumari" in Sanskrit. It is renowned for its cooling and healing properties, excellent for skin care and digestion. It primarily balances Pitta dosha.',
        uses: ["Skin care", "Digestive health", "Healing"],
        region: "Africa",
        type: "Medicinal",
        dosha: ["Pitta", "Kapha"],
        img: plant2,
        model: <PlantModel2 />,
        hasModel: true,
        diseasesCured: [
            { name: "Burns and Wounds", description: "Gel soothes burns and accelerates wound healing." },
            { name: "Skin Conditions", description: "Treats acne, eczema, and psoriasis." },
            { name: "Constipation", description: "Latex has strong laxative effects." },
            { name: "Acid Reflux", description: "Soothes the esophagus and reduces heartburn." }
        ],
        cultivation: [
            { name: "Climate", description: "Tropical and subtropical; frost-sensitive." },
            { name: "Soil", description: "Sandy, well-drained soil (cactus mix)." },
            { name: "Propagation", description: "From offsets (pups) that grow at the base." },
            { name: "Watering", description: "Deep but infrequent watering; let soil dry out completely." }
        ],
        harvesting: [
            { name: "Leaves", description: "Cut mature outer leaves close to the base." },
            { name: "Gel", description: "Slice leaf open to extract the clear inner gel." }
        ],
        whereToFind: [
            { name: "Gardens", description: "Popular houseplant worldwide." },
            { name: "Wild", description: "Native to the Arabian Peninsula, now naturalized in arid regions." }
        ]
    },
    {
        id: 4,
        title: 'Neem',
        botanicalName: "Azadirachta indica",
        description: 'Neem is a legendary medicinal tree known for its powerful antibacterial, antifungal, and blood-purifying properties. It is a key herb for skin conditions and detoxification, balancing Pitta and Kapha doshas.',
        uses: ["Skincare", "Detox", "Antibacterial"],
        region: "India",
        type: "Medicinal",
        dosha: ["Pitta", "Kapha"],
        img: plant5,
        hasModel: false,
        diseasesCured: [
            { name: "Skin Infections", description: "Treats fungal infections, acne, and eczema." },
            { name: "Dental Issues", description: "Twigs used as toothbrushes to prevent cavities and gum disease." },
            { name: "Diabetes", description: "Leaves help regulate blood sugar levels." },
            { name: "Fever", description: "Bark and leaves used to treat malaria and viral fevers." }
        ],
        cultivation: [
            { name: "Climate", description: "Tropical and subtropical; very drought tolerant." },
            { name: "Soil", description: "Thrives in almost any soil type, including poor, rocky soils." },
            { name: "Propagation", description: "Grown from seeds." },
            { name: "Watering", description: "Needs little water once established." }
        ],
        harvesting: [
            { name: "Leaves", description: "Harvested throughout the year." },
            { name: "Fruits", description: "Collected when they turn yellow." }
        ],
        whereToFind: [
            { name: "Regions", description: "Native to the Indian subcontinent." },
            { name: "Urban", description: "Commonly planted as a shade tree in cities." }
        ]
    },
    {
        id: 5,
        title: 'Basil',
        botanicalName: "Ocimum basilicum",
        description: 'Sweet Basil is a culinary herb with aromatic leaves. Beyond the kitchen, it aids digestion and has anti-inflammatory properties. It helps in balancing Vata and Kapha.',
        uses: ["Culinary", "Digestion"],
        region: "Global",
        type: "Aromatic",
        dosha: ["Vata", "Kapha"],
        img: plant6,
        hasModel: false,
        diseasesCured: [
            { name: "Indigestion", description: "Helps relieve bloating and stomach cramps." },
            { name: "Headache", description: "Aroma can help soothe tension headaches." },
            { name: "Inflammation", description: "Contains eugenol, which works like an anti-inflammatory." }
        ],
        cultivation: [
            { name: "Climate", description: "Warm, sunny weather." },
            { name: "Soil", description: "Moist, fertile, well-drained soil." },
            { name: "Propagation", description: "Seeds or cuttings." },
            { name: "Watering", description: "Keep soil consistently moist." }
        ],
        harvesting: [
            { name: "Leaves", description: "Pick leaves regularly to encourage bushy growth." },
            { name: "Flowers", description: "Pinch off flowers to maintain flavor in leaves." }
        ],
        whereToFind: [
            { name: "Gardens", description: "Common in vegetable and herb gardens worldwide." }
        ]
    },
    {
        id: 6,
        title: 'Lavender',
        botanicalName: "Lavandula",
        description: 'Lavender is cherished for its calming fragrance. It is widely used to reduce anxiety, improve sleep quality, and soothe skin irritations. Its cooling nature helps balance Pitta.',
        uses: ["Anxiety", "Sleep", "Skin care"],
        region: "Mediterranean",
        type: "Aromatic",
        dosha: ["Pitta", "Vata"],
        img: plant7,
        hasModel: false,
        diseasesCured: [
            { name: "Anxiety", description: "Aromatherapy reduces stress and anxiety levels." },
            { name: "Insomnia", description: "Promotes deep and restful sleep." },
            { name: "Skin Irritations", description: "Oil soothes bug bites and minor burns." }
        ],
        cultivation: [
            { name: "Climate", description: "Mediterranean; hot, dry summers." },
            { name: "Soil", description: "Poor, rocky, alkaline soil with excellent drainage." },
            { name: "Propagation", description: "Cuttings." },
            { name: "Watering", description: "Drought tolerant; avoid wet feet." }
        ],
        harvesting: [
            { name: "Flowers", description: "Harvest spikes when buds have formed but not fully opened." }
        ],
        whereToFind: [
            { name: "Regions", description: "Native to the Mediterranean, widely cultivated." }
        ]
    },
    {
        id: 7,
        title: 'Peppermint',
        botanicalName: "Mentha piperita",
        description: 'Peppermint is a hybrid mint with a refreshing aroma. It is excellent for relieving digestive issues, headaches, and muscle pain. It has a cooling effect that pacifies Pitta.',
        uses: ["Digestion", "Pain relief", "Cooling"],
        region: "Europe",
        type: "Aromatic",
        dosha: ["Pitta", "Kapha"],
        img: plant3,
        hasModel: false,
        diseasesCured: [
            { name: "IBS", description: "Oil capsules are effective for Irritable Bowel Syndrome." },
            { name: "Nausea", description: "Scent and tea help relieve nausea." },
            { name: "Headache", description: "Topical application of oil relieves tension headaches." }
        ],
        cultivation: [
            { name: "Climate", description: "Cool, moist climates." },
            { name: "Soil", description: "Rich, moist soil." },
            { name: "Propagation", description: "Root runners (very invasive)." },
            { name: "Watering", description: "Frequent watering." }
        ],
        harvesting: [
            { name: "Leaves", description: "Harvest anytime; best before flowering." }
        ],
        whereToFind: [
            { name: "Gardens", description: "Often grown in pots to contain spread." }
        ]
    },
    {
        id: 8,
        title: 'Rosemary',
        botanicalName: "Salvia rosmarinus",
        description: 'Rosemary is a woody herb that stimulates the mind, enhancing memory and concentration. It is also rich in antioxidants and supports hair health. It balances Kapha and Vata.',
        uses: ["Memory", "Hair health", "Culinary"],
        region: "Mediterranean",
        type: "Culinary",
        dosha: ["Kapha", "Vata"],
        img: plant1, // Reuse
        hasModel: false,
        diseasesCured: [
            { name: "Poor Memory", description: "Aroma improves cognitive performance." },
            { name: "Hair Loss", description: "Oil stimulates hair follicles." },
            { name: "Muscle Pain", description: "Topical use relieves sore muscles." }
        ],
        cultivation: [
            { name: "Climate", description: "Warm, dry climates." },
            { name: "Soil", description: "Well-drained, sandy soil." },
            { name: "Propagation", description: "Cuttings." },
            { name: "Watering", description: "Allow soil to dry between waterings." }
        ],
        harvesting: [
            { name: "Sprigs", description: "Cut fresh sprigs as needed." }
        ],
        whereToFind: [
            { name: "Gardens", description: "Common ornamental and culinary herb." }
        ]
    },
    {
        id: 9,
        title: 'Eucalyptus',
        botanicalName: "Eucalyptus globulus",
        description: 'Eucalyptus is famous for its potent essential oil. It is a powerful decongestant used for respiratory relief and muscle pain. It reduces Kapha accumulation.',
        uses: ["Respiratory", "Decongestant", "Pain relief"],
        region: "Australia",
        type: "Medicinal",
        dosha: ["Kapha"],
        img: plant2, // Reuse
        hasModel: false,
        diseasesCured: [
            { name: "Congestion", description: "Inhalation clears nasal passages." },
            { name: "Cough", description: "Suppressant in many syrups." },
            { name: "Joint Pain", description: "Topical analgesic." }
        ],
        cultivation: [
            { name: "Climate", description: "Temperate to tropical." },
            { name: "Soil", description: "Adaptable, prefers well-drained." },
            { name: "Propagation", description: "Seeds." },
            { name: "Watering", description: "Moderate." }
        ],
        harvesting: [
            { name: "Leaves", description: "Mature leaves harvested for oil extraction." }
        ],
        whereToFind: [
            { name: "Regions", description: "Native to Australia, planted worldwide." }
        ]
    },
    {
        id: 10,
        title: 'Chamomile',
        botanicalName: "Matricaria chamomilla",
        description: 'Chamomile is a gentle herb known for its soothing effects. It promotes relaxation, better sleep, and digestive comfort. It is excellent for calming Pitta.',
        uses: ["Sleep", "Relaxation", "Digestion"],
        region: "Europe",
        type: "Medicinal",
        dosha: ["Pitta", "Vata"],
        img: plant4, // Reuse
        hasModel: false,
        diseasesCured: [
            { name: "Insomnia", description: "Tea induces sleepiness." },
            { name: "Anxiety", description: "Calms the nervous system." },
            { name: "Stomach Upset", description: "Soothes digestive spasms." }
        ],
        cultivation: [
            { name: "Climate", description: "Cool temperate." },
            { name: "Soil", description: "Well-drained, sandy." },
            { name: "Propagation", description: "Seeds." },
            { name: "Watering", description: "Regular." }
        ],
        harvesting: [
            { name: "Flowers", description: "Harvest fully open flowers." }
        ],
        whereToFind: [
            { name: "Gardens", description: "Common in herb gardens." }
        ]
    },
    {
        id: 11,
        title: 'Turmeric',
        botanicalName: "Curcuma longa",
        description: 'Turmeric is the "Golden Spice" of Ayurveda. It has potent anti-inflammatory and antioxidant properties (Curcumin). It cleanses the blood and balances all three doshas (Tridoshic).',
        uses: ["Anti-inflammatory", "Immunity", "Skin care"],
        region: "India",
        type: "Medicinal",
        dosha: ["Vata", "Pitta", "Kapha"],
        img: plant5, // Reuse
        hasModel: false,
        diseasesCured: [
            { name: "Inflammation", description: "Potent natural anti-inflammatory." },
            { name: "Wounds", description: "Applied to cuts to stop bleeding and prevent infection." },
            { name: "Arthritis", description: "Reduces joint pain." }
        ],
        cultivation: [
            { name: "Climate", description: "Warm, humid." },
            { name: "Soil", description: "Rich, loamy." },
            { name: "Propagation", description: "Rhizomes." },
            { name: "Watering", description: "Heavy." }
        ],
        harvesting: [
            { name: "Rhizomes", description: "Harvested 9-10 months after planting." }
        ],
        whereToFind: [
            { name: "Regions", description: "India and Southeast Asia." }
        ]
    },
    {
        id: 12,
        title: 'Ginger',
        botanicalName: "Zingiber officinale",
        description: 'Ginger is known as "Vishwabhesaj" (Universal Medicine). It aids digestion, relieves nausea, and fights colds. Dry ginger balances Kapha and Vata.',
        uses: ["Digestion", "Cold & Flu", "Nausea"],
        region: "Asia",
        type: "Medicinal",
        dosha: ["Kapha", "Vata"],
        img: plant6, // Reuse
        hasModel: false,
        diseasesCured: [
            { name: "Nausea", description: "Highly effective for morning sickness and motion sickness." },
            { name: "Cold", description: "Warming effect helps clear congestion." },
            { name: "Indigestion", description: "Stimulates digestion." }
        ],
        cultivation: [
            { name: "Climate", description: "Warm, humid." },
            { name: "Soil", description: "Rich, loose soil." },
            { name: "Propagation", description: "Rhizomes." },
            { name: "Watering", description: "Regular." }
        ],
        harvesting: [
            { name: "Rhizomes", description: "Harvested when leaves turn yellow." }
        ],
        whereToFind: [
            { name: "Regions", description: "Tropical Asia." }
        ]
    }
];

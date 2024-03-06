export const PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        value: 'ui_kits' as const,
        featured: [
            {
                name: 'Editor Picks',
                href: '#',
                imageSrc: '/nav/ui-kits/blue.jpg'
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageSrc: '/nav/ui-kits/purple.jpg'
            },
            {
                name: 'BestSeller',
                href: '#',
                imageSrc: '/nav/ui-kits/mixed.jpg'
            },
        ],
    },

    {
        label: "Icons",
        value: 'icons' as const,
        featured: [
            {
                name: 'Favorite Icon UI',
                href: '#',
                imageSrc: '/nav/icons/no-color.jpg'
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageSrc: '/nav/icons/color.jpg'
            },
            {
                name: 'BestSeller',
                href: '#',
                imageSrc: '/nav/icons/bestseller.jpg'
            },
        ],
    },

]
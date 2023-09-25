import plugin from 'tailwindcss/plugin'

export const ButtonComponent = plugin (
    
    function ({ addComponents }) {
        addComponents({
            '.btn': {
            '@apply px-4 py-2  text-white font-medium tracking-wide transition-colors duration-200 transform bg-primary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-100': {},
            },
            '.btn-primary': {
                '@apply btn bg-primary hover:bg-primaryDark active:bg-primaryDark': {},
            },
            '.btn-secondary': {
                '@apply btn bg-secondary hover:bg-secondaryDark active:bg-secondaryDark': {},
            },
            '.special-btn': {
                '@apply rounded-lg bg-red-primary py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-primary transition-all hover:shadow-lg hover:shadow-gray-secondary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none': {},
            },
        })
    }

)

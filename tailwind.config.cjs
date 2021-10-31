module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.svelte"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'halloween'
    ]
  }
}

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    // button that add and remove data-theme dark mode
    const toggleDarkMode = () => {
      const html = document.querySelector('html')
      html?.classList.toggle('dark')
    }

    return () => (
      <div class="w-full h-screen bg-background flex justify-center items-center gap-4">
        <button class="btn-secondary" 
          onClick={toggleDarkMode}
        >
          Button
          </button>

          <button class="btn-primary"
            onClick={toggleDarkMode}
          >
            Button 2
          </button>

      </div>

    )
  }
})
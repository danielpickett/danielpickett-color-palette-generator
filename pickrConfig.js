const pickrConfig = {
  theme: 'classic', // 'classic', or 'monolith', or 'nano'
  inline: true,
  useAsButton: true,
  appClass: "color-picker-app",
  components: {
    hue: true,
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      input: true,
      clear: true,
      save: true
    }
  }
};

export default pickrConfig
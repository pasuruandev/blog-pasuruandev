export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#48C774', 
    buttonAccent: '#48C774',
    accent: '#fff',
    muted: 'rgba(0, 0, 0, 0.7)',
    cardBg: '#fff',
    borderColor:"#48C774",
    labelText: "#777",
    inputBorder: "#aaa",
    inputBackground: "#fff",
    socialIcons:"#808588",
    socialIconsHover:"#48C774",
    modes: {
      dark: {
        text: '#fff',
        background: '#111',
        primary: '#252525',
        accent: '#48C774',
        muted: 'rgba(255, 255, 255, 0.7)',
        buttonAccent: '#fff',
        cardBg: '#252525',
        borderColor:"#888",
        labelText: "#777",
        inputBorder: "#777",
        inputBackground: "#333",
        socialIcons:"rgba(255,255,255,0.7)",
        socialIconsHover:"#fff",
      },
    }
  },
  links: {
    postLink: {
      color: 'muted',
      '&:hover': {
        color: 'text'
      }
    },
    button: {
      bg: 'buttonAccent',
      color: 'background',
      '&:hover': {
        bg: 'background',
        color: 'text'
      }
    }
  }
}
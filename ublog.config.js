module.exports = {
  title: "uBlog",
  description:
    "A minimalist blog on nostr that allows anyone to easily create their own personal micro-blog.",
  favicon:
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Greek_lc_mu.svg",
  logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Greek_lc_mu.svg",
  npub: "npub1mfpdevu5dsuclurfns4t3ypah8uwje73dcyycfuenxhpnq9997jqp7nesj",
  themes: [
    "cyberpunk"
  ],
  customThemes: [
    {
      // comment out for now
      custom: {
        primary: "#ef7951",
        secondary: "#ea0eb3",
        accent: "#9d66d1",
        neutral: "#1D252B",
        "base-100": "#403B59",
        info: "#A0BEE4",
        success: "#12825D",
        warning: "#C87114",
        error: "#E9445F",
      },
    },
  ],
  relays: [
    "wss://commerceinnovationgroup.com",
    // "wss://relay.snort.social",
    // "wss://nostr-pub.wellorder.net",
    // "wss://relay.damus.io",
    // "wss://nos.lol",
    // "wss://nostr.wine",
    // "wss://nostr.nostrelay.org",
    // "wss://relay.nostr.ch",
    // "wss://nostr.bitcoiner.social",
    // "wss://nostr.onsats.org",
    // "wss://nostr-relay.wlvs.space",
    // "wss://nostr.zebedee.cloud",
    // "wss://relay.nostr.info",
  ],
};

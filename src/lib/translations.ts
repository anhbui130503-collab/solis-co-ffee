export type Language = "vi" | "en";

type TranslationShape = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    menu: string;
    gallery: string;
    hours: string;
    contact: string;
  };
  hero: {
    scrollDown: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    body: string;
    stat1Label: string;
    stat2Label: string;
  };
  menu: {
    heading: string;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    spaces: { label: string; note: string }[];
  };
  hours: {
    openingEyebrow: string;
    openingHours: string;
    openDaily: string;
    contactEyebrow: string;
    locationEyebrow: string;
    locationNote: string;
    directions: string;
  };
  footer: {
    dailyLabel: string;
  };
};

export const translations: Record<Language, TranslationShape> = {
  vi: {
    meta: {
      title: "SOLIS Coffee, Brunch & Beer — Đà Nẵng",
      description:
        "Quán cà phê hai tầng ở khu phố Tây An Thượng, Đà Nẵng. SOLIS Coffee, Brunch & Beer. Mở cửa 07:30 — 22:30 hằng ngày.",
    },
    nav: {
      about: "Giới thiệu",
      menu: "Menu",
      gallery: "Không gian",
      hours: "Giờ & Vị trí",
      contact: "Liên hệ",
    },
    hero: {
      scrollDown: "Cuộn xuống",
    },
    about: {
      eyebrow: "Về Solis",
      heading: "Chill có gu, giữa nhịp sống hiện đại",
      body: "Solis nằm trong khu phố Tây An Thượng, Đà Nẵng — nơi kiến trúc hiện đại gặp gỡ chất liệu tự nhiên: tông gỗ ấm, bê tông mộc, và một giếng trời rộng ở trung tâm với chiếc đèn mặt trời đỏ, đúng như cái tên “Solis”. Đây là nơi bạn có thể chậm lại, tìm sự cân bằng giữa những giờ làm việc và một tách cà phê tử tế.",
      stat1Label: "Tầng không gian",
      stat2Label: "Đánh giá Tripadvisor",
    },
    menu: {
      heading: "Đơn giản, tử tế, đúng vị",
    },
    gallery: {
      eyebrow: "Không gian",
      heading: "Hai tầng, một nhịp chậm",
      spaces: [
        {
          label: "Giếng trời & đèn mặt trời đỏ",
          note: "Điểm nhấn kiến trúc trung tâm — biểu tượng của “Solis”",
        },
        {
          label: "Tầng 1 — mở & tràn sáng",
          note: "Không gian mở, đón ánh sáng tự nhiên",
        },
        {
          label: "Tầng 2 — máy lạnh, yên tĩnh",
          note: "Phù hợp làm việc hoặc trò chuyện lâu",
        },
        {
          label: "Gỗ ấm & bê tông",
          note: "Kiến trúc hiện đại pha chất mộc",
        },
      ],
    },
    hours: {
      openingEyebrow: "Giờ mở cửa",
      openingHours: "07:30 — 22:30",
      openDaily: "Mở cửa tất cả các ngày trong tuần",
      contactEyebrow: "Đặt chỗ",
      locationEyebrow: "Vị trí",
      locationNote:
        "Trong khu phố Tây An Thượng, gần biển Mỹ Khê — có chỗ đỗ xe.",
      directions: "Chỉ đường trên Google Maps",
    },
    footer: {
      dailyLabel: "hằng ngày",
    },
  },
  en: {
    meta: {
      title: "SOLIS Coffee, Brunch & Beer — Da Nang, Vietnam",
      description:
        "A two-floor café in Da Nang's An Thuong Western Quarter. Coffee, brunch and beer. Open daily 07:30 — 22:30.",
    },
    nav: {
      about: "About",
      menu: "Menu",
      gallery: "Space",
      hours: "Hours & Location",
      contact: "Contact",
    },
    hero: {
      scrollDown: "Scroll down",
    },
    about: {
      eyebrow: "About Solis",
      heading: "Chill with taste, amid modern life",
      body: "Solis sits in the An Thượng Western Quarter of Đà Nẵng — where modern architecture meets natural materials: warm wood tones, raw concrete, and a wide central skylight with a red sun lamp, true to the name “Solis”. It's a place to slow down and find balance between work hours and an honest cup of coffee.",
      stat1Label: "Floors of space",
      stat2Label: "Tripadvisor rating",
    },
    menu: {
      heading: "Simple, honest, true to taste",
    },
    gallery: {
      eyebrow: "Space",
      heading: "Two floors, one slow rhythm",
      spaces: [
        {
          label: "Skylight & red sun lamp",
          note: "The central architectural highlight — the symbol of Solis",
        },
        {
          label: "Ground floor — open & sunlit",
          note: "An open space filled with natural light",
        },
        {
          label: "Upper floor — air-conditioned, quiet",
          note: "Great for working or long conversations",
        },
        {
          label: "Warm wood & concrete",
          note: "Modern architecture with a raw, natural touch",
        },
      ],
    },
    hours: {
      openingEyebrow: "Opening hours",
      openingHours: "07:30 — 22:30",
      openDaily: "Open every day of the week",
      contactEyebrow: "Reservations",
      locationEyebrow: "Location",
      locationNote:
        "In the An Thượng Western Quarter, near Mỹ Khê beach — parking available.",
      directions: "Get directions on Google Maps",
    },
    footer: {
      dailyLabel: "daily",
    },
  },
};
